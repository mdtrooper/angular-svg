/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Stroke } from '../../types';
export class SvgEllipseComponent {
    constructor() {
        this.ellipseMousedown = new EventEmitter();
        this.ellipseMouseover = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.ellipse.stroke) {
            this.ellipse.stroke = new Stroke();
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onEllipseMouseDown($event) {
        if ($event) {
            this.ellipseMousedown.emit({ mouseEvent: $event, ellipse: this.ellipse });
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onEllipseMouseOver($event) {
        if ($event) {
            this.ellipseMouseover.emit({ mouseEvent: $event, ellipse: this.ellipse });
        }
    }
}
SvgEllipseComponent.decorators = [
    { type: Component, args: [{
                selector: 'g[svg-ellipse]',
                template: "<svg:ellipse [attr.cx]=\"ellipse?.cx\"\n             [attr.cy]=\"ellipse?.cy\"\n             [attr.rx]=\"ellipse?.rx\"\n             [attr.ry]=\"ellipse?.ry\"\n             [attr.stroke]=\"ellipse?.stroke?.strokeFill\"\n             [attr.stroke-dasharray]=\"ellipse?.stroke?.dashArray\"\n             [attr.stroke-width]=\"ellipse?.stroke?.thickness\"\n             [attr.fill]=\"ellipse?.stroke?.fill\"\n             vector-effect=\"non-scaling-stroke\"\n             [attr.stroke-opacity]=\"ellipse?.stroke?.opacity\"\n             (mousedown)=\"onEllipseMouseDown($event)\"\n             (mouseover)=\"onEllipseMouseOver($event)\"></svg:ellipse>",
                styles: [""]
            }] }
];
/** @nocollapse */
SvgEllipseComponent.ctorParameters = () => [];
SvgEllipseComponent.propDecorators = {
    ellipse: [{ type: Input }],
    ellipseMousedown: [{ type: Output }],
    ellipseMouseover: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    SvgEllipseComponent.prototype.ellipse;
    /** @type {?} */
    SvgEllipseComponent.prototype.ellipseMousedown;
    /** @type {?} */
    SvgEllipseComponent.prototype.ellipseMouseover;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ZnZWxsaXBzZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLXN2Zy8iLCJzb3VyY2VzIjpbImxpYi9tb2R1bGVzL3N2Z2VsbGlwc2Uvc3ZnZWxsaXBzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUE4QixNQUFNLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFPakUsTUFBTSxPQUFPLG1CQUFtQjtJQUc5QjtRQU9PLHFCQUFnQixHQUFHLElBQUksWUFBWSxFQUFnRCxDQUFDO1FBRXBGLHFCQUFnQixHQUFHLElBQUksWUFBWSxFQUFnRCxDQUFDO0lBVDNFLENBQUM7Ozs7SUFXakIsUUFBUTtRQUVOLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLE1BQU0sRUFBRSxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQzs7Ozs7SUFFTSxrQkFBa0IsQ0FBQyxNQUFNO1FBQzlCLElBQUksTUFBTSxFQUFFO1lBQ1YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1NBQzNFO0lBRUgsQ0FBQzs7Ozs7SUFFTSxrQkFBa0IsQ0FBQyxNQUFNO1FBQzlCLElBQUksTUFBTSxFQUFFO1lBQ1YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1NBQzNFO0lBRUgsQ0FBQzs7O1lBdENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixxcEJBQTBDOzthQUUzQzs7Ozs7c0JBT0UsS0FBSzsrQkFHTCxNQUFNOytCQUVOLE1BQU07Ozs7SUFMUCxzQ0FDd0I7O0lBRXhCLCtDQUMyRjs7SUFDM0YsK0NBQzJGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRWxsaXBzZSwgRWxlbWVudEV2ZW50Q2xpY2ssIFN0cm9rZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ1tzdmctZWxsaXBzZV0nLFxuICB0ZW1wbGF0ZVVybDogJy4vc3ZnZWxsaXBzZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N2Z2VsbGlwc2UuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN2Z0VsbGlwc2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBlbGxpcHNlOiBFbGxpcHNlO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgZWxsaXBzZU1vdXNlZG93biA9IG5ldyBFdmVudEVtaXR0ZXI8eyBtb3VzZUV2ZW50OiBNb3VzZUV2ZW50LCBlbGxpcHNlOiBFbGxpcHNlIH0+KCk7XG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgZWxsaXBzZU1vdXNlb3ZlciA9IG5ldyBFdmVudEVtaXR0ZXI8eyBtb3VzZUV2ZW50OiBNb3VzZUV2ZW50LCBlbGxpcHNlOiBFbGxpcHNlIH0+KCk7XG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgICBpZiAoIXRoaXMuZWxsaXBzZS5zdHJva2UpIHtcbiAgICAgIHRoaXMuZWxsaXBzZS5zdHJva2UgPSBuZXcgU3Ryb2tlKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9uRWxsaXBzZU1vdXNlRG93bigkZXZlbnQpIHtcbiAgICBpZiAoJGV2ZW50KSB7XG4gICAgICB0aGlzLmVsbGlwc2VNb3VzZWRvd24uZW1pdCh7IG1vdXNlRXZlbnQ6ICRldmVudCwgZWxsaXBzZTogdGhpcy5lbGxpcHNlIH0pO1xuICAgIH1cblxuICB9XG4gIFxuICBwdWJsaWMgb25FbGxpcHNlTW91c2VPdmVyKCRldmVudCkge1xuICAgIGlmICgkZXZlbnQpIHtcbiAgICAgIHRoaXMuZWxsaXBzZU1vdXNlb3Zlci5lbWl0KHsgbW91c2VFdmVudDogJGV2ZW50LCBlbGxpcHNlOiB0aGlzLmVsbGlwc2UgfSk7XG4gICAgfVxuXG4gIH1cbn1cbiJdfQ==