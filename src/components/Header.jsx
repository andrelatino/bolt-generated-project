import { Bell, User } from 'lucide-react'

export function Header() {
  return (
    <header className="border-b">
      <div className="flex h-16 items-center px-4">
        <div className="ml-auto flex items-center space-x-4">
          <button className="p-2 hover:bg-accent rounded-md">
            <Bell className="h-5 w-5" />
          </button>
          <button className="p-2 hover:bg-accent rounded-md">
            <User className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  )
}
