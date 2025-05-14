// /Users/raghav/Desktop/arTea/investment-dashboard/src/components/PerformanceChart.jsx

import { useSelector, useDispatch } from 'react-redux'
import { Line } from 'react-chartjs-2'
import { setRange } from '../store/slices/performanceSlice'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export default function PerformanceChart() {
    const dispatch = useDispatch()
    const { range, data } = useSelector(s => s.performance)
    const cfg = {
        data: {
            labels: data[range].labels,
            datasets: [{
                data: data[range].data,
                fill: false,
                tension: 0.3,
                borderColor: '#0080ff',
                pointBackgroundColor: '#12b9ff',
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    type: 'linear',
                    ticks: { color: '#EEE' },
                    grid: { color: '#333' }
                }
            },
            plugins: { legend: { display: false } }
        }
    }
    return (
        <div className="time-filters-container">
            <div className="info-box">
                <h3>₹5,50,000</h3>
                <p className="positive">+₹50,000 | 10%</p>
            </div>

            <Line {...cfg} />

            <div className="time-filters">
                {['1M', '3M', '6M', '1Y', '3Y', 'MAX'].map(r => (
                    <button key={r}
                        className={r === range ? 'active' : ''}
                        onClick={() => dispatch(setRange(r))}>
                        {r}
                    </button>
                ))}
            </div>

        </div>
    )
}
