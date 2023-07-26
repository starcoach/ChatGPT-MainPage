// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: pLBFvp9kB8xxJps5wo2orW
// Component: OVr8MF3dya

import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import * as plasmicAuth from "@plasmicapp/react-web/lib/auth";
import { usePlasmicDataSourceContext } from "@plasmicapp/data-sources-context";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_app_starter.module.css"; // plasmic-import: pLBFvp9kB8xxJps5wo2orW/projectcss
import sty from "./PlasmicLogin.module.css"; // plasmic-import: OVr8MF3dya/css

import Line3Icon from "./icons/PlasmicIcon__Line3"; // plasmic-import: hE-DRDZLu8/icon
import ShapeIcon from "./icons/PlasmicIcon__Shape"; // plasmic-import: cS0BaMlYVf/icon
import Line2Icon from "./icons/PlasmicIcon__Line2"; // plasmic-import: XP8lyRbK-g/icon
import ChatGptLogoIcon from "./icons/PlasmicIcon__ChatGptLogo"; // plasmic-import: YTCSHyLFcU/icon
import microsoftLogoRE1WCo6E from "./images/microsoftLogo.svg"; // plasmic-import: R-e1WCo6e/picture
import googleLogoRyHm3Aai3I from "./images/googleLogo.svg"; // plasmic-import: RyHm3Aai3I/picture
import recaptchaLogoKUtDVyk6TW from "./images/recaptchaLogo.svg"; // plasmic-import: kUtDVyk6tW/picture

createPlasmicElementProxy;

export type PlasmicLogin__VariantMembers = {};
export type PlasmicLogin__VariantsArgs = {};
type VariantPropType = keyof PlasmicLogin__VariantsArgs;
export const PlasmicLogin__VariantProps = new Array<VariantPropType>();

export type PlasmicLogin__ArgsType = {};
type ArgPropType = keyof PlasmicLogin__ArgsType;
export const PlasmicLogin__ArgProps = new Array<ArgPropType>();

export type PlasmicLogin__OverridesType = {
  root?: p.Flex<"div">;
  login?: p.Flex<"div">;
  continueWithMicrosoft?: p.Flex<"div">;
  continueWithMicrosoftAccount?: p.Flex<"div">;
  continueWithGoogle?: p.Flex<"div">;
  continueWithGoogle2?: p.Flex<"div">;
  or?: p.Flex<"div">;
  _continue?: p.Flex<"div">;
  continue2?: p.Flex<"div">;
  reCaptcha?: p.Flex<"div">;
  imNotARobot?: p.Flex<"div">;
  privacyTerms?: p.Flex<"div">;
  reCaptcha2?: p.Flex<"div">;
  checkbox?: p.Flex<"div">;
  emailField?: p.Flex<"div">;
  emailAddress?: p.Flex<"div">;
};

