
export default function Position({ x = 0, y = 0, children }) {
  return (
    <div className="absolute" style={{ left: x, top: y }}>
      {children}
    </div>
  )
}
