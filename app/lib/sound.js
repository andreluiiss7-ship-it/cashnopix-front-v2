export function playWinSound() {
  try {
    new Audio("https://assets.mixkit.co/active_storage/sfx/2003/2003-preview.mp3")
      .play()
      .catch(() => {});
  } catch (err) {}
}
