import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Mon', users: 340 },
  { name: 'Tue', users: 450 },
  { name: 'Wed', users: 520 },
  { name: 'Thu', users: 480 },
  { name: 'Fri', users: 390 },
  { name: 'Sat', users: 280 },
  { name: 'Sun', users: 250 },
]

export function UsersChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="users" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
