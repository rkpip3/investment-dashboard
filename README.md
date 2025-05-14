# Investment Dashboard

A fully-featured investment dashboard built with Next.js, React, Redux (RTK), Chart.js, and Google Charts. This app provides performance metrics, sector allocation breakdown, and overlap analysis for investment portfolios.

## 🚀 Features

* **Performance Metrics** with interactive time-range buttons (1M, 3M, 6M, 1Y, 3Y, MAX)
* **Sector Allocation** grid with hoverable sub-details
* **Overlap Analysis** using a Sankey diagram to visualize holdings overlap
* **Routing** for Home, Portfolio, Mutual Funds, Tools, Transactions, and sidebar tabs (PHA, Fund Analysis, Holdings, Transactions)
* **Global State** managed via Redux Toolkit
* **Error Boundary** for robust runtime error handling
* **Custom Fonts** loaded via Next.js `_document.js`

## 📁 Project Structure

```
investment-dashboard/
├─ public/
│  ├─ assets/             # static images (logo)
│  └─ fonts/              # custom font files
├─ src/
│  ├─ components/         # reusable UI components
│  │   ├─ ErrorBoundary.jsx
│  │   ├─ Header.jsx
│  │   ├─ Sidebar.jsx
│  │   ├─ SummaryCards.jsx
│  │   ├─ PerformanceChart.jsx
│  │   ├─ SectorGrid.jsx
│  │   └─ OverlapAnalysis.jsx
│  ├─ pages/              # Next.js file-based routes
│  │   ├─ _app.jsx        # App wrapper with layout
│  │   ├─ _document.jsx   # custom document (font preloading)
│  │   ├─ index.jsx       # Home page
│  │   ├─ portfolio.jsx
│  │   ├─ mutual-funds.jsx
│  │   ├─ tools.jsx
│  │   ├─ transactions.jsx
│  │   ├─ pha.jsx
│  │   ├─ fund-analysis.jsx
│  │   ├─ holdings.jsx
│  │   └─ ...             # additional pages
│  ├─ store/              # Redux store setup
│  │   ├─ store.js
│  │   └─ slices/
│  │       ├─ performanceSlice.js
│  │       └─ sectorSlice.js
│  └─ styles/
│      └─ globals.css     # global styles
├─ .gitignore
├─ next.config.js         # Next.js configuration
├─ package.json
└─ README.md
```

## 🛠️ Installation

1. **Clone the repo**

   ```bash
   git clone https://github.com/rkpip3/investment-dashboard.git
   cd investment-dashboard
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production**

   ```bash
   npm run build
   npm start
   ```

## 🖥️ Available Scripts

* `npm run dev` — Start Next.js in development mode
* `npm run build` — Build the app for production
* `npm start` — Start the production build
* `npm run lint` — (if configured) Run linting checks

## ⚙️ Configuration

* **Environment variables**: Place in `.env.local` (ignored by git)
* **Fonts & Assets**: Stored under `public/fonts` and `public/assets`
* **Customizing Redux**: Add new slices under `src/store/slices`

## 📦 Technologies

* [Next.js](https://nextjs.org/) — React framework for SSR & routing
* [React](https://reactjs.org/) — UI library
* [Redux Toolkit](https://redux-toolkit.js.org/) — Simplified Redux state management
* [react-chartjs-2](https://github.com/reactchartjs/react-chartjs-2) + Chart.js — Line charts
* [react-google-charts](https://github.com/RakanNimer/react-google-charts) — Sankey diagrams
* [Font Awesome](https://fontawesome.com/) — Icons

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
