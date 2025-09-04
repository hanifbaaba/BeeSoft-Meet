import React from "react";
import { JitsiMeeting } from "@jitsi/react-sdk";

function JitsiMeetingComponent() {
  return (
    <div style={{ height: "700px", width: "100%" }}>
      <JitsiMeeting
        roomName="BeeSoftRoom"
        domain="8x8.vc"
        jwt="eyJraWQiOiJ2cGFhcy1tYWdpYy1jb29raWUtODkyMjA2ZjFmYjc1NGFjMGE0OTllZGY0MGE5MmU1NzEvNTI0YWY4LVNBTVBMRV9BUFAiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJqaXRzaSIsImlzcyI6ImNoYXQiLCJpYXQiOjE3NTcwMjM1OTksImV4cCI6MTc1NzAzMDc5OSwibmJmIjoxNzU3MDIzNTk0LCJzdWIiOiJ2cGFhcy1tYWdpYy1jb29raWUtODkyMjA2ZjFmYjc1NGFjMGE0OTllZGY0MGE5MmU1NzEiLCJjb250ZXh0Ijp7ImZlYXR1cmVzIjp7ImxpdmVzdHJlYW1pbmciOnRydWUsImZpbGUtdXBsb2FkIjp0cnVlLCJvdXRib3VuZC1jYWxsIjp0cnVlLCJzaXAtb3V0Ym91bmQtY2FsbCI6ZmFsc2UsInRyYW5zY3JpcHRpb24iOnRydWUsImxpc3QtdmlzaXRvcnMiOmZhbHNlLCJyZWNvcmRpbmciOnRydWUsImZsaXAiOmZhbHNlfSwidXNlciI6eyJoaWRkZW4tZnJvbS1yZWNvcmRlciI6ZmFsc2UsIm1vZGVyYXRvciI6dHJ1ZSwibmFtZSI6ImJhYWJhaGFuaWYiLCJpZCI6Imdvb2dsZS1vYXV0aDJ8MTA2MTY3NTQ4MTQ2MDE1OTQ5NTAyIiwiYXZhdGFyIjoiIiwiZW1haWwiOiJiYWFiYWhhbmlmQGdtYWlsLmNvbSJ9fSwicm9vbSI6IioifQ.EWqgtwLVvAJ_biXBHn7LOdGggv11Im6cZACoGDpJpLHsqvvdnYaMCxTQJ0If1UOuJIZzWw6Kf0X3U1jQF3DY_isG4H3JzFHUTY3a_Vwj-eMfMWM11UMFye7fZC9dF9B534rgmAuoDzr2zEcIoXWF2ybvGG8sUuHkaQQpMHOlx5P878NzO0o_0N5B4z3OXhfsJG0AjwJhWafBJCdLle-PEXpG_8cGsrLTWcZTey-2DBuNNBPCqlSZXeDSQvjS6X1P_CTTKg-pMDQ_oWXZe1Ylb-YD8HKkb_CZOEVXGUWImFMVeAmdUtRuAPEiZF1a-V76YPBfWqHybFRKeJ1d1FwslQ"
        // domain="meet.jit.si"
        // domain="beesoft.com.ng"
        userInfo={{ displayName: "BeeSoft" }}
        configOverwrite={{
          startWithAudioMuted: false,
          startWithVideoMuted: false,
          disableModeratorIndicator: true,
          prejoinPageEnabled: false,
          brandingDataUrl: "https://bee-soft-meet.vercel.app/branding.json",
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
