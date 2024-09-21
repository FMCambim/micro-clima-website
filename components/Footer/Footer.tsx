import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo-white.png";
import ig from "@/public/Instagram.svg";
import fb from "@/public/Facebook.svg";

export default function Footer() {
  return (
    <footer className="w-full h-full md:max-h-[491px] py-8 md:py-[45px] px-2 bg-black shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]">
      <div className="grid md:grid-cols-2 gap-10 md:gap-20 lg:grid-cols-4 xl:grid-cols-4 pt-4 mx-6 md:mx-20">
        <div className="flex items-center justify-between">
          <Image
            src={logo}
            alt="logo"
            width={130}
            height={130}
            className="object-contain !h-[100px] !w-[100px] md:!w-[130px] md:!h-[130px]"
          />
          <ul className="md:hidden flex end gap-4 text-sm font-medium text-gray-500">
            <li>
              <Image
                src={fb}
                alt="logo"
                width={30}
                height={30}
                className="object-cover h-full"
              />
            </li>
            <li>
              <Image
                src={ig}
                alt="logo"
                width={30}
                height={30}
                className="object-cover h-full"
              />
            </li>
          </ul>
        </div>
        <div className="text-white border-0 border-t-2 pt-4">
          <h4 className="mb-4">PROGRAMAÇÃO</h4>
          <ul className="text-gray-400 ">
            <li className="pb-2 hover:text-white">
              <Link href={""}>A acontecer</Link>
            </li>
            <li className="hover:text-white">
              <Link href={""}>O que temos planeado</Link>
            </li>
          </ul>
        </div>
        <div className="text-white border-0 border-t-2 pt-4">
          <h4 className="mb-4">ARQUIVO</h4>
          <ul className="text-gray-400">
            <li className="pb-2 hover:text-white">
              <Link href={""}>Festival</Link>
            </li>
            <li className="hover:text-white">
              <Link href={""}>Programação anual</Link>
            </li>
          </ul>
        </div>
        <div className="text-white border-0 border-t-2 pt-4">
          <h4 className="mb-4">SOBRE</h4>
          <ul className="text-gray-400">
            <li className="pb-2 hover:text-white">
              <Link href={""}>Quem somos</Link>
            </li>
            <li className="hover:text-white">
              <Link href={""}>Contacta-nos</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-12 border-0 border-t-2 mx-6 md:mx-20"></div>
      <div className="px-[20px] md:px-[80px] mt-8 flex items-center md:justify-between">
        <p className="text-sm text-gray-300 text-center dark:text-gray-400">
          Micro Clima © 2024
        </p>
        <ul className="hidden md:flex flex-wrap items-center  gap-4 text-sm font-medium text-gray-500">
          <li>
            <Image
              src={fb}
              alt="logo"
              width={30}
              height={30}
              className="object-cover h-full"
            />
          </li>
          <li>
            <Image
              src={ig}
              alt="logo"
              width={30}
              height={30}
              className="object-cover h-full"
            />
          </li>
        </ul>
      </div>
    </footer>
  );
}
