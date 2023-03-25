import { PieChart, Pie, Tooltip } from 'recharts';

const Diagram = ( {data} ) => {
    
    let renderLabel = function(entry) {
        return entry.name;
    }
    
    return (
                
        <PieChart width={500} height={300}>
            <Pie
            dataKey="cost"
            isAnimationActive={true}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="rgb(6 95 70)"
            label={renderLabel}
             />
            <Tooltip />
        </PieChart>
    )
}

export default Diagram