/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, KeyValueDiffers } from '@angular/core';
import { Polyline, Stroke } from '../../types';
import { SvgHelper } from '../../helpers/svghelper.service';
var SvgPolylineComponent = /** @class */ (function () {
    function SvgPolylineComponent(differs, svghelper) {
        this.differs = differs;
        this.svghelper = svghelper;
        this.polylineMousedown = new EventEmitter();
        this.differ = this.differs.find({}).create();
    }
    /**
     * @return {?}
     */
    SvgPolylineComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.polyline) {
            this.pointsString = this.svghelper.getPolyPoints(this.polyline.vertices);
        }
        if (!this.polyline.stroke) {
            this.polyline.stroke = new Stroke();
        }
    };
    /**
     * @return {?}
     */
    SvgPolylineComponent.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var changes = this.differ.diff(this.polyline);
        if (changes) {
            this.pointsString = this.svghelper.getPolyPoints(this.polyline.vertices);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SvgPolylineComponent.prototype.onPolylineMouseDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event) {
            this.polylineMousedown.emit({
                mouseEvent: event,
                polyline: this.polyline
            });
        }
    };
    SvgPolylineComponent.decorators = [
        { type: Component, args: [{
                    selector: 'g[svg-polyline]',
                    template: "<svg:polyline [attr.stroke]=\"polyline?.stroke?.strokeFill\"\n             [attr.fill]=\"polyline?.stroke?.fill\"\n             [attr.stroke-opacity]=\"polyline?.stroke?.opacity\"\n             [attr.stroke-dasharray]=\"polyline?.stroke?.dashArray\"\n             [attr.stroke-width]=\"polyline?.stroke?.thickness\"\n             [attr.points]=\"pointsString\"\n             vector-effect=\"non-scaling-stroke\"\n             (mousedown)=\"onPolylineMouseDown($event)\">\n</svg:polyline>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    SvgPolylineComponent.ctorParameters = function () { return [
        { type: KeyValueDiffers },
        { type: SvgHelper }
    ]; };
    SvgPolylineComponent.propDecorators = {
        pointsString: [{ type: Input }],
        polyline: [{ type: Input }],
        polylineMousedown: [{ type: Output }]
    };
    return SvgPolylineComponent;
}());
export { SvgPolylineComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ZncG9seWxpbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1zdmcvIiwic291cmNlcyI6WyJsaWIvbW9kdWxlcy9zdmdwb2x5bGluZS9zdmdwb2x5bGluZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osZUFBZSxFQUVoQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMvQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFNUQ7SUFRRSw4QkFBb0IsT0FBd0IsRUFBVSxTQUFvQjtRQUF0RCxZQUFPLEdBQVAsT0FBTyxDQUFpQjtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFXbkUsc0JBQWlCLEdBQUcsSUFBSSxZQUFZLEVBR3ZDLENBQUM7UUFiSCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQy9DLENBQUM7Ozs7SUFjRCx1Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzFFO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7U0FDckM7SUFDSCxDQUFDOzs7O0lBRUQsd0NBQVM7OztJQUFUOztZQUNRLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBRS9DLElBQUksT0FBTyxFQUFFO1lBQ1gsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzFFO0lBQ0gsQ0FBQzs7Ozs7SUFFTSxrREFBbUI7Ozs7SUFBMUIsVUFBMkIsS0FBSztRQUM5QixJQUFJLEtBQUssRUFBRTtZQUNULElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUM7Z0JBQzFCLFVBQVUsRUFBRSxLQUFLO2dCQUNqQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7YUFDeEIsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOztnQkFoREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLG1mQUEyQzs7aUJBRTVDOzs7O2dCQVZDLGVBQWU7Z0JBSVIsU0FBUzs7OytCQWNmLEtBQUs7MkJBR0wsS0FBSztvQ0FHTCxNQUFNOztJQStCVCwyQkFBQztDQUFBLEFBakRELElBaURDO1NBNUNZLG9CQUFvQjs7O0lBQy9CLHNDQUFZOztJQU1aLDRDQUNvQjs7SUFFcEIsd0NBQzBCOztJQUUxQixpREFJSzs7Ozs7SUFkTyx1Q0FBZ0M7Ozs7O0lBQUUseUNBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgS2V5VmFsdWVEaWZmZXJzLFxuICBEb0NoZWNrXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUG9seWxpbmUsIFN0cm9rZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IFN2Z0hlbHBlciB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc3ZnaGVscGVyLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnW3N2Zy1wb2x5bGluZV0nLFxuICB0ZW1wbGF0ZVVybDogJy4vc3ZncG9seWxpbmUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdmdwb2x5bGluZS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3ZnUG9seWxpbmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIERvQ2hlY2sge1xuICBkaWZmZXI6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRpZmZlcnM6IEtleVZhbHVlRGlmZmVycywgcHJpdmF0ZSBzdmdoZWxwZXI6IFN2Z0hlbHBlcikge1xuICAgIHRoaXMuZGlmZmVyID0gdGhpcy5kaWZmZXJzLmZpbmQoe30pLmNyZWF0ZSgpO1xuICB9XG5cbiAgQElucHV0KClcbiAgcHVibGljIHBvaW50c1N0cmluZztcblxuICBASW5wdXQoKVxuICBwdWJsaWMgcG9seWxpbmU6IFBvbHlsaW5lO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgcG9seWxpbmVNb3VzZWRvd24gPSBuZXcgRXZlbnRFbWl0dGVyPHtcbiAgICBtb3VzZUV2ZW50OiBNb3VzZUV2ZW50O1xuICAgIHBvbHlsaW5lOiBQb2x5bGluZTtcbiAgfT4oKTtcblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5wb2x5bGluZSkge1xuICAgICAgdGhpcy5wb2ludHNTdHJpbmcgPSB0aGlzLnN2Z2hlbHBlci5nZXRQb2x5UG9pbnRzKHRoaXMucG9seWxpbmUudmVydGljZXMpO1xuICAgIH1cbiAgICBpZiAoIXRoaXMucG9seWxpbmUuc3Ryb2tlKSB7XG4gICAgICB0aGlzLnBvbHlsaW5lLnN0cm9rZSA9IG5ldyBTdHJva2UoKTtcbiAgICB9XG4gIH1cblxuICBuZ0RvQ2hlY2soKSB7XG4gICAgY29uc3QgY2hhbmdlcyA9IHRoaXMuZGlmZmVyLmRpZmYodGhpcy5wb2x5bGluZSk7XG5cbiAgICBpZiAoY2hhbmdlcykge1xuICAgICAgdGhpcy5wb2ludHNTdHJpbmcgPSB0aGlzLnN2Z2hlbHBlci5nZXRQb2x5UG9pbnRzKHRoaXMucG9seWxpbmUudmVydGljZXMpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvblBvbHlsaW5lTW91c2VEb3duKGV2ZW50KTogdm9pZCB7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICB0aGlzLnBvbHlsaW5lTW91c2Vkb3duLmVtaXQoe1xuICAgICAgICBtb3VzZUV2ZW50OiBldmVudCxcbiAgICAgICAgcG9seWxpbmU6IHRoaXMucG9seWxpbmVcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIl19