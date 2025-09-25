import Image from "next/image";
import React from "react";
import ShapeFive from "@/images/shape-05.svg";
import AboutOne from "@/images/about-01.png";
import AboutTwo from "@/images/about-02.png";
import ShapeSix from "@/images/shape-06.svg";
import AboutThree from "@/images/about-03.png";
import ShapeSeven from "@/images/shape-07.svg";
import IconPlay from "@/images/icon-play.svg";

const About: React.FC = () => {
  return (
    <section className="ji gp uq 2xl:ud-py-35 pg">
      <div className="bb ze ki xn wq">
        <div className="tc wf gg qq">
          <div className="animate_left xc gn gg jn/2 i">
            <div>
              <Image src={ShapeFive} alt="Shape" className="h -ud-left-5 x" />
              <Image src={AboutOne} alt="About" className="ib" />
              <Image src={AboutTwo} alt="About" />
            </div>
            <div>
              <Image src={ShapeSix} alt="Shape" />
              <Image src={AboutThree} alt="About" className="ob gb" />
              <Image src={ShapeSeven} alt="Shape" className="bb" />
            </div>
          </div>
          <div className="animate_right jn/2">
            <h4 className="ek yj mk gb">Axer IT Digital Agency</h4>
            <h2 className="fk vj zp pr kk wm qb">
              Kami membuat pelanggan bahagia dengan memberikan layanan terbaik.
            </h2>
            <p className="uo">
              Dengan pengalaman dan komitmen tinggi, kami selalu fokus pada
              kualitas dan kepuasan pelanggan. Konten yang jelas dan tata letak
              yang rapi memastikan Anda mendapatkan informasi yang mudah
              dipahami tanpa gangguan.
            </p>
            <a
              href="https://www.youtube.com/watch?v=DPPufSnONnE&pp=ygUbaG93IGl0IGRpZ2l0YWwgYWdlbmN5IHdvcmtz"
              className="vc wf hg mb"
            >
              <span className="tc wf xf be dd rg i gh ua">
                <span className="nf h vc yc vd rg gh qk -ud-z-1"></span>
                <Image src={IconPlay} alt="Play" />
              </span>
              <span className="kk">LIHAT BAGAIMANA CARA KERJA KAMI</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
