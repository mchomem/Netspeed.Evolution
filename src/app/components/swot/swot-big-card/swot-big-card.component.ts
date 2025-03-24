import { Component } from '@angular/core';
import { AddFieldComponent } from "../../ui/add-field/add-field.component";
import { SwotItemComponent } from "../swot-item/swot-item.component";
import { Swot } from '../../../models/swot.model';

@Component({
  selector: 'app-swot-big-card',
  imports: [AddFieldComponent, SwotItemComponent],
  templateUrl: './swot-big-card.component.html',
  styleUrl: './swot-big-card.component.css'
})
export class SwotBigCardComponent {

  #listItens: Array<Swot> = [
    {
      id: 1,
      strengths: 'Conhecimento de modelagem 3D e criação de cenários',
      weaknesses: 'Falta de experiência com a criação de mods para Flight Simulator',
      opportunities: 'Comunidade de modding ativa e disponível para suporte',
      threats: 'Complexidade do SDK do Flight Simulator',
    },
    {
      id: 1,
      strengths: 'Conhecimento técnico para otimizar modelos e texturas',
      weaknesses: 'Tempo limitado para pesquisa e desenvolvimento',
      opportunities: 'Demanda por melhorias em aeroportos menores e menos detalhados',
      threats: 'Atualizações do jogo podem quebrar compatibilidade',
    },
    {
      id: 1,
      strengths: 'Familiaridade com o aeroporto real e suas características',
      weaknesses: 'Pouca documentação detalhada sobre o desenvolvimento de cenários no simulador',
      threats: 'Concorrência com outros addons pagos e gratuitos',
    },
    {
      id: 1,
      strengths: 'Experiência com criação de cenários de jogos',
    },
  ]

  public getSwotItens (type: string) {
    if (type === 'strengths') {
      return this.#listItens.filter(x => x.strengths);
    }
    else if (type === 'weaknesses') {
      return this.#listItens.filter(x => x.weaknesses);
    }
    else if (type === 'opportunities') {
      return this.#listItens.filter(x => x.opportunities);
    }
    else if (type === 'threats') {
      return this.#listItens.filter(x => x.threats);
    }
    return [];
  }
}
