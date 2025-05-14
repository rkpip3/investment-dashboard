// /Users/raghav/Desktop/arTea/investment-dashboard/src/components/SectorGrid.jsx
import { useSelector } from 'react-redux';

export default function SectorGrid() {

    const sectors = useSelector(s => s.sector.sectors);

    return (
        <div className="portfolio-composition-container">
            <h3>Sector Allocation</h3>
            <div className="sector-grid">

                {sectors.map(sec => (

                    <div
                        key={sec.name}
                        className={`sector-card ${sec.sub_details ? ' active' : ''}`}
                        style={{
                            background: sec.background,
                            width: sec.width,
                        }}
                    >
                        <div className="first-container name">{sec.name}</div>
                        <div className="first-container amount">₹{sec.amount.toLocaleString()}</div>
                        <div className="first-container pct">{sec.pct}</div>

                        <div className="sector-card-hover-screen" >
                            {sec.details.map(d => (
                                <div
                                    key={d.name}
                                    className="card-hover-container"
                                    style={{
                                        width: d.width,
                                        borderTopLeftRadius: d.borderTopLeftRadius,
                                        borderTopRightRadius: d.borderTopRightRadius,
                                        borderBottomLeftRadius: d.borderBottomLeftRadius,
                                        borderBottomRightRadius: d.borderBottomRightRadius,
                                    }}
                                >
                                    <div className="name-small">{d.name}</div>
                                    <div className="amount-small">₹{d.amount.toLocaleString()}</div>
                                    <div className="pct-small">{d.pct}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                ))}

            </div>
        </div>
    )
}
