import Image from "next/image";
import React from "react";
import IconOne from "@/images/icon-01.svg";
import IconTwo from "@/images/icon-02.svg";
import IconThree from "@/images/icon-03.svg";

const features = [
  {
    icon: IconOne,
    title: "Dukungan 24/7",
    desc: "Kami siap membantu Anda kapan saja, 24 jam sehari dan 7 hari seminggu, agar kebutuhan dan pertanyaan Anda selalu terlayani dengan cepat dan profesional.",
    iconColor: "mh",
  },
  {
    icon: IconTwo,
    title: "Bertanggung Jawab",
    desc: "Dengan sikap proaktif, kami memastikan setiap tugas diselesaikan dengan penuh tanggung jawab dan hasil yang terbaik.",
    iconColor: "nh",
  },
  {
    icon: IconThree,
    title: "Kerja Tim",
    desc: "Kami mengutamakan kolaborasi dan komunikasi yang baik agar setiap anggota dapat saling mendukung, berbagi ide, dan mencapai tujuan bersama secara efektif.",
    iconColor: "oh",
  },
];

const Features: React.FC = () => {
  return (
    <section id="features">
      <div className="bb ze ki yn 2xl:ud-px-12.5">
        <div className="tc uf zo xf ap zf bp mq">
          {features.map((f, i) => (
            <div key={i} className="animate_top kn to/3 tc cg oq">
              <div className={`tc wf xf cf ae cd rg ${f.iconColor}`}>
                <Image src={f.icon} alt="Icon" />
              </div>
              <div>
                <h4 className="ek yj go kk wm xb">{f.title}</h4>
                <p>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
