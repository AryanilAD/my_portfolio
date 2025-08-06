function Footer() {
  return (
    <footer
      className="container py-3 text-center"
      style={{
        color: "#e0e6f0",
        textShadow: "0 2px 12px rgba(0,0,0,0.33)",
        fontWeight: 400,
        fontSize: 16,
        letterSpacing: 0.3
      }}
    >
      &copy; {new Date().getFullYear()} Designed By Aryanil Dey
    </footer>
  );
}
export default Footer;
