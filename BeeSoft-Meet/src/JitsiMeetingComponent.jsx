import React from "react";
import { JitsiMeeting } from "@jitsi/react-sdk";

function JitsiMeetingComponent() {
  return (
    <div style={{ height: "700px", width: "100%" }}>
      <JitsiMeeting
        roomName="BeeSoftRoom"
        domain="meet.jit.si"
        // domain="beesoft.com.ng"
        userInfo={{ displayName: "BeeSoft" }}
        configOverwrite={{
          startWithAudioMuted: false,
          startWithVideoMuted: false,
          disableModeratorIndicator: true,
          brandingDataUrl:
            "BeeSoft-Meet/public/beesoft_logo-removebg-preview.png",
        }}
        interfaceConfigOverwrite={{
          DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,
          TOOLBAR_BUTTONS: [
            "microphone",
            "camera",
            "chat",
            "raisehand",
            "tileview",
            "fullscreen",
            "hangup",
          ],
          BRAND_WATERMARK_LINK: "https://beesoft.com.ng/",
          SHOW_JITSI_WATERMARK: false,
          SHOW_WATERMARK_FOR_GUESTS: false,
        }}
        // configOverwrited={{
        //   ...{
        //     brandingDataUrl:
        //       "BeeSoft-Meet/public/beesoft_logo-removebg-preview.png",
        //   },
        // }}
        getIFrameRef={(iframeRef) => {
          iframeRef.style.height = "100%";
          iframeRef.style.width = "100%";
          iframeRef.style.borderRadius = "12px";
          iframeRef.style.overflow = "hidden";
        }}
        onApiReady={(externalApi) => {
          console.log("✅ Jitsi API ready");

          externalApi.addEventListener("participantJoined", (event) => {
            console.log("👤 Participant joined:", event);
          });

          externalApi.addEventListener("participantLeft", (event) => {
            console.log("👋 Participant left:", event);
          });
        }}
        onReadyToClose={() => {
          console.log("❌ Meeting ready to close");
        }}
      />
    </div>
  );
}

export default JitsiMeetingComponent;
