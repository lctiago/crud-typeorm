import { getRepository } from "typeorm";
import { Category } from "../entities/Category";

export class UpdateCategoryService {
    async execute(id: string, name: string, description: string): Promise<void | Error> {
        const rep = getRepository(Category);
        const category = await rep.findOne(id);
        console.log(category);

        const categoryDoesNotExists: boolean = !category;
        if (categoryDoesNotExists) {
            return new Error('Category not found');
        }

        category.name = name ? name : category.name;
        category.description = description ? description : category.description;

        await rep.save(category);
    }
}