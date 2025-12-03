'use client'
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid,
  LineChart, ResponsiveContainer, Line, ComposedChart, RadarChart, PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar, Cell
} from 'recharts';
import { LabelList } from "recharts";

const months = [
  { name: 'январь', fact: 2.03, plan: 3.0 },
  { name: 'февраль', fact: 2.00, plan: 3.05 },
  { name: 'март', fact: 2.03, plan: 3.09 },
  { name: 'апрель', fact: 2.14, plan: 3.14 },
  { name: 'май', fact: 2.09, plan: 3.18 },
  { name: 'июнь', fact: 2.16, plan: 3.23 },
  { name: 'июль', fact: 2.22, plan: 3.27 },
  { name: 'август', fact: 2.20, plan: 3.32 },
  { name: 'сентябрь', fact: 2.36, plan: 3.36 },
];

const monthlyData = [
  { name: "январь", план: 1023, факт: 976 },
  { name: "февраль", план: 1235, факт: 1156 },
  { name: "март", план: 2435, факт: 2100 },
  { name: "апрель", план: 4667, факт: 3809 },
  { name: "май", план: 5425, факт: 4980 },
  { name: "июнь", план: 6478, факт: 6207 },
  { name: "июль", план: 6799, факт: 6368 },
  { name: "август", план: 7856, факт: 7104 },
  { name: "сентябрь", план: 8565, факт: 8054 },
  { name: "октябрь", план: 9685, факт: null },
  { name: "ноябрь", план: 10355, факт: null },
  { name: "декабрь", план: 11356, факт: null },
];

const branchData = [
  { name: "УЛРЗ", план: 1023, факт: 976 },
  { name: "УУЛВРЗ", план: 7506, факт: 6542 },
  { name: "ОЛРЗ", план: 2435, факт: 2100 },
  { name: "ЧЭРЗ", план: 4667, факт: 3898 },
  { name: "АТРЗ", план: 5425, факт: 4980 },
  { name: "РЭРЗ", план: 6478, факт: 6207 },
  { name: "ВТРЗ", план: 6799, факт: 6368 },
  { name: "ЯЭРЗ", план: 7856, факт: 7104 },
];

const levelData = [
  { name: "ЯЭРЗ", lvl1: 100, lvl2: 89, lvl3: 56, lvl4: 38 },
  { name: "ВТРЗ", lvl1: 100, lvl2: 100, lvl3: 87, lvl4: 56 },
  { name: "РЭРЗ", lvl1: 89, lvl2: 44, lvl3: 26, lvl4: 13 },
  { name: "АТРЗ", lvl1: 100, lvl2: 60, lvl3: 13 },
  { name: "ЧЭРЗ", lvl1: 100, lvl2: 86, lvl3: 18 },
  { name: "ОЛРЗ", lvl1: 25, lvl2: 25, lvl3: 8 },
  { name: "УУЛВРЗ", lvl1: 63, lvl2: 26, lvl3: 22 },
  { name: "УЛРЗ", lvl1: 100, lvl2: 78, lvl3: 53, lvl4: 10 },
];

const tableData = [
  { section: "М1 Достижение ключевых показателей эффективности завода", prev: 1.9, current: 1.95 },
  { section: "М2 Эталонный поток изготовления продукции", prev: 0.92, current: 0.97 },
  { section: "М3 Культура производства (корпоративная культура) и 5С", prev: 1.75, current: 1.8 },
  { section: "М4.1 Оценка компетенций персонала", prev: 2.94, current: 2.5 },
  { section: "М4.2 Обучение сотрудников", prev: 2.96, current: 2.9 },
];

const branches = [
  { name: 'УЛРЗ', fact: 2.33, plan: 2.36 },
  { name: 'УУЛРЗ', fact: 2.51, plan: 2.36 },
  { name: 'ОЛРЗ', fact: 1.96, plan: 2.36 },
  { name: 'ЧЭРЗ', fact: 2.07, plan: 2.36 },
  { name: 'АТРЗ', fact: 2.57, plan: 2.36 },
  { name: 'РЭРЗ', fact: 1.98, plan: 2.36 },
  { name: 'ВТРЗ', fact: 2.15, plan: 2.36 },
  { name: 'ЯЭРЗ', fact: 2.15, plan: 2.36 },
];

