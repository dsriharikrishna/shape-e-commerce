export function initVideoControls(container: HTMLElement): (() => void) | void {
  const video = container.querySelector<HTMLVideoElement>("video");
  const playBtn = container.querySelector<HTMLElement>(".video-play-btn");
  if (!video) return;

  const handlePlayClick = () => {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  if (playBtn) {
    playBtn.addEventListener("click", handlePlayClick);
    return () => {
      playBtn.removeEventListener("click", handlePlayClick);
    };
  }
}
