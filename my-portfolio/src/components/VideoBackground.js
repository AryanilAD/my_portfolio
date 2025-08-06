const videoStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  objectFit: 'cover',
  zIndex: -2,
  pointerEvents: 'none'
};

export default function VideoBackground() {
  return (
    <video
      style={videoStyle}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
    >
      <source src="/assets/bg.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
