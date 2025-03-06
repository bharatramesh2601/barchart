import { useMemo } from "react"

const Bar = ({
    name,
    color,
    ticketCount,
    height
}) => {
    return (
        <div 
        className="bar"
        style={{
            height: `${height}%`,
            // height: `${ticketCount}%`,
            backgroundColor: color
        }}
        />
    )
}

const BarChart = ({ data }) => {
    const maxTicketCount = useMemo(() => {
        return Math.max(...data.map(item => item.ticketCount));
    }, [])
    return (
        <div className="chart-container">
            <div className="chart">
                {
                    data.map(item => {
                        return <Bar 
                        key={item.id}
                        // 30 / 60 * 100 = 50
                        height={item.ticketCount / maxTicketCount * 100}
                        {...item}/>
                    })
                }
            </div>
            <div className="y-axis-label">No. of Tickets</div>
            <div className="x-axis-label">Departments</div>
        </div>
    )
}

export default BarChart;