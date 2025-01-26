import HeaderOrganism from "../organisms/header/header";
import Navbar from "../organisms/navbar";
import { Section } from "../organisms/section";
import Wallpaper from "../organisms/wallpaper";
import { Button } from "../ui/button";

export default function HomeTemplate() {
  return (
    <>
      <Navbar />
      <Wallpaper />
      {/* <Button>Click me</Button> */}
      {/* <HeaderOrganism />
      <Wallpaper />*/}
      <Section minHeight="200vh" backgroundColor="#333" />
    </>
  );
}
