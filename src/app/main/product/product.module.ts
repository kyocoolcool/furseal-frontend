import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreCommonModule } from '@core/common.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { ProductListComponent } from './product-list/product-list.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductAddComponent } from './product-add/product-add.component';
import {ProductTestComponent} from './product-test/product-test.component';
import {SampleComponent} from './sample.component';
import {HomeComponent} from './home.component';

const routes = [
  {
    path: 'sample',
    component: SampleComponent,
    data: { animation: 'sample' }
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { animation: 'home' }
  },
  {
    path: 'product',
    component: ProductListComponent,
    data: { animation: 'product' }
  },
  {
    path: 'product/add',
    component: ProductAddComponent,
    data: { animation: 'add' }
  },
];

@NgModule({
  declarations: [ProductListComponent, ProductAddComponent, ProductTestComponent, SampleComponent],
  imports: [RouterModule.forChild(routes), NgbModule, ContentHeaderModule, TranslateModule, CoreCommonModule, HttpClientModule],
  exports: [ProductListComponent]
})
export class ProductModule { }
