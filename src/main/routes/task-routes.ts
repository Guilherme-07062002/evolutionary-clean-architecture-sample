import { makeCreateTaskController } from './../factories/makeCreateTaskController';
import { Router } from 'express';

export default (prefix: string, router: Router): void => {
    router.post(`${prefix}/`, makeCreateTaskController())
}