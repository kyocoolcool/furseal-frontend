import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../product.service';
import {DataStorageService} from '../data-storage.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-product-add',
    templateUrl: './product-add.component.html',
    styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
    productForm: FormGroup;

    constructor(private dataStorageService: DataStorageService, private productService: ProductService, private route: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit(): void {
        this.initForm();
    }

    onSubmit() {
        this.productService.addProduct(this.productForm.value);
        this.dataStorageService.storeProduct(this.productForm.value);
        this.onCancel();
    }

    private initForm() {
        let productName = '';
        let productPrice = '';

        this.productForm = new FormGroup({
            'name': new FormControl(productName),
            'price': new FormControl(productPrice)
        });
    }

    onCancel() {
        this.router.navigate(['/product']);
    }
}
