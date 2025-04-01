import Navbar from "../organisms/navbar";
import { Section } from "../organisms/section";
import VipManager from "../organisms/vipManager";

export default function VipTemplate() {
  return (
    <>
      <Navbar />
      <Section title="Adquirir VIP">
        <VipManager />
      </Section>
    </>
  );
}
