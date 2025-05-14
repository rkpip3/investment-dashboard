import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowTrendUp, faArrowTrendDown } from '@fortawesome/free-solid-svg-icons'


export default function SummaryCards() {
    const cards = [
        { title: 'Current Investment Value', value: '₹5,75,000', change: '+0.6%', label: '1D Return' },
        { title: 'Initial Investment Value', value: '₹5,00,000', change: '+15%%', label: 'Inception' },
        { title: 'Best Performing Scheme', value: 'ICICI Prudential Midcap Fund', change: '+19%', label: 'Inception' },
        { title: 'Worst Performing Scheme', value: 'Axis Flexi Cap Fund', change: '-5%', label: 'Inception' },
    ]
    return (
        <div className="summary-cards">
            {cards.map(c => (
                <div key={c.title} className="card current">
                    <div className="names-values">
                        <p className="names-values-title">{c.title}</p>
                        <span className={c.change.startsWith('+') ? 'positive' : 'negative'}>
                            {c.change.startsWith('+') ? <FontAwesomeIcon className='summary-card-icon' icon={faArrowTrendUp} /> : <FontAwesomeIcon className='summary-card-icon' icon={faArrowTrendDown} />}
                            {c.change}
                            <p className="retunr-small-text">{c.label}</p>
                        </span>
                    </div>
                    <h3>{c.value}</h3>
                </div>
            ))}
        </div>
    )
}
