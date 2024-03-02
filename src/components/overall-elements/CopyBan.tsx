import MainCard from "./MainCard";
import { A, Div, Span } from "components/_index";


function CopyBan() {
  return (
    <MainCard disableHeader={true} className="mb-20 flex flex-row-reverse justify-between items-center w-full">
      {/* <Div className="flex flex-col gap-4">
        <Span className="text-sm font-medium">Licensing</Span>
        <Span className="text-right text-sm">404</Span>
      </Div> */}

      <Div className="flex flex-col min-[350px]:flex-row gap-4 w-full justify-between items-center ">
        <Span className="dark:text-[#838383] text-[#212121] text-sm">
          © 2024. All rights Reserved.
        </Span>
        <Span className="dark:text-[#838383] text-[#212121] text-sm">
          Made By 
          <A className="mx-1" href="https://www.linkedin.com/in/amir-ali-hatami-a183791b7" target="_blank">
            Amirali
          </A>
        </Span>
      </Div>
    </MainCard>
  );
}
export default CopyBan