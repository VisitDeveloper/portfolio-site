
import { Button, Div, Span , MainCard } from 'components/_index'
import { HasRipple } from 'components/pure-components/Button'
import { ArrowRight } from 'iconsax-react'
import { useState } from 'react';

function Summary() {

    const [hoverEvent, setHoverEvent] = useState<boolean>(false);

    const handleOnHoverEvent = () => {
      setHoverEvent(true);
    };
    const handleOnHoverLeaveEvent = () => {
      setHoverEvent(false);
    };

  return (
    <div>
         <MainCard className="flex flex-col gap-3 max-w-full">
        <Div className="font-semibold text-3xl dark:text-white text-textLight">
          Hello there! AmirAli here!
        </Div>
        <Div className="dark:text-textDark text-textLight text-justify">
          As a seasoned frontend developer with +5 years of experience,I
          specialize in React, Next.js, React Native and Angular development. My
          expertise encompasses building dynamic and responsive user interfaces,
          leveraging cutting edge technologies to deliver high-quality web
          applications.
        </Div>
        <Div className="dark:text-textDark text-textLight text-justify">
          In my present position,I actively engage in a wide array of projects,
          leveraging React, Next.js, and TypeScript, while seamlessly
          integrating numerous third-party libraries such as Antd, MUI, and
          Bootstrap. My proficiency extends to CSS, HTML, and JavaScript,
          enabling me to elevate both functionality and design aspects.
          Embracing agile methodologies, notably Scrum, fosters effective
          collaboration and ensures the delivery of top-tier software solutions.
        </Div>
        <Div className="w-full">
          <Button
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
            <Span className="text-sm font-semibold">More about Me</Span>
          </Button>
        </Div>
      </MainCard>
    </div>
  )
}
export default Summary;