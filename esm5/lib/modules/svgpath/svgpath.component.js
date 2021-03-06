/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { Stroke } from '../../types';
var SvgPathComponent = /** @class */ (function () {
    function SvgPathComponent() {
    }
    /**
     * @return {?}
     */
    SvgPathComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.stroke) {
            this.stroke = new Stroke();
        }
    };
    SvgPathComponent.decorators = [
        { type: Component, args: [{
                    selector: 'g[svg-path]',
                    template: "<svg:path [attr.d]=\"path\"\n          [attr.stroke]=\"stroke?.strokeFill\"\n          [attr.stroke-dasharray]=\"stroke?.dashArray\"\n          [attr.stroke-width]=\"stroke?.thickness\"\n          [attr.fill]=\"stroke?.fill\"\n          vector-effect=\"non-scaling-stroke\"\n          [attr.stroke-opacity]=\"stroke?.opacity\"></svg:path>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    SvgPathComponent.ctorParameters = function () { return []; };
    SvgPathComponent.propDecorators = {
        path: [{ type: Input }],
        stroke: [{ type: Input }]
    };
    return SvgPathComponent;
}());
export { SvgPathComponent };
if (false) {
    /** @type {?} */
    SvgPathComponent.prototype.path;
    /** @type {?} */
    SvgPathComponent.prototype.stroke;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ZncGF0aC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLXN2Zy8iLCJzb3VyY2VzIjpbImxpYi9tb2R1bGVzL3N2Z3BhdGgvc3ZncGF0aC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFckM7SUFPRTtJQUFnQixDQUFDOzs7O0lBU2pCLG1DQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQztTQUM1QjtJQUNILENBQUM7O2dCQXBCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLDhWQUF1Qzs7aUJBRXhDOzs7Ozt1QkFNRSxLQUFLO3lCQUdMLEtBQUs7O0lBU1IsdUJBQUM7Q0FBQSxBQXRCRCxJQXNCQztTQWpCWSxnQkFBZ0I7OztJQUszQixnQ0FDb0I7O0lBRXBCLGtDQUNzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Ryb2tlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnW3N2Zy1wYXRoXScsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdmdwYXRoLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3ZncGF0aC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3ZnUGF0aENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBwYXRoOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHN0cm9rZTogU3Ryb2tlO1xuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy5zdHJva2UpIHtcbiAgICAgIHRoaXMuc3Ryb2tlID0gbmV3IFN0cm9rZSgpO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=