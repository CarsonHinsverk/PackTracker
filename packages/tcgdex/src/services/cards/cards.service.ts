import { Card, CardResume } from "@tcgdex/sdk";
import VariantsDetailed from '@tcgdex/sdk';

export interface ITcgCardsService {
    getById(cardId: string): Promise<Card | null>;
    getBriefById(cardId: string): Promise<CardResume | null>
    getBySetAndNumber(setId: string, localId: string): Promise<Card | null>;

    getVariants(cardId: string): Promise<VariantsDetailed | null>;
}