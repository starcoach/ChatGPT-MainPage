// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type RefreshIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function RefreshIcon(props: RefreshIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 13 11"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M1 1.499v3h3m8.003 5.002v-3h-3"}
        stroke={"currentColor"}
        strokeWidth={".75"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M10.748 4A4.502 4.502 0 003.32 2.32L1 4.5m11.003 2l-2.32 2.18A4.501 4.501 0 012.254 7"
        }
        stroke={"currentColor"}
        strokeWidth={".75"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default RefreshIcon;
/* prettier-ignore-end */
