import { ICollectionRepository } from "./collection.repository";

import { CollectionEntry, Prisma } from "../../../generated/prisma";
import { prisma } from "../../client";

export class CollectionRepository implements ICollectionRepository {

    async getAllByUser(userId: string): Promise<CollectionEntry[]> {
        return prisma.collectionEntry.findMany({
            where: { userId },
            orderBy: { createdAt: 'desc' },
        });
    };

    async getById(id: string): Promise<CollectionEntry | null> {
        return prisma.collectionEntry.findUnique({
            where: { id },
        });
    };

    async create(data: Prisma.CollectionEntryUncheckedCreateInput): Promise<CollectionEntry> {
        return prisma.collectionEntry.create({
            data,
        });
    };

    async update(id: string, data: Prisma.CollectionEntryUpdateInput): Promise<CollectionEntry> {
        return prisma.collectionEntry.update({
            where: { id },
            data,
        });
    };

    async delete(id: string): Promise<CollectionEntry> {
        return prisma.collectionEntry.delete({
            where: { id },
        });
    };
};