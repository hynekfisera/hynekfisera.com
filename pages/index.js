import Head from "next/head";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown, faProjectDiagram, faUser } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
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
      </main>
    </>
  );
}
