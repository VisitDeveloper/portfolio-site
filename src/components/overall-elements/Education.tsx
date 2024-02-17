import { Book1, RecordCircle } from "iconsax-react";
import MainCard from "./MainCard";
import { Div, Span } from "components/_index";

const Education = () => {
  return (
    <MainCard
      headerTitle={"Education"}
      icon={
        <Book1 className="dark:text-textgreen text-lightTextColor" />
      }
    >
      <Div className="flex flex-col items-baseline">
        <Div className="flex flex-row gap-5 items-center mt-5 mx-4">
          <Div>
            <RecordCircle size="15" className="dark:text-darkTextColor text-textChipLight" />
          </Div>
          <Div className="flex flex-col gap-1 mt-2">
            <Span className="text-lg">
              Bachelor's Degree in Computer Software Engineer
            </Span>
            <Span className="mt-[-5px] text-xs dark:text-textDark text-textLight text-justify">
              Azad University North Tehran Branch
            </Span>
          </Div>
        </Div>

        <Div className="flex flex-row gap-5 items-center mt-5 mx-4">
          <Div>
            <RecordCircle size="15" className="dark:text-darkTextColor text-textChipLight" />
          </Div>
          <Div className="flex flex-col gap-1 mt-2">
            <Span className="text-lg">Master's degree, Computer Science</Span>
            <Span className="mt-[-5px] text-xs dark:text-textDark text-textLight text-justify">
              Eastern Mediterranean University
            </Span>
          </Div>
        </Div>
      </Div>
    </MainCard>
  );
};

export default Education;
