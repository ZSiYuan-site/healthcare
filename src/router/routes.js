import Login from '../views/login/Login.vue'
import Home from '../views/home/Home.vue'
import Service from '../views/service/Service.vue'
import Solution from '../views/solution/Solution.vue'
import News from '../views/news/News.vue'
import NewsDetail from '../components/newsDetail/NewsDetail.vue'
import Related from '../views/related/Related.vue'
import Info from '../components/info/Info.vue';
import ApiInterface from '../components/apiInterface/ApiInterface.vue'


export default [{
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/home',
        component: Home,
        meta: {
            show: true
        }
    },
    {
        path: '/service',
        component: Service,
        meta: {
            show: true
        }
    }, {
        path: '/service/:diagnosticType',
        component: Info,
        meta: {
            show: true
        }
    }, {
        path: '/service/apIInterface/:apiDiagnosticType',
        component: ApiInterface,
        meta: {
            show: true
        }
    },
    {
        path: '/solution',
        component: Solution,
        meta: {
            show: true
        }
    },
    {
        path: '/news',
        component: News,
        meta: {
            show: true
        }
    }, {
        path: '/news/:id',
        component: NewsDetail,
        meta: {
            show: true
        }
    }, {
        path: '/related',
        component: Related,
        meta: {
            show: true
        }
    }
]