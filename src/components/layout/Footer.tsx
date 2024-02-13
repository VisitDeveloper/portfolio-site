import { Div, Footer, Tooltip } from "components/_index";
import { Edit2, Home, ProgrammingArrow, Send2, User } from "iconsax-react";

function FooterLayout() {
  return (
    <Footer
      style={{ backgroundColor: "rgba(15, 15, 15, 0.6)" }}
      className="backdrop-blur-sm bg-[#0f0f0f] w-[342px] mx-auto rounded-3xl h-[74px] fixed bottom-2 right-0 left-0"
    >
      <Div className="flex flex-row justify-between items-center h-full p-2">
        <Tooltip text={"Home"}>
          <Div className="hover:shadow-normalLight dark:hover:shadow-normal hover:transition hover:duration-500 duration-500 hover:ease-in-out dark:bg-neutral-900 bg-[#888] flex justify-center items-center size-14 rounded-2xl cursor-pointer text-center">
            <Home size="25" className="dark:text-darkTextColor text-lightTextColor" />
          </Div>
        </Tooltip>

        <Tooltip text={"About"}>
          <Div className="hover:shadow-normalLight dark:hover:shadow-normal hover:transition hover:duration-500 duration-500 hover:ease-in-out dark:bg-neutral-900 bg-[#888] flex justify-center items-center size-14 rounded-2xl cursor-pointer text-center">
            <User size="25" className="dark:text-darkTextColor text-lightTextColor" />
          </Div>
        </Tooltip>
        <Tooltip text={"Projects"}>
          <Div className="hover:shadow-normalLight dark:hover:shadow-normal hover:transition hover:duration-500 duration-500 hover:ease-in-out dark:bg-neutral-900 bg-[#888] flex justify-center items-center size-14 rounded-2xl cursor-pointer text-center">
            <Edit2
              size="25"
              className="dark:text-darkTextColor text-lightTextColor"
            />
          </Div>
        </Tooltip>
        <Tooltip text={"Stack"}>
          <Div className="hover:shadow-normalLight dark:hover:shadow-normal hover:transition hover:duration-500 duration-500 hover:ease-in-out dark:bg-neutral-900 bg-[#888] flex justify-center items-center size-14 rounded-2xl cursor-pointer text-center">
            <ProgrammingArrow
              size="25"
              className="dark:text-darkTextColor text-lightTextColor"
            />
          </Div>
        </Tooltip>
        <Tooltip text={"Contact"}>
          <Div className="hover:shadow-normalLight dark:hover:shadow-normal hover:transition hover:duration-500 duration-500 hover:ease-in-out dark:bg-neutral-900 bg-[#888] flex justify-center items-center size-14 rounded-2xl cursor-pointer text-center">
            <Send2
              size="25"
              className="dark:text-darkTextColor text-lightTextColor"
            />
          </Div>
        </Tooltip>
      </Div>
    </Footer>
  );
}
export default FooterLayout;
