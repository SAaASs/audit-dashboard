'use client'
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid,LineChart, ResponsiveContainer, Line, ComposedChart } from 'recharts';

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

const Dashboard = () => {
  return (

      <>
        <div className="p-6 bg-slate-900 text-white grid grid-cols-3 gap-6">
          <div className="col-span-2 space-y-6">
            <h1 className="text-2xl font-bold">Развитие ДК ТОС АО «ЖДРМ»</h1>

            {/* Статус по месяцам */}
            <Card className="bg-slate-800">
              <CardContent className="p-4">
                <h2 className="text-lg font-semibold mb-2">Статус развития ДК ТОС по месяцам</h2>
                <ResponsiveContainer width="100%" height={250}>
                  <ComposedChart data={months}>
                    <XAxis dataKey="name" stroke="#ccc"/>
                    <YAxis stroke="#ccc"/>
                    <Tooltip/>
                    <Legend/>
                    <Bar dataKey="fact" fill="#4f83ff" name="Факт" barSize={60}/>
                    <Line type="monotone" dataKey="plan" stroke="#9bb3ff" strokeWidth={2} name="План"/>
                  </ComposedChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Статус по филиалам */}
            <Card className="bg-slate-800">
              <CardContent className="p-4">
                <h2 className="text-lg font-semibold mb-2">Статус развития ДК ТОС по филиалам</h2>
                <ResponsiveContainer width="100%" height={250}>
                  <ComposedChart data={branches}>
                    <XAxis dataKey="name" stroke="#ccc"/>
                    <YAxis stroke="#ccc"/>
                    <Tooltip/>
                    <Legend/>
                    <Bar dataKey="fact" fill="#4f83ff" name="Факт" barSize={60}/>
                    <Line type="monotone" dataKey="plan" stroke="#9bb3ff" strokeWidth={2} name="План"/>
                  </ComposedChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Статус в разрезе ЗГД */}
            <Card className="bg-slate-800">
              <CardContent className="p-4">
                <h2 className="text-lg font-semibold mb-2">Статус развития ДК ТОС в разрезе ЗГД</h2>
                <ResponsiveContainer width="100%" height={350}>
                  <ComposedChart data={zgd}>
                    <XAxis dataKey="name" stroke="#ccc"/>
                    <YAxis stroke="#ccc"/>
                    <Tooltip/>
                    <Legend/>
                    <Bar dataKey="prev" fill="#a3a3a3" name="Оценка за прошлый месяц" barSize={60}/>
                    <Bar dataKey="curr" fill="#4f83ff" name="Оценка за текущий месяц" barSize={60}/>
                  </ComposedChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Статус по разделам (справа) */}
          <div className="col-span-1">
            <Card className="bg-slate-800 h-full">
              <CardContent className="p-4 h-full">
                <h2 className="text-lg font-semibold mb-2">Статус по разделам ДК ТОС</h2>
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={sections} layout="vertical">
                    <XAxis type="number" stroke="#ccc" domain={[0, 3.5]}/>
                    <YAxis dataKey="name" type="category" width={180} stroke="#ccc"/>
                    <Tooltip/>
                    <Legend/>
                    <Bar dataKey="fact" fill="#4f83ff" name="Факт" barSize={60}/>
                    <Line type="monotone" dataKey="plan" stroke="#9bb3ff" strokeWidth={2} name="План"/>
                  </ComposedChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="bg-[#1E2432] text-white min-h-screen p-6">
          <h1 className="text-2xl font-bold mb-6">
            Выполнение мероприятий по ДК ТОС АО «ЖДРМ»
          </h1>

          {/* === Панель фильтров === */}
          <div className="flex flex-wrap gap-2 mb-6">
            <div className="flex gap-2">
              {["2024", "2025", "2026", "2027"].map((y) => (
                  <button key={y} className="bg-[#2A3144] hover:bg-[#39425C] px-3 py-1 rounded-lg">
                    {y}
                  </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 ml-6">
              {["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"].map((m) => (
                  <button key={m} className="bg-[#2A3144] hover:bg-[#39425C] px-3 py-1 rounded-lg text-sm">{m}</button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 ml-6">
              {["УЛРЗ", "УУЛВРЗ", "ОЛРЗ", "ЧЭРЗ", "АТРЗ", "РЭРЗ", "ВТРЗ", "ЯЭРЗ"].map((p) => (
                  <button key={p} className="bg-[#2A3144] hover:bg-[#39425C] px-3 py-1 rounded-lg text-sm">{p}</button>
              ))}
            </div>
          </div>

          {/* === Верхний ряд === */}
          <div className="grid grid-cols-3 gap-6">
            {/* По месяцам */}
            <div className="bg-[#2A3144] rounded-2xl p-4">
              <h2 className="text-lg mb-2 font-semibold">Выполнение мероприятий по ДК ТОС по месяцам</h2>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#3E4A63"/>
                  <XAxis dataKey="name"/>
                  <YAxis/>
                  <Tooltip/>
                  <Legend/>
                  <Bar dataKey="факт" fill="#6BA7FF" barSize={20}/>
                  <Line type="monotone" dataKey="план" stroke="#FFFFFF" strokeWidth={2}/>
                </BarChart>
              </ResponsiveContainer>
              <p className="text-center mt-2 text-gray-300">Факт на текущий момент: <b>8054</b></p>
            </div>

            {/* По филиалам */}
            <div className="bg-[#2A3144] rounded-2xl p-4">
              <h2 className="text-lg mb-2 font-semibold">Выполнение мероприятий по ДК ТОС по филиалам</h2>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={branchData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#3E4A63"/>
                  <XAxis dataKey="name"/>
                  <YAxis/>
                  <Tooltip/>
                  <Legend/>
                  <Bar dataKey="факт" fill="#6BA7FF" barSize={20}/>
                  <Line type="monotone" dataKey="план" stroke="#FFFFFF" strokeWidth={2}/>
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* По уровням */}
            <div className="bg-[#2A3144] rounded-2xl p-4">
              <h2 className="text-lg mb-2 font-semibold">Выполнение мероприятий по уровням</h2>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart layout="vertical" data={levelData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#3E4A63"/>
                  <XAxis type="number"/>
                  <YAxis dataKey="name" type="category"/>
                  <Tooltip/>
                  <Legend/>
                  <Bar dataKey="lvl1" stackId="a" fill="#6BA7FF" barSize={18}/>
                  <Bar dataKey="lvl2" stackId="a" fill="#5E8EE8" barSize={18}/>
                  <Bar dataKey="lvl3" stackId="a" fill="#547BCC" barSize={18}/>
                  <Bar dataKey="lvl4" stackId="a" fill="#4A6BB0" barSize={18}/>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* === Таблица === */}
          <div className="bg-[#2A3144] rounded-2xl mt-6 p-4">
            <h2 className="text-lg mb-2 font-semibold">Раздел</h2>
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
      </>
  );
};

export default Dashboard;
