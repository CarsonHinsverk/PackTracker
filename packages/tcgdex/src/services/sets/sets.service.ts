import { Card, Set, SetList } from "@tcgdex/sdk";

export interface ITcgSetsService {
    getById(setId: string): Promise<Set | null>;

    listSets(): Promise<SetList>;
    listCardsFromSet(setId: string, options?: CardListOptions): Promise<Card[]>;

    getCardCount(setId: string): Promise<number>;
}