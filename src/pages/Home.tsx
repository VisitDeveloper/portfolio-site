import {
  Div,
  // DynamicRenderingGlobal,
  MainCard,
  Summary,
  LetsTalk,
  Projects,
  Row,
  Col,
  P,
  H1,
} from "components/_index";
import { Typewriter } from "react-simple-typewriter";
// import { Type_List_Component } from "components/dynamic-renderer/main-dynamic-rendering-components/DynamicMainComponents";

const HomeIndex = () => {
  return (
    <>
      <Summary />

      <Row>
        <Col className="col-span-12 sm:col-span-6 mx-1">
          <Div
            id="slideset1"
            className="bg-lightBackground dark:bg-darkBackground my-4 px-5 py-5 rounded-3xl"
          >
            <Div>
              <H1 className="text-lg">Technology</H1>
              <P className="mt-[5px] text-xs dark:text-textDark text-textLight text-justify">
                Javascript , Typescript
              </P>
              <H1 className="text-lg mt-2">Soft Skills</H1>
              <P className="mt-[5px] text-xs dark:text-textDark text-textLight text-justify">
                Teamwork communication, Problem Solving, Professional Ethics,
                Time Management, Stress Management, Adaptability, Leadership
              </P>
            </Div>
            <Div>
              <H1 className="text-lg">Tools and Frameworks</H1>
              <P className="mt-[15px] text-xs dark:text-textDark text-textLight text-justify">
                React.js , Next.js , Angular , React Native , Redux Zustand ,
                Storybook , Less , Sass , Styled-component , Tailwind-css , Ant
                , MUI , Bootstrap , CSS Module , Semantice UI , HighCharts ,
                React Hook Form , Formik , Yup , Zod , i18next , Vite , Git ,
                GitFlow , RTKQ , Context API , GraphQl , useQuery , RTL
              </P>
            </Div>
            <Div>
              <H1 className="text-lg mt-1">Engineering</H1>
              <P className="mt-[15px] text-xs dark:text-textDark text-textLight text-justify">
                SOLID Principle, Design Patterns, Web Services (RESTful), Agile
                Principles and Scrum Methodology
              </P>
            </Div>
          </Div>
        </Col>
        <Col className="col-span-12 sm:col-span-6 mx-1">
          <MainCard className="flex flex-row-reverse justify-between items-center w-full">
            <Div className="bg-lightBackground dark:bg-darkBackground my-4 px-5 py-6 rounded-3xl text-4xl">
              <Typewriter
                words={["React.js", "Next.js", "Angular", "React Native"]}
                loop={6}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </Div>
          </MainCard>
        </Col>
      </Row>

      <Projects />
      <LetsTalk />

      {/* <DynamicRenderingGlobal
        type={Type_List_Component.CopyBan}
        configKey={{
          children: (
            <DynamicRenderingGlobal
              type={Type_List_Component.HeaderLayout}
              
            />
          ),
        }}
      /> */}
    </>
  );
};
export default HomeIndex;
