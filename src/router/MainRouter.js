import { createRouter, createWebHistory } from 'vue-router'

export default function (emitter) {
    
  const routes = [
      {
        path: '/:pathMatch(.*)*',
        name: 'PageNotFound',
        component: () => import('../views/404.vue')
      },
      {
        path:  '',
        name: 'Home',
        alias: '/home',
        components: {
            default: () => import ('../views/home/HomeView.vue')
        },
      },
      {
        path:  '/projects',
        name: 'Projects',
        components: {
            default: () => import ('../views/projects/Projects.vue')
        },
        children: [
            {
                path: "",
                name: "ProjectsView",
                component: () => import ('../views/projects/ProjectsView.vue')
            },
            {
                path: "archive",
                name: "Archive",
                component: () => import ('../views/projects/ArchiveView.vue'),
            },
            {
                path: ":projectId",
                name: "ProjectDetail",
                component: () => import ('../views/projects/ProjectDetailView.vue')
            }
        ]
    },
  ];

  const router = createRouter({
      history: createWebHistory(),
      routes
  });

  let previousRoute = null;
  router.beforeEach((to, from, next) => {
      previousRoute = from;
      emitter.emit("update-prevRoute", previousRoute);
      if(to.matched.length === 0) {
          window.location.reload();
      }
      else {
          emitter.emit('show-loader');
          next();
          emitter.emit('hide-loader');
      }
  })

  return router;
}
