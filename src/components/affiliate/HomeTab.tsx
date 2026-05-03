import { Tab } from "@/pages/Index";

interface Props {
  setActiveTab: (tab: Tab) => void;
}

const HomeTab = ({ setActiveTab }: Props) => {
  return (
    <div className="space-y-5">
      {/* Hero */}
      <div className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white rounded-2xl p-6 text-center shadow-lg">
        <div className="text-5xl mb-3">🚀</div>
        <h2 className="text-2xl font-bold mb-2">Начни зарабатывать на партнёрках</h2>
        <p className="text-emerald-100 text-sm leading-relaxed">
          Пошаговое руководство от нуля до первых комиссионных. Без вложений, без опыта, без лишней воды.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { num: "5", label: "уроков", emoji: "📖" },
          { num: "16", label: "задач", emoji: "✅" },
          { num: "6+", label: "программ", emoji: "💼" },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl p-3 text-center shadow-sm border border-gray-100">
            <div className="text-2xl mb-1">{stat.emoji}</div>
            <div className="text-xl font-bold text-gray-800">{stat.num}</div>
            <div className="text-xs text-gray-500">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Quick actions */}
      <div className="space-y-3">
        <h3 className="font-semibold text-gray-700 text-sm uppercase tracking-wide">С чего начать?</h3>
        {[
          {
            tab: "lessons" as Tab,
            emoji: "📚",
            title: "Пройди уроки",
            desc: "5 уроков от основ до масштабирования",
            color: "bg-blue-50 border-blue-200",
            textColor: "text-blue-700",
          },
          {
            tab: "checklist" as Tab,
            emoji: "✅",
            title: "Выполни чеклист",
            desc: "16 шагов к первым продажам",
            color: "bg-emerald-50 border-emerald-200",
            textColor: "text-emerald-700",
          },
          {
            tab: "programs" as Tab,
            emoji: "💼",
            title: "Выбери программу",
            desc: "Лучшие партнёрки для старта",
            color: "bg-purple-50 border-purple-200",
            textColor: "text-purple-700",
          },
          {
            tab: "calculator" as Tab,
            emoji: "💰",
            title: "Посчитай доход",
            desc: "Сколько ты можешь заработать",
            color: "bg-yellow-50 border-yellow-200",
            textColor: "text-yellow-700",
          },
        ].map((item) => (
          <button
            key={item.tab}
            onClick={() => setActiveTab(item.tab)}
            className={`w-full flex items-center gap-4 p-4 rounded-xl border ${item.color} text-left transition-transform active:scale-98`}
          >
            <span className="text-3xl">{item.emoji}</span>
            <div>
              <div className={`font-semibold ${item.textColor}`}>{item.title}</div>
              <div className="text-xs text-gray-500 mt-0.5">{item.desc}</div>
            </div>
            <span className="ml-auto text-gray-300 text-lg">›</span>
          </button>
        ))}
      </div>

      {/* Motivational block */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
        <p className="text-sm text-amber-800 leading-relaxed">
          <span className="font-semibold">💡 Факт:</span> Средний новичок получает первые комиссии уже через <span className="font-semibold">2-4 недели</span> после старта. Главное — начать!
        </p>
      </div>
    </div>
  );
};

export default HomeTab;
