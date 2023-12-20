import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
const Room = () => {
  const { id } = useParams();
  console.log("id", id);
  const myMeeting = async (element) => {
    const appId = 1591376853;
    const serverSecret = "dc0d53cb420e4b2ad450db57a2b9d008";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appId,
      serverSecret,
      id,
      Date.now().toString(),
      "utkarsh"
    );
    const zc = ZegoUIKitPrebuilt.create(kitToken);
    zc.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: "Copy Link",
          url: `http://localhost:3000/room/${id}`,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
      showScreenSharingButton: true,
    });
  };
  const appId = "";

  return <div ref={myMeeting}>Room</div>;
};

export default Room;
