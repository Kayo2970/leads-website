export default function ArcRings() {
  return (
    <div className="arc-rings">
      <svg
        viewBox="0 0 800 600"
        preserveAspectRatio="xMaxYMid slice"
        style={{ width: '100%', height: '100%', position: 'absolute', right: 0, top: 0 }}
      >
        <circle className="arc-ring" cx="600" cy="300" r="280" fill="none" />
        <circle className="arc-ring" cx="600" cy="300" r="210" fill="none" style={{ animationDelay: '0.5s' }} />
        <circle className="arc-ring" cx="600" cy="300" r="140" fill="none" style={{ animationDelay: '1s' }} />
        <circle className="arc-ring" cx="600" cy="300" r="70" fill="none" style={{ animationDelay: '1.5s' }} />
      </svg>
    </div>
  )
}
