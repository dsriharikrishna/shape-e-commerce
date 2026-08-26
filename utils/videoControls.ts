const VIDEO_ATTR = "data-video";
const PAUSE_BTN_ATTR = "data-pause-btn";

const VIDEO_SELECTOR = `[${VIDEO_ATTR}]`;
const PAUSE_BTN_SELECTOR = `[${PAUSE_BTN_ATTR}]`;

export function initVideoControls(container: HTMLElement | null): void | (() => void) {
  if (!container) return;

  const videoEls = container.querySelectorAll<HTMLVideoElement>(VIDEO_SELECTOR);
  const pauseBtn = container.querySelector<HTMLElement>(PAUSE_BTN_SELECTOR);
  if (!videoEls.length || !pauseBtn) return;

  let timeout: ReturnType<typeof setTimeout> | undefined;

  const updatePauseButtonPosition = (event: MouseEvent) => {
    const rect = container.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    pauseBtn.style.left = `${x}px`;
    pauseBtn.style.top = `${y}px`;
  };

  const hidePauseButton = () => {
    pauseBtn.style.display = "none";
  };

  const handleMouseMove = (event: MouseEvent) => {
    pauseBtn.style.display = "flex";
    updatePauseButtonPosition(event);
    clearTimeout(timeout);
    timeout = setTimeout(hidePauseButton, 2000);
  };

  const handleMouseLeave = () => {
    hidePauseButton();
  };

  const handleVideoClick = (e: Event) => {
    const vd = e.currentTarget as HTMLVideoElement;
    if (vd.paused) {
      vd.play();
      pauseBtn.innerHTML = "PAUSE VIDEO";
    } else {
      vd.pause();
      pauseBtn.innerHTML = "PLAY VIDEO";
    }
  };

  container.addEventListener("mousemove", handleMouseMove);
  container.addEventListener("mouseleave", handleMouseLeave);
  videoEls.forEach((v) => v.addEventListener("click", handleVideoClick));

  return () => {
    container.removeEventListener("mousemove", handleMouseMove);
    container.removeEventListener("mouseleave", handleMouseLeave);
    videoEls.forEach((v) => v.removeEventListener("click", handleVideoClick));
    clearTimeout(timeout);
  };
}
