"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useState } from "react";

function formatMoney(value: number) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

type VipOrderOption = {
  label: string;
  qtdMonths: number;
  price: number;
  oldPrice: number;
};
const vipOrderOptions: VipOrderOption[] = [
  { label: "Mensal", qtdMonths: 1, oldPrice: 15.0, price: 10 },
  { label: "Trimestral", qtdMonths: 3, oldPrice: 45.0, price: 30 },
  { label: "Semestral", qtdMonths: 6, oldPrice: 90.0, price: 55 },
  { label: "Anual", qtdMonths: 12, oldPrice: 180.0, price: 100 },
];

export default function VipForm() {
  const selectedPlayer = useSelector(
    (state: RootState) => state.vip.selectedPlayer
  );
  const [selectedOrder, setSelectedOrder] = useState<VipOrderOption>();

  function CardOption(option: VipOrderOption) {
    const isSelected = () => {
      return selectedOrder?.qtdMonths === option.qtdMonths;
    };
    return (
      <div
        className={`flex cursor-pointer flex-col items-center justify-center p-6 border-2 rounded-lg shadow-md hover:shadow-lg transition ${
          isSelected()
            ? "bg-gray-900 hover:border-gray-700"
            : "bg-gray-950 hover:bg-gray-900"
        }`}
        onClick={() => {
          setSelectedOrder(option);
        }}
      >
        <h2 className="text-xl font-semibold">{option.label}</h2>
        <br />
        <div className="text-center">
          <span className="text-sm line-through text-red-600">
            {formatMoney(option.oldPrice)}
          </span>
          <br />
          <span className="text-xl text-green-600 font-bold mt-2">
            {formatMoney(option.price)}
          </span>
        </div>
      </div>
    );
  }

  return (
    <>
      <h3 className="text-xl">
        Configurando Vips para o player: {selectedPlayer?.playerName}
      </h3>
      <div className="p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {vipOrderOptions.map((_option) => CardOption(_option))}
        </div>
      </div>
    </>
  );
}
