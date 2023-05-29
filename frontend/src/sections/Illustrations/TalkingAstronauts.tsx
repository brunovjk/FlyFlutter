import React from "react";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import {
  SVGBox,
  TransactionBox,
  SpeechBubble,
  TrailFromX,
} from "../../components";

const TalkingAstronauts: React.FC<{ isConnected: boolean }> = ({
  isConnected,
}) => {
  const { t } = useTranslation();

  const initialStyle: React.CSSProperties = {
    width: "50%",
    height: "50%",
  };
  const falseStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
  };
  const trueStyle: React.CSSProperties = {
    width: "5%",
    height: "50%",
  };

  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-end",
        width: { xs: "100%", md: "50%" },
        height: "100%",
      }}
    >
      <TransactionBox
        controlStyle={isConnected}
        initialStyle={initialStyle}
        falseStyle={falseStyle}
        trueStyle={trueStyle}
      >
        <TrailFromX
          fromRight={true}
          sx={{
            width: "100%",
            height: "100%",
            top: "50%",
            position: "relative",
            opacity: { xs: "0.5", md: "1" },
          }}
          config={{ duration: 900 }}
        >
          <Box
            sx={{
              position: "absolute",
              width: "80%",
              transform: "translateY(-50%)",
            }}
          >
            <SVGBox
              svgPath="img/talking_astronauts.svg"
              svgAlt={t("talkingAstronauts.svgAlt")}
            />
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: isConnected ? "none" : "block" },
              position: "absolute",
              transform: "translateY(-30vh)",
            }}
          >
            <SpeechBubble side="bottom" size="large">
              {t("talkingAstronauts.bubble1")}
            </SpeechBubble>
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: isConnected ? "none" : "block" },
              position: "absolute",
              width: "20%",
              right: 0,
            }}
          >
            <SpeechBubble side="left" size="medium">
              {t("talkingAstronauts.bubble2")}
            </SpeechBubble>
          </Box>
        </TrailFromX>
      </TransactionBox>
    </Box>
  );
};

export default TalkingAstronauts;
