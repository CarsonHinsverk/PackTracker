import { Serie, SetList } from "@tcgdex/sdk";

export interface ITcgSeriesService {
    getById(serieId: string): Promise<Serie | null>;

    listSeries(): Promise<Serie[]>;
    listSetsFromSerie(serieId: string): Promise<SetList>;

    getSetCount(serieId: string): Promise<number>;
    getTotalCardCount(serieId: string): Promise<number>;
}