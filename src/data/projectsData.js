import { v4 as uuidv4 } from "uuid";

export const projects = [
  {
    id: uuidv4(),
    image: "./src/images/meme-generator.png",
    title: "Meme Generator",
    description:
      "Create hilarious memes on the fly, customize with flair, and share the laughter.",
    view: "https://warrentyler.github.io/meme-generator/",
    github: "https://github.com/WarrenTyler/meme-generator",
  },
  {
    id: uuidv4(),
    image: "./src/images/aivisio.jpg",
    title: "AiVisio",
    description:
      "Generates unique images from text descriptions and allows users to save and share online.",
    view: "https://warrentyler.github.io/AiVisio/",
    github: "https://github.com/WarrenTyler/AiVisio",
  },
  {
    id: uuidv4(),
    image: "./src/images/weather-dashboard.jpg",
    title: "Weather Dashboard",
    description:
      "A JavaScript web application that uses a 5 Day Weather Forecast API to retrieve and store weather data for cities.",
    view: "https://warrentyler.github.io/weather-dashboard/",
    github: "https://github.com/WarrenTyler/weather-dashboard",
  },
  {
    id: uuidv4(),
    image: "./src/images/work-day-scheduler.jpg",
    title: "Work Day Scheduler",
    description:
      "A JavaScript web application that allows users to save events for 9:00-17:00 work hours of the day.",
    view: "https://warrentyler.github.io/work-day-scheduler/",
    github: "https://github.com/WarrenTyler/work-day-scheduler",
  },
  {
    id: uuidv4(),
    image: "./src/images/team-generator.jpg",
    title: "Team Profile Generator",
    description:
      "Generates an HTML web page of employee summaries from command-line input of team data.",
    view: "",
    github: "https://github.com/WarrenTyler/team-generator",
  },
];
