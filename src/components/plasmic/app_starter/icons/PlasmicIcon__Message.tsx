// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MessageIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MessageIcon(props: MessageIconProps) {
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
          "M13 9a1.334 1.334 0 01-1.333 1.333h-8L1 13V2.333A1.333 1.333 0 012.333 1h9.334A1.333 1.333 0 0113 2.333V9z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.333"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default MessageIcon;
/* prettier-ignore-end */
