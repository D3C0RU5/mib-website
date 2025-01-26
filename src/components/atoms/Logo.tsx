import Image from "next/image";

interface LogoProps {
  size?: number;
}
export const Logo: React.FC<LogoProps> = ({ size = 45 }) => {
  return (
    <div className="flex items-center justify-center gap-2 text-3xl">
      <Image src="/logo.webp" alt="Logo" height={size} width={size} />
      {/* {" "}
      <span style={{ fontWeight: 300 }}>MADE IN BRAZIL</span> */}
    </div>
  );
};
