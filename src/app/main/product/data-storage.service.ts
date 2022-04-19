import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from './product.model';
import {ProductService} from './product.service';

@Injectable({providedIn: 'root'})
export class DataStorageService {
    constructor(private http: HttpClient, private productService: ProductService) {
    }

    storeProduct(product: Product) {
        this.http
            .put(
                'http://localhost:9000/products',
                product
            )
            .subscribe(response => {
                console.log(response);
            });
    }

    fetchProducts() {
        this.http
            .get<Product[]>(
                'http://localhost:9000/products'
            ).subscribe(products => {
            this.productService.setProducts(products);
        });
    }
}
