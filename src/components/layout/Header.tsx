import {
  A,
  DarkModeBtn,
  Div,
  GithubIcon,
  Header,
  Img,
  LinkedinIcon,
  Span,
  StackOverFlowIcon,
} from "components/_index";
import { useTheme } from "next-themes";

const HeaderLayout = () => {
  const { theme } = useTheme();
  return (
    <Header
      className="max-w-full bg-lightBackground dark:bg-darkBackground flex justify-between items-center p-2 rounded-3xl "
      style={{ transform: "perspective(1200px)" }}
    >
      <Div className="flex flex-row">
        <Img
          src="/amirali.png"
          className="p-1 size-12 sm:size-16 m-1 rounded-2xl border-2 border-solid border-lightTextColor dark:border-darkTextColor"
        />
        <Div className="flex flex-col justify-center m-1">
          <Span className="text-[#b92b2b] dark:text-headerTextTitle text-sm  sm:text-2xl font-semibold">
            Amirali Hatami
          </Span>
          <Span className="dark:text-[#838383] text-[#212121] hidden sm:block">
            Frontend Developer
          </Span>
        </Div>
      </Div>
      
      <Div className="flex flex-row-reverse gap-1 sm:gap-2 items-center">
        <DarkModeBtn />
        <A
          href={"https://www.linkedin.com/in/amir-ali-hatami-a183791b7/"}
          target="_blank"
          className="dark:bg-neutral-800 bg-[#999]  flex justify-center items-center rounded-xl duration-500 hover:cursor-pointer hover:duration-500 hover:shadow-normal size-10 "
        >
          <LinkedinIcon
            height="25"
            width="25"
            fill={`${theme === "dark" ? "#ac99ff" : "#b92b2b"}`}
          />
        </A>
        <A
          href="https://stackoverflow.com/users/17298985/amirali-hatami"
          target="_blank"
          className="dark:bg-neutral-800 bg-[#999]  flex justify-center items-center rounded-xl duration-500 hover:cursor-pointer hover:duration-500 hover:shadow-normal size-10 "
        >
          <StackOverFlowIcon
            width={25}
            height={25}
            fill1={`${theme === "dark" ? "#ac99ff" : "#b92b2b"}`}
            fill2={`${theme === "dark" ? "#ac99ff" : "#b92b2b"}`}
          />
        </A>
        <A
          href={"https://github.com/VisitDeveloper"}
          target="_blank"
          className="dark:bg-neutral-800 bg-[#999]  flex justify-center items-center rounded-xl duration-500 hover:cursor-pointer hover:duration-500 hover:shadow-normal size-10 "
        >
          <GithubIcon
            height="25"
            width="25"
            fill={`${theme === "dark" ? "#ac99ff" : "#b92b2b"}`}
          />
        </A>
      </Div>
    </Header>
  );
};
export default HeaderLayout;
