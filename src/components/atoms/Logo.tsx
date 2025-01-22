import Image from "next/image";

interface LogoProps {
  size?: number;
}
export const Logo: React.FC<LogoProps> = ({ size = 60 }) => {
  return <Image src="/logo.webp" alt="Logo" height={size} width={size} />;
};
