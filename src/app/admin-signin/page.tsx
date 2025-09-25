"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import ShapeSix from "@/images/shape-06.svg";
import ShapeThree from "@/images/shape-03.svg";
import ShapeSeventeen from "@/images/shape-17.svg";
import ShapeEighteen from "@/images/shape-18.svg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type FormValues = {
  email: string;
  password: string;
};

export default function SignInPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    setIsLoading(true);
    const result = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    setIsLoading(false);

    if (result?.error) {
      toast.error("Email atau password salah", { position: "bottom-center" });
    } else {
      toast.success("Login berhasil!", { position: "bottom-center" });
      router.push("/admin");
    }
  };

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Toaster position="bottom-center" reverseOrder={false} />
      <Header />
      <main>
        <section className="i pg fh rm ki xn vq gj qp gr hj rp hr">
          <Image src={ShapeSix} alt="Shape" className="h j k" />
          <Image src={ShapeThree} alt="Shape" className="h l m" />
          <Image src={ShapeSeventeen} alt="Shape" className="h n o" />
          <Image src={ShapeEighteen} alt="Shape" className="h p q" />

          <div className="animate_top bb af i va sg hh sm vk xm yi _n jp hi ao kp">
            <span className="rc h r s zd/2 od zg gh"></span>
            <span className="rc h r q zd/2 od xg mh"></span>

            <div className="rj">
              <h2 className="ek ck kk wm xb">Masuk ke Akun Anda</h2>
              <p>
                Masukkan informasi login Anda untuk melanjutkan dan nikmati
                layanan yang kami sediakan.
              </p>
            </div>

            <form className="sb" onSubmit={handleSubmit(onSubmit)}>
              <div className="wb">
                <label className="rc kk wm vb" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="example@gmail.com"
                  className="vd hh rg zk _g ch hm dm fm pl/50 xi mi sm xm pm dn/40"
                  {...register("email", { required: "Email wajib diisi" })}
                />
                {errors.email && (
                  <p className="text-red-500 mt-1">{errors.email.message}</p>
                )}
              </div>

              <div className="wb">
                <label className="rc kk wm vb" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="**************"
                  className="vd hh rg zk _g ch hm dm fm pl/50 xi mi sm xm pm dn/40"
                  {...register("password", {
                    required: "Password wajib diisi",
                  })}
                />
                {errors.password && (
                  <p className="text-red-500 mt-1">{errors.password.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`vd rj ek rc rg gh lk ml il _l gi hi flex items-center justify-center gap-2 ${
                  isLoading ? "opacity-70 cursor-not-allowed animate-pulse" : ""
                }`}
              >
                {isLoading ? (
                  <>
                    <span className="w-4 h-4 bg-white rounded-full animate-pulse"></span>
                    Loading...
                  </>
                ) : (
                  "Submit"
                )}
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
