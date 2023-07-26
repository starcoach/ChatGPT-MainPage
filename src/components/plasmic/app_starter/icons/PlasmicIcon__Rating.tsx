// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type RatingIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function RatingIcon(props: RatingIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 44 16"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M4.5 7.3L7.3 1a2.1 2.1 0 012.1 2.1v2.8h3.962a1.4 1.4 0 011.4 1.61l-.966 6.3a1.4 1.4 0 01-1.4 1.19H4.5m0-7.7V15m0-7.7H2.4A1.4 1.4 0 001 8.7v4.9A1.4 1.4 0 002.4 15h2.1m34.778-6.3l-2.8 6.3a2.1 2.1 0 01-2.1-2.1v-2.8h-3.962a1.4 1.4 0 01-1.4-1.61l.966-6.3a1.4 1.4 0 011.4-1.19h7.896m0 7.7V1m0 7.7h1.869a1.617 1.617 0 001.63-1.4V2.4a1.617 1.617 0 00-1.63-1.4h-1.87"
        }
        stroke={"currentColor"}
        strokeWidth={"1.4"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default RatingIcon;
/* prettier-ignore-end */
