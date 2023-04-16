import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "../Navbar/index";
import { Particle } from "../Animation/Particle";
import Footer from "../Footer";

type Props = {
  title: string;
  description: string;
  children: string | JSX.Element | JSX.Element[];
};

export default function ContainerBlock({ children }: Props) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Pablo Rodriguez - Programador Junior - Full Stack</title>
      </Head>
      <Particle />
      <div>
        <main className={"container-children"}>{children}</main>
        <Footer />
      </div>
    </>
  );
}
