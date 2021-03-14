import DashboardScreen from '../../screens/dashboard/dashboardScreen'

const Routes = [
    {name: 'Dashboard', label: 'Dashboard', icon: 'home', component: DashboardScreen},
    {name: 'Freinds', label: 'Freinds', icon: 'user', component: DashboardScreen},
    {name: 'NewSettlement', label: 'New Settlement', icon: 'envelope-o', component: DashboardScreen},
    {name: 'SettlementHistory', label: 'Settlement History', icon: 'globe', component: DashboardScreen},
    {name: 'BankRoll', label: 'Bank Roll', icon: 'minus-square', component: DashboardScreen},
    {name: 'Settings', label: 'Settings', icon: 'cog', component: DashboardScreen}]

export default Routes;