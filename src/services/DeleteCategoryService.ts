import { getRepository } from "typeorm";
import { Category } from "../entities/Category";

export class DeleteCategoryService {
    async execute(id: string): Promise<void | Error> {
        const rep = getRepository(Category);

        const category = await rep.findOne(id);
        const categoryDoesNotExists = !category;

        if (categoryDoesNotExists) {
            return new Error('Category not found');
        }

        rep.remove(category);
    }
}