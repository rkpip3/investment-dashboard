import { Chart } from 'react-google-charts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'

export default function OverlapAnalysis() {
    const rows = [
        ['Fund', 'Stock', 'Overlap'],

        // Nippon overlaps 6 stocks
        ['Nippon Large Cap Fund - Direct Plan', 'HDFC LTD.', 1],
        ['Nippon Large Cap Fund - Direct Plan', 'RIL', 1],
        ['Nippon Large Cap Fund - Direct Plan', 'INFY', 1],
        ['Nippon Large Cap Fund - Direct Plan', 'TCS', 1],
        ['Nippon Large Cap Fund - Direct Plan', 'HDFCBANK', 1],
        ['Nippon Large Cap Fund - Direct Plan', 'BHARTIARTL', 1],
        // Motilal overlaps 5
        ['Motilal Large Cap Fund - Direct Plan', 'RIL', 1],
        ['Motilal Large Cap Fund - Direct Plan', 'INFY', 1],
        ['Motilal Large Cap Fund - Direct Plan', 'TCS', 1],
        ['Motilal Large Cap Fund - Direct Plan', 'HDFCBANK', 1],
        ['Motilal Large Cap Fund - Direct Plan', 'BHARTIARTL', 1],
        // HDFC overlaps 4
        ['HDFC Large Cap Fund', 'HDFC LTD.', 1],
        ['HDFC Large Cap Fund', 'INFY', 1],
        ['HDFC Large Cap Fund', 'TCS', 1],
        ['HDFC Large Cap Fund', 'HDFCBANK', 1],
        // ICICI overlaps 3
        ['ICICI Prudential Midcap Fund', 'RIL', 1],
        ['ICICI Prudential Midcap Fund', 'INFY', 1],
        ['ICICI Prudential Midcap Fund', 'BHARTIARTL', 1],
    ]
    return (
        <div className="overlap-analysis-section">
            <h4>Overlap Analysis <FontAwesomeIcon icon={faCircleInfo} /></h4>
            <div className="info">
                <h3>Comparing : Motilal Large Cap Fund and Nippon Large Cap Fund</h3>
                <p><strong>X Stocks Overlap </strong> across these funds.</p>
                <p><strong>Y% Average Overlap </strong> in holdings.</p>
            </div>

            <Chart
                chartType="Sankey"
                width="100%"
                height="300px"
                data={rows}
                options={{
                    sankey: { node: { label: { fontSize: 12, color: '#EEE' } }, }
                }}
            />
        </div>
    )
}
