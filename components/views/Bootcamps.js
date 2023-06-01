import html from "html-literal";
import image1 from "../../assets/555.jpg";

export default state => html`
  <section id="bio"></section>
  <table>
    <tr>
      <th>name</th>
      <th>review</th>
    </tr>
    ${state.reviews.map(review => {
      return ` <tr><td>${review.name}</td><td>${review.review}`;
    })}
  </table>
`;
