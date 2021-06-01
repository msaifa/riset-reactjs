import React from 'react';


// ini adalah bawaan template dari react
const Toaster = React.lazy(() => import('./views/template/notifications/toaster/Toaster'));
const Tables = React.lazy(() => import('./views/template/base/tables/Tables'));

const Breadcrumbs = React.lazy(() => import('./views/template/base/breadcrumbs/Breadcrumbs'));
const Cards = React.lazy(() => import('./views/template/base/cards/Cards'));
const Carousels = React.lazy(() => import('./views/template/base/carousels/Carousels'));
const Collapses = React.lazy(() => import('./views/template/base/collapses/Collapses'));
const BasicForms = React.lazy(() => import('./views/template/base/forms/BasicForms'));

const Jumbotrons = React.lazy(() => import('./views/template/base/jumbotrons/Jumbotrons'));
const ListGroups = React.lazy(() => import('./views/template/base/list-groups/ListGroups'));
const Navbars = React.lazy(() => import('./views/template/base/navbars/Navbars'));
const Navs = React.lazy(() => import('./views/template/base/navs/Navs'));
const Paginations = React.lazy(() => import('./views/template/base/paginations/Pagnations'));
const Popovers = React.lazy(() => import('./views/template/base/popovers/Popovers'));
const ProgressBar = React.lazy(() => import('./views/template/base/progress-bar/ProgressBar'));
const Switches = React.lazy(() => import('./views/template/base/switches/Switches'));

const Tabs = React.lazy(() => import('./views/template/base/tabs/Tabs'));
const Tooltips = React.lazy(() => import('./views/template/base/tooltips/Tooltips'));
const BrandButtons = React.lazy(() => import('./views/template/buttons/brand-buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() => import('./views/template/buttons/button-dropdowns/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('./views/template/buttons/button-groups/ButtonGroups'));
const Buttons = React.lazy(() => import('./views/template/buttons/buttons/Buttons'));
const Charts = React.lazy(() => import('./views/template/charts/Charts'));
const Dashboard = React.lazy(() => import('./views/template/dashboard/Dashboard'));
const CoreUIIcons = React.lazy(() => import('./views/template/icons/coreui-icons/CoreUIIcons'));
const Flags = React.lazy(() => import('./views/template/icons/flags/Flags'));
const Brands = React.lazy(() => import('./views/template/icons/brands/Brands'));
const Alerts = React.lazy(() => import('./views/template/notifications/alerts/Alerts'));
const Badges = React.lazy(() => import('./views/template/notifications/badges/Badges'));
const Modals = React.lazy(() => import('./views/template/notifications/modals/Modals'));
const Colors = React.lazy(() => import('./views/template/theme/colors/Colors'));
const Typography = React.lazy(() => import('./views/template/theme/typography/Typography'));
const Widgets = React.lazy(() => import('./views/template/widgets/Widgets'));
const Users = React.lazy(() => import('./views/template/users/Users'));
const User = React.lazy(() => import('./views/template/users/User'));
// end of template

const HomePage = React.lazy(() => import('./views/dashboard'));
const PenjualanObat = React.lazy(() => import('./views/penjualan-obat'));
const PenjualanObatPencarian = React.lazy(() => import('./views/penjualan-obat/pencarian'));
const PenjualanObatBayar = React.lazy(() => import('./views/penjualan-obat/bayar'));

const routes = [
  { path: '/', exact: true, name: 'Home', component: HomePage },
  { path: '/penjualan-obat/pencarian', name: 'Dashboard', component: PenjualanObatPencarian },
  { path: '/penjualan-obat/bayar', name: 'Dashboard', component: PenjualanObatBayar },
  { path: '/penjualan-obat', name: 'Dashboard', component: PenjualanObat },
  { path: '/ex/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/ex/theme', name: 'Theme', component: Colors, exact: true },
  { path: '/ex/theme/colors', name: 'Colors', component: Colors },
  { path: '/ex/theme/typography', name: 'Typography', component: Typography },
  { path: '/ex/base', name: 'Base', component: Cards, exact: true },
  { path: '/ex/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/ex/base/cards', name: 'Cards', component: Cards },
  { path: '/ex/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/ex/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/ex/base/forms', name: 'Forms', component: BasicForms },
  { path: '/ex/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  { path: '/ex/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/ex/base/navbars', name: 'Navbars', component: Navbars },
  { path: '/ex/base/navs', name: 'Navs', component: Navs },
  { path: '/ex/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/ex/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/ex/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  { path: '/ex/base/switches', name: 'Switches', component: Switches },
  { path: '/ex/base/tables', name: 'Tables', component: Tables },
  { path: '/ex/base/tabs', name: 'Tabs', component: Tabs },
  { path: '/ex/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/ex/buttons', name: 'Buttons', component: Buttons, exact: true },
  { path: '/ex/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/ex/buttons/button-dropdowns', name: 'Dropdowns', component: ButtonDropdowns },
  { path: '/ex/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/ex/buttons/brand-buttons', name: 'Brand Buttons Ex', component: BrandButtons },
  { path: '/ex/charts', name: 'Charts', component: Charts },
  { path: '/ex/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/ex/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/ex/icons/flags', name: 'Flags', component: Flags },
  { path: '/ex/icons/brands', name: 'Brands', component: Brands },
  { path: '/ex/notifications', name: 'Notifications', component: Alerts, exact: true },
  { path: '/ex/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/ex/notifications/badges', name: 'Badges', component: Badges },
  { path: '/ex/notifications/modals', name: 'Modals', component: Modals },
  { path: '/ex/notifications/toaster', name: 'Toaster', component: Toaster },
  { path: '/ex/widgets', name: 'Widgets', component: Widgets },
  { path: '/ex/users', exact: true,  name: 'Users', component: Users },
  { path: '/ex/users/:id', exact: true, name: 'User Details', component: User }
];

export default routes;
