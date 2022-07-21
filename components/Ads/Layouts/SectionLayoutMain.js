export default function SectionLayoutMain({ children }) {
  return (
    <>
      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: 18,
          marginTop: 50,
        }}
      >
        {children}
      </div>
    </>
  );
}
