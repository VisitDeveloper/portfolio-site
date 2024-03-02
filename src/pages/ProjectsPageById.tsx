// import { RootState } from "@reduxjs/toolkit/query";
import {
  A,
  Button,
  Chip,
  Div,
  Img,
  MainCard,
  ProjectByIdTitle,
  Span,
} from "components/_index";
import { HasRipple } from "components/pure-components/Button";
import { ArrowLeft, Eye } from "iconsax-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "store/hooks";

const ProjectsPageById = () => {
  const navigate = useNavigate();
  const selector = useAppSelector((state: any) => state);
  console.log("selector", selector.project.object);
  const [hoverEvent, setHoverEvent] = useState<boolean>(false);

  const handleOnHoverEvent = () => {
    setHoverEvent(true);
  };
  const handleOnHoverLeaveEvent = () => {
    setHoverEvent(false);
  };

  return (
    <Div>
      <MainCard className="flex flex-row justify-between items-center w-full">
        <Div>
          <Button
            onClick={() => navigate(-1)}
            onMouseEnter={handleOnHoverEvent}
            onMouseLeave={handleOnHoverLeaveEvent}
            paletteColor="main-page"
            className="w-[100%] h-10 flex justify-center items-center rounded-lg px-3"
            hasRipple={HasRipple.withOutRipple}
            imgLeft={
              <ArrowLeft
                size="17"
                className={`box-border ${
                  hoverEvent ? "ml-2 duration-500" : "duration-500"
                } dark:text-darkTextColor text-lightTextColor`}
              />
            }
          >
            <Span className="text-sm font-semibold">Back</Span>
          </Button>
        </Div>
        {selector.project.object.link === "" ? (
          <></>
        ) : (
          <>
            <Div>
              <A
                href={selector.project.object.link}
                target="_blank"
                className="flex flex-row gap-2 items-center px-2 py-1 rounded-lg dark:border-white border-black border-2 border-solid"
              >
                <Span className="text-base">Preview</Span>
                <Eye className="text-base dark:text-darkTextColor text-lightTextColor" />
              </A>
            </Div>
          </>
        )}
      </MainCard>
      <ProjectByIdTitle
        duration={selector.project.object.duration}
        title={selector.project.object.title}
      />
      <MainCard
        headerTitle="Overview"
        icon={<Eye className="dark:text-textgreen text-lightTextColor" />}
      >
        <Div className="flex flex-row gap-2 mt-5">
          {selector.project.object.flag.length !== 0
            ? selector.project.object.flag.map((item: string, i: number) => {
                return (
                  <Chip
                    key={i}
                    type={
                      item === selector.project.object.type ? "flag" : "hashtag"
                    }
                  >
                    {item}
                  </Chip>
                );
              })
            : null}
        </Div>
        <Img
          src={`${selector.project.object.image}`}
          className="mt-4 rounded-lg"
          alt={selector.project.object.title}
        />

        <Div className="dark:text-textDark text-textLight text-justify mt-5">
          {selector.project.object.descriptionLong}
        </Div>
      </MainCard>
    </Div>
  );
};

export default ProjectsPageById;
