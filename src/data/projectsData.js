import { v4 as uuidv4 } from "uuid";

export const projects = [
  {
    id: uuidv4(),
    image:
      "https://images.unsplash.com/photo-1576153192396-180ecef2a715?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    title: "Meme Generator",
    description: "React JS",
    view: "",
    github: "",
  },
  {
    id: uuidv4(),
    image:
      "https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    title: "AiVisio",
    description: "A fullstack AI image generation tool",
    view: "",
    github: "",
  },
  {
    id: uuidv4(),
    image:
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
    title: "Work Day Scheduler",
    description:
      "A JavaScript web application that allows users to save events for 9:00-17:00 work hours of the day.",
    view: "https://warrentyler.github.io/work-day-scheduler/",
    github: "https://github.com/WarrenTyler/work-day-scheduler",
  },
];
