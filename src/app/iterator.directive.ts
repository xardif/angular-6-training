import {
    Directive,
    ViewContainerRef,
    TemplateRef,
    Input,
    SimpleChange,
    IterableDiffer,
    IterableDiffers,
    ChangeDetectorRef
} from "@angular/core";
import { Product } from "./product.model";

@Directive({
    selector: "[paForOf]"
})
export class PaIteratorDirective {
    private differ: IterableDiffer<any>;

    constructor(
        private container: ViewContainerRef,
        private template: TemplateRef<any>,
        private differs: IterableDiffers,
        private changeDetector: ChangeDetectorRef
    ) { }

    @Input("paForOf")
    dataSource: any;

    ngOnInit() {
        // start monitoring datasoure
        this.differ = this.differs.find(this.dataSource).create();
        // this.updateContent();
    }

    /**
     * Function is triggered every time angular run the change detection system
     */
    ngDoCheck() {
        let changes = this.differ.diff(this.dataSource);
        if (changes != null) {
            changes.forEachAddedItem(addition => {
                this.container.createEmbeddedView(
                    this.template,
                    new PaIteratorContext(
                        addition.item,
                        addition.currentIndex,
                        this.dataSource.length
                    )
                );
            })
            console.log("ngDoCheck()");
        }
    }

    private updateContent() {
        this.container.clear();
        for (let i = 0; i < this.dataSource.length; i++) {
            this.container.createEmbeddedView(
                this.template,
                new PaIteratorContext(
                    this.dataSource[i],
                    i,
                    this.dataSource.length
                )
            );
        }
    }

    // ngOnChanges(changes: { [property: string]: SimpleChange }) {
    //     let change = changes["dataSource"];
    //     if (!change.isFirstChange() && !change.currentValue) {
    //         this.container.clear();
    //     } else if (change.currentValue) {
    //         this.container.createEmbeddedView(this.template);
    //     }
    // }
}

/**
 * Decorator of a product
 */
class PaIteratorContext {
    odd: boolean;
    even: boolean;
    first: boolean;
    last: boolean;

    constructor(public $implicit: any, public index: number, total: number) {
        this.odd = index % 2 == 1;
        this.even = !this.odd;
        this.first = index == 0;
        this.last = index == total - 1;
    }
}
