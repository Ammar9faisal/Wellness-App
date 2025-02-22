import React from 'react';
import { BarChart2, Heart, Users, Settings, LogOut } from 'lucide-react';

export function Sidebar() {
  return (
    <div className="w-16 bg-white border-r flex flex-col items-center py-4 gap-8">
      <div className="mb-8 text-xl font-bold">LOGO</div>
      <nav className="flex flex-col gap-6">
        <button className="p-2 rounded-lg bg-purple-100">
          <BarChart2 className="w-5 h-5" />
        </button>
        <button className="p-2 rounded-lg hover:bg-gray-100">
          <Heart className="w-5 h-5" />
        </button>
        <button className="p-2 rounded-lg hover:bg-gray-100">
          <Users className="w-5 h-5" />
        </button>
        <button className="p-2 rounded-lg hover:bg-gray-100">
          <Settings className="w-5 h-5" />
        </button>
      </nav>
      <button className="mt-auto p-2 rounded-lg hover:bg-gray-100">
        <LogOut className="w-5 h-5" />
      </button>
    </div>
  );
}
