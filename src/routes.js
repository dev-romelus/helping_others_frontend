import loadable from '@loadable/component';

// Public routes
// const Home = loadable(() => import('./components/pages/Home'));
const Login = loadable(() => import('./components/pages/Login'));
const SignUp = loadable(() => import('./components/pages/SignUp'));
const Home = loadable(() => import('./components/pages/Home'));

// Private routes
const Account = loadable(() => import('./components/pages/Account'));
const OfferHelp = loadable(() => import('./components/pages/OfferHelp'));
const RequestService = loadable(() => import('./components/pages/RequestService'));
const Dashboard = loadable(() => import('./components/pages/Dashboard'));
const ChatFeed = loadable(() => import('./components/pages/ChatFeed'));
const Service = loadable(() => import('./components/pages/Service'));

const publicRoutes = [
    {
        id: 1,
        title: 'Connexion',
        path: 'login',
        component: Login,
        exact: true,
    },
    {
        id: 2,
        title: 'Inscription',
        path: 'register',
        component: SignUp,
        exact: true,
    },
    {
        id: 3,
        title: 'Home page',
        path: '/',
        component: Home,
        exact: true,
    }
];

const privateRoutes = [
    {
        id: 1,
        title: 'Account',
        path: 'account',
        component: Account,
        exact: true,
    },
    {
        id: 2,
        title: 'Request Service',
        path: 'request-service',
        component: RequestService,
        exact: true,
    },
    {
        id: 3,
        title: 'Offer help',
        path: 'offer-help',
        component: OfferHelp,
        exact: true,
    },
    {
        id: 4,
        title: 'Dashboard',
        path: 'dashboard',
        component: Dashboard,
        exact: true,
    },
    {
        id: 5,
        title: 'Chat Feed',
        path: 'conversations/:conversation_id/messages/:user_id/service/:service_id',
        component: ChatFeed,
        exact: true,
    },
    {
        id: 6,
        title: 'Service',
        path: 'service/:serviceId',
        component: Service,
        exact: true,
    },
];

export { publicRoutes, privateRoutes };
