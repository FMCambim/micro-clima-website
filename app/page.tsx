"use client"
import { Fragment } from "react";
import PageHead from "@/components/PageHead";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Events from "@/components/Events/Events";
import Subscribe from "@/components/Subscribe/Subscribe";
import Footer from "@/components/Footer/Footer";
import "@/styles/globals.css";

export default function Home() {
  return (
    <Fragment>
      <PageHead
        title={"Micro Clima | Música, Cultura e Arte"}
        description={
          "Associação cultural multidisciplinar activa na zona da Parede, Cascais."
        }
      />
      <Hero />
      <Events />
      <Subscribe />
      <Footer />
    </Fragment>
  );
}
