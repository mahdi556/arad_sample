export default function SectionLayout({
  children,
  marginTop = true,
  paddingTop = true,
}) {
  return (
    <>
      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: 18,
          paddingRight: 70,
          paddingLeft: 70,
          paddingTop: paddingTop && 35,
          paddingBottom: 35,
          marginTop: marginTop && 50,
        }}
      >
        {children}
      </div>
    </>
  );
}
