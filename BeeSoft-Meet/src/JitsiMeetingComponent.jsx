import React from "react";
import { JitsiMeeting } from "@jitsi/react-sdk";

function JitsiMeetingComponent() {
  return (
    <div style={{ height: "700px", width: "100%" }}>
      <JitsiMeeting
        roomName="BeeSoftRoom"
        domain="8x8.vc"
        jwt="eyJraWQiOiJ2cGFhcy1tYWdpYy1jb29raWUtODkyMjA2ZjFmYjc1NGFjMGE0OTllZGY0MGE5MmU1NzEvNTI0YWY4LVNBTVBMRV9BUFAiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJqaXRzaSIsImlzcyI6ImNoYXQiLCJpYXQiOjE3NTcyMDY1MzMsImV4cCI6MTc1NzIxMzczMywibmJmIjoxNzU3MjA2NTI4LCJzdWIiOiJ2cGFhcy1tYWdpYy1jb29raWUtODkyMjA2ZjFmYjc1NGFjMGE0OTllZGY0MGE5MmU1NzEiLCJjb250ZXh0Ijp7ImZlYXR1cmVzIjp7ImxpdmVzdHJlYW1pbmciOnRydWUsImZpbGUtdXBsb2FkIjp0cnVlLCJvdXRib3VuZC1jYWxsIjp0cnVlLCJzaXAtb3V0Ym91bmQtY2FsbCI6ZmFsc2UsInRyYW5zY3JpcHRpb24iOnRydWUsImxpc3QtdmlzaXRvcnMiOmZhbHNlLCJyZWNvcmRpbmciOnRydWUsImZsaXAiOmZhbHNlfSwidXNlciI6eyJoaWRkZW4tZnJvbS1yZWNvcmRlciI6ZmFsc2UsIm1vZGVyYXRvciI6dHJ1ZSwibmFtZSI6ImJhYWJhaGFuaWYiLCJpZCI6Imdvb2dsZS1vYXV0aDJ8MTA2MTY3NTQ4MTQ2MDE1OTQ5NTAyIiwiYXZhdGFyIjoiIiwiZW1haWwiOiJiYWFiYWhhbmlmQGdtYWlsLmNvbSJ9fSwicm9vbSI6IioifQ.r4hUJCFdspoZuvWYooqsIDuhMFCcylI6Yg8Jd4aK3n4rQkxiQGUKxyTbWdj5Eg-OKeIPqvlgsww7URtmMepaYX1VskmdhHYi9-rcJZUDMLS4R1Mdu4Su2c8xdskJKLdgtnAIbqFkOVDGl7Er3aJGwnTJvnXMm1CBZ6v8zUOkFWUh6b9kF42RxOO7_ap9EInetUPnY5ipLG5fG1moOQ9-4HCuUuv4cw2ZPVxGg1zs2KJTgr4GLesYuskl6Q6uI3UsFcIiDEdIHyyqidTqpUPTEhwxfOfoFLNmrSVtovPxapN-PfyhG2Wf-RjFIywyfhUgGFB9foyomPg1qQeTOov_gg"
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
