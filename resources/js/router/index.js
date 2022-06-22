import { createRouter, createWebHistory } from 'vue-router';

import Dashboard from '../components/students/StudentIndex';
import StudentCreate from '../components/students/StudentCreate';
import StudentEdit from '../components/students/StudentEdit';

const routes = [
    {
        path: '/dashboard',
        name: 'student.index',
        component: Dashboard
    },
    {
        path: '/students/create',
        name: 'student.create',
        component: StudentCreate
    },
    {
        path: '/students/edit/:id',
        name: 'student.edit',
        component: StudentEdit,
        props: true,
    },

];

const router =  createRouter({
    history: createWebHistory(),
    routes
});

export default router;