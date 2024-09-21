import Image from "next/image";
import cenografia from "@/public/ceno.jpg";
import parede from "@/public/parede.jpg";
import ganso from "@/public/ganso.jpg";
import { motion } from "framer-motion";

export default function Events() {
  return (
    <section className="py-20 md:py-32 container mx-auto flex flex-col items-center justify-center">
      <div>
        <h1 className="flex justify-center uppercase leading-normal font-bold text-4xl md:text-5xl mb-10 md:mb-20 text-black drop-shadow-md">
          Destaques
        </h1>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-center mx-6">
        <motion.a href={"/posts/post1"} whileHover={{ translateY: -20 }} className="flex flex-col justify-start bg-white border-2 border-indigo-500 border-opacity-60 shadow-2xl rounded-md object-cover">
          <Image src={cenografia} alt={"cenografia"} className="rounded-t-md" />
          <div className="p-8 flex flex-col gap-4">
            <h1 className="text-2xl font-semibold">Cenografia</h1>
            <p>
              Conhece os artistas por detrás da cenografia do Festival Micro
              Clima 2023
            </p>
          </div>
        </motion.a>
        <motion.a href={"/posts/post2"} whileHover={{ translateY: -20 }} className="flex flex-col justify-start bg-white border-2 border-indigo-500 border-opacity-60 shadow-2xl rounded-md object-cover">
          <Image
            src={parede}
            alt={"entre a espada e a parede"}
            className="rounded-t-md"
          />
          <div className="p-8 flex flex-col gap-4">
            <h1 className="text-2xl font-semibold">Artistas Visuais</h1>
            <p>
              Conhece os artistas visuais que fizeram parte do Festival Micro
              Clima 2023
            </p>
          </div>
        </motion.a>
        <motion.a href={"/posts/post3"} whileHover={{ translateY: -20 }} className="flex flex-col justify-start bg-white border-2 border-indigo-500 border-opacity-60 shadow-2xl rounded-md object-cover">
          <Image src={ganso} alt={"pongo"} className="rounded-t-md" />
          <div className="p-8 flex flex-col gap-4">
            <h1 className="text-2xl font-semibold">Ganso</h1>
            <p>
              Vê aqui as fotos do concerto da banda lisboeta Ganso no Festival
              Micro Clima 2023
            </p>
          </div>
        </motion.a>
      </div>
    </section>
  );
}
