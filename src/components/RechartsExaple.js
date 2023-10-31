import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from "recharts"

const data = [
    {name: "2017", react: 32, angular: 37, vue: 60},
    {name: "2018", react: 44, angular: 27, vue: 70},
    {name: "2019", react: 52, angular: 57, vue: 46},
    {name: "2020", react: 47, angular: 67, vue: 85},
]

const RechartsExample = () => {
    return <div>
        <LineChart width={300} height={300} data={data}>
            <Line type="monotone" dataKey="react" stroke="#2196F3" strokeWidth={3}/>
            <Line type="monotone" dataKey="angular" stroke="#F44236" strokeWidth={3}/>
            <Line type="monotone" dataKey="vue" stroke="#FFCA29" strokeWidth={3}/>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
        </LineChart>
    </div>
}

export default RechartsExample