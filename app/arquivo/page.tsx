import "@/styles/globals.css";
import { Fragment } from "react";
import PageHead from "@/components/PageHead";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export default function Archive() {
  return (
    <Fragment>
      <PageHead
        title={"Arquivo"}
        description={
          "Aqui podes encontrar toda a programação passada do Micro Clima. Conhece as edições anteriores do Festival Micro Clima e as várias iniciativas multidisciplinares que orgánizamos desde 2017, o nosso ano de fundação."
        }
      />
      <Navbar />
      <main className="bg-white">
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
          <h1 className="text-6xl font-bold text-black uppercase">Arquivo</h1>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
}
