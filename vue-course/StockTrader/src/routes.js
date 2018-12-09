// import all the components
import Home from './components/Home.vue'
import Stocks from './components/stocks/stocks.vue'
import Portfolio from './components/portfolio/portfolio.vue'

export const routes = [
  { path: '/', component: Home },
  { path: '/portfolio/', component: Portfolio },
  { path: '/stocks', component: Stocks },
]
