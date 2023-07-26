// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Delete2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Delete2Icon(props: Delete2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 13 14"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1 3.4h10.8m-1.2 0v8.4A1.2 1.2 0 019.4 13h-6a1.2 1.2 0 01-1.2-1.2V3.4m1.8 0V2.2A1.2 1.2 0 015.2 1h2.4a1.2 1.2 0 011.2 1.2v1.2m-3.6 3V10m2.4-3.6V10"
        }
        stroke={"currentColor"}
        strokeWidth={"1.2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Delete2Icon;
/* prettier-ignore-end */
