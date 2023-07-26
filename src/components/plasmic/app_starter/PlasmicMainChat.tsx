// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: pLBFvp9kB8xxJps5wo2orW
// Component: Hi6EakQTRJ

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
import sty from "./PlasmicMainChat.module.css"; // plasmic-import: Hi6EakQTRJ/css

import LogoutIcon from "./icons/PlasmicIcon__Logout"; // plasmic-import: ThMH_MAZU/icon
import EnlargeIcon from "./icons/PlasmicIcon__Enlarge"; // plasmic-import: k4U2ODVvZY/icon
import DiscordIcon from "./icons/PlasmicIcon__Discord"; // plasmic-import: 9yNJ4b_XZE/icon
import ContrastIcon from "./icons/PlasmicIcon__Contrast"; // plasmic-import: GFoQRWSapB/icon
import DeleteIcon from "./icons/PlasmicIcon__Delete"; // plasmic-import: atL352W1bc/icon
import LineIcon from "./icons/PlasmicIcon__Line"; // plasmic-import: 7dSLYDJz3s/icon
import MessageIcon from "./icons/PlasmicIcon__Message"; // plasmic-import: oTYPZPgGg_/icon
import PenIcon from "./icons/PlasmicIcon__Pen"; // plasmic-import: Mn6BOdqRZe/icon
import Delete2Icon from "./icons/PlasmicIcon__Delete2"; // plasmic-import: 1R2ec3bq3n/icon
import PlusIcon from "./icons/PlasmicIcon__Plus"; // plasmic-import: Fra_PF4pFv/icon
import UserIconIcon from "./icons/PlasmicIcon__UserIcon"; // plasmic-import: dOBGryn2jc/icon
import RatingIcon from "./icons/PlasmicIcon__Rating"; // plasmic-import: gZR_n-jBAG/icon
import RefreshIcon from "./icons/PlasmicIcon__Refresh"; // plasmic-import: Ged8Qcxv-H/icon
import SendIcon from "./icons/PlasmicIcon__Send"; // plasmic-import: 48zSP6Tnjv/icon
import avatarChatGptB4CxlfTqB from "./images/avatarChatGpt.svg"; // plasmic-import: B4cxlf-TqB/picture

createPlasmicElementProxy;

export type PlasmicMainChat__VariantMembers = {};
export type PlasmicMainChat__VariantsArgs = {};
type VariantPropType = keyof PlasmicMainChat__VariantsArgs;
export const PlasmicMainChat__VariantProps = new Array<VariantPropType>();

export type PlasmicMainChat__ArgsType = {};
type ArgPropType = keyof PlasmicMainChat__ArgsType;
export const PlasmicMainChat__ArgProps = new Array<ArgPropType>();

export type PlasmicMainChat__OverridesType = {
  root?: p.Flex<"div">;
  mainUi?: p.Flex<"div">;
  chatGptJan9VersionFreeResearchPreviewOurGoalIsToMakeAiSystemsMoreNaturalAndSafeToInteractWithYourFeedbackWillHelpUsImprove?: p.Flex<"div">;
  leftSidebar?: p.Flex<"div">;
  logout?: p.Flex<"div">;
  logOut?: p.Flex<"div">;
  updatesFaq?: p.Flex<"div">;
  updatesFaq2?: p.Flex<"div">;
  discord?: p.Flex<"div">;
  openAiDiscord?: p.Flex<"div">;
  lightMode?: p.Flex<"div">;
  lightMode2?: p.Flex<"div">;
  clearConversations?: p.Flex<"div">;
  clearConversations2?: p.Flex<"div">;
  chatbotDefinitionButton?: p.Flex<"div">;
  rectangle9?: p.Flex<"div">;
  chatbotDefinitionExpl?: p.Flex<"div">;
  newChatButton?: p.Flex<"div">;
  newChat?: p.Flex<"div">;
  rectangle8?: p.Flex<"div">;
  questionUser?: p.Flex<"div">;
  avatarUser?: p.Flex<"div">;
  answerChatbot?: p.Flex<"div">;
  aChatbotIsAComputerProgramThatSimulatesHumanConversationThroughVoiceCommandsOrTextChatsOrBothItCanBeIntegratedWithVariousMessagingPlatformsLikeFacebookMessengerWhatsAppWeChatEtcAndCanBeUsedForAVarietyOfPurposesSuchAsCustomerServiceEntertainmentAndECommerce?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
  regenerateButton?: p.Flex<"div">;
  rectangle10?: p.Flex<"div">;
  inputField?: p.Flex<"div">;
  inputField2?: p.Flex<"div">;
};

