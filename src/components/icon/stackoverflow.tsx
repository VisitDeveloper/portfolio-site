import { memo } from "react";

interface SVGStackoverFlowProps {
  width?: string | number;
  height?: string | number;
  fill1?: string;
  fill2?: string;
}
const SvgComponent = (props: SVGStackoverFlowProps) => {
    
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill={props.fill1}
        d="M28.16 32H2.475V20.58H5.32v8.575h19.956V20.58h2.884z"
      />
      <path
        fill={props.fill2}
        d="m8.477 19.8 13.993 2.923.585-2.806-13.993-2.923zm1.832-6.704 12.94 6.04 1.208-2.572-12.94-6.08zm3.586-6.353 10.99 9.12 1.832-2.183-10.99-9.12zM20.99 0l-2.3 1.715 8.536 11.46 2.3-1.715zM8.166 26.27H22.43v-2.845H8.166v2.845z"
      />
    </svg>
  );
};

const Memo = memo(SvgComponent);
export default Memo;
