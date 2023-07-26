// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DiscordIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DiscordIcon(props: DiscordIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 13"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M13.24 1.929a.037.037 0 00-.018-.017A11.91 11.91 0 0010.283 1a.045.045 0 00-.047.022 8.288 8.288 0 00-.366.751 10.996 10.996 0 00-3.3 0 7.601 7.601 0 00-.372-.75A.046.046 0 006.15 1a11.876 11.876 0 00-2.94.91.042.042 0 00-.018.017C1.32 4.724.808 7.45 1.06 10.143a.05.05 0 00.018.033 11.971 11.971 0 003.606 1.822.047.047 0 00.05-.017c.279-.378.525-.78.738-1.199a.046.046 0 00.001-.037.047.047 0 00-.026-.026 7.883 7.883 0 01-1.127-.537.047.047 0 01-.018-.06.046.046 0 01.014-.017 6.19 6.19 0 00.224-.175.045.045 0 01.046-.006c2.363 1.078 4.921 1.078 7.256 0a.045.045 0 01.047.006c.072.06.148.119.224.175a.047.047 0 01.019.04.047.047 0 01-.023.037c-.36.21-.736.39-1.127.536a.046.046 0 00-.024.064c.216.417.462.818.737 1.199a.046.046 0 00.05.017 11.935 11.935 0 003.611-1.822.047.047 0 00.014-.014.047.047 0 00.005-.019c.301-3.113-.504-5.817-2.134-8.214zM5.826 8.503c-.712 0-1.298-.653-1.298-1.454 0-.802.575-1.455 1.298-1.455.728 0 1.308.659 1.297 1.455 0 .801-.575 1.454-1.297 1.454zm4.797 0c-.711 0-1.298-.653-1.298-1.454 0-.802.575-1.455 1.298-1.455.728 0 1.309.659 1.297 1.455 0 .801-.569 1.454-1.297 1.454z"
        }
        fill={"currentColor"}
        stroke={"currentColor"}
        strokeWidth={".578"}
      ></path>
    </svg>
  );
}

export default DiscordIcon;
/* prettier-ignore-end */
