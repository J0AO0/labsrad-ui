import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { KeyFilterModule } from 'primeng/keyfilter';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TooltipModule } from 'primeng/tooltip';
import { InputMaskModule } from 'primeng/inputmask';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
    exports: [
        CommonModule,
        FormsModule,
        ButtonModule,
        InputTextModule,
        CardModule,
        TooltipModule,
        ProgressSpinnerModule,
        InputSwitchModule,
        KeyFilterModule,
        InputMaskModule,
        CalendarModule,
        DropdownModule
    ]
})
export class PrimeNGModule{}