interface WavesDividerProps {
  color?: string;
  flip?: boolean;
  className?: string;
}

export default function WavesDivider({
  color = '#ffffff',
  flip = false,
  className = '',
}: WavesDividerProps) {
  return (
    <svg
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      width="100%"
      height="auto"
      className={className}
      style={{
        display: 'block',
        transform: flip ? 'rotate(180deg)' : undefined,
      }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z"
        fill={color}
      />
    </svg>
  );
}
