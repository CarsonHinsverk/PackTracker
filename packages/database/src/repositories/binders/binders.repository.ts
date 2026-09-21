import { Binder, BinderEntry, Prisma } from "../../../generated/prisma";

export type BinderWithEntries = Binder & {
    entries: BinderEntry[];
}

export interface IBindersRepository {
    getAllByUser(userId: string): Promise<Binder[]>;

    getById(id: string): Promise<Binder | null>;

    getWithEntries(id: string): Promise<BinderWithEntries | null>;

    createBinder(data: Prisma.BinderUncheckedCreateInput): Promise<Binder>;

    updateBinder(id: string, data: Prisma.BinderUpdateInput): Promise<Binder>;

    deleteBinder(id: string): Promise<Binder | null>;

    addCardtoBinder(data: Prisma.BinderEntryUncheckedCreateInput): Promise<BinderEntry>;

    removeCardFromBinder(entryId: string): Promise<BinderEntry>;

    updateCardPosition(entryId: string, position: number): Promise<BinderEntry>;

    updateCardMissing(entryId: string, isMissing: boolean): Promise<BinderEntry>;
}