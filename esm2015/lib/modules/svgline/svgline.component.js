/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Stroke } from '../../types';
export class SvgLineComponent {
    constructor() {
        this.lineMousedown = new EventEmitter();
        this.lineMouseover = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.line.stroke) {
            this.line.stroke = new Stroke();
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onLineMouseDown($event) {
        if ($event) {
            this.lineMousedown.emit({ mouseEvent: $event, line: this.line });
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onLineMouseOver($event) {
        if ($event) {
            this.lineMouseover.emit({ mouseEvent: $event, line: this.line });
        }
    }
}
SvgLineComponent.decorators = [
    { type: Component, args: [{
                selector: 'g[svg-line]',
                template: "<svg:line [attr.x1]=\"line?.x1\"\n          [attr.y1]=\"line?.y1\"\n          [attr.x2]=\"line?.x2\"\n          [attr.y2]=\"line?.y2\"\n          [attr.fill]=\"line?.stroke?.fill\"\n          [attr.stroke]=\"line?.stroke?.strokeFill\"\n          [attr.stroke-dasharray]=\"line?.stroke?.dashArray\"\n          [attr.stroke-width]=\"line?.stroke?.thickness\"\n          [attr.stroke-opacity]=\"line?.stroke?.opacity\"\n          (mousedown)=\"onLineMouseDown($event)\"\n          (mouseover)=\"onLineMouseOver($event)\" />",
                styles: [""]
            }] }
];
/** @nocollapse */
SvgLineComponent.ctorParameters = () => [];
SvgLineComponent.propDecorators = {
    line: [{ type: Input }],
    lineMousedown: [{ type: Output }],
    lineMouseover: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    SvgLineComponent.prototype.line;
    /** @type {?} */
    SvgLineComponent.prototype.lineMousedown;
    /** @type {?} */
    SvgLineComponent.prototype.lineMouseover;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ZnbGluZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLXN2Zy8iLCJzb3VyY2VzIjpbImxpYi9tb2R1bGVzL3N2Z2xpbmUvc3ZnbGluZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFRLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQU8zQyxNQUFNLE9BQU8sZ0JBQWdCO0lBSTNCO1FBT08sa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBMEMsQ0FBQztRQUczRSxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUEwQyxDQUFDO0lBVmxFLENBQUM7Ozs7SUFZakIsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLE1BQU0sRUFBRSxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQzs7Ozs7SUFFTSxlQUFlLENBQUMsTUFBTTtRQUMzQixJQUFJLE1BQU0sRUFBRTtZQUNWLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7U0FDbEU7SUFDSCxDQUFDOzs7OztJQUVNLGVBQWUsQ0FBQyxNQUFNO1FBQzNCLElBQUksTUFBTSxFQUFFO1lBQ1YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUNsRTtJQUNILENBQUM7OztZQXJDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLG9oQkFBdUM7O2FBRXhDOzs7OzttQkFRRSxLQUFLOzRCQUdMLE1BQU07NEJBR04sTUFBTTs7OztJQU5QLGdDQUNrQjs7SUFFbEIseUNBQ2tGOztJQUVsRix5Q0FDa0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMaW5lLCBTdHJva2UgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dbc3ZnLWxpbmVdJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N2Z2xpbmUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdmdsaW5lLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdmdMaW5lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBsaW5lOiBMaW5lO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgbGluZU1vdXNlZG93biA9IG5ldyBFdmVudEVtaXR0ZXI8eyBtb3VzZUV2ZW50OiBNb3VzZUV2ZW50LCBsaW5lOiBMaW5lIH0+KCk7XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBsaW5lTW91c2VvdmVyID0gbmV3IEV2ZW50RW1pdHRlcjx7IG1vdXNlRXZlbnQ6IE1vdXNlRXZlbnQsIGxpbmU6IExpbmUgfT4oKTtcblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMubGluZS5zdHJva2UpIHtcbiAgICAgIHRoaXMubGluZS5zdHJva2UgPSBuZXcgU3Ryb2tlKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9uTGluZU1vdXNlRG93bigkZXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoJGV2ZW50KSB7XG4gICAgICB0aGlzLmxpbmVNb3VzZWRvd24uZW1pdCh7IG1vdXNlRXZlbnQ6ICRldmVudCwgbGluZTogdGhpcy5saW5lIH0pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvbkxpbmVNb3VzZU92ZXIoJGV2ZW50KTogdm9pZCB7XG4gICAgaWYgKCRldmVudCkge1xuICAgICAgdGhpcy5saW5lTW91c2VvdmVyLmVtaXQoeyBtb3VzZUV2ZW50OiAkZXZlbnQsIGxpbmU6IHRoaXMubGluZSB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==