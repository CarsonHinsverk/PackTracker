import { Card, CardResume } from "@tcgdex/sdk";
import { ITcgCardsService } from "./cards.service";
import VariantsDetailed from '@tcgdex/sdk';
import { tcgdex } from "@/client";

export class TcgCardsService implements ITcgCardsService {
    async getById(cardId: string): Promise<Card | null> {
        return tcgdex.card.get(cardId);
    }

    async getBriefById(cardId: string): Promise<CardResume | null> {
        
    }

    async getBySetAndNumber(setId: string, localId: string): Promise<Card | null> {
        
    }

    async getVariants(cardId: string): Promise<VariantsDetailed | null> {
        
    }
}