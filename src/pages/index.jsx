// src/pages/index.jsx
import { useState } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import SummaryCards from '../components/SummaryCards'
import PerformanceChart from '../components/PerformanceChart'
import SectorGrid from '../components/SectorGrid'
import OverlapAnalysis from '../components/OverlapAnalysis'
import ErrorBoundary from '../components/ErrorBoundary'

export default function Home() {

    const [activeTab, setActiveTab] = useState('metrics')  // 'metrics' or 'composition'

    return (
        <ErrorBoundary>
            <main className="layout">
                <section className="dashboard">
                    <h2>Good morning, Yashna!</h2>
                    <p className="subhead">Evaluate Your Investment Performance</p>
                    <SummaryCards />
                    <div className="performance-tabs">
                        <button
                            id="tab-metrics"
                            className={activeTab === 'metrics' ? 'active' : ''}
                            onClick={() => setActiveTab('metrics')}
                        >Performance Metrics</button>
                        <button id="tab-composition"

                            className={activeTab === 'composition' ? 'active' : ''}
                            onClick={() => setActiveTab('composition')}
                        >Portfolio Composition</button>
                    </div>

                    <div className="performance-summary">
                        <div className="chart-container">
                            {activeTab === 'metrics' ? (
                                <PerformanceChart />
                            ) : (
                                <>
                                    <SectorGrid />
                                    <OverlapAnalysis />
                                </>
                            )}
                        </div>
                    </div>

                </section>
            </main>
        </ErrorBoundary>
    )
}
