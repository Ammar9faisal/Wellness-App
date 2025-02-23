import React from 'react';
import { ArrowUpRight, Rocket, Target, Moon, PieChart, Brain, Bot } from 'lucide-react';
import './dashboard.css';

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <div className="dashboard-header-icon">
          <Rocket className="w-6 h-6" />
        </div>
        <h1 className="dashboard-header-title">Hi, User!</h1>
      </div>

      <section className="dashboard-section">
        <h2 className="dashboard-section-title">Earn Badges as you reach milestones and stay motivated</h2>
        <div className="dashboard-badges">
          <Badge icon={<Target className="w-8 h-8" />} color="badge-red" />
          <Badge icon={<Moon className="w-8 h-8" />} color="badge-yellow" />
          <Badge icon="14" color="badge-orange" />
        </div>
      </section>

      <div className="dashboard-cards">
        <DashboardCard
          title="Macro Tracker"
          description="Track your daily macros effortlessly!"
          icon={<PieChart className="w-16 h-16 text-gray-600" />}
          bgColor="dashboard-card-purple"
        />
        <DashboardCard
          title="Mindful Check-in"
          description="Complete your daily check-in now"
          icon={<Brain className="w-16 h-16 text-gray-600" />}
          bgColor="dashboard-card-white"
        />
        <DashboardCard
          title="Wellness bot"
          description="Meet your personal wellness bot!"
          icon={<Bot className="w-16 h-16 text-gray-600" />}
          bgColor="dashboard-card-purple"
        />
      </div>
    </div>
  );
}

function Badge({ icon, color }) {
  return (
    <div className={`badge ${color}`}>
      {typeof icon === 'string' ? <span className="text-xl font-semibold">{icon}</span> : icon}
    </div>
  );
}

function DashboardCard({ title, description, icon, bgColor }) {
  return (
    <div className={`dashboard-card ${bgColor}`}>
      <div className="dashboard-card-header">
        <h3 className="dashboard-card-title">{title}</h3>
        <button className="dashboard-card-button">
          <ArrowUpRight className="h-4 w-4" />
        </button>
      </div>
      <p className="dashboard-card-description">{description}</p>
      <div className="dashboard-card-icon">{icon}</div>
    </div>
  );
}