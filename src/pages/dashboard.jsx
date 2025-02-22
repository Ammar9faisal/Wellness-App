import { ArrowUpRight, Rocket, Target, Moon, PieChart, Brain, Bot } from "lucide-react"

export default function Dashboard() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 flex items-center justify-center bg-red-100 rounded-lg">
          <Rocket className="w-6 h-6" />
        </div>
        <h1 className="text-2xl font-semibold">Hi, User!</h1>
      </div>

      <section className="mb-8">
        <h2 className="text-lg font-medium mb-4">Earn Badges as you reach milestones and stay motivated</h2>
        <div className="flex gap-4">
          <Badge icon={<Target className="w-8 h-8" />} color="bg-red-100" />
          <Badge icon={<Moon className="w-8 h-8" />} color="bg-yellow-100" />
          <Badge icon="14" color="bg-orange-100" />
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <DashboardCard
          title="Macro Tracker"
          description="Track your daily macros effortlessly!"
          icon={<PieChart className="w-16 h-16 text-gray-600" />}
          bgColor="bg-purple-50"
        />
        <DashboardCard
          title="Mindful Check-in"
          description="Complete your daily check-in now"
          icon={<Brain className="w-16 h-16 text-gray-600" />}
          bgColor="bg-white"
        />
        <DashboardCard
          title="Wellness bot"
          description="Meet your personal wellness bot!"
          icon={<Bot className="w-16 h-16 text-gray-600" />}
          bgColor="bg-purple-100"
        />
      </div>
    </div>
  )
}

function Badge({ icon, color }) {
  return (
    <div className={`w-16 h-16 rounded-full ${color} flex items-center justify-center`}>
      {typeof icon === "string" ? <span className="text-xl font-semibold">{icon}</span> : icon}
    </div>
  )
}

function DashboardCard({ title, description, icon, bgColor }) {
  return (
    <div className={`p-6 ${bgColor} rounded-lg shadow-sm`}>
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <button className="p-1 hover:bg-gray-200 rounded-full">
          <ArrowUpRight className="h-4 w-4" />
        </button>
      </div>
      <p>{description}</p>
      <div className="mt-4 flex justify-center">
        <div className="w-32 h-32 flex items-center justify-center">{icon}</div>
      </div>
    </div>
  )
}