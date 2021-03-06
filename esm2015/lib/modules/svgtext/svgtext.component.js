/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class SvgTextComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
SvgTextComponent.decorators = [
    { type: Component, args: [{
                selector: 'g[svg-text]',
                template: "<svg:text [attr.transform]=\"transform\"\n          [attr.x]=\"x\"\n          [attr.y]=\"y\"\n          [attr.fill]=\"fontStyle?.fontFill\"\n          [attr.font-family]=\"fontStyle?.fontFamily\"\n          [attr.font-size]=\"fontStyle?.fontSize\"\n          [attr.font-weight]=\"fontStyle?.fontWeight\"\n          [attr.font-style]=\"fontStyle?.fontStyle\"\n          dominant-baseline=\"central\"\n          text-anchor=\"middle\">\n          <ng-content></ng-content>\n</svg:text>",
                styles: [""]
            }] }
];
/** @nocollapse */
SvgTextComponent.ctorParameters = () => [];
SvgTextComponent.propDecorators = {
    x: [{ type: Input }],
    y: [{ type: Input }],
    transform: [{ type: Input }],
    fontStyle: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    SvgTextComponent.prototype.x;
    /** @type {?} */
    SvgTextComponent.prototype.y;
    /** @type {?} */
    SvgTextComponent.prototype.transform;
    /** @type {?} */
    SvgTextComponent.prototype.fontStyle;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ZndGV4dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLXN2Zy8iLCJzb3VyY2VzIjpbImxpYi9tb2R1bGVzL3N2Z3RleHQvc3ZndGV4dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUXpELE1BQU0sT0FBTyxnQkFBZ0I7SUFFM0IsZ0JBQWdCLENBQUM7Ozs7SUFjakIsUUFBUTtJQUNSLENBQUM7OztZQXRCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLCtlQUF1Qzs7YUFFeEM7Ozs7O2dCQUtFLEtBQUs7Z0JBR0wsS0FBSzt3QkFHTCxLQUFLO3dCQUdMLEtBQUs7Ozs7SUFUTiw2QkFDaUI7O0lBRWpCLDZCQUNpQjs7SUFFakIscUNBQ3lCOztJQUV6QixxQ0FDMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRleHRGb250fSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dbc3ZnLXRleHRdJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N2Z3RleHQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdmd0ZXh0LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdmdUZXh0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyB4OiBudW1iZXI7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHk6IG51bWJlcjtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgdHJhbnNmb3JtOiBudW1iZXI7XG5cbiAgQElucHV0KClcbiAgcHVibGljIGZvbnRTdHlsZTogVGV4dEZvbnQ7XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIl19