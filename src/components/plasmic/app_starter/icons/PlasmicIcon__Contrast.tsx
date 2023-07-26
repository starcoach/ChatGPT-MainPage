// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ContrastIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ContrastIcon(props: ContrastIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M8 11.182a3.182 3.182 0 100-6.364 3.182 3.182 0 000 6.364zM8 1v1.273m0 11.454V15M3.05 3.05l.903.903m8.094 8.094l.904.904M1 8h1.273m11.454 0H15M3.05 12.95l.903-.903m8.094-8.094l.904-.904"
        }
        stroke={"currentColor"}
        strokeWidth={"1.273"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ContrastIcon;
/* prettier-ignore-end */