export interface DefaultMainChatProps {
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicMainChat__RenderFunc(props: {
  variants: PlasmicMainChat__VariantsArgs;
  args: PlasmicMainChat__ArgsType;
  overrides: PlasmicMainChat__OverridesType;
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
            data-plasmic-name={"mainUi"}
            data-plasmic-override={overrides.mainUi}
            className={classNames(projectcss.all, sty.mainUi)}
          >
            <div
              data-plasmic-name={
                "chatGptJan9VersionFreeResearchPreviewOurGoalIsToMakeAiSystemsMoreNaturalAndSafeToInteractWithYourFeedbackWillHelpUsImprove"
              }
              data-plasmic-override={
                overrides.chatGptJan9VersionFreeResearchPreviewOurGoalIsToMakeAiSystemsMoreNaturalAndSafeToInteractWithYourFeedbackWillHelpUsImprove
              }
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.chatGptJan9VersionFreeResearchPreviewOurGoalIsToMakeAiSystemsMoreNaturalAndSafeToInteractWithYourFeedbackWillHelpUsImprove
              )}
            >
              {
                "ChatGPT Jan 9 Version. Free Research Preview. Our goal is to make AI systems more natural and safe to interact with. Your feedback will help us improve.\n"
              }
            </div>
            <div
              data-plasmic-name={"leftSidebar"}
              data-plasmic-override={overrides.leftSidebar}
              className={classNames(projectcss.all, sty.leftSidebar)}
            >
              <div
                data-plasmic-name={"logout"}
                data-plasmic-override={overrides.logout}
                className={classNames(projectcss.all, sty.logout)}
              >
                <div
                  data-plasmic-name={"logOut"}
                  data-plasmic-override={overrides.logOut}
                  className={classNames(projectcss.all, sty.logOut)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__hanDm
                    )}
                  >
                    {"Log out"}
                  </div>
                </div>
                <LogoutIcon
                  className={classNames(projectcss.all, sty.svg__ja3Zd)}
                  role={"img"}
                />
              </div>
              <div
                data-plasmic-name={"updatesFaq"}
                data-plasmic-override={overrides.updatesFaq}
                className={classNames(projectcss.all, sty.updatesFaq)}
              >
                <div
                  data-plasmic-name={"updatesFaq2"}
                  data-plasmic-override={overrides.updatesFaq2}
                  className={classNames(projectcss.all, sty.updatesFaq2)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__broax
                    )}
                  >
                    {"Updates & FAQ"}
                  </div>
                </div>
                <EnlargeIcon
                  className={classNames(projectcss.all, sty.svg__kumWt)}
                  role={"img"}
                />
              </div>
              <div
                data-plasmic-name={"discord"}
                data-plasmic-override={overrides.discord}
                className={classNames(projectcss.all, sty.discord)}
              >
                <div
                  data-plasmic-name={"openAiDiscord"}
                  data-plasmic-override={overrides.openAiDiscord}
                  className={classNames(projectcss.all, sty.openAiDiscord)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___50LPk
                    )}
                  >
                    {"OpenAI Discord"}
                  </div>
                </div>
                <DiscordIcon
                  className={classNames(projectcss.all, sty.svg___2NXb)}
                  role={"img"}
                />
              </div>
              <div
                data-plasmic-name={"lightMode"}
                data-plasmic-override={overrides.lightMode}
                className={classNames(projectcss.all, sty.lightMode)}
              >
                <div
                  data-plasmic-name={"lightMode2"}
                  data-plasmic-override={overrides.lightMode2}
                  className={classNames(projectcss.all, sty.lightMode2)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___2JXwf
                    )}
                  >
                    {"Light mode"}
                  </div>
                </div>
                <ContrastIcon
                  className={classNames(projectcss.all, sty.svg__xeY29)}
                  role={"img"}
                />
              </div>
              <div
                data-plasmic-name={"clearConversations"}
                data-plasmic-override={overrides.clearConversations}
                className={classNames(projectcss.all, sty.clearConversations)}
              >
                <div
                  data-plasmic-name={"clearConversations2"}
                  data-plasmic-override={overrides.clearConversations2}
                  className={classNames(
                    projectcss.all,
                    sty.clearConversations2
                  )}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__hoaWz
                    )}
                  >
                    {"Clear conversations"}
                  </div>
                </div>
                <DeleteIcon
                  className={classNames(projectcss.all, sty.svg___7Cpag)}
                  role={"img"}
                />
              </div>
              <LineIcon
                className={classNames(projectcss.all, sty.svg__wLa2Q)}
                role={"img"}
              />

              <div
                data-plasmic-name={"chatbotDefinitionButton"}
                data-plasmic-override={overrides.chatbotDefinitionButton}
                className={classNames(
                  projectcss.all,
                  sty.chatbotDefinitionButton
                )}
              >
                <div
                  data-plasmic-name={"rectangle9"}
                  data-plasmic-override={overrides.rectangle9}
                  className={classNames(projectcss.all, sty.rectangle9)}
                />

                <div
                  data-plasmic-name={"chatbotDefinitionExpl"}
                  data-plasmic-override={overrides.chatbotDefinitionExpl}
                  className={classNames(
                    projectcss.all,
                    sty.chatbotDefinitionExpl
                  )}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___4LYrD
                    )}
                  >
                    {"Chatbot definition expl"}
                  </div>
                </div>
                <MessageIcon
                  className={classNames(projectcss.all, sty.svg__pxbnC)}
                  role={"img"}
                />

                <PenIcon
                  className={classNames(projectcss.all, sty.svg__qggpP)}
                  role={"img"}
                />

                <Delete2Icon
                  className={classNames(projectcss.all, sty.svg__jdJbG)}
                  role={"img"}
                />
              </div>
              <div
                data-plasmic-name={"newChatButton"}
                data-plasmic-override={overrides.newChatButton}
                className={classNames(projectcss.all, sty.newChatButton)}
              >
                <div
                  data-plasmic-name={"newChat"}
                  data-plasmic-override={overrides.newChat}
                  className={classNames(projectcss.all, sty.newChat)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___2C0TC
                    )}
                  >
                    {"New chat"}
                  </div>
                </div>
                <PlusIcon
                  className={classNames(projectcss.all, sty.svg__mMcs)}
                  role={"img"}
                />

                <div
                  data-plasmic-name={"rectangle8"}
                  data-plasmic-override={overrides.rectangle8}
                  className={classNames(projectcss.all, sty.rectangle8)}
                />
              </div>
            </div>
            <div
              data-plasmic-name={"questionUser"}
              data-plasmic-override={overrides.questionUser}
              className={classNames(projectcss.all, sty.questionUser)}
            >
              <div
                data-plasmic-name={"avatarUser"}
                data-plasmic-override={overrides.avatarUser}
                className={classNames(projectcss.all, sty.avatarUser)}
              >
                <UserIconIcon
                  className={classNames(projectcss.all, sty.svg__j8PX5)}
                  role={"img"}
                />
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__ig2Bv
                )}
              >
                {"What is a Chatbot?"}
              </div>
            </div>
            <div
              data-plasmic-name={"answerChatbot"}
              data-plasmic-override={overrides.answerChatbot}
              className={classNames(projectcss.all, sty.answerChatbot)}
            >
              <RatingIcon
                className={classNames(projectcss.all, sty.svg__tPfeK)}
                role={"img"}
              />

              <div
                data-plasmic-name={
                  "aChatbotIsAComputerProgramThatSimulatesHumanConversationThroughVoiceCommandsOrTextChatsOrBothItCanBeIntegratedWithVariousMessagingPlatformsLikeFacebookMessengerWhatsAppWeChatEtcAndCanBeUsedForAVarietyOfPurposesSuchAsCustomerServiceEntertainmentAndECommerce"
                }
                data-plasmic-override={
                  overrides.aChatbotIsAComputerProgramThatSimulatesHumanConversationThroughVoiceCommandsOrTextChatsOrBothItCanBeIntegratedWithVariousMessagingPlatformsLikeFacebookMessengerWhatsAppWeChatEtcAndCanBeUsedForAVarietyOfPurposesSuchAsCustomerServiceEntertainmentAndECommerce
                }
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.aChatbotIsAComputerProgramThatSimulatesHumanConversationThroughVoiceCommandsOrTextChatsOrBothItCanBeIntegratedWithVariousMessagingPlatformsLikeFacebookMessengerWhatsAppWeChatEtcAndCanBeUsedForAVarietyOfPurposesSuchAsCustomerServiceEntertainmentAndECommerce
                )}
              >
                {
                  "A chatbot is a computer program that simulates human conversation through voice commands or text chats or both. It can be integrated with various messaging platforms like Facebook Messenger, WhatsApp, WeChat, etc. and can be used for a variety of purposes, such as customer service, entertainment, and e-commerce.\n"
                }
              </div>
              <p.PlasmicImg
                data-plasmic-name={"img"}
                data-plasmic-override={overrides.img}
                alt={""}
                className={classNames(sty.img)}
                displayHeight={"30px" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"100%" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"30px" as const}
                loading={"lazy" as const}
                src={{
                  src: avatarChatGptB4CxlfTqB,
                  fullWidth: 30,
                  fullHeight: 30,
                  aspectRatio: 1
                }}
              />
            </div>
            <div
              data-plasmic-name={"regenerateButton"}
              data-plasmic-override={overrides.regenerateButton}
              className={classNames(projectcss.all, sty.regenerateButton)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__dEizg
                )}
              >
                {"Regenerate response"}
              </div>
              <div
                data-plasmic-name={"rectangle10"}
                data-plasmic-override={overrides.rectangle10}
                className={classNames(projectcss.all, sty.rectangle10)}
              />

              <RefreshIcon
                className={classNames(projectcss.all, sty.svg__yJcbQ)}
                role={"img"}
              />
            </div>
            <div
              data-plasmic-name={"inputField"}
              data-plasmic-override={overrides.inputField}
              className={classNames(projectcss.all, sty.inputField)}
            >
              <div
                data-plasmic-name={"inputField2"}
                data-plasmic-override={overrides.inputField2}
                className={classNames(projectcss.all, sty.inputField2)}
              />

              <SendIcon
                className={classNames(projectcss.all, sty.svg__k9TwX)}
                role={"img"}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "mainUi",
    "chatGptJan9VersionFreeResearchPreviewOurGoalIsToMakeAiSystemsMoreNaturalAndSafeToInteractWithYourFeedbackWillHelpUsImprove",
    "leftSidebar",
    "logout",
    "logOut",
    "updatesFaq",
    "updatesFaq2",
    "discord",
    "openAiDiscord",
    "lightMode",
    "lightMode2",
    "clearConversations",
    "clearConversations2",
    "chatbotDefinitionButton",
    "rectangle9",
    "chatbotDefinitionExpl",
    "newChatButton",
    "newChat",
    "rectangle8",
    "questionUser",
    "avatarUser",
    "answerChatbot",
    "aChatbotIsAComputerProgramThatSimulatesHumanConversationThroughVoiceCommandsOrTextChatsOrBothItCanBeIntegratedWithVariousMessagingPlatformsLikeFacebookMessengerWhatsAppWeChatEtcAndCanBeUsedForAVarietyOfPurposesSuchAsCustomerServiceEntertainmentAndECommerce",
    "img",
    "regenerateButton",
    "rectangle10",
    "inputField",
    "inputField2"
  ],
  mainUi: [
    "mainUi",
    "chatGptJan9VersionFreeResearchPreviewOurGoalIsToMakeAiSystemsMoreNaturalAndSafeToInteractWithYourFeedbackWillHelpUsImprove",
    "leftSidebar",
    "logout",
    "logOut",
    "updatesFaq",
    "updatesFaq2",
    "discord",
    "openAiDiscord",
    "lightMode",
    "lightMode2",
    "clearConversations",
    "clearConversations2",
    "chatbotDefinitionButton",
    "rectangle9",
    "chatbotDefinitionExpl",
    "newChatButton",
    "newChat",
    "rectangle8",
    "questionUser",
    "avatarUser",
    "answerChatbot",
    "aChatbotIsAComputerProgramThatSimulatesHumanConversationThroughVoiceCommandsOrTextChatsOrBothItCanBeIntegratedWithVariousMessagingPlatformsLikeFacebookMessengerWhatsAppWeChatEtcAndCanBeUsedForAVarietyOfPurposesSuchAsCustomerServiceEntertainmentAndECommerce",
    "img",
    "regenerateButton",
    "rectangle10",
    "inputField",
    "inputField2"
  ],
  chatGptJan9VersionFreeResearchPreviewOurGoalIsToMakeAiSystemsMoreNaturalAndSafeToInteractWithYourFeedbackWillHelpUsImprove:
    [
      "chatGptJan9VersionFreeResearchPreviewOurGoalIsToMakeAiSystemsMoreNaturalAndSafeToInteractWithYourFeedbackWillHelpUsImprove"
    ],
  leftSidebar: [
    "leftSidebar",
    "logout",
    "logOut",
    "updatesFaq",
    "updatesFaq2",
    "discord",
    "openAiDiscord",
    "lightMode",
    "lightMode2",
    "clearConversations",
    "clearConversations2",
    "chatbotDefinitionButton",
    "rectangle9",
    "chatbotDefinitionExpl",
    "newChatButton",
    "newChat",
    "rectangle8"
  ],
  logout: ["logout", "logOut"],
  logOut: ["logOut"],
  updatesFaq: ["updatesFaq", "updatesFaq2"],
  updatesFaq2: ["updatesFaq2"],
  discord: ["discord", "openAiDiscord"],
  openAiDiscord: ["openAiDiscord"],
  lightMode: ["lightMode", "lightMode2"],
  lightMode2: ["lightMode2"],
  clearConversations: ["clearConversations", "clearConversations2"],
  clearConversations2: ["clearConversations2"],
  chatbotDefinitionButton: [
    "chatbotDefinitionButton",
    "rectangle9",
    "chatbotDefinitionExpl"
  ],
  rectangle9: ["rectangle9"],
  chatbotDefinitionExpl: ["chatbotDefinitionExpl"],
  newChatButton: ["newChatButton", "newChat", "rectangle8"],
  newChat: ["newChat"],
  rectangle8: ["rectangle8"],
  questionUser: ["questionUser", "avatarUser"],
  avatarUser: ["avatarUser"],
  answerChatbot: [
    "answerChatbot",
    "aChatbotIsAComputerProgramThatSimulatesHumanConversationThroughVoiceCommandsOrTextChatsOrBothItCanBeIntegratedWithVariousMessagingPlatformsLikeFacebookMessengerWhatsAppWeChatEtcAndCanBeUsedForAVarietyOfPurposesSuchAsCustomerServiceEntertainmentAndECommerce",
    "img"
  ],
  aChatbotIsAComputerProgramThatSimulatesHumanConversationThroughVoiceCommandsOrTextChatsOrBothItCanBeIntegratedWithVariousMessagingPlatformsLikeFacebookMessengerWhatsAppWeChatEtcAndCanBeUsedForAVarietyOfPurposesSuchAsCustomerServiceEntertainmentAndECommerce:
    [
      "aChatbotIsAComputerProgramThatSimulatesHumanConversationThroughVoiceCommandsOrTextChatsOrBothItCanBeIntegratedWithVariousMessagingPlatformsLikeFacebookMessengerWhatsAppWeChatEtcAndCanBeUsedForAVarietyOfPurposesSuchAsCustomerServiceEntertainmentAndECommerce"
    ],
  img: ["img"],
  regenerateButton: ["regenerateButton", "rectangle10"],
  rectangle10: ["rectangle10"],
  inputField: ["inputField", "inputField2"],
  inputField2: ["inputField2"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  mainUi: "div";
  chatGptJan9VersionFreeResearchPreviewOurGoalIsToMakeAiSystemsMoreNaturalAndSafeToInteractWithYourFeedbackWillHelpUsImprove: "div";
  leftSidebar: "div";
  logout: "div";
  logOut: "div";
  updatesFaq: "div";
  updatesFaq2: "div";
  discord: "div";
  openAiDiscord: "div";
  lightMode: "div";
  lightMode2: "div";
  clearConversations: "div";
  clearConversations2: "div";
  chatbotDefinitionButton: "div";
  rectangle9: "div";
  chatbotDefinitionExpl: "div";
  newChatButton: "div";
  newChat: "div";
  rectangle8: "div";
  questionUser: "div";
  avatarUser: "div";
  answerChatbot: "div";
  aChatbotIsAComputerProgramThatSimulatesHumanConversationThroughVoiceCommandsOrTextChatsOrBothItCanBeIntegratedWithVariousMessagingPlatformsLikeFacebookMessengerWhatsAppWeChatEtcAndCanBeUsedForAVarietyOfPurposesSuchAsCustomerServiceEntertainmentAndECommerce: "div";
  img: typeof p.PlasmicImg;
  regenerateButton: "div";
  rectangle10: "div";
  inputField: "div";
  inputField2: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicMainChat__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicMainChat__VariantsArgs;
    args?: PlasmicMainChat__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicMainChat__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicMainChat__ArgsType,
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
          internalArgPropNames: PlasmicMainChat__ArgProps,
          internalVariantPropNames: PlasmicMainChat__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicMainChat__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMainChat";
  } else {
    func.displayName = `PlasmicMainChat.${nodeName}`;
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

export const PlasmicMainChat = Object.assign(
  // Top-level PlasmicMainChat renders the root element
  withUsePlasmicAuth(withPlasmicPageGuard(makeNodeComponent("root"))),
  {
    // Helper components rendering sub-elements
    mainUi: makeNodeComponent("mainUi"),
    chatGptJan9VersionFreeResearchPreviewOurGoalIsToMakeAiSystemsMoreNaturalAndSafeToInteractWithYourFeedbackWillHelpUsImprove:
      makeNodeComponent(
        "chatGptJan9VersionFreeResearchPreviewOurGoalIsToMakeAiSystemsMoreNaturalAndSafeToInteractWithYourFeedbackWillHelpUsImprove"
      ),
    leftSidebar: makeNodeComponent("leftSidebar"),
    logout: makeNodeComponent("logout"),
    logOut: makeNodeComponent("logOut"),
    updatesFaq: makeNodeComponent("updatesFaq"),
    updatesFaq2: makeNodeComponent("updatesFaq2"),
    discord: makeNodeComponent("discord"),
    openAiDiscord: makeNodeComponent("openAiDiscord"),
    lightMode: makeNodeComponent("lightMode"),
    lightMode2: makeNodeComponent("lightMode2"),
    clearConversations: makeNodeComponent("clearConversations"),
    clearConversations2: makeNodeComponent("clearConversations2"),
    chatbotDefinitionButton: makeNodeComponent("chatbotDefinitionButton"),
    rectangle9: makeNodeComponent("rectangle9"),
    chatbotDefinitionExpl: makeNodeComponent("chatbotDefinitionExpl"),
    newChatButton: makeNodeComponent("newChatButton"),
    newChat: makeNodeComponent("newChat"),
    rectangle8: makeNodeComponent("rectangle8"),
    questionUser: makeNodeComponent("questionUser"),
    avatarUser: makeNodeComponent("avatarUser"),
    answerChatbot: makeNodeComponent("answerChatbot"),
    aChatbotIsAComputerProgramThatSimulatesHumanConversationThroughVoiceCommandsOrTextChatsOrBothItCanBeIntegratedWithVariousMessagingPlatformsLikeFacebookMessengerWhatsAppWeChatEtcAndCanBeUsedForAVarietyOfPurposesSuchAsCustomerServiceEntertainmentAndECommerce:
      makeNodeComponent(
        "aChatbotIsAComputerProgramThatSimulatesHumanConversationThroughVoiceCommandsOrTextChatsOrBothItCanBeIntegratedWithVariousMessagingPlatformsLikeFacebookMessengerWhatsAppWeChatEtcAndCanBeUsedForAVarietyOfPurposesSuchAsCustomerServiceEntertainmentAndECommerce"
      ),
    img: makeNodeComponent("img"),
    regenerateButton: makeNodeComponent("regenerateButton"),
    rectangle10: makeNodeComponent("rectangle10"),
    inputField: makeNodeComponent("inputField"),
    inputField2: makeNodeComponent("inputField2"),

    // Metadata about props expected for PlasmicMainChat
    internalVariantProps: PlasmicMainChat__VariantProps,
    internalArgProps: PlasmicMainChat__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicMainChat;
/* prettier-ignore-end */
