import { getRepository } from "typeorm";
import { Video } from "../entities/Video";

export class CreateVideoService {
    async execute(name: string, description: string, duration: number, category_id: string): Promise<Video> {
        const rep = getRepository(Video);

        const video = new Video();
        video.name = name;
        video.description = description;
        video.duration = duration;
        video.category_id = category_id;

        await rep.save(video);

        return video;
    }
}