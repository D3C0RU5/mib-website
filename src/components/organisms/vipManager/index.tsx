import VipForm from "@/components/molecules/vipForm";
import { VipList } from "@/components/molecules/vipList";

export default function VipManager() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div>
        <VipList />
      </div>
      <div className="col-span-3">
        <VipForm />
      </div>
    </div>
  );
}
