import { KeyboardOpen, RecordCircle } from "iconsax-react";
import MainCard from "./MainCard";
import { Div, Span } from "components/_index";

const Freelance = () => {
  return (
    <MainCard
      headerTitle={"Freelance"}
      icon={
        <KeyboardOpen className="dark:text-textgreen text-lightTextColor" />
      }
    >
      <Div className="flex flex-col items-baseline">
        <Div className="flex flex-row gap-5 items-baseline mt-5 mx-4">
          <Div>
            <RecordCircle
              size="15"
              className="dark:text-darkTextColor text-textChipLight"
            />
          </Div>
          <Div className="flex flex-col gap-1 mt-2">
            <Span className="text-lg">Nakh Project</Span>
            <Span className="mt-[-5px] text-xs dark:text-textDark text-textLight text-justify">
              Tehran , Iran
            </Span>
            <Span className="mt-[-5px] text-xs dark:text-textDark text-textLight text-justify">
              "Nakh" serves as a specialized online ordering panel tailored
              forspecific usersto conveniently purchase goods overtheinternet
            </Span>
          </Div>
        </Div>

        <Div className="flex flex-row gap-5 items-baseline mt-5 mx-4">
          <Div>
            <RecordCircle
              size="15"
              className="dark:text-darkTextColor text-textChipLight"
            />
          </Div>
          <Div className="flex flex-col gap-1 mt-2">
            <Span className="text-lg">Chainobin Project</Span>
            <Span className="mt-[-5px] text-xs dark:text-textDark text-textLight text-justify">
              Tehran , Iran
            </Span>
            <Span className="mt-[-5px] text-xs dark:text-textDark text-textLight text-justify">
              "Chinobin" was a data analysis project designed to visualize data
              using charts, similarto Golsnod'ssite but tailored for Persian
              users with some uniquefeatures.
            </Span>
          </Div>
        </Div>

        <Div className="flex flex-row gap-5 items-baseline mt-5 mx-4">
          <Div>
            <RecordCircle
              size="15"
              className="dark:text-darkTextColor text-textChipLight"
            />
          </Div>
          <Div className="flex flex-col gap-1 mt-2">
            <Span className="text-lg">TasProvider Project</Span>
            <Span className="mt-[-5px] text-xs dark:text-textDark text-textLight text-justify">
              Canada
            </Span>
            <Span className="mt-[-5px] text-xs dark:text-textDark text-textLight text-justify">
              Company that delivers outsourced IT suppord, product and solution .
            </Span>
          </Div>
        </Div>
      </Div>
    </MainCard>
  );
};

export default Freelance;
