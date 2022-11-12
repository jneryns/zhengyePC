export default [
  { path: '/', redirect: '/welcome', exact: true },
  {
    path: '/welcome',
    name: '功能功能功能A',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: '功能功能B',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {
        path: '/admin/sub-page',
        name: '功能功能B-1',
        icon: 'smile',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },
  {
    name: '功能功能C',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  {
    name: '功能功能功能D',
    icon: 'table',
    path: '/list1',
    component: './TableList',
  },
  {
    name: '功能功能E',
    icon: 'table',
    path: '/list2',
    component: './TableList',
  },
  {
    name: '功能功能F',
    icon: 'table',
    path: '/list3',
    component: './TableList',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
