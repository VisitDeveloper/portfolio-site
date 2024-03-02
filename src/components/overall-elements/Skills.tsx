import { Diamonds, RecordCircle } from "iconsax-react";
import MainCard from "./MainCard";
import { Div, Span } from "components/_index";



const Skills = () => {
  return (
    <MainCard
      icon={<Diamonds className="dark:text-textgreen text-lightTextColor" />}
      headerTitle={"Skills"}
    >
      <Div className="flex flex-col items-baseline">
        <Div className="flex flex-row gap-5 items-baseline mt-5 mx-4">
          <Div>
            <RecordCircle size="15"   className="dark:text-darkTextColor text-textChipLight" />
          </Div>
          <Div className="flex flex-col gap-1 mt-2">
            <Span className="text-lg">Technology</Span>
            <Span className="mt-[-5px] text-xs dark:text-textDark text-textLight text-justify">
              Javascript , Typescript
            </Span>
          </Div>
        </Div>

        <Div className="flex flex-row gap-5 items-baseline mt-5 mx-4">
          <Div>
            <RecordCircle size="15" className="dark:text-darkTextColor text-textChipLight" />
          </Div>
          <Div className="flex flex-col gap-1 mt-2">
            <Span className="text-lg">Tools and Frameworks</Span>
            <Span className="mt-[-5px] text-xs dark:text-textDark text-textLight text-justify">
              React.js , Next.js , Angular , React Native , Redux Zustand ,
              Storybook , Less , Sass , Styled-component , Tailwind-css , Ant ,
              MUI , Bootstrap , CSS Module , Semantice UI , HighCharts , React
              Hook Form , Formik , Yup , Zod , i18next , Vite , Git , GitFlow ,
              RTKQ , Context API , GraphQl , useQuery , RTL
            </Span>
          </Div>
        </Div>

        <Div className="flex flex-row gap-5 items-baseline mt-5 mx-4">
          <Div>
            <RecordCircle size="15" className="dark:text-darkTextColor text-textChipLight" />
          </Div>
          <Div className="flex flex-col gap-1 mt-2">
            <Span className="text-lg">Soft Skills</Span>
            <Span className="mt-[-5px] text-xs dark:text-textDark text-textLight text-justify">
              Teamwork communication, Problem Solving, Professional Ethics, Time
              Management, Stress Management, Adaptability, Leadership
            </Span>
          </Div>
        </Div>

        <Div className="flex flex-row gap-5 items-baseline mt-5 mx-4">
          <Div>
            <RecordCircle size="15" className="dark:text-darkTextColor text-textChipLight" />
          </Div>
          <Div className="flex flex-col gap-1 mt-2">
            <Span className="text-lg">Engineering</Span>
            <Span className="mt-[-5px] text-xs dark:text-textDark text-textLight text-justify">
              SOLID Principle, Design Patterns, Web Services (RESTful), Agile
              Principles and Scrum Methodology
            </Span>
          </Div>
        </Div>
      </Div>
    </MainCard>
  );
};
export default Skills;
