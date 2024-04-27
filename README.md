# To Run

## Sentry config
change:
1. `"project": "<project>",
      "organization": "<org>"`
      in `app.json`
2. `dns` in `App.js`

## Vapi
Put vapi api key and assistant id in `App.js`


## Error: (Audio session does not seem to work)
 `LOG  MediaDevices _registerEvents invoked`\
 `LOG  could not check for username in localStorage`\
 `LOG  rn-webrtc:pc:DEBUG 0 ctor +0ms`\
 `LOG  rn-webrtc:pc:DEBUG 0 addTransceiver +0ms`\
 `LOG  rn-webrtc:pc:DEBUG 0 addTransceiver +2ms`\
 `LOG  rn-webrtc:pc:DEBUG 0 createOffer +1ms`\
 `LOG  rn-webrtc:pc:DEBUG 0 createOffer OK +2ms`\
 `LOG  rn-webrtc:pc:DEBUG 0 close +0ms`\
 `LOG  rn-webrtc:pc:DEBUG 1 ctor +44ms`\
 `LOG  rn-webrtc:pc:DEBUG 1 addTransceiver +3ms`\
 `LOG  rn-webrtc:pc:DEBUG 1 createOffer +0ms`\
 `LOG  rn-webrtc:pc:DEBUG 1 createOffer OK +1ms`\
 `LOG  rn-webrtc:pc:DEBUG 2 ctor +29ms`\
 `LOG  rn-webrtc:pc:DEBUG 1 setLocalDescription +34ms`\
 `LOG  rn-webrtc:pc:DEBUG 1 setLocalDescription OK +2ms`\
 `LOG  rn-webrtc:pc:DEBUG 1 setRemoteDescription +4ms`\
 `WARN  error consuming track cam-audio: Promise.any is not a function (it is undefined) 918f7ac7-c4eb-4d50-a5a9-d324bf37f4a6`\
 `LOG  rn-webrtc:pc:DEBUG 2 setRemoteDescription +9ms`\
 `WARN  Initial consumer failed: error consuming track cam-audio: Promise.any is not a function (it is undefined)`\
 `LOG  rn-webrtc:pc:DEBUG 1 setRemoteDescription OK +19ms`

VAPI error in dashboard: "Ended Reason customer-did-not-give-microphone-permission"
