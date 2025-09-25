"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Logo from "@/images/logo-light.svg";
import Link from "next/link";

const Header: React.FC = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);

  const toggleNavigation = () => setNavigationOpen(!navigationOpen);
  const handleScroll = () => setStickyMenu(window.scrollY > 20);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`g s r vd ya cj ${stickyMenu ? "hh sm _k dj bl ll" : ""}`}
    >
      <div className="bb ze ki xn 2xl:ud-px-0 oo wf yf i">
        <div className="vd to/4 tc wf yf">
          <a href="index.html">
            <Image className="om" src={Logo} alt="Logo" />
          </a>

          <button className="po rc" onClick={toggleNavigation}>
            <span className="rc i pf re pd">
              <span className="du-block h q vd yc">
                <span
                  className={`rc i r s eh um tg te rd eb ml jl dl ${
                    !navigationOpen ? "ue el" : ""
                  }`}
                ></span>
                <span
                  className={`rc i r s eh um tg te rd eb ml jl fl ${
                    !navigationOpen ? "ue qr" : ""
                  }`}
                ></span>
                <span
                  className={`rc i r s eh um tg te rd eb ml jl gl ${
                    !navigationOpen ? "ue hl" : ""
                  }`}
                ></span>
              </span>
              <span className="du-block h q vd yc lf">
                <span
                  className={`rc eh um tg ml jl el h na r ve yc ${
                    !navigationOpen ? "sd dl" : ""
                  }`}
                ></span>
                <span
                  className={`rc eh um tg ml jl qr h s pa vd rd ${
                    !navigationOpen ? "sd rr" : ""
                  }`}
                ></span>
              </span>
            </span>
          </button>
        </div>

        <div
          className={`vd wo/4 sd qo f ho oo wf yf ${
            navigationOpen ? "d hh rm sr td ud qg ug jc yh" : ""
          }`}
        >
          <nav>
            <ul className="tc _o sf yo cg ep">
              <li>
                <Link href="/" className="xl">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="xl">
                  About
                </Link>
              </li>
              <li>
                <Link href="/service" className="xl">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="xl">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div className="tc wf ig pb no">
            <Link
              href="/admin"
              className="lk gh dk rg tc wf xf _l gi hi hh/[0.15] sh"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
