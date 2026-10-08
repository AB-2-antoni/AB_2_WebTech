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

function App() {
  const tech = [
    {id:1, name:"React"},
    {id:2, name:"JavaScript"},
    {id:3, name:"CSS"}
  ];


  const products = [
    {id:1, name:"Laptop", price: 1700},
    {id:2, name:"Monitor", price:800},
    {id:3, name:"Telefon", price:1999}
  ];

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
    const students = [
    { id: 1, name: "Anna", className: "4P", age: 17, specialization: "Programista" },
    { id: 2, name: "Jan", className: "4P", age: 18, specialization: "Programista" },
    { id: 3, name: "Adam", className: "4P", age: 17, specialization: "Programista" },
    { id: 4, name: "Daniel", className: "4P", age: 18, specialization: "Programista" }
  ];
  const books = [
    { id: 1, title: "Wiedźmin", author: "Andrzej Sapkowski" },
    { id: 2, title: "Hobbit", author: "J.R.R. Tolkien" },
    { id: 3, title: "Lalka", author: "Bolesław Prus" }
  ];
    const technologies = [
    {
      id: 1,
      name: "React",
      category: "Frontend",
      hours: 30
    },
    {
      id: 2,
      name: "Node.js",
      category: "Backend",
      hours: 40
    },
    {
      id: 3,
      name: "MySQL",
      category: "Database",
      hours: 20
    },
    {
      id: 4,
      name: "Express",
      category: "Backend",
      hours: 25
    },
    {
      id: 5,
      name: "MongoDB",
      category: "Baza danych",
      hours: 20
    }
  ];

  return (
    <div>

      
      {
        tech.map((tech)=>(
          <InfoBox 
            key={tech.id}
            name={tech.name}
          />
        ))
      }
      
      <OnClickLekcja/>
      {
        products.map((product)=>(
          <Product
            key={product.id}
            name={product.name}
            price={product.price}
          />
        ))
      }
      <p>Wersja: {app.version}</p>

      <p>Autor: {app.author}</p>

      <p>Liczba technologii: {app.technologiesCount}</p>

      <p>{technology.name}</p>

      <p>Kategoria {technology.category}</p>

      <p>Liczba godzin: {technology.hours}</p>
      
      <p>Uczeń: {student.name} {student.surname}</p>

      <p>Klasa: {student.className}</p>

      <p>Kierunek: {student.specialization}</p>

      {
        students.map((student)=>(
          <Student
            key={student.id}
            name={student.name}
            className={student.className}
            age={student.age}
            specialization={student.specialization}
          />
        ))
      }
      {
        books.map((book) => (
          <Book 
            key={book.id}
            title={book.title}
            author={book.author}
          />
        ))
      }
      {
        technologies.map((technology) => (
          <Technology 
            key={technology.id}
            title={technology.name}
            author={technology.category}
            hours={technology.hours}
          />
        ))
      }

    </div>

  );
}

export default App;
