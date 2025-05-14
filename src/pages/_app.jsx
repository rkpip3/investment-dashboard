// src/pages/_app.jsx
import '../styles/globals.css'
import { Provider } from 'react-redux'
import store from '../store/store'
import ErrorBoundary from '../components/ErrorBoundary'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

export default function App({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <ErrorBoundary>
                <Header />

                <main className="layout">
                    <Sidebar />
                    <section className="dashboard">
                        <Component {...pageProps} />
                    </section>
                </main>
            </ErrorBoundary>
        </Provider>
    )
}
