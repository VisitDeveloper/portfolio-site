import { Global, RecordCircle } from "iconsax-react";
import MainCard from "./MainCard";
import { A, Div , Span} from "components/_index";

const ExperienceCard = () => {
  return (
    <MainCard
      headerTitle={"Experience"}
      icon={<Global className="dark:text-textgreen text-lightTextColor" />}
    >
      <Div className="flex flex-col items-baseline">
        <Div className="flex flex-row gap-5 items-center mt-5 mx-4">
          <Div>
            <RecordCircle size="15" className="dark:text-darkTextColor text-textChipLight" />
          </Div>
          <Div className="flex flex-col gap-1 mt-2">
            <Span className="text-lg">
              Frontend Developer - Team Lead 
            </Span>
            <A  target="_blank" href="https://www.linkedin.com/company/vasl/" className="mt-[-5px] text-xs dark:text-textDark text-textLight text-justify">
              Vasl Company 
            </A>
          </Div>
        </Div>

        <Div className="flex flex-row gap-5 items-center mt-5 mx-4">
          <Div>
            <RecordCircle size="15" className="dark:text-darkTextColor text-textChipLight" />
          </Div>
          <Div className="flex flex-col gap-1 mt-2">
            <Span className="text-lg">Frontend Developer - Team Lead </Span>
            <A target="_blank" href="https://www.linkedin.com/company/armaghan-net/" className="mt-[-5px] text-xs dark:text-textDark text-textLight text-justify">
              Armaghan Rahe Talaie
            </A>
          </Div>
        </Div>

        <Div className="flex flex-row gap-5 items-center mt-5 mx-4">
          <Div>
            <RecordCircle size="15" className="dark:text-darkTextColor text-textChipLight" />
          </Div>
          <Div className="flex flex-col gap-1 mt-2">
            <Span className="text-lg">Frontend Developer - Senior </Span>
            <Span className="mt-[-5px] text-xs dark:text-textDark text-textLight text-justify">
              Tose Fanavaran
            </Span>
          </Div>
        </Div>

        <Div className="flex flex-row gap-5 items-center mt-5 mx-4">
          <Div>
            <RecordCircle size="15" className="dark:text-darkTextColor text-textChipLight" />
          </Div>
          <Div className="flex flex-col gap-1 mt-2">
            <Span className="text-lg">Mid-Level Frontend Developer  </Span>
            <A target="_blank" href="https://www.linkedin.com/company/polygonygroup/about/" className="mt-[-5px] text-xs dark:text-textDark text-textLight text-justify">
              PolyGony
            </A>
          </Div>
        </Div>

        <Div className="flex flex-row gap-5 items-center mt-5 mx-4">
          <Div>
            <RecordCircle size="15" className="dark:text-darkTextColor text-textChipLight" />
          </Div>
          <Div className="flex flex-col gap-1 mt-2">
            <Span className="text-lg">Mid-Level Frontend Developer  </Span>
            <A target="_blank" href="https://www.linkedin.com/company/adl-afarinan-mandegar/about/" className="mt-[-5px] text-xs dark:text-textDark text-textLight text-justify">
              Adotel
            </A>
          </Div>
        </Div>

        <Div className="flex flex-row gap-5 items-center mt-5 mx-4">
          <Div>
            <RecordCircle size="15" className="dark:text-darkTextColor text-textChipLight" />
          </Div>
          <Div className="flex flex-col gap-1 mt-2">
            <Span className="text-lg">Junior Frontend Developer  </Span>
            <Span className="mt-[-5px] text-xs dark:text-textDark text-textLight text-justify">
              Visit Eco
            </Span>
          </Div>
        </Div>
      </Div>
    </MainCard>
  );
};

export default ExperienceCard;