const sections = [
  { name: 'Менеджмент', fact: 2.2, plan: 2.36 },
  { name: 'Подготовка производства', fact: 2.7, plan: 2.36 },
  { name: 'SF-m Ручные операции', fact: 2.76, plan: 2.36 },
  { name: 'SF-e Оборудование', fact: 2.82, plan: 2.36 },
  { name: 'ОТиБ', fact: 2.8, plan: 2.36 },
  { name: 'Качество', fact: 1.47, plan: 2.36 },
  { name: 'Цепочка поставок', fact: 1.34, plan: 2.36 },
  { name: 'Техническое развитие', fact: 2.25, plan: 2.36 },
  { name: 'Итоговая оценка', fact: 1.93, plan: 2.36 },
];

const zgd = [
  { name: 'и.о. руководителя ИЭЦ', prev: 2.21, curr: 2.25 },
  { name: 'ЗГД по управлению персоналом', prev: 2.69, curr: 2.85 },
  { name: 'ЗГД по организации производства', prev: 1.68, curr: 1.49 },
  { name: 'и.о. ЗГД по развитию систем и качеству', prev: 2.79, curr: 2.83 },
  { name: 'ЗГД по МТО', prev: 2.41, curr: 2.43 },
  { name: 'Главный инженер', prev: 2.20, curr: 2.16 },
];
const radarDataMap: Record<string, { name: string; self: number; result: number }[]> = {
  "Менеджмент": [
    { name: "M1", self: 0.75, result: 0.75 },
    { name: "M2", self: 0.75, result: 0.50 },
    { name: "M3", self: 1.75, result: 1.75 },
    { name: "M4.1", self: 1.50, result: 1.00 },
    { name: "M4.2", self: 1.80, result: 1.80 },
    { name: "M5", self: 0.25, result: 0.25 },
    { name: "M6", self: 2.00, result: 1.67 },
    { name: "M7", self: 0.67, result: 0.67 },
    { name: "M8", self: 1.33, result: 0.67 },
  ],

  // Другие разделы →
  // "Подготовка производства": [...],
  // "SF-m Ручные операции": [...],
};

