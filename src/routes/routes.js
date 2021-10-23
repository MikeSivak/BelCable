import HomePage from "../components/HomePage/HomePage";
import ProductPage from "../components/ProductPage/ProductPage";
import CardPage from "../components/CardPage/CardPage";
import Calculator from "../components/Calculator/Calculator";
import HistoryPage from "../components/HistoryPage/HistoryPage";
import Management from "../components/Management/Management";
import Production from "../components/Production/Production";
import QualityPolicy from "../components/QualityPolicy/QualityPolicy";
import Cooperation from "../components/Сooperation/Сooperation";
import Documentation from "../components/Documentation/Documentation";
import Certificates from "../components/Certificates/Certificates";
import PurchasePlace from "../components/PurchasePlace/PurchasePlace";
import Projects from "../components/Projects/Projects";
import Clients from "../components/Clients/Clients";
import PressCenter from "../components/PressCenter/PressCenter";
import PressCard from "../components/PressCard/PressCard";
import Reviews from "../components/Reviews/Reviews";
import Contacts from "../components/Contacts/Contacts";
import Awards from "../components/Awards/Awards";
import IndustryPurpose from "../components/IndustryPurpose/IndustryPurpose";
import Wires from "../components/Wires/Wires";
import Admin from "../components/Admin/Admin";

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
    },
    {
        path: '/cooperation',
        name: 'Сooperation',
        component: Cooperation,
        id: 8
    },
    {
        path: '/documentation',
        name: 'Documentation',
        component: Documentation,
        id: 9
    },
    {
        path: '/certificates',
        name: 'Certificates',
        component: Certificates,
        id: 10
    },
    {
        path: '/places',
        name: 'Purchase Places',
        component: PurchasePlace,
        id: 11
    },
    {
        path: '/projects',
        name: 'Projects',
        component: Projects,
        id: 12
    },
    {
        path: '/clients',
        name: 'Clients',
        component: Clients,
        id: 13
    },
    {
        path: '/presscenter',
        name: 'Press Center',
        component: PressCenter,
        id: 14
    },
    {
        path: '/presscard',
        name: 'Press Card',
        component: PressCard,
        id: 15
    },
    {
        path: '/reviews',
        name: 'Reviews',
        component: Reviews,
        id: 16
    },
    {
        path: '/contacts',
        name: 'Contacts',
        component: Contacts,
        id: 17
    },
    {
        path: '/awards',
        name: 'Awards',
        component: Awards,
        id: 18
    },
    {
        path: '/indpurpose',
        name: 'IndustryPurpose',
        component: IndustryPurpose,
        id: 19,
    },
    {
        path: '/wires',
        name: 'Wires',
        component: Wires,
        id: 20,
    },
    {
        path: '/admin',
        name: 'Admin',
        component: Admin,
        id: 21,
    }
]

export default routes;