import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RastreamentoPacoteComponent } from "./rastreamento-pacote/rastreamento-pacote.component";

@NgModule({
    declarations: [
        RastreamentoPacoteComponent
    ],
    imports: [
      CommonModule,
      ReactiveFormsModule,
    ],
    providers: [],
    
  })

export class rastreamentoPacoteModule {}