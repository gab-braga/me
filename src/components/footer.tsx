export function Footer() {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <footer className="border-t border-[#1c2333] py-7 px-6 text-center">
      <p className="font-mono text-xs text-[#6b7280]">
        Next.js • Node.js • Spring Boot • Angular • MySQL • MongoDB • Strapi •
        Microsoft Azure • Google Cloud • Firebase • {year}
      </p>
    </footer>
  );
}
