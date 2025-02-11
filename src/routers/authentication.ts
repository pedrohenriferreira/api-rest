import express from 'express';

import { login, register } from '../controllers/authentication1';


export default (router: express.Router) => {
    router.post('/auth/register');
    router.post('auth/login')
};