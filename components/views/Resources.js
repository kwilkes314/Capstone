import html from "html-literal";
import image2 from "../../assets/launch-code.jpg";
import image3 from "../../assets/savvy-coders.jpg";
import image4 from "../../assets/claim-academy.jpg";

export default state => html`
  <section>
    <h2>Schools</h2>
    <h3>LaunchCode</h3>
    <a href="https://www.launchcode.org/">
      <img src=${image2} id="launchcode" alt="launchcode"
    /></a>
    <h3>SavvyCoders</h3>
    <a href="https://savvycoders.com/">
      <img src=${image3} id="savvycoders" alt="savvy-coders"
    /></a>
    <h3>ClaimAcademy</h3>
    <a href="https://www.claimacademystl.com/">
      <img src=${image4} id="claimacademy" alt="claim-academy"
    /></a>
  </section>
  <section>
    <h2>Videos</h2>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/3Tri70UEN4g" id="savvy-video"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/4t5E3osy-fc" id="launchcode-video"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/N9MY1ZtTPSI" id="claimacademy-video"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  </section>
`;
