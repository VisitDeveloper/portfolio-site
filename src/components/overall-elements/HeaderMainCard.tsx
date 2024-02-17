import { Div, H1, Span } from 'components/_index';
import React from 'react'

interface HeaderMainCardProps {
    children : React.ReactNode | React.ReactElement | JSX.Element | string;
    icon?:  React.ReactNode | React.ReactElement | JSX.Element;
}

function HeaderMainCard(props:HeaderMainCardProps) {
    const {children ,icon } = props;
  return (
    <>
        <Div className="flex flex-row gap-3 items-center">
          <Span>
            {icon}
          </Span>
          <H1 className="text-2xl">{children}</H1>
        </Div>
    </>
  )
}
export default HeaderMainCard