import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">
    <h2>About Me</h2>
    <p>Liza was always a strange child, oft to be found standing in the corners of fields, gently swaying, seeming to stare at everything yet behold nothing. Her mother worried, but it wasn't of the time to talk of such things, so of course Liza was "a special girl," and "doing quite well," and "is at that age where a child is wont to have simple quirks."<br></br><br></br>
    And so when Liza began to bring twigs and branches back into her room, bundled in the dirt-stained makeshift rucksack of her skirt, her mother made no comment save a passing mention of "silly, isn't it?" under her breath while scrubbing the debris from Liza's clothing during the evening's washing. And in days to come when Liza would quietly serve out her mandatory sentance at gradeschool, her mother would wait fifteen minutes before stealing into her room to furtively clean the strange arrangements of rocks, twigs, and leaves she would find arrayed upon the floor, quietly and swiftly, as if afraid to be caught by imaginary prying eyes who would dare comment upon her parenting.<br></br><br></br>
    Liza's monther made no queer habit of gazing at the landscape beyond her own backyard, such as her special daughter might do. While she maintained that abstaining from such odd behavior was typical of the normailty she privately prided herself on, it was also the reason why she never noticed the startling precision with which the bits of nature upon her daughter's floor replicated the vistas beyond her home, when looked at with but a touch of childish imagination.</p>
    <img src={image} alt="I made this"/>
  </div>;
}

export default About;
