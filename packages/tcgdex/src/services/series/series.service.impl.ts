import { Serie, SetList } from "@tcgdex/sdk";
import { ITcgSeriesService } from "./series.service";

export class TcgSeriesService implements ITcgSeriesService {
    async getById(serieId: string): Promise<Serie | null> {
        
    }

    async listSeries(): Promise<Serie[]> {
        
    }

    async listSetsFromSerie(serieId: string): Promise<SetList> {
        
    }

    async getSetCount(serieId: string): Promise<number> {
        
    }

    async getTotalCardCount(serieId: string): Promise<number> {
        
    }
}