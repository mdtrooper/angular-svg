/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { Stroke } from '../../types';
export class SvgPathComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.stroke) {
            this.stroke = new Stroke();
        }
    }
}
SvgPathComponent.decorators = [
    { type: Component, args: [{
                selector: 'g[svg-path]',
                template: "<svg:path [attr.d]=\"path\"\n          [attr.stroke]=\"stroke?.strokeFill\"\n          [attr.stroke-dasharray]=\"stroke?.dashArray\"\n          [attr.stroke-width]=\"stroke?.thickness\"\n          [attr.fill]=\"stroke?.fill\"\n          vector-effect=\"non-scaling-stroke\"\n          [attr.stroke-opacity]=\"stroke?.opacity\"></svg:path>",
                styles: [""]
            }] }
];
/** @nocollapse */
SvgPathComponent.ctorParameters = () => [];
SvgPathComponent.propDecorators = {
    path: [{ type: Input }],
    stroke: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    SvgPathComponent.prototype.path;
    /** @type {?} */
    SvgPathComponent.prototype.stroke;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ZncGF0aC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLXN2Zy8iLCJzb3VyY2VzIjpbImxpYi9tb2R1bGVzL3N2Z3BhdGgvc3ZncGF0aC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFPckMsTUFBTSxPQUFPLGdCQUFnQjtJQUUzQixnQkFBZ0IsQ0FBQzs7OztJQVNqQixRQUFRO1FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLE1BQU0sRUFBRSxDQUFDO1NBQzVCO0lBQ0gsQ0FBQzs7O1lBcEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsOFZBQXVDOzthQUV4Qzs7Ozs7bUJBTUUsS0FBSztxQkFHTCxLQUFLOzs7O0lBSE4sZ0NBQ29COztJQUVwQixrQ0FDc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0cm9rZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ1tzdmctcGF0aF0nLFxuICB0ZW1wbGF0ZVVybDogJy4vc3ZncGF0aC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N2Z3BhdGguY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN2Z1BhdGhDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cblxuICBASW5wdXQoKVxuICBwdWJsaWMgcGF0aDogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzdHJva2U6IFN0cm9rZTtcblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMuc3Ryb2tlKSB7XG4gICAgICB0aGlzLnN0cm9rZSA9IG5ldyBTdHJva2UoKTtcbiAgICB9XG4gIH1cblxufVxuIl19