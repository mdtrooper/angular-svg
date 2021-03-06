/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Stroke } from '../../types';
var SvgRectComponent = /** @class */ (function () {
    function SvgRectComponent() {
        this.rectangleMousedown = new EventEmitter();
    }
    /**
     * @return {?}
     */
    SvgRectComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.rectangle.stroke) {
            this.rectangle.stroke = new Stroke();
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    SvgRectComponent.prototype.onRectangleMouseDown = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if ($event) {
            this.rectangleMousedown.emit({ mouseEvent: $event, rectangle: this.rectangle });
        }
    };
    SvgRectComponent.decorators = [
        { type: Component, args: [{
                    selector: 'g[svg-rect]',
                    template: "<svg:rect [attr.x]=\"rectangle?.x\"\n          [attr.y]=\"rectangle?.y\"\n          [attr.stroke]=\"rectangle?.stroke?.strokeFill\"\n          [attr.stroke-dasharray]=\"rectangle?.stroke?.dashArray\"\n          [attr.stroke-width]=\"rectangle?.stroke?.thickness\"\n          [attr.fill]=\"rectangle?.stroke?.fill\"\n          vector-effect=\"non-scaling-stroke\"\n          [attr.stroke-opacity]=\"rectangle?.stroke?.opacity\"\n          (mousedown)=\"onRectangleMouseDown($event)\"></svg:rect>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    SvgRectComponent.ctorParameters = function () { return []; };
    SvgRectComponent.propDecorators = {
        rectangle: [{ type: Input }],
        rectangleMousedown: [{ type: Output }]
    };
    return SvgRectComponent;
}());
export { SvgRectComponent };
if (false) {
    /** @type {?} */
    SvgRectComponent.prototype.rectangle;
    /** @type {?} */
    SvgRectComponent.prototype.rectangleMousedown;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ZncmVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLXN2Zy8iLCJzb3VyY2VzIjpbImxpYi9tb2R1bGVzL3N2Z3JlY3Qvc3ZncmVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFnQyxNQUFNLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFbkU7SUFRRTtRQU9PLHVCQUFrQixHQUFHLElBQUksWUFBWSxFQUFvRCxDQUFDO0lBUGpGLENBQUM7Ozs7SUFTakIsbUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO1lBQzFCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7U0FDdEM7SUFDSCxDQUFDOzs7OztJQUVNLCtDQUFvQjs7OztJQUEzQixVQUE0QixNQUFNO1FBQ2hDLElBQUksTUFBTSxFQUFFO1lBQ1YsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO1NBQ2pGO0lBQ0gsQ0FBQzs7Z0JBM0JGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsMGZBQXVDOztpQkFFeEM7Ozs7OzRCQU9FLEtBQUs7cUNBR0wsTUFBTTs7SUFjVCx1QkFBQztDQUFBLEFBNUJELElBNEJDO1NBdkJZLGdCQUFnQjs7O0lBTTNCLHFDQUM0Qjs7SUFFNUIsOENBQ2lHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVjdGFuZ2xlLCBFbGVtZW50RXZlbnRDbGljaywgU3Ryb2tlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnW3N2Zy1yZWN0XScsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdmdyZWN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3ZncmVjdC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3ZnUmVjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG5cbiAgQElucHV0KClcbiAgcHVibGljIHJlY3RhbmdsZTogUmVjdGFuZ2xlO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgcmVjdGFuZ2xlTW91c2Vkb3duID0gbmV3IEV2ZW50RW1pdHRlcjx7IG1vdXNlRXZlbnQ6IE1vdXNlRXZlbnQsIHJlY3RhbmdsZTogUmVjdGFuZ2xlIH0+KCk7XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLnJlY3RhbmdsZS5zdHJva2UpIHtcbiAgICAgIHRoaXMucmVjdGFuZ2xlLnN0cm9rZSA9IG5ldyBTdHJva2UoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb25SZWN0YW5nbGVNb3VzZURvd24oJGV2ZW50KSB7XG4gICAgaWYgKCRldmVudCkge1xuICAgICAgdGhpcy5yZWN0YW5nbGVNb3VzZWRvd24uZW1pdCh7IG1vdXNlRXZlbnQ6ICRldmVudCwgcmVjdGFuZ2xlOiB0aGlzLnJlY3RhbmdsZSB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==