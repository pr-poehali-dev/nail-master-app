import { useState } from "react";
import { lessons } from "@/data/content";

const LessonsTab = () => {
  const [openLesson, setOpenLesson] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-bold text-gray-800">Уроки</h2>
        <p className="text-sm text-gray-500 mt-0.5">От основ до первых продаж — 5 уроков</p>
      </div>

      {lessons.map((lesson) => (
        <div key={lesson.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <button
            className="w-full text-left p-4 flex items-start gap-3"
            onClick={() => setOpenLesson(openLesson === lesson.id ? null : lesson.id)}
          >
            <span className="text-3xl mt-0.5">{lesson.emoji}</span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                  {lesson.level}
                </span>
                <span className="text-xs text-gray-400">{lesson.duration}</span>
              </div>
              <div className="font-semibold text-gray-800 text-sm">{lesson.title}</div>
              <div className="text-xs text-gray-500 mt-1 leading-relaxed">{lesson.description}</div>
            </div>
            <span className={`text-gray-400 text-lg transition-transform duration-200 ${openLesson === lesson.id ? "rotate-90" : ""}`}>
              ›
            </span>
          </button>

          {openLesson === lesson.id && (
            <div className="border-t border-gray-100 px-4 pb-4 pt-3 bg-gray-50">
              <ul className="space-y-3">
                {lesson.content.map((text, i) => (
                  <li key={i} className="flex gap-2 text-sm text-gray-700 leading-relaxed">
                    <span className="text-emerald-500 font-bold mt-0.5 shrink-0">•</span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setOpenLesson(null)}
                className="mt-4 text-xs text-emerald-600 font-medium"
              >
                Свернуть ↑
              </button>
            </div>
          )}
        </div>
      ))}

      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-center">
        <p className="text-sm text-emerald-700 font-medium">Прошёл все уроки? Иди выполнять чеклист! ✅</p>
      </div>
    </div>
  );
};

export default LessonsTab;
