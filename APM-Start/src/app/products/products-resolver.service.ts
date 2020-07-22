import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';

import { Product, ProductResolved } from './product';
import { ProductService } from './product.service';

@Injectable({
    providedIn: 'root'
})

export class ProductsResolver implements Resolve<Product[]> {

    constructor(private productService: ProductService) {}

    resolve(route: ActivatedRouteSnapshot, 
            state: RouterStateSnapshot): Observable<Product[]>{
                return this.productService.getProducts()
    }    
}