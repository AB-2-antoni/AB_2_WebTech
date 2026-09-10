import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

  const app = {
    name: "WebTech",
    version: "1.0",
    author: "Antoni Białecki",
    technologiesCount: 3
  };

  const technology = {
    name: "React",
    category: "Frontend",
    hours: 30,
    active: true
  };
  const student = {
    name: "Antoni",
    surname: "Białecki",
    className: "4P",
    specialization: "technik programista"
  };
  return (
    <div>

      <h1>{app.name}</h1>

      <p>Wersja: {app.version}</p>

      <p>Autor: {app.author}</p>

      <p>Liczba technologii: {app.technologiesCount}</p>

      <p>{technology.name}</p>

      <p>Kategoria {technology.category}</p>

      <p>Liczba godzin: {technology.hours}</p>
      
      <p>Uczeń: {student.name} {student.surname}</p>

      <p>Klasa: {student.className}</p>

      <p>Kierunek: {student.specialization}</p>
    </div>

  );
}

export default App;
