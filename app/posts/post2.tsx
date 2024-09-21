import "@/styles/globals.css";
import { Fragment } from "react";
import PageHead from "@/components/PageHead";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export default function Post2() {
  return (
    <Fragment>
      <PageHead
        title={"Programação"}
        description={
          "Encontra aqui toda a programação multidisciplinar anual actualizada do Micro Clima."
        }
      />
      <main className="bg-white">
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
          <h1 className="text-6xl font-bold text-black uppercase">Post 2</h1>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
}
