import { inject, injectable } from "tsyringe";

import { ISpecificationsRepository } from "@modules/cars/repositories/ISpecificationsRepository";
import { AppError } from "@shared/errors/AppError";

export interface IRequest {
    name: string;
    description: string;
}

@injectable()
export class CreateSpecificationUseCase {
    constructor(
        @inject("SpecificationsRepository")
        private readonly specificationRepository: ISpecificationsRepository
    ) {}

    async execute({ name, description }: IRequest): Promise<void> {
        const specificationAlreadyExists =
            await this.specificationRepository.findByName(name);

        if (specificationAlreadyExists) {
            throw new AppError("Specification already exists!");
        }

        this.specificationRepository.create({
            name,
            description,
        });
    }
}
