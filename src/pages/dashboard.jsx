import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Rocket, Target, Moon, PieChart, Brain, Bot } from 'lucide-react';
import ChatBot from '../components/chatbot.jsx';
import ChatBot from '../components/chatbot.jsx';
import Sidebar from '../components/Sidebar.jsx';
import { useNavigate } from 'react-router-dom';
import './dashboard.css';
import stubDatabase from '../../stubdata.js';
import botPic from '../assets/botPic.png';
import mindfulPic from '../assets/mindfulPic.png';

export default function Dashboard() {
  const navigate = useNavigate();

  const quotes = [
    { quote: "Failure is simply the opportunity to begin again, this time more intelligently.", author: "Henry Ford", date: "2/21/2025" },
    { quote: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt", date: "2/22/2025" },
    { quote: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs", date: "2/23/2025" },
    { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs", date: "2/24/2025" },
    { quote: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer", date: "2/25/2025" },
    { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt", date: "2/26/2025" },
    { quote: "The best way to predict the future is to invent it.", author: "Alan Kay", date: "2/27/2025" },
    { quote: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt", date: "2/28/2025" },
    { quote: "The purpose of our lives is to be happy.", author: "Dalai Lama", date: "3/1/2025" },
    { quote: "Life is what happens when you're busy making other plans.", author: "John Lennon", date: "3/2/2025" },
    { quote: "Get busy living or get busy dying.", author: "Stephen King", date: "3/3/2025" },
    { quote: "You have within you right now, everything you need to deal with whatever the world can throw at you.", author: "Brian Tracy", date: "3/4/2025" },
    { quote: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.", author: "Christian D. Larson", date: "3/5/2025" },
    { quote: "The only way to achieve the impossible is to believe it is possible.", author: "Charles Kingsleigh", date: "3/6/2025" },
    { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt", date: "3/7/2025" },
    { quote: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson", date: "3/8/2025" },
    { quote: "Keep your face always toward the sunshine—and shadows will fall behind you.", author: "Walt Whitman", date: "3/9/2025" },
    { quote: "The best revenge is massive success.", author: "Frank Sinatra", date: "3/10/2025" },
    { quote: "The only place where success comes before work is in the dictionary.", author: "Vidal Sassoon", date: "3/11/2025" },
    { quote: "Don't be afraid to give up the good to go for the great.", author: "John D. Rockefeller", date: "3/12/2025" }
  ];

  const [currentQuote, setCurrentQuote] = useState(quotes[0]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  }, []);


  return (
    console.log(stubDatabase),
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-main">
        <div className="dashboard-header">
          <div className="dashboard-header-icon">
            <Rocket className="w-6 h-6" />
          </div>
          <h1 className="dashboard-header-title">Dashboard</h1>
          <h2 className="dashboard-header-subtitle">Welcome back, User!</h2>
        </div>

        <div className="dashboard-content">
          <ChatBot />

          <section className="daily-quote">
            <div className="overlap-group">
              <p className="quote-text">{currentQuote.quote}</p>
              <div className="overlap">
                <div className="text-wrapper">- {currentQuote.author}</div>
                <div className="div">{currentQuote.date}</div>
              </div>
            </div>
          </section>

          <section className="dashboard-section">
            <h2 className="dashboard-section-title">Earn Badges as you reach milestones and stay motivated</h2>
            <div className="dashboard-badges">
              <Badge icon={<Target className="w-8 h-8" />} color="badge-red" />
              <Badge icon={<Moon className="w-8 h-8" />} color="badge-yellow" />
            </div>
          </section>

          <div className="dashboard-cards">

            {/* 
            Feature will arrive in ITR2
            <DashboardCard         
              title="Macro Tracker"
              description="Track your daily macros effortlessly!"
              icon={<PieChart className="w-16 h-16 text-gray-600" />}
              bgColor="dashboard-card-purple"
            /> */}
            
            <DashboardCard  
              title="Mindful Check-in"
              description="Complete your daily check-in now"
              icon={<Brain className="w-16 h-16 text-gray-600" />}
              bgColor="dashboard-card"
              image= {mindfulPic}
            />

            <DashboardCard
              title="Wellness bot"
              description="Meet your personal wellness bot!"
              icon={<Bot className="w-16 h-16 text-gray-600" />}
              bgColor="dashboard-card"
              image= {botPic}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Badge({ icon, color }) {  //creates construcoor for badges with icon and color
  return (
    <div className={`badge ${color}`}>
      {typeof icon === 'string' ? <span className="text-xl font-semibold">{icon}</span> : icon}
    </div>
  );
}

function DashboardCard({ title, description, image, bgColor, toDo }) {   //creates constructor for dashboard cards with title, description, icon and background color
  return (
    <div className={`dashboard-card ${bgColor}`}>
      <div className="dashboard-card-header">
        <h3 className="dashboard-card-title">{title}</h3>
      </div>
      <img className="dashboard-card-image" src={image}/>
      <p className="dashboard-card-description">{description}</p>
    </div>
  );
}