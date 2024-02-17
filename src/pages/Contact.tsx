import {
  Col,
  Div,
  MainCard,
  Row,
  Span,
  StackOverFlowIcon,
  GithubIcon,
  LinkedinIcon,
  A,
} from "components/_index";
import { Instagram, Mobile, Sms, User } from "iconsax-react";
import { useTheme } from "next-themes";

function Contacts() {
  // const themeStatus = localStorage.getItem('theme');
  // console.log('themeStatus', themeStatus)
  const { systemTheme, theme, setTheme } = useTheme();
  console.log("theme", theme);
  return (
    <>
      <MainCard>
        <Div className="font-semibold text-5xl">Let's Connect!</Div>
      </MainCard>

      <MainCard
        headerTitle={"Contact"}
        icon={<User className="dark:text-textgreen text-lightTextColor" />}
      >
        <Row>
          <Col className="col-span-12 sm:col-span-6 m-2 ">
            <Div className="flex flex-row gap-2 bg-[#b3b3b3] dark:bg-[#232323] rounded-lg p-2">
              <Sms
                size="25"
                className="text-textChipLight dark:text-headerTextTitle"
              />
              <Span className="font-semibold">amiralihatami220@gmail.com</Span>
            </Div>
          </Col>
          <Col className="col-span-12 sm:col-span-6 m-2 ">
            <Div className="flex flex-row gap-2 bg-[#b3b3b3] dark:bg-[#232323] rounded-lg p-2">
              <Mobile
                size="25"
                className="text-textChipLight dark:text-headerTextTitle"
              />
              <Span className="font-semibold">+905338836545</Span>
            </Div>
          </Col>
          <Col className="col-span-12 sm:col-span-6 m-2 ">
            <Div className="flex flex-row gap-2 bg-[#b3b3b3] dark:bg-[#232323] rounded-lg p-2">
              <Instagram
                size="25"
                className="text-textChipLight dark:text-headerTextTitle"
              />
              <Span className="font-semibold">amiralihatami21</Span>
            </Div>
          </Col>
          <Col className="col-span-12 sm:col-span-6 m-2 ">
            <A href="https://stackoverflow.com/users/17298985/amirali-hatami" target="_blank" className="flex flex-row gap-2 bg-[#b3b3b3] dark:bg-[#232323] rounded-lg p-2">
              <StackOverFlowIcon
                width={25}
                height={25}
                fill1={`${theme === "dark" ? "#ac99ff" : "#b92b2b"}`}
                fill2={`${theme === "dark" ? "#ac99ff" : "#b92b2b"}`}
              />
              <Span className="font-semibold">Stackoverflow</Span>
            </A>
          </Col>
          <Col className="col-span-12 sm:col-span-6 m-2 ">
            <A href="https://github.com/VisitDeveloper" target="_blank" className="flex flex-row gap-2 bg-[#b3b3b3] dark:bg-[#232323] rounded-lg p-2">
              <GithubIcon
                height="25"
                width="25"
                fill={`${theme === "dark" ? "#ac99ff" : "#b92b2b"}`}
              />
              <Span className="font-semibold">Github</Span>
            </A>
          </Col>

          <Col className="col-span-12 sm:col-span-6 m-2 ">
            <A href="https://www.linkedin.com/in/amir-ali-hatami-a183791b7/" target="_blank" className="flex flex-row gap-2 bg-[#b3b3b3] dark:bg-[#232323] rounded-lg p-2">
              <LinkedinIcon
                height="25"
                width="25"
                fill={`${theme === "dark" ? "#ac99ff" : "#b92b2b"}`}
              />
              <Span className="font-semibold">Linkedin</Span>
            </A>
          </Col>
          
        </Row>
      </MainCard>
    </>
  );
}
export default Contacts;
