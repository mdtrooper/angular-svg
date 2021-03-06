/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Stroke } from '../../types';
var SvgEllipseComponent = /** @class */ (function () {
    function SvgEllipseComponent() {
        this.ellipseMousedown = new EventEmitter();
        this.ellipseMouseover = new EventEmitter();
    }
    /**
     * @return {?}
     */
    SvgEllipseComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.ellipse.stroke) {
            this.ellipse.stroke = new Stroke();
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    SvgEllipseComponent.prototype.onEllipseMouseDown = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if ($event) {
            this.ellipseMousedown.emit({ mouseEvent: $event, ellipse: this.ellipse });
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    SvgEllipseComponent.prototype.onEllipseMouseOver = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if ($event) {
            this.ellipseMouseover.emit({ mouseEvent: $event, ellipse: this.ellipse });
        }
    };
    SvgEllipseComponent.decorators = [
        { type: Component, args: [{
                    selector: 'g[svg-ellipse]',
                    template: "<svg:ellipse [attr.cx]=\"ellipse?.cx\"\n             [attr.cy]=\"ellipse?.cy\"\n             [attr.rx]=\"ellipse?.rx\"\n             [attr.ry]=\"ellipse?.ry\"\n             [attr.stroke]=\"ellipse?.stroke?.strokeFill\"\n             [attr.stroke-dasharray]=\"ellipse?.stroke?.dashArray\"\n             [attr.stroke-width]=\"ellipse?.stroke?.thickness\"\n             [attr.fill]=\"ellipse?.stroke?.fill\"\n             vector-effect=\"non-scaling-stroke\"\n             [attr.stroke-opacity]=\"ellipse?.stroke?.opacity\"\n             (mousedown)=\"onEllipseMouseDown($event)\"\n             (mouseover)=\"onEllipseMouseOver($event)\"></svg:ellipse>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    SvgEllipseComponent.ctorParameters = function () { return []; };
    SvgEllipseComponent.propDecorators = {
        ellipse: [{ type: Input }],
        ellipseMousedown: [{ type: Output }],
        ellipseMouseover: [{ type: Output }]
    };
    return SvgEllipseComponent;
}());
export { SvgEllipseComponent };
if (false) {
    /** @type {?} */
    SvgEllipseComponent.prototype.ellipse;
    /** @type {?} */
    SvgEllipseComponent.prototype.ellipseMousedown;
    /** @type {?} */
    SvgEllipseComponent.prototype.ellipseMouseover;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ZnZWxsaXBzZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLXN2Zy8iLCJzb3VyY2VzIjpbImxpYi9tb2R1bGVzL3N2Z2VsbGlwc2Uvc3ZnZWxsaXBzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUE4QixNQUFNLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFakU7SUFRRTtRQU9PLHFCQUFnQixHQUFHLElBQUksWUFBWSxFQUFnRCxDQUFDO1FBRXBGLHFCQUFnQixHQUFHLElBQUksWUFBWSxFQUFnRCxDQUFDO0lBVDNFLENBQUM7Ozs7SUFXakIsc0NBQVE7OztJQUFSO1FBRUUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7U0FDcEM7SUFDSCxDQUFDOzs7OztJQUVNLGdEQUFrQjs7OztJQUF6QixVQUEwQixNQUFNO1FBQzlCLElBQUksTUFBTSxFQUFFO1lBQ1YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1NBQzNFO0lBRUgsQ0FBQzs7Ozs7SUFFTSxnREFBa0I7Ozs7SUFBekIsVUFBMEIsTUFBTTtRQUM5QixJQUFJLE1BQU0sRUFBRTtZQUNWLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztTQUMzRTtJQUVILENBQUM7O2dCQXRDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIscXBCQUEwQzs7aUJBRTNDOzs7OzswQkFPRSxLQUFLO21DQUdMLE1BQU07bUNBRU4sTUFBTTs7SUF1QlQsMEJBQUM7Q0FBQSxBQXZDRCxJQXVDQztTQWxDWSxtQkFBbUI7OztJQU05QixzQ0FDd0I7O0lBRXhCLCtDQUMyRjs7SUFDM0YsK0NBQzJGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRWxsaXBzZSwgRWxlbWVudEV2ZW50Q2xpY2ssIFN0cm9rZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ1tzdmctZWxsaXBzZV0nLFxuICB0ZW1wbGF0ZVVybDogJy4vc3ZnZWxsaXBzZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N2Z2VsbGlwc2UuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN2Z0VsbGlwc2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBlbGxpcHNlOiBFbGxpcHNlO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgZWxsaXBzZU1vdXNlZG93biA9IG5ldyBFdmVudEVtaXR0ZXI8eyBtb3VzZUV2ZW50OiBNb3VzZUV2ZW50LCBlbGxpcHNlOiBFbGxpcHNlIH0+KCk7XG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgZWxsaXBzZU1vdXNlb3ZlciA9IG5ldyBFdmVudEVtaXR0ZXI8eyBtb3VzZUV2ZW50OiBNb3VzZUV2ZW50LCBlbGxpcHNlOiBFbGxpcHNlIH0+KCk7XG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgICBpZiAoIXRoaXMuZWxsaXBzZS5zdHJva2UpIHtcbiAgICAgIHRoaXMuZWxsaXBzZS5zdHJva2UgPSBuZXcgU3Ryb2tlKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9uRWxsaXBzZU1vdXNlRG93bigkZXZlbnQpIHtcbiAgICBpZiAoJGV2ZW50KSB7XG4gICAgICB0aGlzLmVsbGlwc2VNb3VzZWRvd24uZW1pdCh7IG1vdXNlRXZlbnQ6ICRldmVudCwgZWxsaXBzZTogdGhpcy5lbGxpcHNlIH0pO1xuICAgIH1cblxuICB9XG4gIFxuICBwdWJsaWMgb25FbGxpcHNlTW91c2VPdmVyKCRldmVudCkge1xuICAgIGlmICgkZXZlbnQpIHtcbiAgICAgIHRoaXMuZWxsaXBzZU1vdXNlb3Zlci5lbWl0KHsgbW91c2VFdmVudDogJGV2ZW50LCBlbGxpcHNlOiB0aGlzLmVsbGlwc2UgfSk7XG4gICAgfVxuXG4gIH1cbn1cbiJdfQ==