// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type EnlargeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function EnlargeIcon(props: EnlargeIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 14"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M11 7.667v4A1.334 1.334 0 019.667 13H2.333A1.334 1.334 0 011 11.667V4.333A1.333 1.333 0 012.333 3h4M9 1h4v4M5.667 8.333L13 1"
        }
        stroke={"currentColor"}
        strokeWidth={"1.333"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default EnlargeIcon;
/* prettier-ignore-end */
