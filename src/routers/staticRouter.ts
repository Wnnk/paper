import type {RouteRecordRaw} from 'vue-router'


export const staticRouter:Array<RouteRecordRaw> = [
  {
    path:'/',
    component:() => import('../views/Home/index.vue'),
  },
  {
    path:'/wallpaper',
    component:() => import('../views/Wallpaper/index.vue'),
  }
]