/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Stroke } from '../../types';
var SvgCircleComponent = /** @class */ (function () {
    function SvgCircleComponent() {
        this.circleMousedown = new EventEmitter();
        this.circleMouseover = new EventEmitter();
    }
    /**
     * @return {?}
     */
    SvgCircleComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.circle.stroke) {
            this.circle.stroke = new Stroke();
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    SvgCircleComponent.prototype.onCircleMouseDown = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if ($event) {
            this.circleMousedown.emit({ mouseEvent: $event, circle: this.circle });
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    SvgCircleComponent.prototype.onCircleMouseOver = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if ($event) {
            this.circleMouseover.emit({ mouseEvent: $event, circle: this.circle });
        }
    };
    SvgCircleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'g[svg-circle]',
                    template: "<svg:circle [attr.cx]=\"circle?.cx\"\r\n            [attr.cy]=\"circle?.cy\"\r\n            [attr.r]=\"circle?.r\"\r\n            [attr.stroke]=\"circle?.stroke?.strokeFill\"\r\n            [attr.stroke-dasharray]=\"circle?.stroke?.dashArray\"\r\n            [attr.stroke-width]=\"circle?.stroke?.thickness\"\r\n            [attr.fill]=\"circle?.stroke?.fill\"\r\n            vector-effect=\"non-scaling-stroke\"\r\n            [attr.stroke-opacity]=\"circle?.stroke?.opacity\"\r\n            (mousedown)=\"onCircleMouseDown($event)\"\r\n            (mouseover)=\"onCircleMouseOver($event)\"></svg:circle>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    SvgCircleComponent.ctorParameters = function () { return []; };
    SvgCircleComponent.propDecorators = {
        circle: [{ type: Input }],
        circleMousedown: [{ type: Output }],
        circleMouseover: [{ type: Output }]
    };
    return SvgCircleComponent;
}());
export { SvgCircleComponent };
if (false) {
    /** @type {?} */
    SvgCircleComponent.prototype.circle;
    /** @type {?} */
    SvgCircleComponent.prototype.circleMousedown;
    /** @type {?} */
    SvgCircleComponent.prototype.circleMouseover;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ZnY2lyY2xlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItc3ZnLyIsInNvdXJjZXMiOlsibGliL21vZHVsZXMvc3ZnY2lyY2xlL3N2Z2NpcmNsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUE2QixNQUFNLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFaEU7SUFRRTtRQU9PLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQThDLENBQUM7UUFFakYsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBOEMsQ0FBQztJQVR4RSxDQUFDOzs7O0lBWWpCLHFDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtZQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLE1BQU0sRUFBRSxDQUFDO1NBQ25DO0lBQ0gsQ0FBQzs7Ozs7SUFFTSw4Q0FBaUI7Ozs7SUFBeEIsVUFBeUIsTUFBTTtRQUM3QixJQUFJLE1BQU0sRUFBRTtZQUNWLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7U0FDeEU7SUFDSCxDQUFDOzs7OztJQUVNLDhDQUFpQjs7OztJQUF4QixVQUF5QixNQUFNO1FBQzdCLElBQUksTUFBTSxFQUFFO1lBQ1YsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztTQUN4RTtJQUNILENBQUM7O2dCQXBDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLHltQkFBeUM7O2lCQUUxQzs7Ozs7eUJBT0UsS0FBSztrQ0FHTCxNQUFNO2tDQUVOLE1BQU07O0lBcUJULHlCQUFDO0NBQUEsQUFyQ0QsSUFxQ0M7U0FoQ1ksa0JBQWtCOzs7SUFNN0Isb0NBQ3NCOztJQUV0Qiw2Q0FDd0Y7O0lBQ3hGLDZDQUN3RiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ2lyY2xlLCBFbGVtZW50RXZlbnRDbGljaywgU3Ryb2tlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnW3N2Zy1jaXJjbGVdJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc3ZnY2lyY2xlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zdmdjaXJjbGUuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdmdDaXJjbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGNpcmNsZTogQ2lyY2xlO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgY2lyY2xlTW91c2Vkb3duID0gbmV3IEV2ZW50RW1pdHRlcjx7IG1vdXNlRXZlbnQ6IE1vdXNlRXZlbnQsIGNpcmNsZTogQ2lyY2xlIH0+KCk7XHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIGNpcmNsZU1vdXNlb3ZlciA9IG5ldyBFdmVudEVtaXR0ZXI8eyBtb3VzZUV2ZW50OiBNb3VzZUV2ZW50LCBjaXJjbGU6IENpcmNsZSB9PigpO1xyXG5cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZiAoIXRoaXMuY2lyY2xlLnN0cm9rZSkge1xyXG4gICAgICB0aGlzLmNpcmNsZS5zdHJva2UgPSBuZXcgU3Ryb2tlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25DaXJjbGVNb3VzZURvd24oJGV2ZW50KSB7XHJcbiAgICBpZiAoJGV2ZW50KSB7XHJcbiAgICAgIHRoaXMuY2lyY2xlTW91c2Vkb3duLmVtaXQoeyBtb3VzZUV2ZW50OiAkZXZlbnQsIGNpcmNsZTogdGhpcy5jaXJjbGUgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25DaXJjbGVNb3VzZU92ZXIoJGV2ZW50KSB7XHJcbiAgICBpZiAoJGV2ZW50KSB7XHJcbiAgICAgIHRoaXMuY2lyY2xlTW91c2VvdmVyLmVtaXQoeyBtb3VzZUV2ZW50OiAkZXZlbnQsIGNpcmNsZTogdGhpcy5jaXJjbGUgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==