import { useState } from "react";
import { checklist } from "@/data/content";

const ChecklistTab = () => {
  const [checked, setChecked] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const totalItems = checklist.flatMap((c) => c.items).length;
  const doneCount = checked.size;
  const percent = Math.round((doneCount / totalItems) * 100);

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-bold text-gray-800">Чеклист</h2>
        <p className="text-sm text-gray-500 mt-0.5">16 шагов от нуля до первого дохода</p>
      </div>

      {/* Progress */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-semibold text-gray-700">Прогресс</span>
          <span className="text-sm font-bold text-emerald-600">{doneCount}/{totalItems}</span>
        </div>
        <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full transition-all duration-500"
            style={{ width: `${percent}%` }}
          />
        </div>
        <p className="text-xs text-gray-400 mt-2 text-right">{percent}% выполнено</p>
      </div>

      {/* Categories */}
      {checklist.map((category) => {
        const catDone = category.items.filter((i) => checked.has(i.id)).length;
        return (
          <div key={category.category} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-4 py-3 border-b border-gray-50 flex justify-between items-center">
              <span className="font-semibold text-gray-700 text-sm">{category.category}</span>
              <span className="text-xs text-gray-400">{catDone}/{category.items.length}</span>
            </div>
            <ul className="divide-y divide-gray-50">
              {category.items.map((item) => {
                const done = checked.has(item.id);
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => toggle(item.id)}
                      className="w-full flex items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-gray-50"
                    >
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                        done ? "bg-emerald-500 border-emerald-500" : "border-gray-300"
                      }`}>
                        {done && <span className="text-white text-xs">✓</span>}
                      </div>
                      <span className={`text-sm transition-colors ${done ? "text-gray-400 line-through" : "text-gray-700"}`}>
                        {item.text}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}

      {percent === 100 && (
        <div className="bg-emerald-500 text-white rounded-xl p-5 text-center shadow-lg">
          <div className="text-4xl mb-2">🎉</div>
          <p className="font-bold text-lg">Ты прошёл все шаги!</p>
          <p className="text-emerald-100 text-sm mt-1">Теперь масштабируй и зарабатывай больше</p>
        </div>
      )}
    </div>
  );
};

export default ChecklistTab;
