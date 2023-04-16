import React from "react";

const HomeCard = () => {
  return (
    <div className="grid grid-flow-col">
      <div className="rounded-lg w-1/2">
        <div className="hover:shadow-lg hover:shadow-purple-500 backdrop-blur-xl p-4 flex flex-col justify-between leading-normal rounded-lg">
          <div className="mb-8">
            <div className="text-gray-200 font-bold text-2xl mb-2">
              Mi carta de presentación
            </div>
            <p className="text-gray-300 text-lg">
              ¡Saludos! Actualmente, busco una empresa la cual pueda ir
              desarrollando mis habilidades y me ofrezca crecimiento
              profesional, siempre busco aprender cosas nuevas, nuevos desafíos,
              me gusta programar escuchando música y tomando un café, siempre me
              ha gustado más el Backend que el Frontend, pero de vez en cuando
              me gusta diseñar cosas con CSS o Tailwind, etc. También tengo una
              cierta predilección por el desarrollo full stack en móviles.
            </p>
          </div>
        </div>
      </div>
      <div className="rounded-lg w-1/2">
        <div className="hover:shadow-lg hover:shadow-purple-500 backdrop-blur-xl p-4 flex flex-col justify-between leading-normal rounded-lg">
          <div className="mb-8">
            <div className="text-gray-200 font-bold text-2xl mb-2">
              Mis Habilidades
            </div>
            <p className="text-gray-300 text-lg">
              ¡Saludos! Actualmente, busco una empresa la cual pueda ir
              desarrollando mis habilidades y me ofrezca crecimiento
              profesional, siempre busco aprender cosas nuevas, nuevos desafíos,
              me gusta programar escuchando música y tomando un café, siempre me
              ha gustado más el Backend que el Frontend, pero de vez en cuando
              me gusta diseñar cosas con CSS o Tailwind, etc. También tengo una
              cierta predilección por el desarrollo full stack en móviles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
