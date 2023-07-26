// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ShapeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ShapeIcon(props: ShapeIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 320 52"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M9 0H4a4 4 0 00-4 4v44a4 4 0 004 4h312a4 4 0 004-4V4a4 4 0 00-4-4H112v1h204a3 3 0 013 3v44a3 3 0 01-3 3H4a3 3 0 01-3-3V4a3 3 0 013-3h5V0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ShapeIcon;
/* prettier-ignore-end */
