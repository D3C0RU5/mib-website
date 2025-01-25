import HeaderOrganism from "../organisms/header/header";
import { Section } from "../organisms/section";
import Wallpaper from "../organisms/wallpaper";

export default function HomeTemplate() {
  return (
    <>
      <HeaderOrganism />
      <Wallpaper />
      <Section minHeight="200vh" backgroundColor="#fff" />
    </>
  );
}
