import { v4 as uuidv4 } from "uuid";

export const projects = [
  {
    id: uuidv4(),
    image: "./src/images/meme-generator-square.png",
    title: "Meme Generator",
    description: "React JS",
    view: "",
    github: "",
  },
  {
    id: uuidv4(),
    image: "./src/images/aivisio3.jpg",
    title: "AiVisio",
    description: "A fullstack AI image generation tool",
    view: "",
    github: "",
  },
  {
    id: uuidv4(),
    image: "./src/images/weather-dashboard.jpg",
    title: "Weather Dashboard",
    description:
      "A JavaScript web application that uses a 5 Day Weather Forecast API to retrieve and store weather data for cities.",
    view: "https://warrentyler.github.io/work-day-scheduler/",
    github: "https://github.com/WarrenTyler/work-day-scheduler",
  },
  {
    id: uuidv4(),
    image: "./src/images/weather-dashboard.jpg",
    title: "Work Day Scheduler",
    description:
      "A JavaScript web application that allows users to save events for 9:00-17:00 work hours of the day.",
    view: "https://warrentyler.github.io/work-day-scheduler/",
    github: "https://github.com/WarrenTyler/work-day-scheduler",
  },
];
