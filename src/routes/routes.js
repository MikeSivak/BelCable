import HomePage from "../components/HomePage/HomePage";
import ProductPage from "../components/ProductPage/ProductPage";
import CardPage from "../components/CardPage/CardPage";
import Calculator from "../components/Calculator/Calculator";
import HistoryPage from "../components/HistoryPage/HistoryPage";
import Management from "../components/Management/Management";
import Production from "../components/Production/Production";
import QualityPolicy from "../components/QualityPolicy/QualityPolicy";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage,
        exact: true,
        id: 0
    },
    {
        path: '/products',
        name: 'Products',
        component: ProductPage,
        id: 1
    },
    {
        path: '/product',
        name: 'Product Card',
        component: CardPage,
        id: 2
    },
    {
        path: '/calc',
        name: 'Calculator',
        component: Calculator,
        id: 3
    },
    {
        path: '/history',
        name: 'History',
        component: HistoryPage,
        id: 4
    },
    {
        path: '/management',
        name: 'Management',
        component: Management,
        id: 5
    },
    {
        path: '/management',
        name: 'Management',
        component: Management,
        id: 5
    },
    {
        path: '/production',
        name: 'Production',
        component: Production,
        id: 6
    },
    {
        path: '/qualitypolicy',
        name: 'Quality Policy',
        component: QualityPolicy,
        id: 7
    }
]

export default routes;