/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, KeyValueDiffers } from '@angular/core';
import { Polyline, Stroke } from '../../types';
import { SvgHelper } from '../../helpers/svghelper.service';
export class SvgPolylineComponent {
    /**
     * @param {?} differs
     * @param {?} svghelper
     */
    constructor(differs, svghelper) {
        this.differs = differs;
        this.svghelper = svghelper;
        this.polylineMousedown = new EventEmitter();
        this.differ = this.differs.find({}).create();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.polyline) {
            this.pointsString = this.svghelper.getPolyPoints(this.polyline.vertices);
        }
        if (!this.polyline.stroke) {
            this.polyline.stroke = new Stroke();
        }
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        /** @type {?} */
        const changes = this.differ.diff(this.polyline);
        if (changes) {
            this.pointsString = this.svghelper.getPolyPoints(this.polyline.vertices);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onPolylineMouseDown(event) {
        if (event) {
            this.polylineMousedown.emit({
                mouseEvent: event,
                polyline: this.polyline
            });
        }
    }
}
SvgPolylineComponent.decorators = [
    { type: Component, args: [{
                selector: 'g[svg-polyline]',
                template: "<svg:polyline [attr.stroke]=\"polyline?.stroke?.strokeFill\"\n             [attr.fill]=\"polyline?.stroke?.fill\"\n             [attr.stroke-opacity]=\"polyline?.stroke?.opacity\"\n             [attr.stroke-dasharray]=\"polyline?.stroke?.dashArray\"\n             [attr.stroke-width]=\"polyline?.stroke?.thickness\"\n             [attr.points]=\"pointsString\"\n             vector-effect=\"non-scaling-stroke\"\n             (mousedown)=\"onPolylineMouseDown($event)\">\n</svg:polyline>",
                styles: [""]
            }] }
];
/** @nocollapse */
SvgPolylineComponent.ctorParameters = () => [
    { type: KeyValueDiffers },
    { type: SvgHelper }
];
SvgPolylineComponent.propDecorators = {
    pointsString: [{ type: Input }],
    polyline: [{ type: Input }],
    polylineMousedown: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    SvgPolylineComponent.prototype.differ;
    /** @type {?} */
    SvgPolylineComponent.prototype.pointsString;
    /** @type {?} */
    SvgPolylineComponent.prototype.polyline;
    /** @type {?} */
    SvgPolylineComponent.prototype.polylineMousedown;
    /**
     * @type {?}
     * @private
     */
    SvgPolylineComponent.prototype.differs;
    /**
     * @type {?}
     * @private
     */
    SvgPolylineComponent.prototype.svghelper;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ZncG9seWxpbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1zdmcvIiwic291cmNlcyI6WyJsaWIvbW9kdWxlcy9zdmdwb2x5bGluZS9zdmdwb2x5bGluZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osZUFBZSxFQUVoQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMvQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFPNUQsTUFBTSxPQUFPLG9CQUFvQjs7Ozs7SUFHL0IsWUFBb0IsT0FBd0IsRUFBVSxTQUFvQjtRQUF0RCxZQUFPLEdBQVAsT0FBTyxDQUFpQjtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFXbkUsc0JBQWlCLEdBQUcsSUFBSSxZQUFZLEVBR3ZDLENBQUM7UUFiSCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQy9DLENBQUM7Ozs7SUFjRCxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUMxRTtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRTtZQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLE1BQU0sRUFBRSxDQUFDO1NBQ3JDO0lBQ0gsQ0FBQzs7OztJQUVELFNBQVM7O2NBQ0QsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFFL0MsSUFBSSxPQUFPLEVBQUU7WUFDWCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDMUU7SUFDSCxDQUFDOzs7OztJQUVNLG1CQUFtQixDQUFDLEtBQUs7UUFDOUIsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDO2dCQUMxQixVQUFVLEVBQUUsS0FBSztnQkFDakIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO2FBQ3hCLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7O1lBaERGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixtZkFBMkM7O2FBRTVDOzs7O1lBVkMsZUFBZTtZQUlSLFNBQVM7OzsyQkFjZixLQUFLO3VCQUdMLEtBQUs7Z0NBR0wsTUFBTTs7OztJQVpQLHNDQUFZOztJQU1aLDRDQUNvQjs7SUFFcEIsd0NBQzBCOztJQUUxQixpREFJSzs7Ozs7SUFkTyx1Q0FBZ0M7Ozs7O0lBQUUseUNBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgS2V5VmFsdWVEaWZmZXJzLFxuICBEb0NoZWNrXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUG9seWxpbmUsIFN0cm9rZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IFN2Z0hlbHBlciB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc3ZnaGVscGVyLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnW3N2Zy1wb2x5bGluZV0nLFxuICB0ZW1wbGF0ZVVybDogJy4vc3ZncG9seWxpbmUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdmdwb2x5bGluZS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3ZnUG9seWxpbmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIERvQ2hlY2sge1xuICBkaWZmZXI6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRpZmZlcnM6IEtleVZhbHVlRGlmZmVycywgcHJpdmF0ZSBzdmdoZWxwZXI6IFN2Z0hlbHBlcikge1xuICAgIHRoaXMuZGlmZmVyID0gdGhpcy5kaWZmZXJzLmZpbmQoe30pLmNyZWF0ZSgpO1xuICB9XG5cbiAgQElucHV0KClcbiAgcHVibGljIHBvaW50c1N0cmluZztcblxuICBASW5wdXQoKVxuICBwdWJsaWMgcG9seWxpbmU6IFBvbHlsaW5lO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgcG9seWxpbmVNb3VzZWRvd24gPSBuZXcgRXZlbnRFbWl0dGVyPHtcbiAgICBtb3VzZUV2ZW50OiBNb3VzZUV2ZW50O1xuICAgIHBvbHlsaW5lOiBQb2x5bGluZTtcbiAgfT4oKTtcblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5wb2x5bGluZSkge1xuICAgICAgdGhpcy5wb2ludHNTdHJpbmcgPSB0aGlzLnN2Z2hlbHBlci5nZXRQb2x5UG9pbnRzKHRoaXMucG9seWxpbmUudmVydGljZXMpO1xuICAgIH1cbiAgICBpZiAoIXRoaXMucG9seWxpbmUuc3Ryb2tlKSB7XG4gICAgICB0aGlzLnBvbHlsaW5lLnN0cm9rZSA9IG5ldyBTdHJva2UoKTtcbiAgICB9XG4gIH1cblxuICBuZ0RvQ2hlY2soKSB7XG4gICAgY29uc3QgY2hhbmdlcyA9IHRoaXMuZGlmZmVyLmRpZmYodGhpcy5wb2x5bGluZSk7XG5cbiAgICBpZiAoY2hhbmdlcykge1xuICAgICAgdGhpcy5wb2ludHNTdHJpbmcgPSB0aGlzLnN2Z2hlbHBlci5nZXRQb2x5UG9pbnRzKHRoaXMucG9seWxpbmUudmVydGljZXMpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvblBvbHlsaW5lTW91c2VEb3duKGV2ZW50KTogdm9pZCB7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICB0aGlzLnBvbHlsaW5lTW91c2Vkb3duLmVtaXQoe1xuICAgICAgICBtb3VzZUV2ZW50OiBldmVudCxcbiAgICAgICAgcG9seWxpbmU6IHRoaXMucG9seWxpbmVcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIl19