import { Request, Response } from 'express';
import { UpdateCategoryService } from '../services/UpdateCategoryService';

export class UpdateCategoryController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const { name, description } = req.body;
        const service = new UpdateCategoryService();
        const results = await service.execute(id, name, description);

        if (results instanceof Error) {
            return res.json({ error: results.message });
        }

        return res.end();
    }
}