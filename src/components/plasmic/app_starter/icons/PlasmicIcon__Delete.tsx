// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DeleteIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DeleteIcon(props: DeleteIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 16"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1 3.689h12.1m-1.345 0V13.1a1.345 1.345 0 01-1.344 1.344H3.69A1.345 1.345 0 012.344 13.1V3.689m2.017 0V2.344A1.344 1.344 0 015.706 1h2.688A1.344 1.344 0 019.74 2.344V3.69M5.706 7.05v4.033M8.394 7.05v4.033"
        }
        stroke={"currentColor"}
        strokeWidth={"1.344"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default DeleteIcon;
/* prettier-ignore-end */
