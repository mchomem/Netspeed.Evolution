import { Component, OnInit, signal } from '@angular/core';
import { SwotBigCardComponent } from "../../components/swot/swot-big-card/swot-big-card.component";
import { Swot, SwotItem, SwotItemType } from '../../models/swot.model';
import { SwotService } from '../../services/swot.service';

@Component({
  selector: 'app-swot',
  imports: [SwotBigCardComponent],
  templateUrl: './swot.component.html',
  styleUrl: './swot.component.css'
})
export class SwotComponent implements OnInit {
  constructor(swotService: SwotService) {
    this.#swotService = swotService;
  }

  #swotService: SwotService;
  #swotData: Swot = {} as Swot;
  #eployeeId: number = 1;
  #cycle: number = 1;

  #swotSignal = signal<Swot>(this.#swotData);

  ngOnInit(): void {
    this.#swotService?.getSwotData(this.#eployeeId, this.#cycle).subscribe(data => {
      if (data.success) {
        this.#swotData = data.data as Swot;
        this.#swotSignal.set(this.#swotData);
      }
    });
  }

  public getSwotData() {
    return this.#swotSignal();
  }

  public addSwotItem(text: string, type: SwotItemType) {
    if (text) {
      var item = new SwotItem(this.#swotData.id, text);

      switch (type) {
        case SwotItemType.strengths:
          item.order = this.#swotData.strengths.length + 1;
          this.#swotData.strengths.push(item);
          break;
        case SwotItemType.weaknesses:
          item.order = this.#swotData.weaknesses.length + 1;
          this.#swotData.weaknesses.push(item);
          break;
        case SwotItemType.opportunities:
          item.order = this.#swotData.opportunities.length + 1;
          this.#swotData.opportunities.push(item);
          break;
        case SwotItemType.threats:
          item.order = this.#swotData.threats.length + 1;
          this.#swotData.threats.push(item);
          break;
      }
      this.#swotSignal.set(this.#swotData);
    }
  }

  public updateSwotItemText(item: SwotItem, type: SwotItemType) {
    this.#swotSignal.update((oldValue: Swot) => {
      switch (type) {
        case SwotItemType.strengths:
          oldValue.strengths.filter(res => {
            if (res.order == item.order) {
              res.description = item.description;
              return res;
            }
            return res;
          });
          return oldValue;
        case SwotItemType.weaknesses:
          oldValue.weaknesses.filter(res => {
            if (res.order == item.order) {
              res.description = item.description;
              return res;
            }
            return res;
          });
          return oldValue;
        case SwotItemType.opportunities:
          oldValue.opportunities.filter(res => {
            if (res.order == item.order) {
              res.description = item.description;
              return res;
            }
            return res;
          });
          return oldValue;
        case SwotItemType.threats:
          oldValue.threats.filter(res => {
            if (res.order == item.order) {
              res.description = item.description;
              return res;
            }
            return res;
          });
      }
      return oldValue;
    });

    this.#swotData = this.#swotSignal();
  }

  public removeSwotItem(order: number, type: SwotItemType) {
    switch (type) {
      case SwotItemType.strengths:
        this.#swotData.strengths = this.#swotData?.strengths?.filter(s => s.order != order);
        break;
      case SwotItemType.weaknesses:
        this.#swotData.weaknesses = this.#swotData?.weaknesses?.filter(s => s.order != order);
        break;
      case SwotItemType.opportunities:
        this.#swotData.opportunities = this.#swotData?.opportunities?.filter(s => s.order != order);
        break;
      case SwotItemType.threats:
        this.#swotData.threats = this.#swotData?.threats?.filter(s => s.order != order);
        break;
    }
    this.#swotSignal.set(this.#swotData);
  }

  public sendSwotData() {
    if (this.#swotData) {
      this.#swotData.updatedById = this.#eployeeId;

      this.#swotService.putSwotData(this.#swotData).subscribe(result => {
        if (result.success) {
          console.log("Sucesso");
        }
        else {
          console.log(result.errors);
        }
      });
    }
  }
}
