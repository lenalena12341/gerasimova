import React from 'react';

// Типизация данных (как требовалось в лекции)
interface ProfileCard {
  id: number;
  title: string;
  role: string;
  description: string;
}

// Массив с данными для генерации карточек
const teamMembers: ProfileCard[] = [
  {
    id: 1,
    title: "Алексей Иванов",
    role: "Frontend Разработчик",
    description: "Занимается созданием пользовательских интерфейсов на Next.js и Tailwind CSS."
  },
  {
    id: 2,
    title: "Елена Петрова",
    role: "UI/UX Дизайнер",
    description: "Проектирует интуитивно понятные макеты в Figma и следит за визуальным стилем."
  },
  {
    id: 3,
    title: "Иван Сидоров",
    role: "Team Lead",
    description: "Координирует работу команды разработки и отвечает за архитектуру проекта."
  }
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-zinc-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Шапка сайта */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-zinc-900 tracking-tight sm:text-5xl">
            Панель управления
          </h1>
          <p className="mt-3 text-lg text-zinc-500">
            Проект разработан с использованием Next.js, Tailwind CSS и компонентов shadcn.
          </p>
        </div>

        {/* Динамический вывод элементов через .map() */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold text-zinc-800 mb-1">
                  {member.title}
                </h3>
                <span className="inline-block text-xs font-semibold bg-zinc-100 text-zinc-600 px-2.5 py-1 rounded-full mb-4">
                  {member.role}
                </span>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {member.description}
                </p>
              </div>
              
              <div className="mt-6 pt-4 border-t border-zinc-100">
                <button className="w-full text-center text-sm font-medium text-zinc-700 bg-zinc-50 hover:bg-zinc-100 py-2 rounded-xl transition-colors">
                  Проверить статус
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}