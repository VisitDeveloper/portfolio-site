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
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Projects() {
  const [hoverEvent, setHoverEvent] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleOnHoverEvent = () => {
    setHoverEvent(true);
  };
  const handleOnHoverLeaveEvent = () => {
    setHoverEvent(false);
  };

  return (
    <>
      <MainCard headerTitle={"Projects"}
          icon={<Edit className="dark:text-textgreen text-lightTextColor" />}>
        
        <Row>
          <Col className="col-span-12 sm:col-span-6">
            <Div className="flex flex-col items-start gap-2 mt-4 ">
              <Div>
                <Img
                  src="./sky.webp"
                  className="cursor-pointer duration-500 w-11/12 h-11/12 rounded-2xl hover:scale-95 hover:duration-500 "
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
                  className="cursor-pointer duration-500 w-11/12 h-11/12 rounded-2xl hover:scale-95 hover:duration-500 "
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
              onClick={() => navigate('/project')}
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
