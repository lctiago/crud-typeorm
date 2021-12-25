import { getRepository } from "typeorm";
import { Category } from "../entities/Category";

export class GetAllCategoriesService {
    async execute(): Promise<Category[]> {
        const rep = getRepository(Category);
        const categories = await rep.find();
        return categories;
    }
}