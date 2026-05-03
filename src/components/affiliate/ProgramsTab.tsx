import { useState } from "react";
import { programs } from "@/data/content";

const CATEGORIES = ["Все", "Образование", "Финансы", "Товары", "CPA-сеть", "Путешествия"];

const ProgramsTab = () => {
  const [filter, setFilter] = useState("Все");

  const filtered = filter === "Все" ? programs : programs.filter((p) => p.category === filter);

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-bold text-gray-800">Партнёрские программы</h2>
        <p className="text-sm text-gray-500 mt-0.5">Лучшие программы для старта в России</p>
      </div>

      {/* Filter */}
      <div className="flex gap-2 overflow-x-auto pb-1 -mx-4 px-4">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
              filter === cat
                ? "bg-emerald-600 text-white"
                : "bg-white text-gray-600 border border-gray-200 hover:border-emerald-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="space-y-3">
        {filtered.map((program) => (
          <div key={program.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
            <div className="flex items-start justify-between gap-3 mb-2">
              <div className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-lg ${program.color} flex items-center justify-center text-white text-sm font-bold shrink-0`}>
                  {program.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-gray-800 text-sm flex items-center gap-1">
                    {program.name}
                    {program.hot && (
                      <span className="text-xs bg-red-50 text-red-500 font-medium px-1.5 py-0.5 rounded-full">🔥 Топ</span>
                    )}
                  </div>
                  <span className="text-xs text-gray-400">{program.category}</span>
                </div>
              </div>
              <div className="text-right shrink-0">
                <div className="text-sm font-bold text-emerald-600">{program.commission}</div>
                <div className="text-xs text-gray-400">cookie {program.cookie}</div>
              </div>
            </div>

            <p className="text-xs text-gray-600 leading-relaxed mb-3">{program.description}</p>

            <a
              href={program.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-2.5 bg-emerald-600 text-white text-sm font-semibold rounded-lg hover:bg-emerald-700 transition-colors"
            >
              Зарегистрироваться →
            </a>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
        <p className="text-xs text-blue-700 leading-relaxed">
          <span className="font-semibold">Совет:</span> Начни с 1-2 программ, не больше. Изучи продукт, поработай 1-2 месяца и только потом добавляй новые.
        </p>
      </div>
    </div>
  );
};

export default ProgramsTab;
