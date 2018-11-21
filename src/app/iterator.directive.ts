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
import { ViewRef } from "@angular/core/src/render3/view_ref";

@Directive({
    selector: "[paForOf]"
})
export class PaIteratorDirective {
    private differ: IterableDiffer<any>;
    private views: Map<string, PaIteratorContext> = new Map<string, PaIteratorContext>();

    constructor(
        private container: ViewContainerRef,
        private template: TemplateRef<any>,
        private differs: IterableDiffers,
        private changeDetector: ChangeDetectorRef
    ) {}

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
            console.log("ngDoCheck()");
            changes.forEachAddedItem(addition => {
                let context = new PaIteratorContext(
                    addition.item,
                    addition.currentIndex,
                    this.dataSource.length
                );
                context.view = this.container.createEmbeddedView(
                    this.template,
                    context
                );
                this.views.set(addition.trackById, context);
            });

            changes.forEachRemovedItem(removal => {
                let context = this.views.get(removal.trackById);
                this.views.delete(removal.trackById);
                this.container.remove(this.container.indexOf(context.view));
            });
            // changes.forEachMovedItem(moved => {
            //     let context = this.views.get(moved.trackById);
            //     context.setData(moved.currentIndex, this.dataSource.length);
            // });
            let index = 0;
            let size = this.dataSource.length;
            this.views.forEach( (v,k) => {
                v.setData(index++, size);
            });
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

    view: ViewRef;

    constructor(public $implicit: any, public index: number, total: number) {
        this.setData(index, total);
    }

    setData(index: number, total: number) {
        this.odd = index % 2 == 1;
        this.even = !this.odd;
        this.first = index == 0;
        this.last = index == total - 1;
    }
}
