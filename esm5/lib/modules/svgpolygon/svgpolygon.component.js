/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, KeyValueDiffers } from "@angular/core";
import { Polygon, Stroke } from "../../types";
import { isNullOrUndefined } from "util";
import { SvgHelper } from "../../helpers/svghelper.service";
var SvgPolygonComponent = /** @class */ (function () {
    function SvgPolygonComponent(differs, svghelper) {
        this.differs = differs;
        this.svghelper = svghelper;
        this.polygonMousedown = new EventEmitter();
        this.polygonMouseover = new EventEmitter();
        this.differ = this.differs.find({}).create();
    }
    /**
     * @return {?}
     */
    SvgPolygonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.polygon && isNullOrUndefined(this.pointsString)) {
            this.pointsString = this.svghelper.getPolyPoints(this.polygon.vertices);
        }
        if (!this.polygon.stroke) {
            this.polygon.stroke = new Stroke();
        }
    };
    /**
     * @return {?}
     */
    SvgPolygonComponent.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var changes = this.differ.diff(this.polygon);
        if (changes) {
            this.pointsString = this.svghelper.getPolyPoints(this.polygon.vertices);
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    SvgPolygonComponent.prototype.onPolygonMouseDown = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if ($event) {
            this.polygonMousedown.emit({ mouseEvent: $event, polygon: this.polygon });
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    SvgPolygonComponent.prototype.onPolygonMouseOver = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if ($event) {
            this.polygonMouseover.emit({ mouseEvent: $event, polygon: this.polygon });
        }
    };
    SvgPolygonComponent.decorators = [
        { type: Component, args: [{
                    selector: "g[svg-polygon]",
                    template: "<svg:polygon [attr.stroke]=\"polygon?.stroke?.strokeFill\"\n             [attr.fill]=\"polygon?.stroke?.fill\"\n             [attr.stroke-opacity]=\"polygon?.stroke?.opacity\"\n             [attr.stroke-dasharray]=\"polygon?.stroke?.dashArray\"\n             [attr.stroke-width]=\"polygon?.stroke?.thickness\"\n             [attr.points]=\"pointsString\"\n             vector-effect=\"non-scaling-stroke\"\n             (mousedown)=\"onPolygonMouseDown($event)\"\n             (mouseover)=\"onPolygonMouseOver($event)\">\n</svg:polygon>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    SvgPolygonComponent.ctorParameters = function () { return [
        { type: KeyValueDiffers },
        { type: SvgHelper }
    ]; };
    SvgPolygonComponent.propDecorators = {
        pointsString: [{ type: Input }],
        polygon: [{ type: Input }],
        polygonMousedown: [{ type: Output }],
        polygonMouseover: [{ type: Output }]
    };
    return SvgPolygonComponent;
}());
export { SvgPolygonComponent };
if (false) {
    /** @type {?} */
    SvgPolygonComponent.prototype.differ;
    /** @type {?} */
    SvgPolygonComponent.prototype.pointsString;
    /** @type {?} */
    SvgPolygonComponent.prototype.polygon;
    /** @type {?} */
    SvgPolygonComponent.prototype.polygonMousedown;
    /** @type {?} */
    SvgPolygonComponent.prototype.polygonMouseover;
    /**
     * @type {?}
     * @private
     */
    SvgPolygonComponent.prototype.differs;
    /**
     * @type {?}
     * @private
     */
    SvgPolygonComponent.prototype.svghelper;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ZncG9seWdvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLXN2Zy8iLCJzb3VyY2VzIjpbImxpYi9tb2R1bGVzL3N2Z3BvbHlnb24vc3ZncG9seWdvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBRVosZUFBZSxFQUNoQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM5QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDekMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRTVEO0lBUUUsNkJBQW9CLE9BQXdCLEVBQVUsU0FBb0I7UUFBdEQsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBV25FLHFCQUFnQixHQUFHLElBQUksWUFBWSxFQUd0QyxDQUFDO1FBR0UscUJBQWdCLEdBQUcsSUFBSSxZQUFZLEVBR3RDLENBQUM7UUFuQkgsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUMvQyxDQUFDOzs7O0lBb0JELHNDQUFROzs7SUFBUjtRQUNFLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFDeEQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3pFO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7U0FDcEM7SUFDSCxDQUFDOzs7O0lBRUQsdUNBQVM7OztJQUFUOztZQUNRLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBRTlDLElBQUksT0FBTyxFQUFFO1lBQ1gsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3pFO0lBQ0gsQ0FBQzs7Ozs7SUFFTSxnREFBa0I7Ozs7SUFBekIsVUFBMEIsTUFBVztRQUNuQyxJQUFJLE1BQU0sRUFBRTtZQUNWLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztTQUMzRTtJQUNILENBQUM7Ozs7O0lBRU0sZ0RBQWtCOzs7O0lBQXpCLFVBQTBCLE1BQVc7UUFDbkMsSUFBSSxNQUFNLEVBQUU7WUFDVixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7U0FDM0U7SUFDSCxDQUFDOztnQkF6REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLG9pQkFBMEM7O2lCQUUzQzs7OztnQkFWQyxlQUFlO2dCQUlSLFNBQVM7OzsrQkFjZixLQUFLOzBCQUdMLEtBQUs7bUNBR0wsTUFBTTttQ0FNTixNQUFNOztJQWtDVCwwQkFBQztDQUFBLEFBMURELElBMERDO1NBckRZLG1CQUFtQjs7O0lBQzlCLHFDQUFZOztJQU1aLDJDQUNvQjs7SUFFcEIsc0NBQ3dCOztJQUV4QiwrQ0FJSzs7SUFFTCwrQ0FJSzs7Ozs7SUFwQk8sc0NBQWdDOzs7OztJQUFFLHdDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIERvQ2hlY2ssXG4gIEtleVZhbHVlRGlmZmVyc1xufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUG9seWdvbiwgU3Ryb2tlIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBpc051bGxPclVuZGVmaW5lZCB9IGZyb20gXCJ1dGlsXCI7XG5pbXBvcnQgeyBTdmdIZWxwZXIgfSBmcm9tIFwiLi4vLi4vaGVscGVycy9zdmdoZWxwZXIuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiZ1tzdmctcG9seWdvbl1cIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9zdmdwb2x5Z29uLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9zdmdwb2x5Z29uLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgU3ZnUG9seWdvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgRG9DaGVjayB7XG4gIGRpZmZlcjogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGlmZmVyczogS2V5VmFsdWVEaWZmZXJzLCBwcml2YXRlIHN2Z2hlbHBlcjogU3ZnSGVscGVyKSB7XG4gICAgdGhpcy5kaWZmZXIgPSB0aGlzLmRpZmZlcnMuZmluZCh7fSkuY3JlYXRlKCk7XG4gIH1cblxuICBASW5wdXQoKVxuICBwdWJsaWMgcG9pbnRzU3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBwb2x5Z29uOiBQb2x5Z29uO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgcG9seWdvbk1vdXNlZG93biA9IG5ldyBFdmVudEVtaXR0ZXI8e1xuICAgIG1vdXNlRXZlbnQ6IE1vdXNlRXZlbnQ7XG4gICAgcG9seWdvbjogUG9seWdvbjtcbiAgfT4oKTtcblxuICBAT3V0cHV0KClcbiAgcHVibGljIHBvbHlnb25Nb3VzZW92ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPHtcbiAgICBtb3VzZUV2ZW50OiBNb3VzZUV2ZW50O1xuICAgIHBvbHlnb246IFBvbHlnb247XG4gIH0+KCk7XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMucG9seWdvbiAmJiBpc051bGxPclVuZGVmaW5lZCh0aGlzLnBvaW50c1N0cmluZykpIHtcbiAgICAgIHRoaXMucG9pbnRzU3RyaW5nID0gdGhpcy5zdmdoZWxwZXIuZ2V0UG9seVBvaW50cyh0aGlzLnBvbHlnb24udmVydGljZXMpO1xuICAgIH1cbiAgICBpZiAoIXRoaXMucG9seWdvbi5zdHJva2UpIHtcbiAgICAgIHRoaXMucG9seWdvbi5zdHJva2UgPSBuZXcgU3Ryb2tlKCk7XG4gICAgfVxuICB9XG5cbiAgbmdEb0NoZWNrKCkge1xuICAgIGNvbnN0IGNoYW5nZXMgPSB0aGlzLmRpZmZlci5kaWZmKHRoaXMucG9seWdvbik7XG5cbiAgICBpZiAoY2hhbmdlcykge1xuICAgICAgdGhpcy5wb2ludHNTdHJpbmcgPSB0aGlzLnN2Z2hlbHBlci5nZXRQb2x5UG9pbnRzKHRoaXMucG9seWdvbi52ZXJ0aWNlcyk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9uUG9seWdvbk1vdXNlRG93bigkZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIGlmICgkZXZlbnQpIHtcbiAgICAgIHRoaXMucG9seWdvbk1vdXNlZG93bi5lbWl0KHsgbW91c2VFdmVudDogJGV2ZW50LCBwb2x5Z29uOiB0aGlzLnBvbHlnb24gfSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9uUG9seWdvbk1vdXNlT3ZlcigkZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIGlmICgkZXZlbnQpIHtcbiAgICAgIHRoaXMucG9seWdvbk1vdXNlb3Zlci5lbWl0KHsgbW91c2VFdmVudDogJGV2ZW50LCBwb2x5Z29uOiB0aGlzLnBvbHlnb24gfSk7XG4gICAgfVxuICB9XG59XG4iXX0=