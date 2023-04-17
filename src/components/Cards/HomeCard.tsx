import React from "react";
import Image from "next/image";
//Logo images
import { logoSkills } from "@/utils/data";
//Tooltip
import { Tooltip } from "@nextui-org/react";

const HomeCard = () => (
  <div className="grid">
    <div className="rounded-lg w-1/2 my-3">
      <div className="hover:shadow-lg hover:shadow-purple-500 backdrop-blur-xl p-4 flex flex-col justify-between leading-normal rounded-lg">
        <div className="mb-8">
          <div className="text-gray-200 font-bold text-2xl mb-2">
            Mi carta de presentación
          </div>
          <p className="text-gray-300 text-lg">
            ¡Saludos! Actualmente, busco una empresa la cual pueda ir
            desarrollando mis habilidades y me ofrezca crecimiento profesional,
            siempre busco aprender cosas nuevas, nuevos desafíos, me gusta
            programar escuchando música y tomando un café, siempre me ha gustado
            más el Backend que el Frontend, pero de vez en cuando me gusta
            diseñar cosas con CSS o Tailwind, etc. También tengo una cierta
            predilección por el desarrollo full stack en móviles.
          </p>
        </div>
      </div>
    </div>
    <div className="rounded-lg w-1/2 my-3">
      <div className="hover:shadow-lg hover:shadow-purple-500 backdrop-blur-xl p-4 flex flex-col justify-between leading-normal rounded-lg">
        <div className="mb-8">
          <div className="text-gray-200 font-bold text-2xl mb-2">
            Mis Habilidades
          </div>
          <div className="grid grid-cols-5 gap-5 mb-8">
            {logoSkills.map((item) => (
              <Tooltip content={item.name} key={item.name}>
                <Image
                  className={`logo-image animate-wiggle hover:animate-spin rounded-2xl my-2 ${
                    (item.name == "Express" && `bg-white`) ||
                    (item.name == "SQL Server" && `bg-white`)
                  }`}
                  alt={item.name}
                  width={100}
                  height={100}
                  src={item.src}
                />
              </Tooltip>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HomeCard;
