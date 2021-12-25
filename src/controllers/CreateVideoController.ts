import { Request, Response } from "express";
import { CreateVideoService } from "../services/CreateVideoService";

export class CreateVideoController {
    async handle(req: Request, res: Response) {
        const {
            name,
            description,
            duration,
            category_id
        } = req.body;

        const service = new CreateVideoService();
        const video = await service.execute(name, description, duration, category_id);

        res.json(video);
    }
}