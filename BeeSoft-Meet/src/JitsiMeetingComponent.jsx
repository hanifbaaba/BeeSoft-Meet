import React from "react";
import { JitsiMeeting } from "@jitsi/react-sdk";

function JitsiMeetingComponent() {
  return (
    <div style={{ height: "700px", width: "100%" }}>
      <JitsiMeeting
        roomName="BeeSoftRoom"
        domain="meet.jit.si"
        userInfo={{ displayName: "BeeSoft" }}
        configOverwrite={{
          startWithAudioMuted: true,
          startWithVideoMuted: false,
          disableModeratorIndicator: true,
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
          BRAND_WATERMARK_LINK: "https://your-website.com",
          SHOW_JITSI_WATERMARK: false,
          SHOW_WATERMARK_FOR_GUESTS: false,
        }}
        configOverwrited={{
          ...{
            brandingDataUrl: "https://your-cdn.com/custom-logo.json",
          },
        }}
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
