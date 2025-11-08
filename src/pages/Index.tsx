import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useEffect, useState } from "react";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    {
      icon: "Languages",
      title: "Полноценный русский синтаксис",
      description: "Пишите код на родном языке без компромиссов"
    },
    {
      icon: "Cpu",
      title: "Собственная VM и компилятор",
      description: "Полная независимость от зарубежных решений"
    },
    {
      icon: "Rocket",
      title: "RUNA Launcher",
      description: "Шаблоны проектов и менеджер ресурсов из коробки"
    },
    {
      icon: "Code2",
      title: "VS Code расширение",
      description: "Профессиональный IDE-стек для разработки"
    },
    {
      icon: "GraduationCap",
      title: "Встроенное обучение",
      description: "Курсы, практикум и интерактивные уроки"
    },
    {
      icon: "Sparkles",
      title: "AI-ассистент",
      description: "Локальная модель для автодополнения и анализа"
    }
  ];

  const worldComparison = [
    { feature: "Русскоязычный синтаксис", runa: true, python: false, cpp: false, rust: false, go: false },
    { feature: "Собственная VM/компилятор", runa: true, python: true, cpp: true, rust: true, go: true },
    { feature: "Быстрый старт для русских команд", runa: true, python: false, cpp: false, rust: false, go: false },
    { feature: "Встроенный GUI/игровой стек", runa: true, python: false, cpp: false, rust: false, go: false },
    { feature: "Локальная документация", runa: true, python: true, cpp: true, rust: true, go: true },
    { feature: "Интегрированная система обучения", runa: true, python: false, cpp: false, rust: false, go: false },
    { feature: "AI-помощник", runa: true, python: false, cpp: false, rust: false, go: false }
  ];

  const russianComparison = [
    { feature: "Язык общего назначения", runa: true, yandex: false, sber: false, pascal: false, russian: false },
    { feature: "Промышленная VM/компилятор", runa: true, yandex: false, sber: false, pascal: true, russian: false },
    { feature: "GUI/игры/веб из коробки", runa: true, yandex: false, sber: false, pascal: false, russian: false },
    { feature: "Единая экосистема (launcher + IDE)", runa: true, yandex: false, sber: false, pascal: false, russian: false },
    { feature: "Встроенное обучение", runa: true, yandex: false, sber: false, pascal: false, russian: false },
    { feature: "AI-ассистент", runa: true, yandex: false, sber: false, pascal: false, russian: false },
    { feature: "Независимость от платформы", runa: true, yandex: false, sber: false, pascal: false, russian: false }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B1F40] via-[#152D52] to-[#0B1F40] text-white overflow-x-hidden">
      <div 
        className="fixed inset-0 opacity-20 pointer-events-none"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(47, 107, 255, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(19, 193, 163, 0.15) 0%, transparent 50%)'
        }}
      />

      <header className="fixed top-0 w-full z-50 glass-card border-b border-white/10">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2F6BFF] to-[#13C1A3] flex items-center justify-center font-bold text-xl">
              Р
            </div>
            <span className="text-2xl font-bold">RUNA</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-white hover:text-[#2F6BFF]">Продукт</Button>
            <Button variant="ghost" className="text-white hover:text-[#2F6BFF]">Инструменты</Button>
            <Button variant="ghost" className="text-white hover:text-[#2F6BFF]">Обучение</Button>
            <Button className="bg-[#2F6BFF] hover:bg-[#2F6BFF]/90 text-white glow-effect">
              Назначить встречу
            </Button>
          </div>
        </nav>
      </header>

      <section className="relative pt-40 pb-32 px-6">
        <div className="container mx-auto text-center max-w-6xl">
          <Badge className="mb-6 bg-white/10 border-[#2F6BFF]/50 text-white px-6 py-2 text-sm animate-fade-in">
            Национальный язык программирования
          </Badge>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-fade-in text-glow">
            РУНА — стратегический язык разработки для суверенной цифровой эпохи
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto animate-fade-in">
            Полная независимость от зарубежных решений. Готовая экосистема для промышленного внедрения.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-16 animate-fade-in">
            <Button size="lg" className="bg-gradient-to-r from-[#2F6BFF] to-[#13C1A3] hover:scale-105 transition-transform text-lg px-8 py-6 glow-effect">
              <Icon name="Play" className="mr-2" size={20} />
              Получить демо
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-6">
              <Icon name="Calendar" className="mr-2" size={20} />
              Назначить встречу
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { value: "100%", label: "Суверенность" },
              { value: "300+", label: "Готовых функций" },
              { value: "6", label: "Инструментов" },
              { value: "12+", label: "Демо-проектов" }
            ].map((stat, i) => (
              <Card key={i} className="glass-card p-6 border border-white/10 hover:border-[#2F6BFF]/50 transition-all animate-fade-in hover:scale-105">
                <div className="text-4xl font-bold text-[#13C1A3] mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>

        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#2F6BFF]/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#13C1A3]/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      </section>

      <section className="py-24 px-6 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">Для чего создана РУНА</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Цифровой суверенитет, независимый стек, поддержка образования. Снижаем порог входа и растим специалистов внутри страны.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              {
                icon: "Shield",
                title: "Независимость",
                description: "Полный контроль над технологическим стеком без внешних зависимостей"
              },
              {
                icon: "Building2",
                title: "Промышленная готовность",
                description: "Проверенные решения для корпоративного внедрения"
              },
              {
                icon: "Network",
                title: "Открытая экосистема",
                description: "Развиваемые инструменты и активное сообщество разработчиков"
              },
              {
                icon: "Globe",
                title: "Локализация",
                description: "Русский язык на всех уровнях — от синтаксиса до документации"
              }
            ].map((principle, i) => (
              <Card key={i} className="glass-card p-8 border border-white/10 hover:border-[#2F6BFF]/50 transition-all group hover:scale-105">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2F6BFF] to-[#13C1A3] flex items-center justify-center mb-4 group-hover:animate-glow-pulse">
                  <Icon name={principle.icon} size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{principle.title}</h3>
                <p className="text-gray-400">{principle.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 relative">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">Ключевые преимущества</h2>
            <p className="text-xl text-gray-300">Полная экосистема для разработки на русском языке</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <Card 
                key={i} 
                className="glass-card p-8 border border-white/10 hover:border-[#2F6BFF]/50 transition-all group cursor-pointer hover:scale-105"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2F6BFF]/20 to-[#13C1A3]/20 flex items-center justify-center mb-6 group-hover:animate-glow-pulse border border-[#2F6BFF]/30">
                  <Icon name={feature.icon} size={32} className="text-[#2F6BFF]" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">Импортозамещение</h2>
            <p className="text-xl text-gray-300">Решение проблем зависимости от зарубежных языков</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="glass-card p-8 border border-red-500/30">
              <div className="flex items-center gap-3 mb-6">
                <Icon name="AlertCircle" className="text-red-400" size={32} />
                <h3 className="text-2xl font-bold">Проблемы</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Зависимость от зарубежных языков",
                  "Отсутствие русифицированной экосистемы",
                  "Сложности обучения на английском",
                  "Отток специалистов за рубеж",
                  "Нет единого стандарта"
                ].map((problem, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <Icon name="X" className="text-red-400 flex-shrink-0 mt-1" size={20} />
                    <span>{problem}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="glass-card p-8 border border-[#13C1A3]/50 glow-effect">
              <div className="flex items-center gap-3 mb-6">
                <Icon name="CheckCircle2" className="text-[#13C1A3]" size={32} />
                <h3 className="text-2xl font-bold">Как РУНА решает</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Полный стек на русском языке",
                  "Готовая экосистема инструментов",
                  "Русские курсы и документация",
                  "Корпоративные курсы без переучивания",
                  "Единая платформа разработки"
                ].map((solution, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <Icon name="Check" className="text-[#13C1A3] flex-shrink-0 mt-1" size={20} />
                    <span>{solution}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 relative">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">РУНА vs Мировые языки</h2>
            <p className="text-xl text-gray-300">Сравнение с ведущими языками программирования</p>
          </div>

          <div className="glass-card p-8 border border-white/10 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left py-4 px-4">Параметр</th>
                  <th className="text-center py-4 px-4 text-[#13C1A3]">RUNA</th>
                  <th className="text-center py-4 px-4">Python</th>
                  <th className="text-center py-4 px-4">C++</th>
                  <th className="text-center py-4 px-4">Rust</th>
                  <th className="text-center py-4 px-4">Go</th>
                </tr>
              </thead>
              <tbody>
                {worldComparison.map((row, i) => (
                  <tr key={i} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                    <td className="py-4 px-4 text-gray-300">{row.feature}</td>
                    <td className="text-center py-4 px-4">
                      {row.runa ? <Icon name="Check" className="text-[#13C1A3] inline" size={20} /> : <Icon name="Minus" className="text-gray-600 inline" size={20} />}
                    </td>
                    <td className="text-center py-4 px-4">
                      {row.python ? <Icon name="Check" className="text-blue-400 inline" size={20} /> : <Icon name="Minus" className="text-gray-600 inline" size={20} />}
                    </td>
                    <td className="text-center py-4 px-4">
                      {row.cpp ? <Icon name="Check" className="text-blue-400 inline" size={20} /> : <Icon name="Minus" className="text-gray-600 inline" size={20} />}
                    </td>
                    <td className="text-center py-4 px-4">
                      {row.rust ? <Icon name="Check" className="text-orange-400 inline" size={20} /> : <Icon name="Minus" className="text-gray-600 inline" size={20} />}
                    </td>
                    <td className="text-center py-4 px-4">
                      {row.go ? <Icon name="Check" className="text-cyan-400 inline" size={20} /> : <Icon name="Minus" className="text-gray-600 inline" size={20} />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 relative">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">РУНА vs Российские решения</h2>
            <p className="text-xl text-gray-300">Единственное решение без ограничений на сферу применения</p>
          </div>

          <div className="glass-card p-8 border border-white/10 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left py-4 px-4">Параметр</th>
                  <th className="text-center py-4 px-4 text-[#13C1A3]">RUNA</th>
                  <th className="text-center py-4 px-4">Yandex QL</th>
                  <th className="text-center py-4 px-4">Sber PSL</th>
                  <th className="text-center py-4 px-4">PascalABC</th>
                  <th className="text-center py-4 px-4">Питон RU</th>
                </tr>
              </thead>
              <tbody>
                {russianComparison.map((row, i) => (
                  <tr key={i} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                    <td className="py-4 px-4 text-gray-300">{row.feature}</td>
                    <td className="text-center py-4 px-4">
                      {row.runa ? <Icon name="Check" className="text-[#13C1A3] inline" size={20} /> : <Icon name="Minus" className="text-gray-600 inline" size={20} />}
                    </td>
                    <td className="text-center py-4 px-4">
                      {row.yandex ? <Icon name="Check" className="text-yellow-400 inline" size={20} /> : <Icon name="Minus" className="text-gray-600 inline" size={20} />}
                    </td>
                    <td className="text-center py-4 px-4">
                      {row.sber ? <Icon name="Check" className="text-green-400 inline" size={20} /> : <Icon name="Minus" className="text-gray-600 inline" size={20} />}
                    </td>
                    <td className="text-center py-4 px-4">
                      {row.pascal ? <Icon name="Check" className="text-purple-400 inline" size={20} /> : <Icon name="Minus" className="text-gray-600 inline" size={20} />}
                    </td>
                    <td className="text-center py-4 px-4">
                      {row.russian ? <Icon name="Check" className="text-blue-400 inline" size={20} /> : <Icon name="Minus" className="text-gray-600 inline" size={20} />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 relative">
        <div className="container mx-auto max-w-5xl text-center">
          <Badge className="mb-6 bg-gradient-to-r from-[#2F6BFF] to-[#13C1A3] border-0 text-white px-6 py-2 text-sm">
            Готовы к внедрению
          </Badge>
          
          <h2 className="text-6xl font-bold mb-6">Решение под ключ</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            РУНА — это не концепт, а работающее решение с полной экосистемой инструментов, готовое к промышленному внедрению уже сегодня.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-[#2F6BFF] to-[#13C1A3] hover:scale-105 transition-transform text-lg px-8 py-6 glow-effect">
              <Icon name="FileText" className="mr-2" size={20} />
              Запросить полный пакет лицензии
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-6">
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Связаться с командой
            </Button>
          </div>
        </div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2F6BFF]/10 rounded-full blur-3xl -z-10" />
      </section>

      <footer className="border-t border-white/10 py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2F6BFF] to-[#13C1A3] flex items-center justify-center font-bold text-xl">
                  Р
                </div>
                <span className="text-2xl font-bold">RUNA</span>
              </div>
              <p className="text-gray-400 text-sm">
                Национальный язык программирования для цифрового суверенитета
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Продукт</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-[#2F6BFF]">Возможности</a></li>
                <li><a href="#" className="hover:text-[#2F6BFF]">Экосистема</a></li>
                <li><a href="#" className="hover:text-[#2F6BFF]">Демо-проекты</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Инструменты</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-[#2F6BFF]">RUNA Launcher</a></li>
                <li><a href="#" className="hover:text-[#2F6BFF]">VS Code расширение</a></li>
                <li><a href="#" className="hover:text-[#2F6BFF]">AI-ассистент</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
                  <Icon name="Github" size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
                  <Icon name="Send" size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
                  <Icon name="Users" size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-400">
            © 2025 RUNA. Все права защищены. Национальный язык программирования.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
