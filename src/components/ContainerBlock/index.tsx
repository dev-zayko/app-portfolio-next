import React from "react";
import Head from "next/head";
import { Particle } from "../Animation/Particle";

type Props = {
  title: string;
  description: string;
  children: string | JSX.Element | JSX.Element[];
};

export default function ContainerBlock({ children }: Props) {
  return (
    <>
      <Head>
        <title>Pablo Rodriguez - Programador Junior - Full Stack</title>
      </Head>
      <Particle />
      <div>
        <main className={"container-parent mx-auto"}>
          <div className="container-children">{children}</div>
        </main>
      </div>
    </>
  );
}
