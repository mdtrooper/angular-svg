/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Stroke } from '../../types';
export class SvgRectComponent {
    constructor() {
        this.rectangleMousedown = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.rectangle.stroke) {
            this.rectangle.stroke = new Stroke();
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onRectangleMouseDown($event) {
        if ($event) {
            this.rectangleMousedown.emit({ mouseEvent: $event, rectangle: this.rectangle });
        }
    }
}
SvgRectComponent.decorators = [
    { type: Component, args: [{
                selector: 'g[svg-rect]',
                template: "<svg:rect [attr.x]=\"rectangle?.x\"\n          [attr.y]=\"rectangle?.y\"\n          [attr.stroke]=\"rectangle?.stroke?.strokeFill\"\n          [attr.stroke-dasharray]=\"rectangle?.stroke?.dashArray\"\n          [attr.stroke-width]=\"rectangle?.stroke?.thickness\"\n          [attr.fill]=\"rectangle?.stroke?.fill\"\n          vector-effect=\"non-scaling-stroke\"\n          [attr.stroke-opacity]=\"rectangle?.stroke?.opacity\"\n          (mousedown)=\"onRectangleMouseDown($event)\"></svg:rect>",
                styles: [""]
            }] }
];
/** @nocollapse */
SvgRectComponent.ctorParameters = () => [];
SvgRectComponent.propDecorators = {
    rectangle: [{ type: Input }],
    rectangleMousedown: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    SvgRectComponent.prototype.rectangle;
    /** @type {?} */
    SvgRectComponent.prototype.rectangleMousedown;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ZncmVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLXN2Zy8iLCJzb3VyY2VzIjpbImxpYi9tb2R1bGVzL3N2Z3JlY3Qvc3ZncmVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFnQyxNQUFNLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFPbkUsTUFBTSxPQUFPLGdCQUFnQjtJQUczQjtRQU9PLHVCQUFrQixHQUFHLElBQUksWUFBWSxFQUFvRCxDQUFDO0lBUGpGLENBQUM7Ozs7SUFTakIsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTtZQUMxQixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLE1BQU0sRUFBRSxDQUFDO1NBQ3RDO0lBQ0gsQ0FBQzs7Ozs7SUFFTSxvQkFBb0IsQ0FBQyxNQUFNO1FBQ2hDLElBQUksTUFBTSxFQUFFO1lBQ1YsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO1NBQ2pGO0lBQ0gsQ0FBQzs7O1lBM0JGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsMGZBQXVDOzthQUV4Qzs7Ozs7d0JBT0UsS0FBSztpQ0FHTCxNQUFNOzs7O0lBSFAscUNBQzRCOztJQUU1Qiw4Q0FDaUciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZWN0YW5nbGUsIEVsZW1lbnRFdmVudENsaWNrLCBTdHJva2UgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dbc3ZnLXJlY3RdJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N2Z3JlY3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdmdyZWN0LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdmdSZWN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cblxuICBASW5wdXQoKVxuICBwdWJsaWMgcmVjdGFuZ2xlOiBSZWN0YW5nbGU7XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyByZWN0YW5nbGVNb3VzZWRvd24gPSBuZXcgRXZlbnRFbWl0dGVyPHsgbW91c2VFdmVudDogTW91c2VFdmVudCwgcmVjdGFuZ2xlOiBSZWN0YW5nbGUgfT4oKTtcblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMucmVjdGFuZ2xlLnN0cm9rZSkge1xuICAgICAgdGhpcy5yZWN0YW5nbGUuc3Ryb2tlID0gbmV3IFN0cm9rZSgpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvblJlY3RhbmdsZU1vdXNlRG93bigkZXZlbnQpIHtcbiAgICBpZiAoJGV2ZW50KSB7XG4gICAgICB0aGlzLnJlY3RhbmdsZU1vdXNlZG93bi5lbWl0KHsgbW91c2VFdmVudDogJGV2ZW50LCByZWN0YW5nbGU6IHRoaXMucmVjdGFuZ2xlIH0pO1xuICAgIH1cbiAgfVxufVxuIl19