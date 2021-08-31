import { Component, Input, Output, EventEmitter, NgModule, Injectable, KeyValueDiffers } from '@angular/core';
import { CommonModule } from '@angular/common';
import { isNullOrUndefined } from 'util';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Stroke {
    /**
     * @param {?=} fill
     * @param {?=} strokeFill
     * @param {?=} dashArray
     * @param {?=} thickness
     * @param {?=} opacity
     */
    constructor(fill, strokeFill, dashArray, thickness, opacity) {
        this.fill = fill != null ? fill : 'transparent';
        this.strokeFill = strokeFill != null ? strokeFill : 'black';
        this.dashArray = dashArray != null ? dashArray : 0;
        this.thickness = thickness != null ? thickness : 1;
        this.opacity = opacity != null ? opacity : 1;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Vertex {
    constructor() {
        this.x = 0;
        this.y = 0;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Polygon {
    constructor() {
        this.vertices = new Array();
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Polyline {
    constructor() {
        this.vertices = new Array();
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SvgCircleComponent {
    constructor() {
        this.circleMousedown = new EventEmitter();
        this.circleMouseover = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.circle.stroke) {
            this.circle.stroke = new Stroke();
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onCircleMouseDown($event) {
        if ($event) {
            this.circleMousedown.emit({ mouseEvent: $event, circle: this.circle });
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onCircleMouseOver($event) {
        if ($event) {
            this.circleMouseover.emit({ mouseEvent: $event, circle: this.circle });
        }
    }
}
SvgCircleComponent.decorators = [
    { type: Component, args: [{
                selector: 'g[svg-circle]',
                template: "<svg:circle [attr.cx]=\"circle?.cx\"\r\n            [attr.cy]=\"circle?.cy\"\r\n            [attr.r]=\"circle?.r\"\r\n            [attr.stroke]=\"circle?.stroke?.strokeFill\"\r\n            [attr.stroke-dasharray]=\"circle?.stroke?.dashArray\"\r\n            [attr.stroke-width]=\"circle?.stroke?.thickness\"\r\n            [attr.fill]=\"circle?.stroke?.fill\"\r\n            vector-effect=\"non-scaling-stroke\"\r\n            [attr.stroke-opacity]=\"circle?.stroke?.opacity\"\r\n            (mousedown)=\"onCircleMouseDown($event)\"\r\n            (mouseover)=\"onCircleMouseOver($event)\"></svg:circle>",
                styles: [""]
            }] }
];
/** @nocollapse */
SvgCircleComponent.ctorParameters = () => [];
SvgCircleComponent.propDecorators = {
    circle: [{ type: Input }],
    circleMousedown: [{ type: Output }],
    circleMouseover: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SvgCircleModule {
}
SvgCircleModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [SvgCircleComponent],
                exports: [SvgCircleComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SvgEllipseComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SvgEllipseModule {
}
SvgEllipseModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [SvgEllipseComponent],
                exports: [SvgEllipseComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SvgLineComponent {
    constructor() {
        this.lineMousedown = new EventEmitter();
        this.lineMouseover = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.line.stroke) {
            this.line.stroke = new Stroke();
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onLineMouseDown($event) {
        if ($event) {
            this.lineMousedown.emit({ mouseEvent: $event, line: this.line });
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onLineMouseOver($event) {
        if ($event) {
            this.lineMouseover.emit({ mouseEvent: $event, line: this.line });
        }
    }
}
SvgLineComponent.decorators = [
    { type: Component, args: [{
                selector: 'g[svg-line]',
                template: "<svg:line [attr.x1]=\"line?.x1\"\n          [attr.y1]=\"line?.y1\"\n          [attr.x2]=\"line?.x2\"\n          [attr.y2]=\"line?.y2\"\n          [attr.fill]=\"line?.stroke?.fill\"\n          [attr.stroke]=\"line?.stroke?.strokeFill\"\n          [attr.stroke-dasharray]=\"line?.stroke?.dashArray\"\n          [attr.stroke-width]=\"line?.stroke?.thickness\"\n          [attr.stroke-opacity]=\"line?.stroke?.opacity\"\n          (mousedown)=\"onLineMouseDown($event)\"\n          (mouseover)=\"onLineMouseOver($event)\" />",
                styles: [""]
            }] }
];
/** @nocollapse */
SvgLineComponent.ctorParameters = () => [];
SvgLineComponent.propDecorators = {
    line: [{ type: Input }],
    lineMousedown: [{ type: Output }],
    lineMouseover: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SvgLineModule {
}
SvgLineModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [SvgLineComponent],
                exports: [SvgLineComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SvgPathComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SvgPathModule {
}
SvgPathModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [SvgPathComponent],
                exports: [SvgPathComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SvgHelper {
    /**
     * @param {?} points
     * @return {?}
     */
    getPolyPoints(points) {
        return points.map(p => p.x.toString() + ' ' + p.y.toString()).join(' ');
    }
}
SvgHelper.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SvgPolygonComponent {
    /**
     * @param {?} differs
     * @param {?} svghelper
     */
    constructor(differs, svghelper) {
        this.differs = differs;
        this.svghelper = svghelper;
        this.polygonMousedown = new EventEmitter();
        this.polygonMouseover = new EventEmitter();
        this.differ = this.differs.find({}).create();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.polygon && isNullOrUndefined(this.pointsString)) {
            this.pointsString = this.svghelper.getPolyPoints(this.polygon.vertices);
        }
        if (!this.polygon.stroke) {
            this.polygon.stroke = new Stroke();
        }
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        /** @type {?} */
        const changes = this.differ.diff(this.polygon);
        if (changes) {
            this.pointsString = this.svghelper.getPolyPoints(this.polygon.vertices);
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onPolygonMouseDown($event) {
        if ($event) {
            this.polygonMousedown.emit({ mouseEvent: $event, polygon: this.polygon });
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onPolygonMouseOver($event) {
        if ($event) {
            this.polygonMouseover.emit({ mouseEvent: $event, polygon: this.polygon });
        }
    }
}
SvgPolygonComponent.decorators = [
    { type: Component, args: [{
                selector: "g[svg-polygon]",
                template: "<svg:polygon [attr.stroke]=\"polygon?.stroke?.strokeFill\"\n             [attr.fill]=\"polygon?.stroke?.fill\"\n             [attr.stroke-opacity]=\"polygon?.stroke?.opacity\"\n             [attr.stroke-dasharray]=\"polygon?.stroke?.dashArray\"\n             [attr.stroke-width]=\"polygon?.stroke?.thickness\"\n             [attr.points]=\"pointsString\"\n             vector-effect=\"non-scaling-stroke\"\n             (mousedown)=\"onPolygonMouseDown($event)\"\n             (mouseover)=\"onPolygonMouseOver($event)\">\n</svg:polygon>",
                styles: [""]
            }] }
];
/** @nocollapse */
SvgPolygonComponent.ctorParameters = () => [
    { type: KeyValueDiffers },
    { type: SvgHelper }
];
SvgPolygonComponent.propDecorators = {
    pointsString: [{ type: Input }],
    polygon: [{ type: Input }],
    polygonMousedown: [{ type: Output }],
    polygonMouseover: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SvgPolygonModule {
}
SvgPolygonModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [SvgPolygonComponent],
                exports: [SvgPolygonComponent],
                providers: [SvgHelper]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SvgPolylineComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SvgPolylineModule {
}
SvgPolylineModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [SvgPolylineComponent],
                exports: [SvgPolylineComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SvgRectComponent {
    constructor() {
        this.rectangleMousedown = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.rectangle.stroke) {
            this.rectangle.stroke = new Stroke();
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onRectangleMouseDown($event) {
        if ($event) {
            this.rectangleMousedown.emit({ mouseEvent: $event, rectangle: this.rectangle });
        }
    }
}
SvgRectComponent.decorators = [
    { type: Component, args: [{
                selector: 'g[svg-rect]',
                template: "<svg:rect [attr.x]=\"rectangle?.x\"\n          [attr.y]=\"rectangle?.y\"\n          [attr.stroke]=\"rectangle?.stroke?.strokeFill\"\n          [attr.stroke-dasharray]=\"rectangle?.stroke?.dashArray\"\n          [attr.stroke-width]=\"rectangle?.stroke?.thickness\"\n          [attr.fill]=\"rectangle?.stroke?.fill\"\n          vector-effect=\"non-scaling-stroke\"\n          [attr.stroke-opacity]=\"rectangle?.stroke?.opacity\"\n          (mousedown)=\"onRectangleMouseDown($event)\"></svg:rect>",
                styles: [""]
            }] }
];
/** @nocollapse */
SvgRectComponent.ctorParameters = () => [];
SvgRectComponent.propDecorators = {
    rectangle: [{ type: Input }],
    rectangleMousedown: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SvgrectModule {
}
SvgrectModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [SvgRectComponent],
                exports: [SvgRectComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SvgTextComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SvgTextModule {
}
SvgTextModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [SvgTextComponent],
                exports: [SvgTextComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { SvgCircleModule, SvgEllipseModule, SvgLineModule, SvgPathModule, SvgPolygonModule, SvgPolylineModule, SvgrectModule, SvgTextModule, Polygon, Polyline, Stroke, Vertex, SvgHelper as ɵf, SvgCircleComponent as ɵa, SvgEllipseComponent as ɵb, SvgLineComponent as ɵc, SvgPathComponent as ɵd, SvgPolygonComponent as ɵe, SvgPolylineComponent as ɵg, SvgRectComponent as ɵh, SvgTextComponent as ɵi };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1zdmcuanMubWFwIiwic291cmNlcyI6WyJuZzovL2FuZ3VsYXItc3ZnL2xpYi90eXBlcy9zdHJva2UubW9kZWwudHMiLCJuZzovL2FuZ3VsYXItc3ZnL2xpYi90eXBlcy92ZXJ0ZXgubW9kZWwudHMiLCJuZzovL2FuZ3VsYXItc3ZnL2xpYi90eXBlcy9wb2x5Z29uLm1vZGVsLnRzIiwibmc6Ly9hbmd1bGFyLXN2Zy9saWIvdHlwZXMvcG9seWxpbmUubW9kZWwudHMiLCJuZzovL2FuZ3VsYXItc3ZnL2xpYi9tb2R1bGVzL3N2Z2NpcmNsZS9zdmdjaXJjbGUuY29tcG9uZW50LnRzIiwibmc6Ly9hbmd1bGFyLXN2Zy9saWIvbW9kdWxlcy9zdmdjaXJjbGUvc3ZnY2lyY2xlLm1vZHVsZS50cyIsIm5nOi8vYW5ndWxhci1zdmcvbGliL21vZHVsZXMvc3ZnZWxsaXBzZS9zdmdlbGxpcHNlLmNvbXBvbmVudC50cyIsIm5nOi8vYW5ndWxhci1zdmcvbGliL21vZHVsZXMvc3ZnZWxsaXBzZS9zdmdlbGxpcHNlLm1vZHVsZS50cyIsIm5nOi8vYW5ndWxhci1zdmcvbGliL21vZHVsZXMvc3ZnbGluZS9zdmdsaW5lLmNvbXBvbmVudC50cyIsIm5nOi8vYW5ndWxhci1zdmcvbGliL21vZHVsZXMvc3ZnbGluZS9zdmdsaW5lLm1vZHVsZS50cyIsIm5nOi8vYW5ndWxhci1zdmcvbGliL21vZHVsZXMvc3ZncGF0aC9zdmdwYXRoLmNvbXBvbmVudC50cyIsIm5nOi8vYW5ndWxhci1zdmcvbGliL21vZHVsZXMvc3ZncGF0aC9zdmdwYXRoLm1vZHVsZS50cyIsIm5nOi8vYW5ndWxhci1zdmcvbGliL2hlbHBlcnMvc3ZnaGVscGVyLnNlcnZpY2UudHMiLCJuZzovL2FuZ3VsYXItc3ZnL2xpYi9tb2R1bGVzL3N2Z3BvbHlnb24vc3ZncG9seWdvbi5jb21wb25lbnQudHMiLCJuZzovL2FuZ3VsYXItc3ZnL2xpYi9tb2R1bGVzL3N2Z3BvbHlnb24vc3ZncG9seWdvbi5tb2R1bGUudHMiLCJuZzovL2FuZ3VsYXItc3ZnL2xpYi9tb2R1bGVzL3N2Z3BvbHlsaW5lL3N2Z3BvbHlsaW5lLmNvbXBvbmVudC50cyIsIm5nOi8vYW5ndWxhci1zdmcvbGliL21vZHVsZXMvc3ZncG9seWxpbmUvc3ZncG9seWxpbmUubW9kdWxlLnRzIiwibmc6Ly9hbmd1bGFyLXN2Zy9saWIvbW9kdWxlcy9zdmdyZWN0L3N2Z3JlY3QuY29tcG9uZW50LnRzIiwibmc6Ly9hbmd1bGFyLXN2Zy9saWIvbW9kdWxlcy9zdmdyZWN0L3N2Z3JlY3QubW9kdWxlLnRzIiwibmc6Ly9hbmd1bGFyLXN2Zy9saWIvbW9kdWxlcy9zdmd0ZXh0L3N2Z3RleHQuY29tcG9uZW50LnRzIiwibmc6Ly9hbmd1bGFyLXN2Zy9saWIvbW9kdWxlcy9zdmd0ZXh0L3N2Z3RleHQubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBTdHJva2Uge1xyXG4gICAgcHVibGljIGZpbGw6IHN0cmluZztcclxuICAgIHB1YmxpYyBzdHJva2VGaWxsOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgZGFzaEFycmF5OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgc3Ryb2tlX2xpbmVjYXA6IHN0cmluZztcclxuICAgIHB1YmxpYyB0aGlja25lc3M6IG51bWJlcjtcclxuICAgIHB1YmxpYyBvcGFjaXR5OiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZmlsbD86IHN0cmluZywgc3Ryb2tlRmlsbD86IHN0cmluZywgZGFzaEFycmF5PzogbnVtYmVyLCB0aGlja25lc3M/OiBudW1iZXIsIG9wYWNpdHk/OiBudW1iZXIpIHtcclxuXHJcbiAgICAgICAgdGhpcy5maWxsID0gZmlsbCAhPSBudWxsID8gZmlsbCA6ICd0cmFuc3BhcmVudCc7XHJcbiAgICAgICAgdGhpcy5zdHJva2VGaWxsID0gc3Ryb2tlRmlsbCAhPSBudWxsID8gc3Ryb2tlRmlsbCA6ICdibGFjayc7XHJcbiAgICAgICAgdGhpcy5kYXNoQXJyYXkgPSBkYXNoQXJyYXkgIT0gbnVsbCA/IGRhc2hBcnJheSA6IDA7XHJcbiAgICAgICAgdGhpcy50aGlja25lc3MgPSB0aGlja25lc3MgIT0gbnVsbCA/IHRoaWNrbmVzcyA6IDE7XHJcbiAgICAgICAgdGhpcy5vcGFjaXR5ID0gb3BhY2l0eSAhPSBudWxsID8gb3BhY2l0eSA6IDE7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIFZlcnRleCB7XHJcbiAgICBwdWJsaWMgeDogbnVtYmVyO1xyXG4gICAgcHVibGljIHk6IG51bWJlcjtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMueCA9IDA7XHJcbiAgICAgICAgdGhpcy55ID0gMDtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBTdHJva2UgfSBmcm9tICcuL3N0cm9rZS5tb2RlbCc7XHJcbmltcG9ydCB7IFZlcnRleCB9IGZyb20gJy4vdmVydGV4Lm1vZGVsJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQb2x5Z29uIHtcclxuICAgIHB1YmxpYyB2ZXJ0aWNlczogVmVydGV4W107XHJcbiAgICBzdHJva2U6IFN0cm9rZTtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMudmVydGljZXMgPSBuZXcgQXJyYXk8VmVydGV4PigpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFN0cm9rZSB9IGZyb20gJy4vc3Ryb2tlLm1vZGVsJztcclxuaW1wb3J0IHsgVmVydGV4IH0gZnJvbSAnLi92ZXJ0ZXgubW9kZWwnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBvbHlsaW5lIHtcclxuICAgIHB1YmxpYyB2ZXJ0aWNlczogVmVydGV4W107XHJcbiAgICBzdHJva2U6IFN0cm9rZTtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMudmVydGljZXMgPSBuZXcgQXJyYXk8VmVydGV4PigpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ2lyY2xlLCBFbGVtZW50RXZlbnRDbGljaywgU3Ryb2tlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnW3N2Zy1jaXJjbGVdJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc3ZnY2lyY2xlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zdmdjaXJjbGUuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdmdDaXJjbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGNpcmNsZTogQ2lyY2xlO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgY2lyY2xlTW91c2Vkb3duID0gbmV3IEV2ZW50RW1pdHRlcjx7IG1vdXNlRXZlbnQ6IE1vdXNlRXZlbnQsIGNpcmNsZTogQ2lyY2xlIH0+KCk7XHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIGNpcmNsZU1vdXNlb3ZlciA9IG5ldyBFdmVudEVtaXR0ZXI8eyBtb3VzZUV2ZW50OiBNb3VzZUV2ZW50LCBjaXJjbGU6IENpcmNsZSB9PigpO1xyXG5cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZiAoIXRoaXMuY2lyY2xlLnN0cm9rZSkge1xyXG4gICAgICB0aGlzLmNpcmNsZS5zdHJva2UgPSBuZXcgU3Ryb2tlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25DaXJjbGVNb3VzZURvd24oJGV2ZW50KSB7XHJcbiAgICBpZiAoJGV2ZW50KSB7XHJcbiAgICAgIHRoaXMuY2lyY2xlTW91c2Vkb3duLmVtaXQoeyBtb3VzZUV2ZW50OiAkZXZlbnQsIGNpcmNsZTogdGhpcy5jaXJjbGUgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25DaXJjbGVNb3VzZU92ZXIoJGV2ZW50KSB7XHJcbiAgICBpZiAoJGV2ZW50KSB7XHJcbiAgICAgIHRoaXMuY2lyY2xlTW91c2VvdmVyLmVtaXQoeyBtb3VzZUV2ZW50OiAkZXZlbnQsIGNpcmNsZTogdGhpcy5jaXJjbGUgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU3ZnQ2lyY2xlQ29tcG9uZW50IH0gZnJvbSAnLi9zdmdjaXJjbGUuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtTdmdDaXJjbGVDb21wb25lbnRdLFxuICBleHBvcnRzOiBbU3ZnQ2lyY2xlQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBTdmdDaXJjbGVNb2R1bGUgeyB9XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFbGxpcHNlLCBFbGVtZW50RXZlbnRDbGljaywgU3Ryb2tlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnW3N2Zy1lbGxpcHNlXScsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdmdlbGxpcHNlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3ZnZWxsaXBzZS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3ZnRWxsaXBzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG5cbiAgQElucHV0KClcbiAgcHVibGljIGVsbGlwc2U6IEVsbGlwc2U7XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBlbGxpcHNlTW91c2Vkb3duID0gbmV3IEV2ZW50RW1pdHRlcjx7IG1vdXNlRXZlbnQ6IE1vdXNlRXZlbnQsIGVsbGlwc2U6IEVsbGlwc2UgfT4oKTtcbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBlbGxpcHNlTW91c2VvdmVyID0gbmV3IEV2ZW50RW1pdHRlcjx7IG1vdXNlRXZlbnQ6IE1vdXNlRXZlbnQsIGVsbGlwc2U6IEVsbGlwc2UgfT4oKTtcblxuICBuZ09uSW5pdCgpIHtcblxuICAgIGlmICghdGhpcy5lbGxpcHNlLnN0cm9rZSkge1xuICAgICAgdGhpcy5lbGxpcHNlLnN0cm9rZSA9IG5ldyBTdHJva2UoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb25FbGxpcHNlTW91c2VEb3duKCRldmVudCkge1xuICAgIGlmICgkZXZlbnQpIHtcbiAgICAgIHRoaXMuZWxsaXBzZU1vdXNlZG93bi5lbWl0KHsgbW91c2VFdmVudDogJGV2ZW50LCBlbGxpcHNlOiB0aGlzLmVsbGlwc2UgfSk7XG4gICAgfVxuXG4gIH1cbiAgXG4gIHB1YmxpYyBvbkVsbGlwc2VNb3VzZU92ZXIoJGV2ZW50KSB7XG4gICAgaWYgKCRldmVudCkge1xuICAgICAgdGhpcy5lbGxpcHNlTW91c2VvdmVyLmVtaXQoeyBtb3VzZUV2ZW50OiAkZXZlbnQsIGVsbGlwc2U6IHRoaXMuZWxsaXBzZSB9KTtcbiAgICB9XG5cbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBTdmdFbGxpcHNlQ29tcG9uZW50IH0gZnJvbSAnLi9zdmdlbGxpcHNlLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbU3ZnRWxsaXBzZUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtTdmdFbGxpcHNlQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBTdmdFbGxpcHNlTW9kdWxlIHsgfVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGluZSwgU3Ryb2tlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnW3N2Zy1saW5lXScsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdmdsaW5lLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3ZnbGluZS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3ZnTGluZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblxuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cblxuICBASW5wdXQoKVxuICBwdWJsaWMgbGluZTogTGluZTtcblxuICBAT3V0cHV0KClcbiAgcHVibGljIGxpbmVNb3VzZWRvd24gPSBuZXcgRXZlbnRFbWl0dGVyPHsgbW91c2VFdmVudDogTW91c2VFdmVudCwgbGluZTogTGluZSB9PigpO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgbGluZU1vdXNlb3ZlciA9IG5ldyBFdmVudEVtaXR0ZXI8eyBtb3VzZUV2ZW50OiBNb3VzZUV2ZW50LCBsaW5lOiBMaW5lIH0+KCk7XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLmxpbmUuc3Ryb2tlKSB7XG4gICAgICB0aGlzLmxpbmUuc3Ryb2tlID0gbmV3IFN0cm9rZSgpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvbkxpbmVNb3VzZURvd24oJGV2ZW50KTogdm9pZCB7XG4gICAgaWYgKCRldmVudCkge1xuICAgICAgdGhpcy5saW5lTW91c2Vkb3duLmVtaXQoeyBtb3VzZUV2ZW50OiAkZXZlbnQsIGxpbmU6IHRoaXMubGluZSB9KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb25MaW5lTW91c2VPdmVyKCRldmVudCk6IHZvaWQge1xuICAgIGlmICgkZXZlbnQpIHtcbiAgICAgIHRoaXMubGluZU1vdXNlb3Zlci5lbWl0KHsgbW91c2VFdmVudDogJGV2ZW50LCBsaW5lOiB0aGlzLmxpbmUgfSk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFN2Z0xpbmVDb21wb25lbnQgfSBmcm9tICcuL3N2Z2xpbmUuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtTdmdMaW5lQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1N2Z0xpbmVDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFN2Z0xpbmVNb2R1bGUgeyB9XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0cm9rZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ1tzdmctcGF0aF0nLFxuICB0ZW1wbGF0ZVVybDogJy4vc3ZncGF0aC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N2Z3BhdGguY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN2Z1BhdGhDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cblxuICBASW5wdXQoKVxuICBwdWJsaWMgcGF0aDogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzdHJva2U6IFN0cm9rZTtcblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMuc3Ryb2tlKSB7XG4gICAgICB0aGlzLnN0cm9rZSA9IG5ldyBTdHJva2UoKTtcbiAgICB9XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBTdmdQYXRoQ29tcG9uZW50IH0gZnJvbSAnLi9zdmdwYXRoLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbU3ZnUGF0aENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtTdmdQYXRoQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBTdmdQYXRoTW9kdWxlIHsgfVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBWZXJ0ZXggfSBmcm9tICcuLi90eXBlcyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTdmdIZWxwZXIge1xyXG5cclxuICAgIHB1YmxpYyBnZXRQb2x5UG9pbnRzKHBvaW50czogVmVydGV4W10pOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBwb2ludHMubWFwKHAgPT4gcC54LnRvU3RyaW5nKCkgKyAnICcgKyBwLnkudG9TdHJpbmcoKSkuam9pbignICcpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIERvQ2hlY2ssXG4gIEtleVZhbHVlRGlmZmVyc1xufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUG9seWdvbiwgU3Ryb2tlIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBpc051bGxPclVuZGVmaW5lZCB9IGZyb20gXCJ1dGlsXCI7XG5pbXBvcnQgeyBTdmdIZWxwZXIgfSBmcm9tIFwiLi4vLi4vaGVscGVycy9zdmdoZWxwZXIuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiZ1tzdmctcG9seWdvbl1cIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9zdmdwb2x5Z29uLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9zdmdwb2x5Z29uLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgU3ZnUG9seWdvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgRG9DaGVjayB7XG4gIGRpZmZlcjogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGlmZmVyczogS2V5VmFsdWVEaWZmZXJzLCBwcml2YXRlIHN2Z2hlbHBlcjogU3ZnSGVscGVyKSB7XG4gICAgdGhpcy5kaWZmZXIgPSB0aGlzLmRpZmZlcnMuZmluZCh7fSkuY3JlYXRlKCk7XG4gIH1cblxuICBASW5wdXQoKVxuICBwdWJsaWMgcG9pbnRzU3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBwb2x5Z29uOiBQb2x5Z29uO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgcG9seWdvbk1vdXNlZG93biA9IG5ldyBFdmVudEVtaXR0ZXI8e1xuICAgIG1vdXNlRXZlbnQ6IE1vdXNlRXZlbnQ7XG4gICAgcG9seWdvbjogUG9seWdvbjtcbiAgfT4oKTtcblxuICBAT3V0cHV0KClcbiAgcHVibGljIHBvbHlnb25Nb3VzZW92ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPHtcbiAgICBtb3VzZUV2ZW50OiBNb3VzZUV2ZW50O1xuICAgIHBvbHlnb246IFBvbHlnb247XG4gIH0+KCk7XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMucG9seWdvbiAmJiBpc051bGxPclVuZGVmaW5lZCh0aGlzLnBvaW50c1N0cmluZykpIHtcbiAgICAgIHRoaXMucG9pbnRzU3RyaW5nID0gdGhpcy5zdmdoZWxwZXIuZ2V0UG9seVBvaW50cyh0aGlzLnBvbHlnb24udmVydGljZXMpO1xuICAgIH1cbiAgICBpZiAoIXRoaXMucG9seWdvbi5zdHJva2UpIHtcbiAgICAgIHRoaXMucG9seWdvbi5zdHJva2UgPSBuZXcgU3Ryb2tlKCk7XG4gICAgfVxuICB9XG5cbiAgbmdEb0NoZWNrKCkge1xuICAgIGNvbnN0IGNoYW5nZXMgPSB0aGlzLmRpZmZlci5kaWZmKHRoaXMucG9seWdvbik7XG5cbiAgICBpZiAoY2hhbmdlcykge1xuICAgICAgdGhpcy5wb2ludHNTdHJpbmcgPSB0aGlzLnN2Z2hlbHBlci5nZXRQb2x5UG9pbnRzKHRoaXMucG9seWdvbi52ZXJ0aWNlcyk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9uUG9seWdvbk1vdXNlRG93bigkZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIGlmICgkZXZlbnQpIHtcbiAgICAgIHRoaXMucG9seWdvbk1vdXNlZG93bi5lbWl0KHsgbW91c2VFdmVudDogJGV2ZW50LCBwb2x5Z29uOiB0aGlzLnBvbHlnb24gfSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9uUG9seWdvbk1vdXNlT3ZlcigkZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIGlmICgkZXZlbnQpIHtcbiAgICAgIHRoaXMucG9seWdvbk1vdXNlb3Zlci5lbWl0KHsgbW91c2VFdmVudDogJGV2ZW50LCBwb2x5Z29uOiB0aGlzLnBvbHlnb24gfSk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFN2Z1BvbHlnb25Db21wb25lbnQgfSBmcm9tICcuL3N2Z3BvbHlnb24uY29tcG9uZW50JztcbmltcG9ydCB7IFN2Z0hlbHBlciB9IGZyb20gJy4uLy4uL2hlbHBlcnMvc3ZnaGVscGVyLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1N2Z1BvbHlnb25Db21wb25lbnRdLFxuICBleHBvcnRzOiBbU3ZnUG9seWdvbkNvbXBvbmVudF0sXG4gIHByb3ZpZGVyczogW1N2Z0hlbHBlcl1cbn0pXG5leHBvcnQgY2xhc3MgU3ZnUG9seWdvbk1vZHVsZSB7IH1cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIEtleVZhbHVlRGlmZmVycyxcbiAgRG9DaGVja1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBvbHlsaW5lLCBTdHJva2UgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBTdmdIZWxwZXIgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3N2Z2hlbHBlci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ1tzdmctcG9seWxpbmVdJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N2Z3BvbHlsaW5lLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3ZncG9seWxpbmUuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN2Z1BvbHlsaW5lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBEb0NoZWNrIHtcbiAgZGlmZmVyOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkaWZmZXJzOiBLZXlWYWx1ZURpZmZlcnMsIHByaXZhdGUgc3ZnaGVscGVyOiBTdmdIZWxwZXIpIHtcbiAgICB0aGlzLmRpZmZlciA9IHRoaXMuZGlmZmVycy5maW5kKHt9KS5jcmVhdGUoKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBwb2ludHNTdHJpbmc7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHBvbHlsaW5lOiBQb2x5bGluZTtcblxuICBAT3V0cHV0KClcbiAgcHVibGljIHBvbHlsaW5lTW91c2Vkb3duID0gbmV3IEV2ZW50RW1pdHRlcjx7XG4gICAgbW91c2VFdmVudDogTW91c2VFdmVudDtcbiAgICBwb2x5bGluZTogUG9seWxpbmU7XG4gIH0+KCk7XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMucG9seWxpbmUpIHtcbiAgICAgIHRoaXMucG9pbnRzU3RyaW5nID0gdGhpcy5zdmdoZWxwZXIuZ2V0UG9seVBvaW50cyh0aGlzLnBvbHlsaW5lLnZlcnRpY2VzKTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLnBvbHlsaW5lLnN0cm9rZSkge1xuICAgICAgdGhpcy5wb2x5bGluZS5zdHJva2UgPSBuZXcgU3Ryb2tlKCk7XG4gICAgfVxuICB9XG5cbiAgbmdEb0NoZWNrKCkge1xuICAgIGNvbnN0IGNoYW5nZXMgPSB0aGlzLmRpZmZlci5kaWZmKHRoaXMucG9seWxpbmUpO1xuXG4gICAgaWYgKGNoYW5nZXMpIHtcbiAgICAgIHRoaXMucG9pbnRzU3RyaW5nID0gdGhpcy5zdmdoZWxwZXIuZ2V0UG9seVBvaW50cyh0aGlzLnBvbHlsaW5lLnZlcnRpY2VzKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb25Qb2x5bGluZU1vdXNlRG93bihldmVudCk6IHZvaWQge1xuICAgIGlmIChldmVudCkge1xuICAgICAgdGhpcy5wb2x5bGluZU1vdXNlZG93bi5lbWl0KHtcbiAgICAgICAgbW91c2VFdmVudDogZXZlbnQsXG4gICAgICAgIHBvbHlsaW5lOiB0aGlzLnBvbHlsaW5lXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU3ZnUG9seWxpbmVDb21wb25lbnQgfSBmcm9tICcuL3N2Z3BvbHlsaW5lLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbU3ZnUG9seWxpbmVDb21wb25lbnRdLFxuICBleHBvcnRzOiBbU3ZnUG9seWxpbmVDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFN2Z1BvbHlsaW5lTW9kdWxlIHsgfVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVjdGFuZ2xlLCBFbGVtZW50RXZlbnRDbGljaywgU3Ryb2tlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnW3N2Zy1yZWN0XScsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdmdyZWN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3ZncmVjdC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3ZnUmVjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG5cbiAgQElucHV0KClcbiAgcHVibGljIHJlY3RhbmdsZTogUmVjdGFuZ2xlO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgcmVjdGFuZ2xlTW91c2Vkb3duID0gbmV3IEV2ZW50RW1pdHRlcjx7IG1vdXNlRXZlbnQ6IE1vdXNlRXZlbnQsIHJlY3RhbmdsZTogUmVjdGFuZ2xlIH0+KCk7XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLnJlY3RhbmdsZS5zdHJva2UpIHtcbiAgICAgIHRoaXMucmVjdGFuZ2xlLnN0cm9rZSA9IG5ldyBTdHJva2UoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb25SZWN0YW5nbGVNb3VzZURvd24oJGV2ZW50KSB7XG4gICAgaWYgKCRldmVudCkge1xuICAgICAgdGhpcy5yZWN0YW5nbGVNb3VzZWRvd24uZW1pdCh7IG1vdXNlRXZlbnQ6ICRldmVudCwgcmVjdGFuZ2xlOiB0aGlzLnJlY3RhbmdsZSB9KTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU3ZnUmVjdENvbXBvbmVudCB9IGZyb20gJy4vc3ZncmVjdC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1N2Z1JlY3RDb21wb25lbnRdLFxuICBleHBvcnRzOiBbU3ZnUmVjdENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgU3ZncmVjdE1vZHVsZSB7IH1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGV4dEZvbnR9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ1tzdmctdGV4dF0nLFxuICB0ZW1wbGF0ZVVybDogJy4vc3ZndGV4dC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N2Z3RleHQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN2Z1RleHRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgQElucHV0KClcbiAgcHVibGljIHg6IG51bWJlcjtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgeTogbnVtYmVyO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyB0cmFuc2Zvcm06IG51bWJlcjtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgZm9udFN0eWxlOiBUZXh0Rm9udDtcblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFN2Z1RleHRDb21wb25lbnQgfSBmcm9tICcuL3N2Z3RleHQuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtTdmdUZXh0Q29tcG9uZW50XSxcbiAgZXhwb3J0czogW1N2Z1RleHRDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFN2Z1RleHRNb2R1bGUgeyB9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsTUFBYSxNQUFNOzs7Ozs7OztJQVFmLFlBQVksSUFBYSxFQUFFLFVBQW1CLEVBQUUsU0FBa0IsRUFBRSxTQUFrQixFQUFFLE9BQWdCO1FBRXBHLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLEdBQUcsYUFBYSxDQUFDO1FBQ2hELElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxJQUFJLElBQUksR0FBRyxVQUFVLEdBQUcsT0FBTyxDQUFDO1FBQzVELElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxJQUFJLElBQUksR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxJQUFJLElBQUksR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxJQUFJLElBQUksR0FBRyxPQUFPLEdBQUcsQ0FBQyxDQUFDO0tBQ2hEO0NBQ0o7Ozs7OztBQ2hCRCxNQUFhLE1BQU07SUFHZjtRQUNJLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDZDtDQUNKOzs7Ozs7Ozs7OztBQ0pELE1BQWEsT0FBTztJQUdoQjtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxLQUFLLEVBQVUsQ0FBQztLQUN2QztDQUNKOzs7Ozs7QUNORCxNQUFhLFFBQVE7SUFHakI7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUks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