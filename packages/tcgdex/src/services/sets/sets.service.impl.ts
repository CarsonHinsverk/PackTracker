
import { Card, Set, SetList } from "@tcgdex/sdk";
import { ITcgSetsService } from "./sets.service";

export class TcgSetsService implements ITcgSetsService {
    async getById(setId: string): Promise<Set | null> {
        
    }

    async listSets(): Promise<SetList> {
        
    }

    async listCardsFromSet(setId: string, options?: CardListOptions): Promise<Card[]> {
        
    }

    async getCardCount(setId: string): Promise<number> {
        
    }
}