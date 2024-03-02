import { Col, Div, MainCard, Row, Span } from "components/_index";
import { Timer1 } from "iconsax-react";

interface ProjectByIdTitleProps {
    title ?: string;
    duration?: string;
}

function ProjectByIdTitle(props: ProjectByIdTitleProps) {
  return (
    <>
      <Row>
        <Col className="col-span-12 sm:col-span-6 mx-1">
          <MainCard>
            <Span className="text-xl sm:text-2xl">
                {props.title}
            </Span>
          </MainCard>
        </Col>
        <Col className="col-span-12 sm:col-span-6 mx-1">
          <MainCard>
            <Div className="flex flex-row gap-2 items-center">
              <Timer1
                size="32"
                className="dark:text-textgreen text-lightTextColor"
              />
              <Span className="text-xl sm:text-2xl dark:text-textDark text-textLight">
                Duration : {props.duration}
              </Span>
            </Div>
          </MainCard>
        </Col>
      </Row>
    </>
  );
}
export default ProjectByIdTitle;