export interface DefaultLoginProps {
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicLogin__RenderFunc(props: {
  variants: PlasmicLogin__VariantsArgs;
  args: PlasmicLogin__ArgsType;
  overrides: PlasmicLogin__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const [$queries, setDollarQueries] = React.useState({});

  return (
    <React.Fragment>
      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            sty.root
          )}
        >
          <div
            data-plasmic-name={"login"}
            data-plasmic-override={overrides.login}
            className={classNames(projectcss.all, sty.login)}
          >
            <div
              data-plasmic-name={"continueWithMicrosoft"}
              data-plasmic-override={overrides.continueWithMicrosoft}
              className={classNames(projectcss.all, sty.continueWithMicrosoft)}
            >
              <div
                data-plasmic-name={"continueWithMicrosoftAccount"}
                data-plasmic-override={overrides.continueWithMicrosoftAccount}
                className={classNames(
                  projectcss.all,
                  sty.continueWithMicrosoftAccount
                )}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__iKkpu
                  )}
                >
                  {"Continue with Microsoft Account"}
                </div>
              </div>
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__uc8E1)}
                displayHeight={"20px" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"100%" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"20px" as const}
                loading={"lazy" as const}
                src={{
                  src: microsoftLogoRE1WCo6E,
                  fullWidth: 20,
                  fullHeight: 20,
                  aspectRatio: 1
                }}
              />
            </div>
            <div
              data-plasmic-name={"continueWithGoogle"}
              data-plasmic-override={overrides.continueWithGoogle}
              className={classNames(projectcss.all, sty.continueWithGoogle)}
            >
              <div
                data-plasmic-name={"continueWithGoogle2"}
                data-plasmic-override={overrides.continueWithGoogle2}
                className={classNames(projectcss.all, sty.continueWithGoogle2)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__dbDvp
                  )}
                >
                  {"Continue with Google"}
                </div>
              </div>
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__mtH5E)}
                displayHeight={"18.333px" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"100%" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"17.966px" as const}
                loading={"lazy" as const}
                src={{
                  src: googleLogoRyHm3Aai3I,
                  fullWidth: 17.966,
                  fullHeight: 18.333,
                  aspectRatio: 0.947368
                }}
              />
            </div>
            <div
              data-plasmic-name={"or"}
              data-plasmic-override={overrides.or}
              className={classNames(projectcss.all, sty.or)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__tdBYb
                )}
              >
                {"OR"}
              </div>
              <Line3Icon
                className={classNames(projectcss.all, sty.svg__hXjJt)}
                role={"img"}
              />

              <Line3Icon
                className={classNames(projectcss.all, sty.svg__h3Xo9)}
                role={"img"}
              />
            </div>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__v0Mti
              )}
            >
              {"Don\u2019t have an account? Sign up"}
            </div>
            <div
              data-plasmic-name={"_continue"}
              data-plasmic-override={overrides._continue}
              className={classNames(projectcss.all, sty._continue)}
            >
              <div
                data-plasmic-name={"continue2"}
                data-plasmic-override={overrides.continue2}
                className={classNames(projectcss.all, sty.continue2)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___3LxQl
                  )}
                >
                  {"Continue"}
                </div>
              </div>
            </div>
            <div
              data-plasmic-name={"reCaptcha"}
              data-plasmic-override={overrides.reCaptcha}
              className={classNames(projectcss.all, sty.reCaptcha)}
            >
              <div
                data-plasmic-name={"imNotARobot"}
                data-plasmic-override={overrides.imNotARobot}
                className={classNames(projectcss.all, sty.imNotARobot)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__anBfr
                  )}
                >
                  {"I\u2019m not a robot"}
                </div>
              </div>
              <div
                data-plasmic-name={"privacyTerms"}
                data-plasmic-override={overrides.privacyTerms}
                className={classNames(projectcss.all, sty.privacyTerms)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__bpByn
                  )}
                >
                  {"Privacy - Terms"}
                </div>
              </div>
              <div
                data-plasmic-name={"reCaptcha2"}
                data-plasmic-override={overrides.reCaptcha2}
                className={classNames(projectcss.all, sty.reCaptcha2)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__wwC2D
                  )}
                >
                  {"reCAPTCHA"}
                </div>
              </div>
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__kdwbL)}
                displayHeight={"31px" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"100%" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"31.09px" as const}
                loading={"lazy" as const}
                src={{
                  src: recaptchaLogoKUtDVyk6TW,
                  fullWidth: 31.09,
                  fullHeight: 31,
                  aspectRatio: 1.032258
                }}
              />

              <div
                data-plasmic-name={"checkbox"}
                data-plasmic-override={overrides.checkbox}
                className={classNames(projectcss.all, sty.checkbox)}
              />
            </div>
            <div
              data-plasmic-name={"emailField"}
              data-plasmic-override={overrides.emailField}
              className={classNames(projectcss.all, sty.emailField)}
            >
              <ShapeIcon
                className={classNames(projectcss.all, sty.svg__b3TrM)}
                role={"img"}
              />

              <div
                data-plasmic-name={"emailAddress"}
                data-plasmic-override={overrides.emailAddress}
                className={classNames(projectcss.all, sty.emailAddress)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__aPxfR
                  )}
                >
                  {"Email address"}
                </div>
              </div>
              <Line2Icon
                className={classNames(projectcss.all, sty.svg__hUbAw)}
                role={"img"}
              />
            </div>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__tMs8U
              )}
            >
              {"Welcome back"}
            </div>
            <ChatGptLogoIcon
              className={classNames(projectcss.all, sty.svg__svuP)}
              role={"img"}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "login",
    "continueWithMicrosoft",
    "continueWithMicrosoftAccount",
    "continueWithGoogle",
    "continueWithGoogle2",
    "or",
    "_continue",
    "continue2",
    "reCaptcha",
    "imNotARobot",
    "privacyTerms",
    "reCaptcha2",
    "checkbox",
    "emailField",
    "emailAddress"
  ],
  login: [
    "login",
    "continueWithMicrosoft",
    "continueWithMicrosoftAccount",
    "continueWithGoogle",
    "continueWithGoogle2",
    "or",
    "_continue",
    "continue2",
    "reCaptcha",
    "imNotARobot",
    "privacyTerms",
    "reCaptcha2",
    "checkbox",
    "emailField",
    "emailAddress"
  ],
  continueWithMicrosoft: [
    "continueWithMicrosoft",
    "continueWithMicrosoftAccount"
  ],
  continueWithMicrosoftAccount: ["continueWithMicrosoftAccount"],
  continueWithGoogle: ["continueWithGoogle", "continueWithGoogle2"],
  continueWithGoogle2: ["continueWithGoogle2"],
  or: ["or"],
  _continue: ["_continue", "continue2"],
  continue2: ["continue2"],
  reCaptcha: [
    "reCaptcha",
    "imNotARobot",
    "privacyTerms",
    "reCaptcha2",
    "checkbox"
  ],
  imNotARobot: ["imNotARobot"],
  privacyTerms: ["privacyTerms"],
  reCaptcha2: ["reCaptcha2"],
  checkbox: ["checkbox"],
  emailField: ["emailField", "emailAddress"],
  emailAddress: ["emailAddress"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  login: "div";
  continueWithMicrosoft: "div";
  continueWithMicrosoftAccount: "div";
  continueWithGoogle: "div";
  continueWithGoogle2: "div";
  or: "div";
  _continue: "div";
  continue2: "div";
  reCaptcha: "div";
  imNotARobot: "div";
  privacyTerms: "div";
  reCaptcha2: "div";
  checkbox: "div";
  emailField: "div";
  emailAddress: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLogin__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLogin__VariantsArgs;
    args?: PlasmicLogin__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicLogin__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicLogin__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicLogin__ArgProps,
          internalVariantPropNames: PlasmicLogin__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicLogin__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLogin";
  } else {
    func.displayName = `PlasmicLogin.${nodeName}`;
  }
  return func;
}

