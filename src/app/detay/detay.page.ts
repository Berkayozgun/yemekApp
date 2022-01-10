import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detay',
  templateUrl: './detay.page.html',
  styleUrls: ['./detay.page.scss'],
})
export class DetayPage implements OnInit {
  public yemek_adi:string;
  public yemek_logo:string;
  public yemek_kategori:string;
  public yemek_malzemeler:string;
  public yemek_tarif:string;
  
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.yemek_adi = this.activatedRoute.snapshot.paramMap.get('adi');
    this.yemek_logo = this.activatedRoute.snapshot.paramMap.get('logo');
    this.yemek_kategori= this.activatedRoute.snapshot.paramMap.get('kategori');
    this.yemek_malzemeler = this.activatedRoute.snapshot.paramMap.get('malzemeler');
    this.yemek_tarif = this.activatedRoute.snapshot.paramMap.get('tarif');
    console.log(this.yemek_adi);
  }

}
