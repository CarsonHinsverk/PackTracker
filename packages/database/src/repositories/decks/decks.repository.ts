import { Deck, DeckEntry, Prisma } from "../../../generated/prisma";

export type DeckWithEntries = Deck & {
    entries: DeckEntry[],
}

export interface IDecksRepository {
    getAllByUser(userId: string): Promise<Deck[]>;

    getById(id: string): Promise<Deck | null>;

    getWithEntries(id: string): Promise<DeckWithEntries | null>;

    createDeck(data: Prisma.DeckUncheckedCreateInput): Promise<Deck>;

    updateDeck(id: string, data: Prisma.DeckUpdateInput): Promise<Deck>;

    deleteDeck(id: string): Promise<Deck | null>;

    addCardToDeck(data: Prisma.DeckEntryCreateInput): Promise<DeckEntry>;

    removeCardFromDeck(id: string): Promise<DeckEntry>;

    updateCardQuantity(id: string, quantity: number): Promise<DeckEntry>;
}