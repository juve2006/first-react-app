import React from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import './index.css';
import data from './data.js';

export default function App() {
    const cardElements = data.map((card) => {
        return (
            <Card
            key={card.id}
            {...card}
            />
        )
    });
  return (
    <div>
        <Navbar />
        <Hero />
        <section className='cards-list'>
            {cardElements}
        </section>
    </div>
  );
}

