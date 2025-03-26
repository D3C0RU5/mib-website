import Navbar from "../organisms/navbar";
import { Section } from "../organisms/section";
import VipForm from "../organisms/vipForm";

export default function VipTemplate() {
  return (
    <>
      <Navbar />
      <Section title="Adquirir VIP">
        <VipForm />
      </Section>
    </>
  );
}
