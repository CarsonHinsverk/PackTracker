import { Card, Set } from "@tcgdex/sdk";

interface CardsSearchQuery {
    name?: string;
    localId?: string;
    setId?: string;
    seriesId?: string;

    category?: CardCategory;
    rarity?: string;
    illustrator?: string;

    hp?: CardHpOptions;
    types?: string[];
    stage?: string;

    dexId?: NumberFilter;
    retreat?: NumberFilter;

    regulationMark?: string;
    trainerType?: string;
    energyType?: string;

    variant?: CardVariant;
    suffix?: string;

    legal?: {
        standard?: boolean;
        expanded?: boolean;
    };

    page?: number;
    pageSize?: number;

    sort?: SortOptions;
}

interface SetsSearchQuery {

}

interface SeriesSearchQuery {

}

export interface ITcgSearchService {
    cards(query?: CardsSearchQuery): Promise<Card[]>;
    sets(query?: SetsSearchQuery): Promise<Set[]>;
    series(query?: SeriesSearchQuery): Promise<SeriesSearchQuery[]>;

    cardsByType(type: string): Promise<Card[]>;
    cardsByRarity(rarity: string): Promise<Card[]>;
    cardsByIllustator(illustrator: string): Promise<Card[]>;
    cardsByCategory(category: string): Promise<Card[]>;
    cardsByDexId(dexId: number): Promise<Card[]>;
    cardsByEnergyType(energyType: string): Promise<Card[]>;
    cardsByRegMarks(mark: string): Promise<Card[]>;
    cardsByStages(stage: string): Promise<Card[]>;
    cardsByTrainerType(trainerType: string): Promise<Card[]>;
    
    listVariants(): Promise<string[]>;
}