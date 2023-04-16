import React from "react";
import { projectData } from "@/utils/data";

const ProjectList = () => {
  return (
    <div>
      {projectData.map((item) => (
        <div className="w-1/2 rounded-lg backdrop-blur-xl my-8 hover:shadow-lg hover:shadow-purple-500">
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {item.name}
            </h5>
            <p className="mb-3 font-normal text-gray-200 dark:text-gray-200">
              {item.description}
            </p>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:text-purple-500 w-1/4"
            >
              Ir Repositorio
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
