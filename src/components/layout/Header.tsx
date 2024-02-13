import { A, DarkModeBtn, Div, Header, Img, Span } from "components/_index";
import { Instagram } from "iconsax-react";

const HeaderLayout = () => {
  return (
    <Header
      className="max-w-full bg-lightBackground dark:bg-darkBackground flex justify-between items-center p-2 rounded-3xl "
      style={{ transform: "perspective(1200px)" }}
    >
      <Div className="flex flex-row">
        <Img
          src="/amirali.png"
          className="p-1 size-16 m-1 rounded-2xl border-2 border-solid border-lightTextColor dark:border-darkTextColor"
        />
        <Div className="flex flex-col justify-center m-1">
          <Span className="text-[#b92b2b] dark:text-headerTextTitle  text-2xl font-semibold">
            Amirali Hatami
          </Span>
          <Span className="dark:text-[#838383] text-[#212121]">
            Frontend Developer
          </Span>
        </Div>
      </Div>
      <Div className="flex flex-row-reverse gap-2 items-center">
        <DarkModeBtn />
        <A href={"https://www.google.com"} target="_blank" className="m-3">
          a
        </A>
        <A  className="dark:bg-neutral-800 bg-[#999]  flex justify-center items-center rounded-xl duration-500 hover:cursor-pointer hover:duration-500 hover:shadow-normal size-10 ">
          <Instagram size="25" className="dark:text-darkTextColor text-lightTextColor" />
        </A>
      </Div>
    </Header>
  );
};
export default HeaderLayout;
