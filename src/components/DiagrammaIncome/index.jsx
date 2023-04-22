import { PieChart, Pie, Tooltip } from 'recharts';

const DiagrammaIncome = ( {data} ) => {
    
    return (
                
        <PieChart width={500} height={300}>
            <Pie
            dataKey="cost"
            isAnimationActive={true}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="rgb(252 211 77)"
             />
            <Tooltip />
        </PieChart>
    )
}

export default DiagrammaIncome



