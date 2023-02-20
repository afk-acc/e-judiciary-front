import {createWebHistory, createRouter} from "vue-router";
import index from "../pages/site/index.vue";
import Template from '../pages/site/Template.vue';
import AboutCompany from "../pages/site/AboutCompany.vue";
import Service from "../pages/site/Services.vue";
import Contacts from "../pages/site/Contacts.vue";
import Team from "../pages/site/Teams.vue";
import FAQ from "../pages/site/FAQ.vue";

import SignInPage from '../pages/SignInPage.vue';
import SignUpPage from '../pages/SignUpPage.vue';

import AdminPage from '../pages/admin/Admin.vue';
import ProfileUser from '../pages/admin/adminPages/ProfileUser.vue';
import UserLists from '../pages/admin/adminPages/UserLists.vue';
import ProfileContent from '../components/admin/adminPages/UI/profileUI/vProfileContent.vue';

import AppealLists from '../pages/admin/adminPages/AppealLists.vue';
import Chat from '../pages/admin/adminPages/Chat.vue';
import HistoryPage from '../pages/admin/adminPages/HistoryPage.vue';
import Complaints from '../pages/admin/adminPages/Сomplaints.vue';
import usersPage from "../pages/admin/adminPages/UsersPage.vue";
import AppealInfo from "../pages/admin/adminPages/AppealInfo.vue";
import AppealAdd from "../pages/admin/adminPages/AppealAdd.vue";
import ContentHome from "../pages/admin/adminPages/content/ContentHome.vue"
import contentPage from "../pages/admin/adminPages/Content.vue"
import RequestList from "../pages/admin/adminPages/RequestList.vue";
import RoleList from "../pages/admin/adminPages/RoleList.vue";

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: 'active-link',
    routes: [
        {
            path: "/",
            name: "",
            component: Template,
            children: [
                {
                    path: "",
                    name: "index",
                    component: index
                },
                {
                    path: "about-company",
                    name: "about-company",
                    component: AboutCompany,
                },
                {
                    path: "services",
                    name: "services",
                    component: Service,
                },
                {
                    path: "contacts",
                    name: "contacts",
                    component: Contacts,
                },
                {
                    path: "teams",
                    name: "teams",
                    component: Team,
                },
                {
                    path: "faq",
                    name: "faq",
                    component: FAQ,
                },
            ],
        },
        {
            path: "/sign-in",
            name: "sign-in",
            component: SignInPage,
        },
        {
            path: "/sign-up",
            name: "sign-up",
            component: SignUpPage,
        },
        {
            path: '/admin',
            name: 'admin',
            component: AdminPage,
            children: [
                {
                    path: "/profile",
                    name: "profile-content",
                    component: ProfileUser,
                    children: [
                        {
                            path: "",
                            name: "profile-page",
                            component: ProfileContent,
                        },
                        {
                            path: "user-list/:page",
                            name: "user-list",
                            component: UserLists,
                        },
                        {
                            path: "appeal-list/:page",
                            name: "appeal-list",
                            component: AppealLists,
                        },
                        {
                            path: "appeal-list/appeal/:id",
                            name: "appeal-item",
                            component: AppealInfo,
                        },
                    ],
                },
                {
                    path: 'chat',
                    name: 'chat',
                    component: Chat
                },
                {
                    path: 'history/:page',
                    name: 'history',
                    component: HistoryPage,
                },
                {
                    path: 'complaints',
                    name: 'complaints',
                    component: Complaints,
                },
                {
                    path: 'users/:page',
                    name: 'users-list-page',
                    component: usersPage
                },
                {
                    path: 'requests/:page',
                    name: "requests",
                    component: RequestList
                },
                {
                    path: 'appeal/add-new-appeal',
                    name: 'add-appeal',
                    component: AppealAdd
                },
                {
                    path:'roles',
                    name:'role-list',
                    component: RoleList
                },
                {
                    path: '/content',
                    name: 'content',
                    component: contentPage,
                    children: [
                        {
                            path: "",
                            name: "content-components",
                        },
                        {
                            path: "content-home",
                            name: "content-home",
                            component: ContentHome
                        }
                    ]
                }

            ]
        },
    ],
});

export default router;
