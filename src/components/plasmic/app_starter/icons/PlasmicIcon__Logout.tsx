// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LogoutIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LogoutIcon(props: LogoutIconProps) {
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
          "M5 13H2.333A1.334 1.334 0 011 11.667V2.333A1.333 1.333 0 012.333 1H5m4.667 9.333L13 7 9.667 3.667M13 7H5"
        }
        stroke={"currentColor"}
        strokeWidth={"1.333"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default LogoutIcon;
/* prettier-ignore-end */
