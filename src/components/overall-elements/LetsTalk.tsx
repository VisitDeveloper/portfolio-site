import { Div, Img, Span } from "components/_index";
import { ArrowCircleRight } from "iconsax-react";
import { Link } from "react-router-dom";

function LetsTalk() {
  return (
    <>
      <Div
        className="relative flex flex-row-reverse justify-between items-center rounded-3xl
          content-image hover:overlay
        "
      >
        <Img
          src="./sky.webp"
          className="absolute w-full h-full top-0 left-0 object-cover rounded-3xl bg-transparent"
        />
        <Span
          className=" rounded-[21.9px]  flex flx-row justify-center items-center w-full h-full text-[150px]  dark:bg-darkBackground"
          style={{ mixBlendMode: "multiply" }}
        >
          Let's Talk
        </Span>

        <Link to={"/contact"} className="overlay hover:change">
          <Span className="icon-center">
            <ArrowCircleRight size={40} className="change" />
          </Span>
        </Link>
      </Div>
    </>
  );
}
export default LetsTalk;
