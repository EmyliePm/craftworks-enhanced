import Image from "next/image";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "var(--carbon)",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Image
        src="/branding/logo.png"
        alt="Craftworkz"
        width={360}
        height={220}
        priority
        style={{
          width: "360px",
          height: "auto",
        }}
      />
    </main>
  );
}
