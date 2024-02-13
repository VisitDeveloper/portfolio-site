import { Div, H1, Span } from "components/_index";
import MainCard from "./MainCard";
import { ProgrammingArrow } from "iconsax-react";

function Stack() {
  return (
    <>
      <MainCard>
        <Div className="flex flex-row gap-3 items-center">
          <Span>
            <ProgrammingArrow className="dark:text-textgreen text-lightTextColor" />
          </Span>
          <H1 className="text-2xl">Stack</H1>
        </Div>
      </MainCard>
    </>
  );
}
export default Stack;