function withPlasmicPageGuard<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  const PageGuard: React.FC<P> = props => (
    <p.PlasmicPageGuard
      minRole={null}
      appId={"pLBFvp9kB8xxJps5wo2orW"}
      authorizeEndpoint={"https://studio.plasmic.app/authorize"}
      canTriggerLogin={true}
    >
      <WrappedComponent {...props} />
    </p.PlasmicPageGuard>
  );

  return PageGuard;
}

function withUsePlasmicAuth<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  const WithUsePlasmicAuthComponent: React.FC<P> = props => {
    const dataSourceCtx = usePlasmicDataSourceContext() ?? {};
    const { isUserLoading, user, token } = plasmicAuth.usePlasmicAuth({
      appId: "pLBFvp9kB8xxJps5wo2orW"
    });

    return (
      <p.PlasmicDataSourceContextProvider
        value={{
          ...dataSourceCtx,
          isUserLoading,
          userAuthToken: token,
          user
        }}
      >
        <WrappedComponent {...props} />
      </p.PlasmicDataSourceContextProvider>
    );
  };
  return WithUsePlasmicAuthComponent;
}

export const PlasmicLogin = Object.assign(
  // Top-level PlasmicLogin renders the root element
  withUsePlasmicAuth(withPlasmicPageGuard(makeNodeComponent("root"))),
  {
    // Helper components rendering sub-elements
    login: makeNodeComponent("login"),
    continueWithMicrosoft: makeNodeComponent("continueWithMicrosoft"),
    continueWithMicrosoftAccount: makeNodeComponent(
      "continueWithMicrosoftAccount"
    ),
    continueWithGoogle: makeNodeComponent("continueWithGoogle"),
    continueWithGoogle2: makeNodeComponent("continueWithGoogle2"),
    or: makeNodeComponent("or"),
    _continue: makeNodeComponent("_continue"),
    continue2: makeNodeComponent("continue2"),
    reCaptcha: makeNodeComponent("reCaptcha"),
    imNotARobot: makeNodeComponent("imNotARobot"),
    privacyTerms: makeNodeComponent("privacyTerms"),
    reCaptcha2: makeNodeComponent("reCaptcha2"),
    checkbox: makeNodeComponent("checkbox"),
    emailField: makeNodeComponent("emailField"),
    emailAddress: makeNodeComponent("emailAddress"),

    // Metadata about props expected for PlasmicLogin
    internalVariantProps: PlasmicLogin__VariantProps,
    internalArgProps: PlasmicLogin__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicLogin;
/* prettier-ignore-end */
