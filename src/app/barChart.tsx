const BarChart = ({ data }) => {
    return (
        <div className="chart-container">
            <div className="chart"></div>
            <div className="y-axis-label">No. of Tickets</div>
            <div className="x-axis-label">Departments</div>
        </div>
    )
}

export default BarChart;