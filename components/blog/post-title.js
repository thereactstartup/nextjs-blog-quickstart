export default function PostTitle({ children }) {
  return (
    <h1
      style={{ color: "black", marginTop: 50, maxWidth: 800, margin: "auto" }}
      className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter  text-center "
    >
      {children}
    </h1>
  );
}
