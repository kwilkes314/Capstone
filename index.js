import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize, each } from "lodash";
import axios from "axios";

const router = new Navigo("/");

function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
    ${Header(state)}
    ${Nav(store.Links)}
    ${Main(state)}
    ${Footer()}
  `;

  afterRender(state);

  router.updatePageLinks();
}

function afterRender(state) {
  // add menu toggle to bars icon in nav bar
  //document.querySelector(".fa-bars").addEventListener("click", () => {
  // document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  // });

  if (state.view === "Contact") {
    document.querySelector("form").addEventListener("submit", event => {
      // Prevent the default action aka redirect to the same url using POST method
      event.preventDefault();

      const inputList = event.target.elements;
      console.log("Input Element List", inputList);

      //const toppings = [];
      // // Interate over the toppings input group elements
      //for (let input of inputList.toppings) {
      // If the value of the checked attribute is true then add the value to the toppings array
      //if (input.checked) {
      //toppings.push(input.value);
      //}
      // }

      const requestData = {
        name: inputList.name.value,
        email: inputList.email.value,
        phone: inputList.phone.value,
        message: inputList.message.value
      };
      console.log("request Body", requestData);

      axios
        .post(`${process.env.MONGODB}/contact`, requestData)
        .then(response => {
          // Push the new pizza onto the Pizza state pizzas attribute, so it can be displayed in the pizza list
          store.Contact.contact.push(response.data);
          router.navigate("/Contact");
        })
        .catch(error => {
          console.log("It puked", error);
        });
    });
  }
}

router.hooks({
  before: (done, params) => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";
    // Add a switch case statement to handle multiple routes
    switch (view) {
      // New Case for the Home View
      case "Home":
        axios
          // Get request to retrieve the current weather data using the API key and providing a city name
          .get(
            `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&q=st%20louis`
          )
          .then(response => {
            console.log(response.data);
            // Convert Kelvin to Fahrenheit since OpenWeatherMap does provide otherwise
            const kelvinToFahrenheit = kelvinTemp =>
              Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

            // Create an object to be stored in the Home state from the response
            store.Home.weather = {
              city: response.data.name,
              temp: kelvinToFahrenheit(response.data.main.temp),
              feelsLike: kelvinToFahrenheit(response.data.main.feels_like),
              description: response.data.weather[0].main
            };

            // An alternate method would be to store the values independently
            /*
      store.Home.weather.city = response.data.name;
      store.Home.weather.temp = kelvinToFahrenheit(response.data.main.temp);
      store.Home.weather.feelsLike = kelvinToFahrenheit(response.data.main.feels_like);
      store.Home.weather.description = response.data.weather[0].main;
      */
            done();
          })
          .catch(err => {
            console.log(err);
            done();
          });
        break;
      case "Contact":
        // New Axios get request utilizing already made environment variable
        axios
          .get(
            `${process.env.CONTACTS_API}/
              contact`
          )
          .then(response => {
            // We need to store the response to the state, in the next step but in the meantime let's see what it looks like so that we know what to store from the response.
            console.log("response", response);
            store.Contact.contact = response.data;
            done();
          })
          .catch(error => {
            console.log("It puked", error);
            done();
          });
        break;
      case "Bootcamps":
        axios.get(`${process.env.BOOTCAMP_API}`).then(response => {
          // We need to store the response to the state, in the next step but in the meantime let's see what it looks like so that we know what to store from the response.
          console.log("message", response);
          store.Bootcamps.reviews = response.data;

          console.log(store.Bootcamps.reviews);

          //store.Map.reviews = reviews;

          //console.log(list);
          done();
        });
        break;
      default:
        done();
    }
  },
  already: params => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Bootcamps";

    render(store[view]);
  }
});

router
  .on({
    "/": () => render(),
    ":view": params => {
      let view = capitalize(params.data.view);
      if (view in store) {
        render(store[view]);
      } else {
        console.log(`View ${view} not defined`);
        render(store.Viewnotfound);
      }
    }
  })
  .resolve();
