import Image from "next/image";
import React from "react";
import ShapeOne from "@/images/shape-01.svg";
import ShapeTwo from "@/images/shape-02.svg";
import ShapeThree from "@/images/shape-03.svg";
import ShapeFour from "@/images/shape-04.svg";
import HeroBanner from "@/images/hero.png";

const Hero: React.FC = () => {
  return (
    <section className="gj do ir hj sp jr i pg">
      <div className="xc fn zd/2 2xl:ud-w-187.5 bd 2xl:ud-h-171.5 h q r">
        <Image
          src={ShapeOne}
          alt="shape"
          className="xc 2xl:ud-block h t -ud-left-[10%] ua"
        />
        <Image
          src={ShapeTwo}
          alt="shape"
          className="xc 2xl:ud-block h u p va"
        />
        <Image
          src={ShapeThree}
          alt="shape"
          className="xc 2xl:ud-block h v w va"
        />
        <Image src={ShapeFour} alt="shape" className="h q r" />
        <Image src={HeroBanner} alt="Woman" className="h q r ua" />
      </div>
      <div className="bb ze ki xn 2xl:ud-px-0">
        <div className="tc _o">
          <div className="animate_left jn/2">
            <h1 className="fk vj zp or kk wm wb">
              Kami ahli di bidang UI/UX, Pengembangan Web, dan Pemasaran
              Digital.
            </h1>
            <p className="fq">
              Tim kami membantu bisnis Anda tampil menonjol di dunia digital
              melalui desain antarmuka yang menarik, situs web yang responsif,
              serta strategi pemasaran yang efektif.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
