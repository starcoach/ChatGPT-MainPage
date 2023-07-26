// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PenIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PenIcon(props: PenIconProps) {
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
          "M7 12.414h6m-3-11a1.414 1.414 0 112 2l-8.333 8.334L1 12.414l.667-2.666L10 1.414z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.333"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default PenIcon;
/* prettier-ignore-end */
