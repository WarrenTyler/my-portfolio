![License](https://img.shields.io/github/license/WarrenTyler/my-portfolio)
![Last Commit](https://img.shields.io/github/last-commit/WarrenTyler/my-portfolio)

# My Portfolio

Welcome to the repository for my personal portfolio website! This website showcases my projects, skills, and provides a way for visitors to learn more about me and how to get in touch.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Deployment](#deployment)
- [Themes](#themes)
- [Projects Configuration](#projects-configuration)
- [EmailJS Configuration](#emailjs-configuration)
- [License](#license)

## Introduction

This portfolio website serves as a central hub for displaying my projects, skills, and professional information. It is designed to provide an interactive and informative experience for visitors.

## Features

- **About Section:** Concisely introduces myself, a Front-end developer, highlighting skills, background, and personal aspects for a quick overview.
- **Projects Showcase:** View a curated list of my projects with detailed information.
- **Skills Section:** Explore the technologies and skills I possess.
- **Contact Form:** Easily get in touch with me using the provided contact form.
- **Dark/Light Theme:** Toggle between dark and light themes for comfortable viewing.
- **Scroll Context:** Smooth scrolling experience provided by ScrollContext to update the UI.
- **Contact Form:** Easily get in touch with me using the interactive contact form.

## Technologies

- React
- Vite
- Tailwind CSS
- EmailJS

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/WarrenTyler/my-portfolio.git
```

2. Navigate to the project folder:

```bash
cd my-portfolio
```

3. Install dependencies:

```bash
npm install
```

## Usage

Run the development server:

```bash
npm run dev
```

## Deployment

This portfolio is deployed using GitHub Pages. To deploy your version:

Update the base field in the Vite config (vite.config.js):

```javascript
export default defineConfig({
  base: "/your-repo-name/",
  // ...
});
```

To Build and Deploy to GitHub Pages:

```bash
npm run deploy
```

## Themes

Toggle between dark and light themes using the theme toggle button.

## Projects Configuration

Easily manage and showcase your projects with the projectsData file. This file, located in src/data, allows you to update, add, or remove projects that will be dynamically displayed on your portfolio website.

How to Use
Open the projectsData.js file.
Update the project details according to your preferences.
Save the file, and the portfolio website will dynamically reflect the changes.
Example structure:

```bash
const projectsData = [
  {
    id: uuidv4(),
    image: "./images/projects/work-day-scheduler.jpg",
    title: "Work Day Scheduler",
    description: "A JavaScript web application that allows users to save events for 9:00-17:00 work hours of the day.",
    view: "https://warrentyler.github.io/work-day-scheduler/",
    github: "https://github.com/WarrenTyler/work-day-scheduler",
  },
  // ... additional projects
];

export default projectsData;
```

For projects without a live website, either omit the view field or set view to an empty string.

## EmailJS Configuration

The portfolio uses EmailJS for the contact form. To set up EmailJS, create a .env file (see env.example) in the root directory and add the following:

```bash
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_USER_ID=your_user_id
```

## License

This project is licensed under the MIT License.
