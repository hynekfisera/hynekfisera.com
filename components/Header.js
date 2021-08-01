import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div>
          <div className="name">
            <Link href="/">
              <a>
                <span>Hynek</span>Fišera
              </a>
            </Link>
          </div>
          <nav>
            <ul>
              <li>
                <Link href="/#portfolio">
                  <a>Portfolio</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a>About Me</a>
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <a>Projects</a>
                </Link>
              </li>
              <li>
                <Link href="mailto:hynek@flairdive.com">
                  <a className="btn btn-primary">Contact</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
