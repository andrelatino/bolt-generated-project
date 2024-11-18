import { Home, Users, Settings, BarChart2 } from 'lucide-react'

export function Sidebar({ className }) {
  return (
    <div className={`pb-12 min-h-screen ${className}`}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold">Dashboard</h2>
          <div className="space-y-1">
            <button className="w-full flex items-center py-2 px-4 rounded-md hover:bg-accent">
              <Home className="mr-2 h-4 w-4" />
              Home
            </button>
            <button className="w-full flex items-center py-2 px-4 rounded-md hover:bg-accent">
              <Users className="mr-2 h-4 w-4" />
              Users
            </button>
            <button className="w-full flex items-center py-2 px-4 rounded-md hover:bg-accent">
              <BarChart2 className="mr-2 h-4 w-4" />
              Analytics
            </button>
            <button className="w-full flex items-center py-2 px-4 rounded-md hover:bg-accent">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
