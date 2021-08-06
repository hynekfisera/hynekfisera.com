import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <span>Hynek Fišera</span>
        <div className="social">
          <a href="https://twitter.com/hynekfisera" target="_blank" rel="noreferrer noopener">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://instagram.com/hynekfisera" target="_blank" rel="noreferrer noopener">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://linkedin.com/in/hynekfisera" target="_blank" rel="noreferrer noopener">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/hynekfisera" target="_blank" rel="noreferrer noopener">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
        <div>
          &copy; 2021 | Made with <FontAwesomeIcon icon={faMugHot} /> in{" "}
          <a href="https://www.google.com/maps/place/Hradec+Kr%C3%A1lov%C3%A9/" target="_blank" rel="noreferrer noopener">
            Hradec Králové
          </a>
        </div>
      </div>
    </footer>
  );
}
