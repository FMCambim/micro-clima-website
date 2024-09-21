"use client"
import "@/styles/globals.css";
import { Fragment } from "react";
import PageHead from "@/components/PageHead";
import Footer from "@/components/Footer/Footer";
import { motion } from "framer-motion";
import { persons } from "@/lib/data";

export default function About() {
  return (
    <Fragment>
      <PageHead
        title={"Sobre nós"}
        description={
          "Sabe mais aqui sobre a equipa do Micro Clima, quem somos, o que fazemos e o que nos move."
        }
      />
      <motion.main
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div className="flex flex-col items-center justify-center pt-32 pb-20 md:pt-40 md:pb-32 container mx-auto">
          <h1 className="text-4xl md:text-5xl font-semibold text-black uppercase md:pb-10">
            Quem somos
          </h1>
          <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-center py-10 container mx-auto">
            {persons.map((person) => (
              <motion.li
                className="flex items-center justify-center"
                key={person.name}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <div className="flex flex-col items-center justify-center">
                  {/* <div className="flex h-full">
                    <Image
                      src={person.image || cenografia}
                      alt={person.name}
                      width={145}
                      height={145}
                      className="rounded-md object-cover"
                    />
                  </div> */}
                  <div className="p-4 flex flex-col items-center justify-center gap-2">
                    <h1 className="text-base font-semibold">{person.role}</h1>
                    <p className="text-base text-gray-800">
                       {person.name}
                    </p>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-start md:items-center justify-center pb-32 container mx-auto">
          <h1 className="text-4xl md:text-5xl font-semibold text-black md:pb-10 uppercase mx-6 md:mx-0">
            O que fazemos
          </h1>
          <h3 className="text-lg font-medium text-black py-10 leading-relaxed text-start mx-6 md:mx-0">
            O Micro Clima é o projeto de programação multidisciplinar da Associação Micro Clima. A
            primeira, focada na Música, centra-se em redor do Festival Micro
            Clima, em abril, que não abdica do cruzamento disciplinar,
            integrando também a apresentação de instalações artísticas de
            diferentes artistas visuais. A temporada seguinte, que decorrerá
            entre setembro e dezembro, explorará o campo da Performance,
            propondo a apresentação de criações que nos façam refletir nos temas
            de tempo lento e de reencontro, tão prementes no contexto em que
            vivemos.
          </h3>
          <h3 className="text-lg font-medium text-black leading-relaxed text-start mx-6 md:mx-0">
            Tem como missão alargar a oferta cultural, diversificada e de
            qualidade, fora dos espaços centrais de Lisboa, procurando oferecer
            novas centralidades aos espaços periféricos da capital. É um projeto
            que não se esconde de apresentar propostas críticas, promovendo a
            reflexão sobre questões como a inclusão, a igualdade, a democracia e
            os direitos humanos. Acreditamos que o florescimento de novos
            centros culturais é essencial para o desenvolvimento de comunidades
            de proximidade, onde convivam diferentes gerações, culturas e
            geografias.
          </h3>
        </div>
      </motion.main>
      <Footer />
    </Fragment>
  );
}
