/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
var SvgHelper = /** @class */ (function () {
    function SvgHelper() {
    }
    /**
     * @param {?} points
     * @return {?}
     */
    SvgHelper.prototype.getPolyPoints = /**
     * @param {?} points
     * @return {?}
     */
    function (points) {
        return points.map(function (p) { return p.x.toString() + ' ' + p.y.toString(); }).join(' ');
    };
    SvgHelper.decorators = [
        { type: Injectable }
    ];
    return SvgHelper;
}());
export { SvgHelper };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ZnaGVscGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLXN2Zy8iLCJzb3VyY2VzIjpbImxpYi9oZWxwZXJzL3N2Z2hlbHBlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDO0lBQUE7SUFNQSxDQUFDOzs7OztJQUhVLGlDQUFhOzs7O0lBQXBCLFVBQXFCLE1BQWdCO1FBQ2pDLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQXJDLENBQXFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUUsQ0FBQzs7Z0JBTEosVUFBVTs7SUFNWCxnQkFBQztDQUFBLEFBTkQsSUFNQztTQUxZLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFZlcnRleCB9IGZyb20gJy4uL3R5cGVzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFN2Z0hlbHBlciB7XHJcblxyXG4gICAgcHVibGljIGdldFBvbHlQb2ludHMocG9pbnRzOiBWZXJ0ZXhbXSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHBvaW50cy5tYXAocCA9PiBwLngudG9TdHJpbmcoKSArICcgJyArIHAueS50b1N0cmluZygpKS5qb2luKCcgJyk7XHJcbiAgICB9XHJcbn1cclxuIl19