import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  constructor(private route:ActivatedRoute, private productService: ProductServiceService) { }

  ngOnInit(): void {
    const stockCode = this.route.snapshot.paramMap.get('code');
    console.log('codigo: ' + stockCode)
  }

}
