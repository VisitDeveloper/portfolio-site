import React from 'react'


type Responsive = string;
interface ColProps {
    children?: React.ReactNode | React.ReactElement | JSX.Element;
    colSpan?: number ;
    mdColSpan?:number;
    responsive ?: Responsive;
    className?: string;
  }

export default function Col(props :ColProps) {
    const {children , colSpan , responsive = '' , className ='' , mdColSpan}= props;

    const getResponsive = (responsive : Responsive) =>{
      return  `${responsive}:` 
    }

    const getfindColSpan = (colSpan: number) =>
      colSpan === 1
      ? "col-span-1"
      : colSpan === 2
      ? "col-span-2"
      : colSpan === 3
      ? "col-span-3"
      : colSpan === 4
      ? "col-span-4"
      : colSpan === 5
      ? "col-span-5"
      : colSpan === 6
      ? "col-span-6"
      : colSpan === 7
      ? "col-span-7"
      : colSpan === 8
      ? "col-span-8"
      : colSpan === 9
      ? "col-span-9"
      : colSpan === 10
      ? "col-span-10"
      : colSpan === 11
      ? "col-span-11"
      : "col-span-12";


      const getMdColSpan = (mdColSpan: number) =>
      mdColSpan === 1
      ? `${getResponsive(responsive)}col-span-1`
      : mdColSpan === 2
      ? `${getResponsive(responsive)}col-span-2`
      : mdColSpan === 3
      ? `${getResponsive(responsive)}col-span-3`
      : mdColSpan === 4
      ? `${getResponsive(responsive)}col-span-4`
      : mdColSpan === 5
      ? `${getResponsive(responsive)}col-span-5`
      : mdColSpan === 6
      ? `${getResponsive(responsive)}col-span-6`
      : mdColSpan === 7
      ? `${getResponsive(responsive)}col-span-7`
      : mdColSpan === 8
      ? `${getResponsive(responsive)}col-span-8`
      : mdColSpan === 9
      ? `${getResponsive(responsive)}col-span-9`
      : mdColSpan === 10
      ? `${getResponsive(responsive)}col-span-10`
      : mdColSpan === 11
      ? `${getResponsive(responsive)}col-span-11`
      : `${getResponsive(responsive)}col-span-12`;

      

  return (
    <div className={`${getfindColSpan(colSpan!)} ${getMdColSpan(mdColSpan!)} ${className}`}>
        {children}
    </div>
  )
}
