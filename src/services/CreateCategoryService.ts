import { getRepository } from "typeorm";
import { Category } from "../entities/Category";

type CategoryRequest = {
    name: string;
    description: string;
};

export class CreateCategoryService {
    async execute({ name, description }: CategoryRequest): Promise<Category | Error> {
        const rep = getRepository(Category);

        let categoryAlreadyExists = await rep.findOne({ name });

        if (categoryAlreadyExists) {
            return new Error('Category already exists');
        }

        const category = rep.create({
            name,
            description
        });
        await rep.save(category);

        return category;
    }
}