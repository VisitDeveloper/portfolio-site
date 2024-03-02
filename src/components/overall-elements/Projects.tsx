import {
  Button,
  Chip,
  Col,
  Div,
  Img,
  MainCard,
  Row,
  Span,
} from "components/_index";
import { HasRipple } from "components/pure-components/Button";
import { ArrowRight, Edit } from "iconsax-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ListSearchItem, DataCardProject } from "model/components/projects";
import {
  dataCardProjects,
  dataCardProjectsAll,
  dataCardProjectsPersonal,
} from "config/dataProjects";
import { useAppDispatch } from "store/hooks";
import { saveObjects } from "store/slices/saveProjects";

interface ProjectsProps {
  noButton?: boolean;
}

function Projects(props: ProjectsProps) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [hoverEvent, setHoverEvent] = useState<boolean>(false);
  const [showProjects, setShowProjects] =
    useState<Array<DataCardProject>>(dataCardProjectsAll);
  const [listFilterItem, setListFilterItem] = useState<Array<ListSearchItem>>([
    {
      type: "All",
      status: true,
      id: 0,
    },
    {
      type: "Personal",
      status: false,
      id: 1,
    },
    {
      type: "Project",
      status: false,
      id: 2,
    },
  ]);

  const handleOnHoverEvent = () => {
    setHoverEvent(true);
  };
  const handleOnHoverLeaveEvent = () => {
    setHoverEvent(false);
  };

  const changeFilterSearch = (ID: number) => {
    const newState = listFilterItem.map((obj: ListSearchItem) => {
      if (ID === obj.id) {
        return { ...obj, status: true };
      }
      return { ...obj, status: false };
    });

    setListFilterItem(newState);
  };

  useEffect(() => {
    const afterChangeStateToShow = () => {
      const findItem = [...listFilterItem];
      const findBoolean = findItem.find((item) => item.status === true);

      if (findBoolean?.type === "Personal") {
        setShowProjects(dataCardProjectsPersonal);
      } else if (findBoolean?.type === "Project") {
        setShowProjects(dataCardProjects);
      } else {
        setShowProjects(dataCardProjectsAll);
      }
    };

    afterChangeStateToShow();
  }, [listFilterItem]);

  const changeRouteWithClickOnItem = (ID: number, obj: DataCardProject) => {
    navigate(`/project/${ID}`);
    dispatch(saveObjects(obj));
  };

  return (
    <>
      <MainCard
        headerTitle={"Projects"}
        icon={<Edit className="dark:text-textgreen text-lightTextColor" />}
      >
        <Div className="flex flex-row gap-3 w-full my-3">
          {listFilterItem.map((item: ListSearchItem) => {
            return (
              <Div
                key={item.id}
                onClick={() => changeFilterSearch(item.id)}
                className={`px-2 text-sm font-semibold rounded-lg ${
                  item.status === true
                    ? "border-[1px] border-solid border-black dark:border-white"
                    : false
                } cursor-pointer`}
              >
                {item.type}
              </Div>
            );
          })}
        </Div>
        <Row>
          {showProjects.length !== 0 ? (
            showProjects.map((item: DataCardProject) => {
              return (
                <Col
                  key={item.id}
                  className="col-span-12 sm:col-span-6"
                  onClick={() => changeRouteWithClickOnItem(item?.id!, item)}
                >
                  <Div className="flex flex-col items-start gap-2 mt-4 ">
                    <Div>
                      <Img
                        src={item.image}
                        className=" cursor-pointer duration-500 w-full sm:w-11/12 h-11/12 rounded-2xl hover:scale-95 hover:duration-500 "
                      />
                    </Div>

                    <Div className="flex flex-row gap-2 mt-0 items-center">
                      
                      {item?.flag?.length !== 0
                        ? item?.flag?.map((it: string, i: number) => {
                            return (
                              <Chip
                                key={i}
                                type={
                                  it === item?.type!
                                    ? "flag"
                                    : "hashtag"
                                }
                              >
                                {it}
                              </Chip>
                            );
                          })
                        : null}
                    </Div>

                    <Span className="dark:text-textDark text-textLight text-base">
                      {item.desc}
                    </Span>
                  </Div>
                </Col>
              );
            })
          ) : (
            <Span className="dark:text-textDark text-textLight text-justify mt-4">
              There is not any data!
            </Span>
          )}

          {props.noButton === false ? (
            <Col className="col-span-12 mt-4">
              <Div className="w-full">
                <Button
                  onClick={() => navigate("/project")}
                  onMouseEnter={handleOnHoverEvent}
                  onMouseLeave={handleOnHoverLeaveEvent}
                  paletteColor="main-page"
                  className="w-[100%] h-10 flex justify-center items-center rounded-lg"
                  hasRipple={HasRipple.withOutRipple}
                  imgRight={
                    <ArrowRight
                      size="17"
                      className={`box-border ${
                        hoverEvent ? "ml-2 duration-500" : "duration-500"
                      } dark:text-darkTextColor text-lightTextColor`}
                    />
                  }
                >
                  <Span className="text-sm font-semibold">All Projects</Span>
                </Button>
              </Div>
            </Col>
          ) : (
            <></>
          )}
        </Row>
      </MainCard>
    </>
  );
}
export default Projects;
