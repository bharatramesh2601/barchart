import { useMemo } from "react";
import { motion } from "framer-motion";

const Bar = ({
    name,
    color,
    ticketCount,
    height
}) => {
    return (
        <motion.div 
        className="bar"
        initial={{ height: 0 }}
        animate={{ height: `${height}%` }}
        exit={{ height: 0 }}
        transition={{ duration: 4 }}
        style={{
            height: `${height}%`,
            // height: `${ticketCount}%`,
            backgroundColor: color
        }}
        >
            <div className="tooltip">
                {name} = {ticketCount}
            </div>
        </motion.div>
    )
}

const BarChart = ({ data }) => {
    const maxTicketCount = useMemo(() => {
        return Math.max(...data.map(item => item.ticketCount));
    }, [])
    return (
        <motion.div 
            className="chart-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
        >
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
        </motion.div>
    )
}

export default BarChart;