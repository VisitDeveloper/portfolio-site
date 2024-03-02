// import { RootState } from "@reduxjs/toolkit/query";
import { Div, MainCard } from "components/_index";
import { useAppSelector } from "store/hooks";

const ProjectsPageById = () => {
  const selector = useAppSelector((state: any) => state);
  console.log("selector", selector.project.object);
  return <Div>
      <MainCard >
      sjf
      </MainCard>

  </Div>;
};

export default ProjectsPageById;
