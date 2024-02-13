import MainCard from "./MainCard";
import { Div, Span } from "components/_index";

export interface CopyBanProps {
    children?: React.ReactNode | React.ReactElement | JSX.Element 
} 

function CopyBan(props:CopyBanProps) {
  return (
    <MainCard className="flex flex-row-reverse justify-between items-center">
      <Div className="flex flex-col gap-4">
        <Span className="text-sm font-medium">Licensing</Span>
        <Span className="text-right text-sm">404</Span>
      </Div>

      <Div className="flex flex-col gap-4">
        <Span className="dark:text-[#838383] text-[#212121] text-sm">
          © 2024. All rights Reserved.
        </Span>
        <Span className="dark:text-[#838383] text-[#212121] text-sm">
          Made By Amirali
        </Span>
        {props?.children}
      </Div>
    </MainCard>
  );
}
export default CopyBan