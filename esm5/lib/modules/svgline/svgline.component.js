/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Stroke } from '../../types';
var SvgLineComponent = /** @class */ (function () {
    function SvgLineComponent() {
        this.lineMousedown = new EventEmitter();
        this.lineMouseover = new EventEmitter();
    }
    /**
     * @return {?}
     */
    SvgLineComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.line.stroke) {
            this.line.stroke = new Stroke();
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    SvgLineComponent.prototype.onLineMouseDown = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if ($event) {
            this.lineMousedown.emit({ mouseEvent: $event, line: this.line });
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    SvgLineComponent.prototype.onLineMouseOver = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if ($event) {
            this.lineMouseover.emit({ mouseEvent: $event, line: this.line });
        }
    };
    SvgLineComponent.decorators = [
        { type: Component, args: [{
                    selector: 'g[svg-line]',
                    template: "<svg:line [attr.x1]=\"line?.x1\"\n          [attr.y1]=\"line?.y1\"\n          [attr.x2]=\"line?.x2\"\n          [attr.y2]=\"line?.y2\"\n          [attr.fill]=\"line?.stroke?.fill\"\n          [attr.stroke]=\"line?.stroke?.strokeFill\"\n          [attr.stroke-dasharray]=\"line?.stroke?.dashArray\"\n          [attr.stroke-width]=\"line?.stroke?.thickness\"\n          [attr.stroke-opacity]=\"line?.stroke?.opacity\"\n          (mousedown)=\"onLineMouseDown($event)\"\n          (mouseover)=\"onLineMouseOver($event)\" />",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    SvgLineComponent.ctorParameters = function () { return []; };
    SvgLineComponent.propDecorators = {
        line: [{ type: Input }],
        lineMousedown: [{ type: Output }],
        lineMouseover: [{ type: Output }]
    };
    return SvgLineComponent;
}());
export { SvgLineComponent };
if (false) {
    /** @type {?} */
    SvgLineComponent.prototype.line;
    /** @type {?} */
    SvgLineComponent.prototype.lineMousedown;
    /** @type {?} */
    SvgLineComponent.prototype.lineMouseover;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ZnbGluZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLXN2Zy8iLCJzb3VyY2VzIjpbImxpYi9tb2R1bGVzL3N2Z2xpbmUvc3ZnbGluZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFRLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUUzQztJQVNFO1FBT08sa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBMEMsQ0FBQztRQUczRSxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUEwQyxDQUFDO0lBVmxFLENBQUM7Ozs7SUFZakIsbUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7U0FDakM7SUFDSCxDQUFDOzs7OztJQUVNLDBDQUFlOzs7O0lBQXRCLFVBQXVCLE1BQU07UUFDM0IsSUFBSSxNQUFNLEVBQUU7WUFDVixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQ2xFO0lBQ0gsQ0FBQzs7Ozs7SUFFTSwwQ0FBZTs7OztJQUF0QixVQUF1QixNQUFNO1FBQzNCLElBQUksTUFBTSxFQUFFO1lBQ1YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUNsRTtJQUNILENBQUM7O2dCQXJDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLG9oQkFBdUM7O2lCQUV4Qzs7Ozs7dUJBUUUsS0FBSztnQ0FHTCxNQUFNO2dDQUdOLE1BQU07O0lBb0JULHVCQUFDO0NBQUEsQUF0Q0QsSUFzQ0M7U0FqQ1ksZ0JBQWdCOzs7SUFPM0IsZ0NBQ2tCOztJQUVsQix5Q0FDa0Y7O0lBRWxGLHlDQUNrRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExpbmUsIFN0cm9rZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ1tzdmctbGluZV0nLFxuICB0ZW1wbGF0ZVVybDogJy4vc3ZnbGluZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N2Z2xpbmUuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN2Z0xpbmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG5cbiAgQElucHV0KClcbiAgcHVibGljIGxpbmU6IExpbmU7XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBsaW5lTW91c2Vkb3duID0gbmV3IEV2ZW50RW1pdHRlcjx7IG1vdXNlRXZlbnQ6IE1vdXNlRXZlbnQsIGxpbmU6IExpbmUgfT4oKTtcblxuICBAT3V0cHV0KClcbiAgcHVibGljIGxpbmVNb3VzZW92ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPHsgbW91c2VFdmVudDogTW91c2VFdmVudCwgbGluZTogTGluZSB9PigpO1xuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy5saW5lLnN0cm9rZSkge1xuICAgICAgdGhpcy5saW5lLnN0cm9rZSA9IG5ldyBTdHJva2UoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb25MaW5lTW91c2VEb3duKCRldmVudCk6IHZvaWQge1xuICAgIGlmICgkZXZlbnQpIHtcbiAgICAgIHRoaXMubGluZU1vdXNlZG93bi5lbWl0KHsgbW91c2VFdmVudDogJGV2ZW50LCBsaW5lOiB0aGlzLmxpbmUgfSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9uTGluZU1vdXNlT3ZlcigkZXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoJGV2ZW50KSB7XG4gICAgICB0aGlzLmxpbmVNb3VzZW92ZXIuZW1pdCh7IG1vdXNlRXZlbnQ6ICRldmVudCwgbGluZTogdGhpcy5saW5lIH0pO1xuICAgIH1cbiAgfVxufVxuIl19