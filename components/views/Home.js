import html from "html-literal";

export default (state) => html`

<section id="jumbotron">
    <h2>Above Average Code</h2>
    <a href="index.html">Login</a>
  </section>
    <h3>
    The weather in  is ${state.weather.description}. Temperature is ${state.weather.temp}F, and it feels like ${state.weather.feelsLike}F.
  </h3>`;
