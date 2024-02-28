// import { RootState } from "@reduxjs/toolkit/query";
import { useAppSelector } from "store/hooks";

const ProjectsPageById = () => {
  const selector = useAppSelector((state : any) => state);
  console.log("selector", selector);
  return (<div>
    
  </div>);
};

export default ProjectsPageById;
