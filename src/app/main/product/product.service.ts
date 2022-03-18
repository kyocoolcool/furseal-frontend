import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Product} from './product.model';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    productsChanged = new Subject<Product[]>();
    private products: Product[] = [];

    setProducts(products: Product[]) {
        this.products = products;
        console.log(products);
        this.productsChanged.next(this.products.slice());
    }

    getProducts() {
        return this.products.slice();
    }

    addProduct(product: Product) {
        this.products.push(product);
        this.productsChanged.next(this.products.slice());
    }
}
