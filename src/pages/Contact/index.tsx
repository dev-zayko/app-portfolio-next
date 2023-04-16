import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import ContainerBlock from "../../components/ContainerBlock";

export default function Contact() {
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);
  return (
    <ContainerBlock
      title="Pablo Rodriguez - Programador Junior - Full Stack"
      description="Programador en NodeJs, React, React Native, Laravel, PHP, JAVA, HTML, CSS, JAVASCRIPT, MYSQL, SQLSERVER"
    >
      <div>
        <h1>Contacto</h1>
      </div>
    </ContainerBlock>
  );
}
