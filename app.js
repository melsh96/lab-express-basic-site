// loading libraries
const express = require("express");
const hbs = require("hbs");

// starting the server (aka the express app)
const app = express();

// defining the default view engine (aka templating engine)
app.set("view engine", "hbs");

// pointing the app to the public folder to serve static files
app.use(express.static(__dirname + "/public"));

// telling hbs where to look for partials
hbs.registerPartials(__dirname + "/views/partials");

// creating the home route
app.get("/", (req, res) => {
  res.render("home", {
    css: ["home.css"],
  });
});

// creating the about route
app.get("/about", (req, res) => {
  res.render("about", {
    css: ["about.css"],
  });
});

// creating the works route
app.get("/works", (req, res) => {
  const killed = [
    {
      name: "Cersei Lannister",
      img: "public/images/KILL LIST/Cersei_Lannister.png",
    },
    {
      name: "The Mountain",
      img: "public/images/KILL LIST/The_Mountain.png",
    },
    {
      name: "Walder Frey",
      img: "public/images/KILL LIST/Walder_Frey.png",
    },
    {
      name: "Polliver",
      img: "public/images/KILL LIST/Polliver.png",
    },
    {
      name: "Joffrey Baratheon",
      img: "public/images/KILL LIST/Joffrey_Baratheon.png",
    },
    {
      name: "Rorge",
      img: "public/images/KILL LIST/Rorge.png",
    },
    {
      name: "The Hound",
      img: "public/images/KILL LIST/The_Hound.png",
    },
    {
      name: "Tywin Lannister",
      img: "public/images/KILL LIST/Tywin_Lannister.png",
    },
    {
      name: "Meryn Trant",
      img: "public/images/KILL LIST/MerynTrant.png",
    },
  ];

  res.render("works", {
    killed,
    css: ["works.css"],
  });
});

// creating the works route
app.get("/gallery", (req, res) => {
  res.render("gallery", {
    css: ["gallery.css"],
  });
});

// telling the server which port to listen
app.listen(4000);
