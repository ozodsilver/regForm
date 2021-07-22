import VueRouter from 'vue-router'

import SignUp from './SignUp'

export default new VueRouter({
    routes: [
        // динамические сегменты начинаются с двоеточия
        { path: '/SignUp', 
        component: SignUp }

]


})