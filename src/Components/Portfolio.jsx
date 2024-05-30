/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Password Operated Device Control🔐",
    description:
      "A Password-Operated Device Control System using the AT89C51 microcontroller for secure access and user feedback.",
    url: "https://github.com/Afreen2302/Password-Operated-Device-Control",
  },
  {
    title: "Agricultural crop recommendation system using IoT with ML🌽",
    description:
      "Developed an IoT-based Agricultural Crop Recommendation System using ML to optimize crop selection and enhance sustainable farming practices.",
    url: "https://github.com/Afreen2302/Agricultural-crop-recommendation-system-using-IoT-with-ML",
  },
  {
    title: "Voice-based Gender Classification using ML & DL🗣",
    description:
      "Developed a voice signal gender classification system using ML and DL to enhance applications in security, healthcare, and personalized experiences.",
    url: "https://github.com/Afreen2302/Voice-based-Gender-Classification-Web-Application-using-Python",
  },
  {
    title: "RISC-V RV32I Multi-stage pipeline processor RTL Design⚡",
    description:
      "Project based on Maven Silicon Design Internship.",
    url: "https://github.com/Afreen2302/RISC-V-RV32I-Multi-stage-pipeline-processor-RTL-Design",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
