import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import AcewillLogo from "../public/assets/acewill.png";
import AcewillImage from "../public/assets/portfolioAcewill.webp";
import GarnetLogo from "../public/assets/garnet.svg";
import GarnetImage from "../public/assets/portfolioGarnet.webp";
import EryesLogo from "../public/assets/eryes.png";
import EryesImage from "../public/assets/portfolioEryes.webp";
import VrccLogo from "../public/assets/vrcc.png";
import VrccImage from "../public/assets/portfolioVrcc.webp";
import NyliumLogo from "../public/assets/nylium.png";
import NyliumImage from "../public/assets/portfolioNylium.webp";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown, faProjectDiagram, faUser } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const projects = [
    {
      title: "Acewill",
      description: "I designed a prototype of the Acewill operating system distributed by Aprocle",
      logo: AcewillLogo,
      image: AcewillImage,
      linkLearnMore: false,
      linkTheClient: "http://aprocle.com/",
    },
    {
      title: "Garnet",
      description: "I designed a logo for the Garnet operating system",
      logo: GarnetLogo,
      image: GarnetImage,
      linkLearnMore: "http://github.com/GarnetOS",
      linkTheClient: "http://github.com/radimkohout",
    },
    {
      title: "Eryes",
      description: "I created livestream overlays and social media posts for the Eryes league",
      logo: EryesLogo,
      image: EryesImage,
      linkLearnMore: "http://www.twitch.tv/eryesloleague",
      linkTheClient: "http://instagram.com/eryesofficial",
    },
    {
      title: "VRCC",
      description: "I developed a website for the VR Component Constructor project",
      logo: VrccLogo,
      image: VrccImage,
      linkLearnMore: "http://hynekfisera.com/vrcc/",
      linkTheClient: "http://micromium.net/",
    },
    {
      title: "Nylium",
      description: "I coded a website for the Nylium minecraft server",
      logo: NyliumLogo,
      image: NyliumImage,
      linkLearnMore: false,
      linkTheClient: false,
    },
  ];

  return (
    <>
      <Head>
        <title>Hynek Fišera | Web Development & UX Design</title>
        <meta name="description" content="My name is Hynek and I am a Web Developer from Czech Republic. I'm also interested in logo design, UI/UX design and branding." />
      </Head>
      <main className="index">
        <section className="intro">
          <div className="container">
            <h1>
              Hey, <span>I{"'"}m Hynek</span>
            </h1>
            <h2>I create web products</h2>
            <div className="row">
              <div className="col-md-4">
                <h3>My Portfolio</h3>
                <p>Websites, apps, and other projects I have been working on with/for other people.</p>
                <Link href="/#portfolio">
                  <a className="btn btn-primary">
                    Portfolio <FontAwesomeIcon icon={faArrowCircleDown} />
                  </a>
                </Link>
              </div>
              <div className="col-md-4">
                <h3>About Me</h3>
                <p>Learn more about me and my activity on YouTube, GitHub and other social media.</p>
                <Link href="/about">
                  <a className="btn btn-primary">
                    About Me <FontAwesomeIcon icon={faUser} />
                  </a>
                </Link>
              </div>
              <div className="col-md-4">
                <h3>My Projects</h3>
                <p>Websites, apps, open-source projects and other software I built over the past few years.</p>
                <Link href="/projects">
                  <a className="btn btn-primary">
                    Projects <FontAwesomeIcon icon={faProjectDiagram} />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <hr id="portfolio" />
        <section className="portfolio">
          <div className="container">
            <h2>Portfolio</h2>
            {projects.map((project) => {
              return (
                <div className="row" key={project.title}>
                  <div className="col-md-6">
                    <Image src={project.image} alt={project.title} className="product-image" />
                  </div>
                  <div className="col-md-6">
                    <div>
                      <div className="logo">
                        <Image src={project.logo} alt={project.title} />
                        <h3>{project.title}</h3>
                      </div>
                      <p>{project.description}</p>
                      <div className="links">
                        {project.linkLearnMore ? (
                          <a href={project.linkLearnMore} target="_blank" rel="noreferrer noopener">
                            learn more
                          </a>
                        ) : (
                          <a className="disabled">learn more</a>
                        )}
                        {project.linkTheClient ? (
                          <a href={project.linkTheClient} target="_blank" rel="noreferrer noopener">
                            the client
                          </a>
                        ) : (
                          <a className="disabled">the client</a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <hr />
      </main>
    </>
  );
}
