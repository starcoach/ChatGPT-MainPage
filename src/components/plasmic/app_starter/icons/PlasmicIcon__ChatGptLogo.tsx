// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ChatGptLogoIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ChatGptLogoIcon(props: ChatGptLogoIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 30 31"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M28.022 12.444a7.575 7.575 0 00-.65-6.222 7.66 7.66 0 00-8.251-3.675A7.573 7.573 0 0013.408 0 7.661 7.661 0 006.1 5.304 7.576 7.576 0 001.035 8.98a7.661 7.661 0 00.942 8.982 7.574 7.574 0 00.651 6.221 7.66 7.66 0 008.251 3.676 7.573 7.573 0 005.713 2.547 7.661 7.661 0 007.31-5.308 7.577 7.577 0 005.065-3.674 7.662 7.662 0 00-.945-8.98zM16.594 28.417a5.682 5.682 0 01-3.647-1.319 5.4 5.4 0 00.18-.102L19.18 23.5a.984.984 0 00.497-.862v-8.535l2.559 1.478a.092.092 0 01.05.07v7.068a5.705 5.705 0 01-5.693 5.698zM4.352 23.188a5.68 5.68 0 01-.68-3.818l.18.108 6.054 3.496a.985.985 0 00.995 0l7.39-4.267v2.955a.09.09 0 01-.036.078l-6.12 3.534a5.704 5.704 0 01-7.783-2.085zM2.76 9.973a5.677 5.677 0 012.965-2.498l-.003.209v6.993a.984.984 0 00.497.861l7.391 4.267-2.558 1.478a.091.091 0 01-.087.008l-6.12-3.537a5.704 5.704 0 01-2.085-7.78zm21.023 4.893l-7.391-4.268L18.95 9.12a.093.093 0 01.087-.008l6.12 3.534a5.7 5.7 0 01-.88 10.282v-7.203a.983.983 0 00-.494-.86zm2.547-3.834a8.095 8.095 0 00-.18-.107l-6.054-3.497a.987.987 0 00-.994 0l-7.392 4.268V8.74a.093.093 0 01.037-.079l6.12-3.53a5.699 5.699 0 018.463 5.9zm-16.01 5.267l-2.56-1.477a.091.091 0 01-.05-.07V7.683a5.699 5.699 0 019.345-4.376c-.047.025-.127.07-.18.102L10.82 6.906a.984.984 0 00-.498.86l-.004 8.532zm1.39-2.997l3.291-1.9 3.292 1.9v3.8L15 19.002l-3.292-1.9v-3.8z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ChatGptLogoIcon;
/* prettier-ignore-end */
