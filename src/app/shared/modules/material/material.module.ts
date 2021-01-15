import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCommonModule, MatOptionModule} from '@angular/material/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatMenuModule} from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSortModule} from '@angular/material/sort';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSliderModule} from '@angular/material/slider';
import {MatChipsModule} from '@angular/material/chips';
import {MatBadgeModule} from '@angular/material/badge';
import {MatDialogModule} from '@angular/material/dialog';

const materialModules = [
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatMenuModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatGridListModule,
  MatCommonModule,
  MatButtonToggleModule,
  MatBadgeModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
  MatTooltipModule,
  MatSlideToggleModule,
  MatDialogModule,
  MatSnackBarModule,
  MatAutocompleteModule,
  MatProgressBarModule,
  MatTableModule,
  MatSortModule,
  MatProgressSpinnerModule,
  MatExpansionModule,
  MatSliderModule,
  MatPaginatorModule,
  MatSidenavModule,
  MatChipsModule,
  MatTabsModule,
];

@NgModule({
  declarations: [],
  exports: [
      materialModules
  ],
  imports: [
      materialModules
  ]
})
export class MaterialModule { }