const short = (name: string) => {
  if (typeof window !== "undefined" && window.innerWidth < 768) {
    return name
        .replace("ЗГД по управлению персоналом", "Персонал")
        .replace("ЗГД по организации производства", "Производство")
        .replace("и.о. ЗГД по развитию систем и качеству", "Системы и качество")
        .replace("и.о. руководителя ИЭЦ", "ИЭЦ")
        .replace("Цепочка поставок", "Поставки")
        .replace("Оценка компетенций персонала", "Компетенции")
        .replace("Обучение сотрудников", "Обучение")
        .replace("корпоративная культура", "Культура")
        .replace("Эталонный поток изготовления продукции", "Эталонный поток")
        .replace("SF-m Ручные операции", "SF-m")
        .replace("SF-e Оборудование", "Оборуд.")
        .replace("Итоговая оценка", "Итог")
  }
  return name;
};
const sectionsWithGap = sections.map((s) => ({
  ...s,
  gap: Math.max(0, s.plan - s.fact), // Разница между планом и фактом
}));
const Dashboard = () => {
  const [selectedSection, setSelectedSection] = React.useState<string | null>(null);

  return (
      <>
        {/* ======= ВЕРХНИЙ БЛОК (адаптивная трёхколоночная сетка) ======= */}
        {/* ================= ВЕРХНИЙ БЛОК: 2 графика друг под другом ================= */}
        <div className="p-6 bg-slate-900 text-white space-y-6 w-full">

          <h1 className="text-2xl font-bold text-center lg:text-left">
            Развитие ДК ТОС АО «ЖДРМ»
          </h1>

          {/* === Статус по филиалам === */}
          <Card className="bg-slate-800 w-full">
            <CardContent className="p-4">
              <h2 className="text-lg font-semibold mb-2 text-center lg:text-left text-white">
                Статус развития ДК ТОС по филиалам
              </h2>

              <div className="w-full h-[260px]">
                <ResponsiveContainer>
                  <ComposedChart data={branches}>
                    <XAxis dataKey="name" stroke="#ccc"/>
                    <YAxis stroke="#ccc" domain={[0, 3]}/>
                    <Legend/>
                    <Bar dataKey="fact" fill="#4f83ff" barSize={35}>
                      <LabelList dataKey="fact" position="top" fill="#fff" fontSize={12}/>
                    </Bar>
                    <Line type="monotone" dataKey="plan" stroke="#9bb3ff" strokeWidth={2}/>
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* === Статус по ЗГД === */}
          <Card className="bg-slate-800 w-full">
            <CardContent className="p-4">
              <h2 className="text-lg font-semibold mb-2 text-center lg:text-left text-white">
                Статус развития ДК ТОС в разрезе ЗГД
              </h2>

              <div className="w-full h-[350px]">
                <ResponsiveContainer>
                  <ComposedChart data={zgd}>
                    <XAxis dataKey="name" stroke="#ccc" interval={0} angle={-30} textAnchor="end" height={80}/>
                    <YAxis stroke="#ccc"/>
                    <Legend/>
                    <Bar dataKey="prev" fill="#a3a3a3" barSize={35}>
                      <LabelList dataKey="prev" position="top" fill="#fff" fontSize={12}/>
                    </Bar>
                    <Bar dataKey="curr" fill="#4f83ff" barSize={35}>
                      <LabelList dataKey="curr" position="top" fill="#fff" fontSize={12}/>
                    </Bar>
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>


        {/* ================= НИЖНИЙ БЛОК: 2 графика рядом ================= */}
        <div className="w-full px-6 pb-6 bg-slate-900 text-white">

          {/* ====== FLEX-контейнер 50/50 ====== */}
          <div className="flex flex-col lg:flex-row w-full gap-6">

            {/* === ЛЕВАЯ ПАНЕЛЬ — 50% === */}
            <div className="w-full lg:w-1/2 bg-slate-800 rounded-2xl p-4">
              <h2 className="text-lg font-semibold mb-2 text-center lg:text-left text-white">
                Статус по разделам ДК ТОС
              </h2>

              <div className="w-full h-[500px]">
                <ResponsiveContainer>
                  <ComposedChart data={sectionsWithGap} layout="vertical">
                    <XAxis type="number" stroke="#ccc" domain={[0, 3.5]}/>
                    <YAxis dataKey="name" type="category" width={140} stroke="#ccc"/>
                    <Legend/>

                    <Bar dataKey="fact" stackId="a" fill="#4f83ff" barSize={30}>
                      {sectionsWithGap.map((entry, index) => (
                          <Cell
                              key={`cell-${index}`}
                              fill="#4f83ff"
                              cursor="pointer"
                              onClick={() => setSelectedSection(entry.name)}
                          />
                      ))}
                      <LabelList dataKey="fact" position="right" fill="#fff" fontSize={12}/>
                    </Bar>

                    <Bar dataKey="gap" stackId="a" fill="rgba(255,255,255,0.25)" barSize={30}/>
                    <Line type="monotone" dataKey="plan" stroke="#9bb3ff" strokeWidth={2} name="План"/>
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* === ПРАВАЯ ПАНЕЛЬ — 50% === */}
            <div className="w-full lg:w-1/2 bg-slate-800 rounded-2xl p-4">
              <h2 className="text-lg font-semibold mb-2 text-center lg:text-left text-white">
                Диагностика выполнения критериев раздела
              </h2>

              {selectedSection ? (
                  <div className="w-full h-[500px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart data={radarDataMap[selectedSection]}>
                        <PolarGrid/>
                        <PolarAngleAxis dataKey="name"/>
                        <PolarRadiusAxis angle={30} domain={[0, 5]}/>

                        <Radar
                            name="Самооценка"
                            dataKey="self"
                            stroke="#4f83ff"
                            fill="#4f83ff"
                            fillOpacity={0.5}
                        />
                        <Radar
                            name="Результат"
                            dataKey="result"
                            stroke="#ffcc00"
                            fill="#ffcc00"
                            fillOpacity={0.5}
                        />

                        <Legend/>
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>
              ) : (
                  <div className="text-center text-gray-400 mt-20">
                    Нажмите на раздел слева чтобы увидеть диаграмму
                  </div>
              )}
            </div>

          </div>
        </div>


        {/* ======= НИЖНИЙ БЛОК — адаптивные карточки ======= */}
        <div className="bg-[#1E2432] text-white min-h-screen p-6">
          <h1 className="text-2xl font-bold mb-6 text-center lg:text-left text-white">
            Выполнение мероприятий по ДК ТОС АО «ЖДРМ»
          </h1>

          {/* ===== ФИЛЬТРЫ ===== */}


          {/* ===== НИЖНИЕ 3 ГРАФИКА ===== */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">


            {/* === По филиалам === */}
            <div className="bg-[#2A3144] rounded-2xl p-4">
              <h2 className="text-lg mb-2 font-semibold text-center lg:text-left">
                Выполнение мероприятий по ДК ТОС по филиалам
              </h2>


              <div className="w-full h-[220px] sm:h-[240px]">
                <ResponsiveContainer>
                  <BarChart data={branchData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#3E4A63"/>
                    <XAxis dataKey="name"/>
                    <YAxis stroke="#ccc" domain={[0, 10000]}/>


                    {/* Отключаем tooltip полностью */}
                    <Tooltip content={<></>} wrapperStyle={{display: "none"}}/>

                    <Legend/>

                    {/* === FACT BAR + LABELS === */}
                    <Bar
                        dataKey="fact"
                        stackId="a"
                        fill="#4f83ff"
                        barSize={30}
                    >
                      <LabelList
                          dataKey="факт"
                          position="top"
                          fill="#ffffff"
                          fontSize={12}
                          dy={-20}
                          formatter={(v) => (v !== null ? v : "")}
                      />
                    </Bar>

                    {/* === LINE === */}
                    <Line
                        type="monotone"
                        dataKey="план"
                        stroke="#FFFFFF"
                        strokeWidth={2}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>


            </div>

            {/* === По уровням === */}
            <div className="bg-[#2A3144] rounded-2xl p-4">
              <h2 className="text-lg mb-2 font-semibold text-center lg:text-left">
                Выполнение мероприятий по уровням
              </h2>

              <div className="w-full h-[260px] sm:h-[280px]">
                <ResponsiveContainer>
                  <BarChart layout="vertical" data={levelData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#3E4A63"/>
                    <XAxis type="number"/>
                    <YAxis dataKey="name" type="category"/>

                    <Legend/>
                    <Bar dataKey="lvl1" stackId="a" fill="#6BA7FF" barSize={16}/>
                    <Bar dataKey="lvl2" stackId="a" fill="#5E8EE8" barSize={16}/>
                    <Bar dataKey="lvl3" stackId="a" fill="#547BCC" barSize={16}/>
                    <Bar dataKey="lvl4" stackId="a" fill="#4A6BB0" barSize={16}/>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* ===== ТАБЛИЦА ===== */}
          <div className="bg-[#2A3144] rounded-2xl mt-6 p-4">
            <h2 className="text-lg mb-2 font-semibold text-center lg:text-left">Раздел</h2>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border-t border-[#3E4A63]">
                <thead>
                <tr className="text-gray-400 border-b border-[#3E4A63]">
                  <th className="py-2 text-left">Раздел</th>
                  <th className="py-2 text-right">Прошлый месяц</th>
                  <th className="py-2 text-right">Текущий месяц</th>
                </tr>
                </thead>
                <tbody>
                {tableData.map((row, idx) => (
                    <tr key={idx} className="border-b border-[#3E4A63]">
                      <td className="py-2">{row.section}</td>
                      <td className="py-2 text-right">{row.prev.toFixed(2)}</td>
                      <td className="py-2 text-right">{row.current.toFixed(2)}</td>
                    </tr>
                ))}
                </tbody>
              </table>
            </div>

          </div>

        </div>


      </>
  );
};

export default Dashboard;
