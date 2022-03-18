import {Component, OnInit} from '@angular/core';
import {CoreTranslationService} from '../../../../@core/services/translation.service';
import {locale as en} from '../i18n/en';
import {locale as fr} from '../i18n/fr';
import {locale as de} from '../i18n/de';
import {locale as pt} from '../i18n/pt';
import {HttpClient} from '@angular/common/http';
import {Product} from '../product.model';
import {ProductService} from '../product.service';
import {Subscription} from 'rxjs';
import {DataStorageService} from '../data-storage.service';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {
    public contentHeader: object
    products: Product[] = [];
    // subscription: Subscription;

    /**
     *
     * @param {CoreTranslationService} _coreTranslationService
     */
    constructor(private _coreTranslationService: CoreTranslationService, private httpClient: HttpClient, private dataStorageService: DataStorageService, private productService: ProductService) {
        this._coreTranslationService.translate(en, fr, de, pt)
    }

    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit() {
        this.contentHeader = {
            headerTitle: 'Product',
            actionButton: true,
            breadcrumb: {
                type: '',
                links: [
                    {
                        name: 'Home',
                        isLink: true,
                        link: '/'
                    },
                    {
                        name: 'Product',
                        isLink: false
                    }
                ]
            }
        }
        //read form local json
        // this.httpClient.get<Product[]>("assets/data.json").subscribe(data => {
        //     console.log(data);
        //     this.products = data;
        // })

        //read from backend
        // this.onFetchData()
        // this.subscription = this.productService.productsChanged
        //     .subscribe(
        //         (products: Product[]) => {
        //             this.products = products;
        //         }
        //     );
        // this.products = this.productService.getProducts();
        // if (this.products.length == 0) {
            this.onFetchData();
        this.products = this.productService.getProducts();
        // }

    }

    ngOnDestroy() {
        // this.subscription.unsubscribe();
    }

    getStatusClass(status: string): string {
        if (status == 'Active') {
            return 'badge-light-primary';
        } else if (status == 'Completed') {
            return 'badge-light-success'
        } else if (status == 'Scheduled') {
            return 'badge-light-info'
        } else if (status == 'Pending') {
            return 'badge-light-warning'
        }
    }

    onFetchData() {
        this.dataStorageService.fetchProducts();
    }

}
