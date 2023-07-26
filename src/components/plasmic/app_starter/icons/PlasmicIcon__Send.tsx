// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SendIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SendIcon(props: SendIconProps) {
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
          "M7.782.483a.875.875 0 00-1.564 0L.092 12.733a.875.875 0 001.023 1.233l4.376-1.25a.875.875 0 00.634-.842v-4a.875.875 0 011.75 0v4a.875.875 0 00.634.842l4.376 1.25a.874.874 0 001.024-1.232L7.782.482z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SendIcon;
/* prettier-ignore-end */
