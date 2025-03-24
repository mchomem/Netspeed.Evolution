import { Component } from '@angular/core';
import { SwotBigCardComponent } from "../../components/swot/swot-big-card/swot-big-card.component";

@Component({
  selector: 'app-swot',
  imports: [SwotBigCardComponent],
  templateUrl: './swot.component.html',
  styleUrl: './swot.component.css'
})
export class SwotComponent {
  public cards: Array<{title?: string; type?: string;}> = [
    {
      title: "Forças",
      type: "strengths"
    },
    {
      title: "Oportunidades",
      type: "opportunities",
    },
    {
      title: "Fraquezas",
      type: "weaknesses",
    },
    {
      title: "Ameaças",
      type: "threats",
    },
  ];
}
