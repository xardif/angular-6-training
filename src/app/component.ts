// import { Component, ApplicationRef } from "@angular/core";
// import { Model } from "./repository.model";
// import { Product } from "./product.model";

// @Component({
//   selector: "app",
//   templateUrl: "./template.html"
//   //   styleUrls: ['./app.component.css']
// })
// export class ProductComponent {
//   model: Model = new Model();

//   // Dependency Injection of ref
//   constructor(ref: ApplicationRef) { // ApplicationRef.tick()
//       (<any>window).appRef = ref;
//       (<any>window).model = this.model;
//   }

//   getProductByPosition(position:number):Product {
//       return this.model.getProducts()[position];
//   }

//   getClasses(): string {
//     return this.model.getProducts().length == 5 ? "bg-success" : "bg-error";
//   }
//   getClass(key: number): string {
//     let p = this.model.getProduct(key);
//     return "p-a-1 " + (p.price < 50 ? "bg-info" : "bg-warning");
//   }
//   getClassMap(key:number):Object {
//     let p = this.model.getProduct(key);
//       return {
//           "text-xs-center bg-danger" : p.name == "Soccer Ball",
//           "bg-info" : p.price < 50
//       }
//   }
//   fontSizeWithUnits:string = "50px";
//   fontSizeWithoutUnits:string = "30";
//   getStyles(key:number):Object {
//     let p = this.model.getProduct(key);
//       return {
//           "fontSize" : '30px',
//           "color" : p.price < 50 ? "red" : "green"
//       }
//   }
// }

// import { ApplicationRef, Component } from "@angular/core";
// import { Model } from "./repository.model";
// import { Product } from "./product.model";
// @Component({
//   selector: "app",
//   templateUrl: "template.html"
// })
// export class ProductComponent {
//   model: Model = new Model();
//   constructor(ref: ApplicationRef) {
//     (<any>window).appRef = ref;
//     (<any>window).model = this.model;
//   }

//   getProductByPosition(position: number): Product {
//     return this.model.getProducts()[position];
//   }

//   getProduct(key: number): Product {
//     return this.model.getProduct(key);
//   }

//   getProducts(): Product[] {
//     return this.model.getProducts();
//   }

//   /**
//    * Angular with invoke this multiple times also in case of single explicit invocation of a template
//    */
//   getProductCount(): number {
//       console.log("getProductCount")
//     return this.getProducts().length;
//   }

//   targetName: string = "Kayak";
//   counter: number = 1;

//   get nextProduct() : Product {
//       return this.model.getProducts().shift();
//   }

//   // starting from a specific product, we return an unique identifier
//   getKey(index:number, product: Product) {
//       return product.id;
//   }

//   getProductPrice(index:number) : number {
//       return Math.floor( this.getProduct(index).price );
//   }

// }


import { Component } from "@angular/core";
import { Model } from "./repository.model";
import { Product } from "./product.model";
@Component({
  selector: "app",
  templateUrl: "template.html"
})
export class ProductComponent {
  model: Model = new Model();

  getProduct(key: number): Product {
    return this.model.getProduct(key);
  }

  getProducts(): Product[] {
    return this.model.getProducts();
  }

  selectedProduct:string;

  getSelected(product: Product) {
      return product.name == this.selectedProduct;
  }

}
