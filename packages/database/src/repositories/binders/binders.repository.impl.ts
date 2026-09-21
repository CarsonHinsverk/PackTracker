import { BinderWithEntries, IBindersRepository } from "./binders.repository";

import { Binder, BinderEntry, Prisma } from "../../../generated/prisma";
import { prisma } from "../../client";

export class BindersRepository implements IBindersRepository {
    async getAllByUser(userId: string): Promise<Binder[]> {
        return prisma.binder.findMany({
            where: { userId },
        });
    }

    async getById(id: string): Promise<Binder | null> {
        return prisma.binder.findUnique({
            where: { id },
        });
    }

    async getWithEntries(id: string): Promise<BinderWithEntries | null> {
        return prisma.binder.findUnique({
            where: { id },
            include: {
                entries: {
                    orderBy: {
                        position: 'asc',
                    },
                },
            },
        });
    }

    async createBinder(data: Prisma.BinderUncheckedCreateInput): Promise<Binder> {
        return prisma.binder.create({
            data,
        });
    }

    async updateBinder(id: string, data: Prisma.BinderUpdateInput): Promise<Binder> {
        return prisma.binder.update({
            where: { id },
            data,
        });
    }

    async deleteBinder(id: string): Promise<Binder | null> {
        return prisma.binder.delete({
            where: { id },
        });
    }

    async addCardtoBinder(data: Prisma.BinderEntryUncheckedCreateInput): Promise<BinderEntry> {
        return prisma.binderEntry.create({
            data,
        });
    }

    async removeCardFromBinder(id: string): Promise<BinderEntry> {
        return prisma.binderEntry.delete({
            where: { id },
        });
    }

    async updateCardPosition(id: string, position: number): Promise<BinderEntry> {
        return prisma.binderEntry.update({
            where: { id },
            data: { position },
        });
    }

    async updateCardMissing(id: string, isMissing: boolean): Promise<BinderEntry> {
        return prisma.binderEntry.update({
            where: { id },
            data: { isMissing },
        });
    }
}