import { lazy, Suspense } from 'react'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

const Charts = lazy(() => import('./components/charts'))

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <Sidebar className="w-64 border-r" />
        <main className="flex-1 p-8">
          <h1 className="text-3xl font-bold">Welcome to Admin Panel</h1>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border bg-card p-4">
              <h3 className="text-sm font-medium">Total Revenue</h3>
              <div className="text-2xl font-bold">$45,231.89</div>
              <p className="text-xs text-muted-foreground">+20.1% from last month</p>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <h3 className="text-sm font-medium">Subscriptions</h3>
              <div className="text-2xl font-bold">+2350</div>
              <p className="text-xs text-muted-foreground">+180.1% from last month</p>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <h3 className="text-sm font-medium">Sales</h3>
              <div className="text-2xl font-bold">+12,234</div>
              <p className="text-xs text-muted-foreground">+19% from last month</p>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <h3 className="text-sm font-medium">Active Users</h3>
              <div className="text-2xl font-bold">+573</div>
              <p className="text-xs text-muted-foreground">+201 since last hour</p>
            </div>
          </div>

          <Suspense fallback={<div className="mt-8">Loading charts...</div>}>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border bg-card p-4">
                <h3 className="text-lg font-medium mb-4">Revenue Over Time</h3>
                <Charts.RevenueChart />
              </div>
              <div className="rounded-lg border bg-card p-4">
                <h3 className="text-lg font-medium mb-4">Daily Active Users</h3>
                <Charts.UsersChart />
              </div>
            </div>
          </Suspense>
        </main>
      </div>
    </div>
  )
}

export default App
