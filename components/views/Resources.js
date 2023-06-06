import html from "html-literal";
import image2 from "../../assets/launch-code.jpg";
import image3 from "../../assets/savvy-coders.jpg";
import image4 from "../../assets/claim-academy.jpg";
import image5 from "../../assets/khanacademy.jpg";
import image6 from "../../assets/freecodecamp.jpg";
import image7 from "../../assets/theodinproject.jpg";

export default state => html`
  <section class="schools">
    <h2 id="school">Schools</h2>
    <h3 id="launch">LaunchCode</h3>
    <a href="https://www.launchcode.org/">
      <img src=${image2} id="launchcode" alt="launchcode"
    /></a>
    <h3 id="savy">SavvyCoders</h3>
    <a href="https://savvycoders.com/">
      <img src=${image3} id="savvycoder" alt="savvy-coders"
    /></a>
    <h3 id="claim">ClaimAcademy</h3>
    <a href="https://www.claimacademystl.com/">
      <img src=${image4} id="claimacademy" alt="claim-academy"
    /></a>
  </section>
  <section>
    <h2 id="vid">Videos</h2>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/iObyRs4qxPM"
      id="savvycoders-video"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/4t5E3osy-fc"
      id="launchcode-video"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/N9MY1ZtTPSI"
      id="claimacademy-video"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  </section>
  <section>
    <h2 id="web">Websites</h2>
    <h3 id="free">Freecodecamp</h3>
    <a href="https://www.freecodecamp.org/">
      <img src=${image6} id="freecodecamp" alt="freecodecamp"
    /></a>
    <h3 id="khan">Khan Academy</h3>
    <a href="https://www.khanacademy.org/">
      <img src=${image5} id="khanacademy" alt="khanacademy"
    /></a>
    <h3 id="odin">The Odin Project</h3>
    <a href="https://www.theodinproject.com/">
      <img src=${image7} id="odinproject" alt="odinproject"
    /></a>
  </section>
`;
