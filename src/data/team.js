const GodwinFrance = require("../assets/Godwin France picture passport.JPG");
const Nosa = require("../assets/Nosa.jpeg");
const Wadnud = require("../assets/Dr. Wadnud profile 2.jpg");
const Vignon = require("../assets/Vignon Adjanohoun.png");

module.exports = {
  coordinator: {
    name: "Godwin France",
    role: ["Project Co-ordinator"],
    linkedIn: "https://www.linkedin.com/in/godwin-france/",
    email: "godwin@projectphoenix.online",
    description:
      "Godwin is our Project Lead; he has been with the team since 2017 as a Product Developer. He loves curating STEM content and working with kids. His expertise cuts across AI & Machine Learning, Web3 Technologies, and experimenting with emerging technologies.",
    imgSource: GodwinFrance,
  },
  others: [
    {
      name: "Nosa Oghafua",
      role: ["Advisor"],
      linkedIn: "https://www.linkedin.com/in/nosa-oghafua-09b9a387/",
      email: null,
      imgSource: Nosa,
      website: null,
    },
    {
      name: "Dr. Wednaud Ronelus",
      role: [
        "Founder Alchemist Club School NYC",
        "STEM education tools and technical support - Project Phoenix",
      ],
      linkedIn: "https://www.linkedin.com/in/dr-wednaud-j-ronelus-02308417/",
      email: null,
      website: "https://www.alchemistclubstudios.com",
      imgSource: Wadnud,
    },
    {
      name: "Vignon Adjanohoun",
      role: [
        "Senior Software Engineer",
        "Software development instructor for Project Phoenix",
      ],
      linkedIn: "https://www.linkedin.com/in/vignon-adjanohoun-226682a0",
      email: null,
      imgSource: Vignon,
      website: null,
    },
  ],
};
