// src/components/ErrorBoundary.jsx
import React from 'react'

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = { hasError: false }
    }
    static getDerivedStateFromError() { return { hasError: true } }
    componentDidCatch(err, info) { console.error(err, info) }
    render() {
        if (this.state.hasError) {
            return <div style={{ padding: '2rem', color: '#f44336' }}>
                Oops — something went wrong.
            </div>
        }
        return this.props.children
    }
}
