import { Button, Div, MainCard, Span } from "components/_index";
import { HasRipple } from "components/pure-components/Button";
import { ArrowRight } from "iconsax-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const [hoverEvent, setHoverEvent] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleOnHoverEvent = () => {
    setHoverEvent(true);
  };
  const handleOnHoverLeaveEvent = () => {
    setHoverEvent(false);
  };

  return (
    <Div>
      <MainCard>
        <Div className="text-9xl text-center my-2">404</Div>
        <Div className="text-5xl text-center my-2">PAGE NOT FOUND</Div>
        <Button
          onClick={() => navigate("/")}
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
          <Span className="text-sm font-semibold">Back To Home</Span>
        </Button>
      </MainCard>
    </Div>
  );
};
export default NotFound;
