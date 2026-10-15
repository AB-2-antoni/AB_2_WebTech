import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import Student from './components/Student'
import Book from './components/Book'
import Technology from './components/Technology'
import OnClickLekcja from './components/onClickLekcja'
import Product from './components/Product'
import InfoBox from './components/InfoBox'
import Technologies3 from './components/Technologies3'

function App() {


  const technologies3 = [
    { id: 1, name: "React", category: "Frontend", hours: 30, image: "react.webp" },
    { id: 2, name: "Node.js", category: "Backend", hours: 40, image: "nodejs.webp" },
    { id: 3, name: "MySQL", category: "Baza danych", hours: 20, image: "mysql.webp" },
    { id: 4, name: "Express", category: "Backend", hours: 25, image: "express.webp" },
    { id: 5, name: "MongoDB", category: "Baza danych", hours: 30, image: "mongodb.webp" },
    { id: 6, name: "Bootstrap", category: "Frontend", hours: 15, image: "bootstrap.webp" },
    { id: 7, name: "CSS", category: "Frontend", hours: 20, image: "css.webp" },
    { id: 8, name: "HTML", category: "Frontend", hours: 10, image: "html.webp" },
    { id: 9, name: "PHP", category: "Backend", hours: 35, image: "php.webp" }
  ];

  return (

    <div className="TechList">
      {technologies3.map((tech) => (
        <Technologies3
          key={tech.id}
          name={tech.name}
          category={tech.category}
          hours={tech.hours}
          image={tech.image}
        />
      ))}
    </div>
  );
}

export default App;
