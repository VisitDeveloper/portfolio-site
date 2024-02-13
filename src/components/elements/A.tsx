import React, { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';

interface AProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  children?: React.ReactNode  | React.ReactElement | JSX.Element
}

function A({children ,...props}: AProps) {
    return (
      <a {...props}>
          {children}
      </a>
    )
  }
export default A
