// 🎵 Optimized Digital Click Sound Utility
const CLICK_SOUND_URL = "https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3";

// Pre-load the audio for instant playback
const clickAudio = new Audio(CLICK_SOUND_URL);
clickAudio.volume = 0.5; 
clickAudio.preload = "auto";

export const playClick = () => {
  // Clone to support rapid successive clicks
  const sound = clickAudio.cloneNode();
  sound.volume = 0.5;
  sound.play().catch(err => {
    // Some browsers block audio until first user interaction
    console.log("SFX Playback Failed:", err);
  });
};
