import { Div, Span } from "components/_index";
import React from "react";

interface ToolTipProps {
  children: React.ReactNode;
  text: string | React.ReactNode;
}

function Tooltip(props: ToolTipProps) {
  const { text, children } = props;
  return (
    <Div className="group relative">
      {children}
      <Span
        className="
        text-center
            absolute 
            bottom-16 
            left-0
            right-0
            w-auto
            scale-0 
            transition-all 
            rounded 
            dark:bg-gray_new
            bg-Gray600
            p-1
            text-xs 
            text-white 
            group-hover:scale-100"
      >
        {text}
      </Span>
    </Div>
  );
}

export default Tooltip;
