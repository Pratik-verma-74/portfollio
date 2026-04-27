// 🎵 Subtle Digital Click Sound Utility
// Using a short, clean sound for a premium feel.

const CLICK_SOUND_URL = "https://www.soundjay.com/buttons/sounds/button-16.mp3";

export const playClick = () => {
  const audio = new Audio(CLICK_SOUND_URL);
  audio.volume = 0.2; // Keep it subtle
  audio.play().catch(err => console.log("SFX Blocked:", err));
};
