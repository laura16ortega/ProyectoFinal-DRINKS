import "./chart.css"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Chart() {
    const data = [
        {
          name: 'Cerveza',
          "Active User": 4000,
        },
        {
            name: 'Vino',
            "Active Product": 2000,
          },
          {
            name: 'Whiskhey ',
            "Active Product": 6000,
          },
          {
            name: 'Champagne',
            "Active Product": 3000,
          },
          {
            name: 'Vodka',
            "Active Product": 2000,
          },
      ];
      
  return (
    <div className="chart">
        <h3 className="chartTitle">Análisis de Producto</h3>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
            <LineChart data={data}>
                <XAxis dataKey="name" stroke="#5550bd" />
                <Line type="monotone" dataKey="Active Product"  stroke="#5550bd"/>
                <Tooltip />
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}
