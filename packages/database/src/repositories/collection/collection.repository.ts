import { CollectionEntry, Prisma } from "../../../generated/prisma";

export interface ICollectionRepository {
    getAllByUser(userId: string): Promise<CollectionEntry[]>;

    getById(id: string): Promise<CollectionEntry | null>;

    create(data: Prisma.CollectionEntryUncheckedCreateInput): Promise<CollectionEntry>;

    update(id: string, data: Prisma.CollectionEntryUpdateInput): Promise<CollectionEntry>;

    delete(id: string): Promise<CollectionEntry>;
};