import Image from "next/image";
import React from "react";
import IconFour from "@/images/icon-04.svg";
import IconFive from "@/images/icon-05.svg";
import IconSix from "@/images/icon-06.svg";
import IconSeven from "@/images/icon-07.svg";

const services = [
  {
    icon: IconFour,
    title: "Pengembangan Website",
    desc: "Membangun website responsif dan cepat dengan teknologi terbaru untuk pengalaman pengguna yang optimal.",
  },
  {
    icon: IconSeven,
    title: "Aplikasi Mobile",
    desc: "Menciptakan aplikasi Android dan iOS yang aman, handal, dan mudah digunakan sesuai kebutuhan bisnis Anda.",
  },
  {
    icon: IconFive,
    title: "UI/UX Design",
    desc: "Mendesain antarmuka dan pengalaman pengguna yang modern, menarik, serta fokus pada kemudahan navigasi.",
  },
  {
    icon: IconFour,
    title: "Digital Marketing",
    desc: "Meningkatkan visibilitas merek melalui SEO, iklan berbayar, dan strategi pemasaran digital yang efektif.",
  },
  {
    icon: IconFive,
    title: "Integrasi & API",
    desc: "Menghubungkan sistem dan layanan pihak ketiga agar proses bisnis berjalan mulus dan efisien.",
  },
  {
    icon: IconSix,
    title: "Pemeliharaan & Support",
    desc: "Memberikan dukungan 24/7 serta pemeliharaan rutin untuk menjaga performa dan keamanan aplikasi Anda.",
  },
];

const Services: React.FC = () => {
  return (
    <section className="lj tp kr">
      <div className="bb ze rj ki xn vq">
        <h2 className="fk vj pr kk wm on/5 gq/2 bb _b">
          Kami Menawarkan Layanan Berkualitas Terbaik untuk Anda{" "}
        </h2>
        <p className="bb on/5 wo/5 hq">
          Kami berkomitmen memberikan layanan dengan standar tertinggi, mulai
          dari proses hingga hasil akhir. Dengan tim profesional dan perhatian
          pada setiap detail, kami memastikan kebutuhan Anda terpenuhi secara
          maksimal dan memuaskan.
        </p>
      </div>
      <div className="bb ze ki xn yq mb en">
        <div className="wc qf pn xo ng">
          {services.map((s, i) => (
            <div key={i} className="animate_top sg oi pi zq ml il am cn _m">
              <Image src={s.icon} alt="Icon" />
              <h4 className="ek zj kk wm nb _b">{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
