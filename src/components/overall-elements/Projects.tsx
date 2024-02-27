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


interface DataCardProject {
  id: number ;
  desc : string;
  type : string;
  image: string;
}

const dataCardProjectsAll : Array<DataCardProject>  =[
  {
    id:0,
    image:'' ,
    desc : '',
    type:'' ,
  }
]
const dataCardProjectsPersonal : Array<DataCardProject>  =[
  {
    id:0,
    image:'' ,
    desc : 'Test Framer motion',
    type:'Personal',
  },
  {
    id:0,
    image:'',
    desc : 'Music Applicaton',
    type:'Personal',
  },
  {
    id:0,
    image:'',
    desc : 'Other portfolio page',
    type:'Personal',
  }
]
const dataCardProjects : Array<DataCardProject>  =[
  {
    id:0,
    image:'' ,
    desc : '',
    type:'' ,
  }
]


interface ListSearchItem {
  type: string;
  status: boolean;
  id: number;
}

function Projects() {
  const [hoverEvent, setHoverEvent] = useState<boolean>(false);
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
      type: "Freelance",
      status: false,
      id: 2,
    },
  ]);
  const navigate = useNavigate();

  const handleOnHoverEvent = () => {
    setHoverEvent(true);
  };
  const handleOnHoverLeaveEvent = () => {
    setHoverEvent(false);
  };

  const changeFilterSearch = (ID: number) => {
    // setListFilterItem()

    const newState = listFilterItem.map((obj: ListSearchItem) => {
      // 👇️ if id equals 2, update country property
      if (ID === obj.id) {
        return { ...obj, status: true };
      }

      // 👇️ otherwise return the object as is
      return { ...obj, status: false };
    });

    setListFilterItem(newState);
  };

  useEffect(() => {
    console.log("listFilterItem", listFilterItem);
  }, [listFilterItem]);

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
          <Col className="col-span-12 sm:col-span-6">
            <Div className="flex flex-col items-start gap-2 mt-4 ">
              <Div>
                <Img
                  src="./sky.webp"
                  className="cursor-pointer duration-500 w-full sm:w-11/12 h-11/12 rounded-2xl hover:scale-95 hover:duration-500 "
                />
              </Div>

              <Div className="flex flex-row gap-2 mt-0">
                <Chip>Image</Chip>
                <Chip>Bussiness</Chip>
              </Div>

              <Span className="dark:text-textDark text-textLight text-base">
                Apex Wallet Landing Page
              </Span>
            </Div>
          </Col>
          <Col className="col-span-12 sm:col-span-6">
            <Div className="flex flex-col items-start gap-2 mt-4 ">
              <Div>
                <Img
                  src="./sky.webp"
                  className="cursor-pointer duration-500 w-full sm:w-11/12 h-11/12 rounded-2xl hover:scale-95 hover:duration-500 "
                />
              </Div>

              <Div className="flex flex-row gap-2 mt-0">
                <Chip>Image</Chip>
                <Chip>Bussiness</Chip>
              </Div>

              <Span className="dark:text-textDark text-textLight text-base">
                Apex Wallet Landing Page
              </Span>
            </Div>
          </Col>

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
        </Row>
      </MainCard>
    </>
  );
}
export default Projects;
