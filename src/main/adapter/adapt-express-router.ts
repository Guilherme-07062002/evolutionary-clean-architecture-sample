import { Request, Response } from 'express';
import { MakeController } from './../ports/make-controller';

export const adaptExpressRoute = (makeController: MakeController) => {
    return async (req: Request, res: Response) => {
        const body = (req.method === 'POST' || req.method === 'PUT') && req.body;
        const controller = makeController();
        try {
            const response = await controller.handle({
                body,
                params: req.params,
                query: req.query,
            });

            return res.status(response.status).json(response.body);
        } catch (e: unknown) {
            console.error(e);
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    };
};
