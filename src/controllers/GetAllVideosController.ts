import { Request, Response } from "express";
import { GetAllVideosService } from "../services/GetAllVideosService";

export class GetAllVideoController {
    async handle(req: Request, res: Response) {
        const service = new GetAllVideosService();
        const videos = await service.execute();

        res.json(videos);
    }
}