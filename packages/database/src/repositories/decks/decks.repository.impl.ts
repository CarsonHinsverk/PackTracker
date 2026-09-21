import { Deck, DeckEntry, Prisma } from "../../../generated/prisma";
import { prisma } from "../../client";
import { DeckWithEntries, IDecksRepository } from "./decks.repository";


export class DecksRepository implements IDecksRepository {
    async getAllByUser(userId: string): Promise<Deck[]> {
        return prisma.deck.findMany({
            where: { userId },
            orderBy: { createdAt: 'desc' },
        });
    }

    async getById(id: string): Promise<Deck | null> {
        return prisma.deck.findUnique({
            where: { id },
        });
    }

    async getWithEntries(id: string): Promise<DeckWithEntries | null> {
        return prisma.deck.findUnique({
            where: { id },
            include: {
                entries: {
                    orderBy: {
                        cardId: 'desc',
                    },
                },
            },
        });
    }

    async createDeck(data: Prisma.DeckUncheckedCreateInput): Promise<Deck> {
        return prisma.deck.create({
            data,
        });
    }

    async updateDeck(id: string, data: Prisma.DeckUpdateInput): Promise<Deck> {
        return prisma.deck.update({
            where: { id },
            data,
        })
    }

    async deleteDeck(id: string): Promise<Deck | null> {
        return prisma.deck.delete({
            where: { id },
        });
    }

    async addCardToDeck(data: Prisma.DeckEntryCreateInput): Promise<DeckEntry> {
        return prisma.deckEntry.create({
            data,
        });
    }

    async removeCardFromDeck(id: string): Promise<DeckEntry> {
        return prisma.deckEntry.delete({
            where: { id },
        });
    }

    async updateCardQuantity(id: string, quantity: number): Promise<DeckEntry> {
        return prisma.deckEntry.update({
            where: { id },
            data: { quantity },
        })
    }
}