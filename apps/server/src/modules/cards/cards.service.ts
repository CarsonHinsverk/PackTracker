import { ICardsService } from '@monorepo/tcgdex';
import { CardBrief, CardList, Variant, VariantList } from '@monorepo/types';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CardsService {
  constructor(private readonly tcgdex: ICardsService) {}

  async GetCardById(id: string): Promise<CardBrief | undefined> {
    return this.tcgdex.GetCardById(id);
  }

  async GetCardByLocalId(setId: string, localId: string): Promise<CardBrief | undefined> {
    return this.tcgdex.GetCardByLocalId(setId, localId);
  }

  async GetCardsByIds(ids: string[]): Promise<CardList> {
    return this.tcgdex.GetCardsByIds(ids);
  }

  async GetCardsBySet(setId: string): Promise<CardList> {
    return this.tcgdex.GetCardsBySet(setId);
  }

  async GetVariant(id: string, variant: string): Promise<Variant> {
    return this.tcgdex.GetVariant(id, variant);
  }

  async GetVariants(id: string): Promise<VariantList> {
    return this.tcgdex.GetVariants(id);
  }

  async HasVariant(id: string, variant: string): Promise<Boolean> {
    return this.tcgdex.HasVariant(id, variant);
  }
}
