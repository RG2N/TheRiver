// Example: createCallObject sets the videoSource property to false
const call = Daily.createCallObject({
  audioSource: true, // Start with audio on to get mic permission from participant at start
  videoSource: false,
  dailyConfig: {
    experimentalChromeVideoMuteLightOff: true, // So a Chrome participant doesn't see a green light when video is off
  },
});
