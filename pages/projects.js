import Head from "next/head";
import Image from "next/image";

import Download2Logo from "../public/assets/default.png";
import Download2Image from "../public/assets/projectDownload2.png";
import UtilolLogo from "../public/assets/default.png";
import UtilolImage from "../public/assets/projectUtilol.png";

export default function Projects() {
  const projects = [
    {
      title: "Download v2",
      description: "Download v2 is a full-stack MERN application used to share links and files.",
      tags: ["React", "Express", "In development"],
      logo: Download2Logo,
      image: Download2Image,
      linkLearnMore: "https://github.com/hynekfisera/download-new",
    },
    {
      title: "Utilol",
      description: "Very simple project and my first experience with using Riot Games API.",
      tags: ["React", "Riot API"],
      logo: UtilolLogo,
      image: UtilolImage,
      linkLearnMore: "https://github.com/hynekfisera/utilol",
    },
  ];

  return (
    <>
      <Head>
        <title>My Projects - Hynek Fišera | Web Development {"&"} UX Design</title>
        <meta name="description" content="My name is Hynek and I am a Web Developer from Czech Republic. I'm also interested in logo design, UI/UX design and branding." />
      </Head>
      <main className="projects">
        <section className="projects">
          <div className="container">
            <h2>My Projects</h2>
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
                      <div className="tags">
                        {project.tags.map((tag) => {
                          return <div key={tag}>{tag}</div>;
                        })}
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
