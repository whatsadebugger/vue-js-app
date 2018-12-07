import Home from './components/Home.vue'
import Header from './components/Header.vue'

import UserStart from './components/user/UserStart.vue'
import UserDetail from './components/user/UserDetail.vue'
import UserEdit from './components/user/UserEdit.vue'

// Lazy loading for webpack
// Can combine all the lazy loaded things into groups using the third paramter
const User = resolve => {
  require.ensure(['./components/user/User.vue'], () => {
    resolve(require('./components/user/User.vue'));
  }, 'user')
}

export const routes = [
  { path: '/user', components: {
    default: User,
    'header-top': Header

  }, children: [
    { path: '', component: UserStart },
    // before enter allows you to add logic before entering a component.
    // this allows you see allow or not allow a user to enter a page
    { path: ':id', component: UserDetail, beforeEnter: (to,from,next) => {
      console.log('inside route setup');
      next();
    }},
    { path: ':id/edit', component: UserEdit, name: 'userEdit'}
  ]},
  { path: '', name: 'Home', components: {
    default: Home,
    'header-top': Header,
  }},
  { path: '/redirect-me', redirect: { name: 'Home'}},
  { path: '*', redirect: '/'} // catch all route
]