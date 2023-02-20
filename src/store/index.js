import {createStore} from 'vuex';
import auth from './auth';
import users from './users';
import appeal from './appeal';
import history from './history';
import chat from "./chat.js";
import notification from './notification.js'
import report from "./report.js";
import request from './request.js'
import role from './role.js'
export default createStore({
    getters: {
        get_base_url(state) {
            return 'http://e-judiciary/'
        }
    },

    modules: {
        auth,
        users,
        appeal,
        history,
        chat,
        notification,
        report,
        request,
        role
    }
});