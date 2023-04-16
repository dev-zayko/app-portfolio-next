import React from "react";
import ContainerBlock from "@/components/ContainerBlock";
import ProjectList from "@/components/List/ProjectList";
import ParentMotion from "@/components/Animation/Motion/ParentMotion";

const Project = () => {
  return (
    <ContainerBlock
      title="Pablo Rodriguez - Programador Junior - Full Stack"
      description="Programador en NodeJs, React, React Native, Laravel, PHP, JAVA, HTML, CSS, JAVASCRIPT, MYSQL, SQLSERVER"
    >
      <ParentMotion>
        <ProjectList />
      </ParentMotion>
    </ContainerBlock>
  );
};

export default Project;
