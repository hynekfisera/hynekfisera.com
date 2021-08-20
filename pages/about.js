import Head from "next/head";
import Image from "next/image";

import GithubHynekfiseraImage from "../public/assets/aboutGithubHynekfisera.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function about() {
  const items = [
    {
      icon: faGithub,
      title: "hynekfisera",
      description: "A place where you can find my projects, some of which are open-source.",
      image: GithubHynekfiseraImage,
      linkTakeMeThere: "https://github.com/hynekfisera",
    },
  ];

  return (
    <>
      <Head>
        <title>About Me - Hynek Fišera | Web Development {"&"} UX Design</title>
        <meta name="description" content="Learn more about me and my activity on YouTube, GitHub and other social media." />
      </Head>
      <main className="about">
        <section className="intro">
          <div className="container">
            <h1>About Me</h1>
          </div>
        </section>
        <section className="item">
          <div className="container">
            <h2>Social Media</h2>
            {items.map((item) => {
              return (
                <div className="row" key={item.title}>
                  <div className="col-md-6">
                    <Image src={item.image} alt={item.title} className="item-image" />
                  </div>
                  <div className="col-md-6">
                    <div>
                      <h3>
                        <FontAwesomeIcon icon={item.icon} /> {item.title}
                      </h3>
                      <p>{item.description}</p>
                      <div className="links">
                        {item.linkTakeMeThere ? (
                          <a href={item.linkTakeMeThere} target="_blank" rel="noreferrer noopener">
                            take me there
                          </a>
                        ) : (
                          <a className="disabled">take me there</a>
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
