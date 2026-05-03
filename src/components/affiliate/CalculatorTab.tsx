import { useState } from "react";

const CalculatorTab = () => {
  const [traffic, setTraffic] = useState(500);
  const [conversion, setConversion] = useState(2);
  const [avgCheck, setAvgCheck] = useState(3000);
  const [commission, setCommission] = useState(30);

  const sales = Math.round((traffic * conversion) / 100);
  const income = Math.round(sales * avgCheck * (commission / 100));
  const incomeYear = income * 12;

  const formatNum = (n: number) =>
    n.toLocaleString("ru-RU");

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-bold text-gray-800">Калькулятор дохода</h2>
        <p className="text-sm text-gray-500 mt-0.5">Посчитай сколько ты можешь зарабатывать</p>
      </div>

      {/* Result */}
      <div className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white rounded-2xl p-5 text-center shadow-lg">
        <p className="text-emerald-200 text-sm mb-1">Доход в месяц</p>
        <p className="text-4xl font-bold">{formatNum(income)} ₽</p>
        <p className="text-emerald-200 text-sm mt-2">{formatNum(incomeYear)} ₽ в год</p>
        <div className="mt-3 pt-3 border-t border-emerald-500 grid grid-cols-2 gap-2 text-sm">
          <div>
            <p className="text-emerald-200 text-xs">Переходов</p>
            <p className="font-semibold">{formatNum(traffic)}</p>
          </div>
          <div>
            <p className="text-emerald-200 text-xs">Продаж</p>
            <p className="font-semibold">{sales}</p>
          </div>
        </div>
      </div>

      {/* Sliders */}
      <div className="space-y-4">
        <SliderField
          label="Трафик в месяц (переходов)"
          value={traffic}
          min={100}
          max={10000}
          step={100}
          onChange={setTraffic}
          display={`${formatNum(traffic)} чел.`}
        />
        <SliderField
          label="Конверсия в покупку"
          value={conversion}
          min={0.5}
          max={10}
          step={0.5}
          onChange={setConversion}
          display={`${conversion}%`}
        />
        <SliderField
          label="Средний чек продукта"
          value={avgCheck}
          min={500}
          max={50000}
          step={500}
          onChange={setAvgCheck}
          display={`${formatNum(avgCheck)} ₽`}
        />
        <SliderField
          label="Твоя комиссия"
          value={commission}
          min={5}
          max={80}
          step={5}
          onChange={setCommission}
          display={`${commission}%`}
        />
      </div>

      {/* Guide */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 space-y-2">
        <p className="text-sm font-semibold text-gray-700">Реальные примеры:</p>
        <div className="space-y-1.5">
          {[
            { label: "Telegram 1 000 подписчиков", income: "5 000 — 15 000 ₽/мес" },
            { label: "YouTube канал 5 000 просмотров", income: "15 000 — 40 000 ₽/мес" },
            { label: "Блог 10 000 посетителей", income: "30 000 — 100 000 ₽/мес" },
          ].map((ex) => (
            <div key={ex.label} className="flex justify-between items-center text-xs">
              <span className="text-gray-500">{ex.label}</span>
              <span className="font-semibold text-emerald-600">{ex.income}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

interface SliderProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  display: string;
}

const SliderField = ({ label, value, min, max, step, onChange, display }: SliderProps) => (
  <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
    <div className="flex justify-between items-center mb-2">
      <span className="text-sm text-gray-600">{label}</span>
      <span className="text-sm font-bold text-emerald-600">{display}</span>
    </div>
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-emerald-500"
    />
    <div className="flex justify-between text-xs text-gray-400 mt-1">
      <span>{min}</span>
      <span>{max}</span>
    </div>
  </div>
);

export default CalculatorTab;
