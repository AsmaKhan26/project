// router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/HomePage.vue';
import TicketForm from '@/components/TicketForm.vue';
import TicketList from '@/components/TicketList.vue';
import User from '@/components/User.vue';
import SupportTeam from '@/components/SupportTeam.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/ticket-form',
    name: 'TicketForm',
    component: TicketForm
  },
  {
    path: '/ticket-list',
    name: 'TicketList',
    component: TicketList
  },
  {
    path: '/user',
    name: 'User',
    component: User
  },
  {
    path: '/support-team',
    name: 'SupportTeam',
    component: SupportTeam
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
