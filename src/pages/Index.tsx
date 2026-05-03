import { useState } from "react";
import HomeTab from "@/components/affiliate/HomeTab";
import LessonsTab from "@/components/affiliate/LessonsTab";
import ChecklistTab from "@/components/affiliate/ChecklistTab";
import ProgramsTab from "@/components/affiliate/ProgramsTab";
import CalculatorTab from "@/components/affiliate/CalculatorTab";

export type Tab = "home" | "lessons" | "checklist" | "programs" | "calculator";

const NAV_ITEMS: { id: Tab; label: string; emoji: string }[] = [
  { id: "home", label: "Главная", emoji: "🏠" },
  { id: "lessons", label: "Уроки", emoji: "📚" },
  { id: "checklist", label: "Чеклист", emoji: "✅" },
  { id: "programs", label: "Программы", emoji: "💼" },
  { id: "calculator", label: "Доход", emoji: "💰" },
];

const Index = () => {
  const [activeTab, setActiveTab] = useState<Tab>("home");

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Top header */}
      <header className="bg-emerald-600 text-white py-3 px-4 text-center shadow-md">
        <h1 className="text-lg font-bold tracking-tight">Партнёрский маркетинг с нуля</h1>
        <p className="text-emerald-100 text-xs mt-0.5">Твой путь к первому доходу в интернете</p>
      </header>

      {/* Main content */}
      <main className="max-w-2xl mx-auto px-4 pb-24 pt-4">
        {activeTab === "home" && <HomeTab setActiveTab={setActiveTab} />}
        {activeTab === "lessons" && <LessonsTab />}
        {activeTab === "checklist" && <ChecklistTab />}
        {activeTab === "programs" && <ProgramsTab />}
        {activeTab === "calculator" && <CalculatorTab />}
      </main>

      {/* Bottom nav */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 shadow-lg">
        <div className="max-w-2xl mx-auto flex">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex-1 flex flex-col items-center py-2 px-1 text-xs transition-colors ${
                activeTab === item.id
                  ? "text-emerald-600 font-semibold"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              <span className="text-xl mb-0.5">{item.emoji}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Index;
