(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('util')) :
    typeof define === 'function' && define.amd ? define('angular-svg', ['exports', '@angular/core', '@angular/common', 'util'], factory) :
    (factory((global['angular-svg'] = {}),global.ng.core,global.ng.common,global.util));
}(this, (function (exports,core,common,util) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Stroke = /** @class */ (function () {
        function Stroke(fill, strokeFill, dashArray, thickness, opacity) {
            this.fill = fill != null ? fill : 'transparent';
            this.strokeFill = strokeFill != null ? strokeFill : 'black';
            this.dashArray = dashArray != null ? dashArray : 0;
            this.thickness = thickness != null ? thickness : 1;
            this.opacity = opacity != null ? opacity : 1;
        }
        return Stroke;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Vertex = /** @class */ (function () {
        function Vertex() {
            this.x = 0;
            this.y = 0;
        }
        return Vertex;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Polygon = /** @class */ (function () {
        function Polygon() {
            this.vertices = new Array();
        }
        return Polygon;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Polyline = /** @class */ (function () {
        function Polyline() {
            this.vertices = new Array();
        }
        return Polyline;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SvgCircleComponent = /** @class */ (function () {
        function SvgCircleComponent() {
            this.circleMousedown = new core.EventEmitter();
            this.circleMouseover = new core.EventEmitter();
        }
        /**
         * @return {?}
         */
        SvgCircleComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                if (!this.circle.stroke) {
                    this.circle.stroke = new Stroke();
                }
            };
        /**
         * @param {?} $event
         * @return {?}
         */
        SvgCircleComponent.prototype.onCircleMouseDown = /**
         * @param {?} $event
         * @return {?}
         */
            function ($event) {
                if ($event) {
                    this.circleMousedown.emit({ mouseEvent: $event, circle: this.circle });
                }
            };
        /**
         * @param {?} $event
         * @return {?}
         */
        SvgCircleComponent.prototype.onCircleMouseOver = /**
         * @param {?} $event
         * @return {?}
         */
            function ($event) {
                if ($event) {
                    this.circleMouseover.emit({ mouseEvent: $event, circle: this.circle });
                }
            };
        SvgCircleComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'g[svg-circle]',
                        template: "<svg:circle [attr.cx]=\"circle?.cx\"\r\n            [attr.cy]=\"circle?.cy\"\r\n            [attr.r]=\"circle?.r\"\r\n            [attr.stroke]=\"circle?.stroke?.strokeFill\"\r\n            [attr.stroke-dasharray]=\"circle?.stroke?.dashArray\"\r\n            [attr.stroke-width]=\"circle?.stroke?.thickness\"\r\n            [attr.fill]=\"circle?.stroke?.fill\"\r\n            vector-effect=\"non-scaling-stroke\"\r\n            [attr.stroke-opacity]=\"circle?.stroke?.opacity\"\r\n            (mousedown)=\"onCircleMouseDown($event)\"\r\n            (mouseover)=\"onCircleMouseOver($event)\"></svg:circle>",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        SvgCircleComponent.ctorParameters = function () { return []; };
        SvgCircleComponent.propDecorators = {
            circle: [{ type: core.Input }],
            circleMousedown: [{ type: core.Output }],
            circleMouseover: [{ type: core.Output }]
        };
        return SvgCircleComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SvgCircleModule = /** @class */ (function () {
        function SvgCircleModule() {
        }
        SvgCircleModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        declarations: [SvgCircleComponent],
                        exports: [SvgCircleComponent]
                    },] }
        ];
        return SvgCircleModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SvgEllipseComponent = /** @class */ (function () {
        function SvgEllipseComponent() {
            this.ellipseMousedown = new core.EventEmitter();
            this.ellipseMouseover = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'g[svg-ellipse]',
                        template: "<svg:ellipse [attr.cx]=\"ellipse?.cx\"\n             [attr.cy]=\"ellipse?.cy\"\n             [attr.rx]=\"ellipse?.rx\"\n             [attr.ry]=\"ellipse?.ry\"\n             [attr.stroke]=\"ellipse?.stroke?.strokeFill\"\n             [attr.stroke-dasharray]=\"ellipse?.stroke?.dashArray\"\n             [attr.stroke-width]=\"ellipse?.stroke?.thickness\"\n             [attr.fill]=\"ellipse?.stroke?.fill\"\n             vector-effect=\"non-scaling-stroke\"\n             [attr.stroke-opacity]=\"ellipse?.stroke?.opacity\"\n             (mousedown)=\"onEllipseMouseDown($event)\"\n             (mouseover)=\"onEllipseMouseOver($event)\"></svg:ellipse>",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        SvgEllipseComponent.ctorParameters = function () { return []; };
        SvgEllipseComponent.propDecorators = {
            ellipse: [{ type: core.Input }],
            ellipseMousedown: [{ type: core.Output }],
            ellipseMouseover: [{ type: core.Output }]
        };
        return SvgEllipseComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SvgEllipseModule = /** @class */ (function () {
        function SvgEllipseModule() {
        }
        SvgEllipseModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        declarations: [SvgEllipseComponent],
                        exports: [SvgEllipseComponent]
                    },] }
        ];
        return SvgEllipseModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SvgLineComponent = /** @class */ (function () {
        function SvgLineComponent() {
            this.lineMousedown = new core.EventEmitter();
            this.lineMouseover = new core.EventEmitter();
        }
        /**
         * @return {?}
         */
        SvgLineComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                if (!this.line.stroke) {
                    this.line.stroke = new Stroke();
                }
            };
        /**
         * @param {?} $event
         * @return {?}
         */
        SvgLineComponent.prototype.onLineMouseDown = /**
         * @param {?} $event
         * @return {?}
         */
            function ($event) {
                if ($event) {
                    this.lineMousedown.emit({ mouseEvent: $event, line: this.line });
                }
            };
        /**
         * @param {?} $event
         * @return {?}
         */
        SvgLineComponent.prototype.onLineMouseOver = /**
         * @param {?} $event
         * @return {?}
         */
            function ($event) {
                if ($event) {
                    this.lineMouseover.emit({ mouseEvent: $event, line: this.line });
                }
            };
        SvgLineComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'g[svg-line]',
                        template: "<svg:line [attr.x1]=\"line?.x1\"\n          [attr.y1]=\"line?.y1\"\n          [attr.x2]=\"line?.x2\"\n          [attr.y2]=\"line?.y2\"\n          [attr.fill]=\"line?.stroke?.fill\"\n          [attr.stroke]=\"line?.stroke?.strokeFill\"\n          [attr.stroke-dasharray]=\"line?.stroke?.dashArray\"\n          [attr.stroke-width]=\"line?.stroke?.thickness\"\n          [attr.stroke-opacity]=\"line?.stroke?.opacity\"\n          (mousedown)=\"onLineMouseDown($event)\"\n          (mouseover)=\"onLineMouseOver($event)\" />",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        SvgLineComponent.ctorParameters = function () { return []; };
        SvgLineComponent.propDecorators = {
            line: [{ type: core.Input }],
            lineMousedown: [{ type: core.Output }],
            lineMouseover: [{ type: core.Output }]
        };
        return SvgLineComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SvgLineModule = /** @class */ (function () {
        function SvgLineModule() {
        }
        SvgLineModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        declarations: [SvgLineComponent],
                        exports: [SvgLineComponent]
                    },] }
        ];
        return SvgLineModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            { type: core.Component, args: [{
                        selector: 'g[svg-path]',
                        template: "<svg:path [attr.d]=\"path\"\n          [attr.stroke]=\"stroke?.strokeFill\"\n          [attr.stroke-dasharray]=\"stroke?.dashArray\"\n          [attr.stroke-width]=\"stroke?.thickness\"\n          [attr.fill]=\"stroke?.fill\"\n          vector-effect=\"non-scaling-stroke\"\n          [attr.stroke-opacity]=\"stroke?.opacity\"></svg:path>",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        SvgPathComponent.ctorParameters = function () { return []; };
        SvgPathComponent.propDecorators = {
            path: [{ type: core.Input }],
            stroke: [{ type: core.Input }]
        };
        return SvgPathComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SvgPathModule = /** @class */ (function () {
        function SvgPathModule() {
        }
        SvgPathModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        declarations: [SvgPathComponent],
                        exports: [SvgPathComponent]
                    },] }
        ];
        return SvgPathModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            { type: core.Injectable }
        ];
        return SvgHelper;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SvgPolygonComponent = /** @class */ (function () {
        function SvgPolygonComponent(differs, svghelper) {
            this.differs = differs;
            this.svghelper = svghelper;
            this.polygonMousedown = new core.EventEmitter();
            this.polygonMouseover = new core.EventEmitter();
            this.differ = this.differs.find({}).create();
        }
        /**
         * @return {?}
         */
        SvgPolygonComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                if (this.polygon && util.isNullOrUndefined(this.pointsString)) {
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
            { type: core.Component, args: [{
                        selector: "g[svg-polygon]",
                        template: "<svg:polygon [attr.stroke]=\"polygon?.stroke?.strokeFill\"\n             [attr.fill]=\"polygon?.stroke?.fill\"\n             [attr.stroke-opacity]=\"polygon?.stroke?.opacity\"\n             [attr.stroke-dasharray]=\"polygon?.stroke?.dashArray\"\n             [attr.stroke-width]=\"polygon?.stroke?.thickness\"\n             [attr.points]=\"pointsString\"\n             vector-effect=\"non-scaling-stroke\"\n             (mousedown)=\"onPolygonMouseDown($event)\"\n             (mouseover)=\"onPolygonMouseOver($event)\">\n</svg:polygon>",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        SvgPolygonComponent.ctorParameters = function () {
            return [
                { type: core.KeyValueDiffers },
                { type: SvgHelper }
            ];
        };
        SvgPolygonComponent.propDecorators = {
            pointsString: [{ type: core.Input }],
            polygon: [{ type: core.Input }],
            polygonMousedown: [{ type: core.Output }],
            polygonMouseover: [{ type: core.Output }]
        };
        return SvgPolygonComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SvgPolygonModule = /** @class */ (function () {
        function SvgPolygonModule() {
        }
        SvgPolygonModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        declarations: [SvgPolygonComponent],
                        exports: [SvgPolygonComponent],
                        providers: [SvgHelper]
                    },] }
        ];
        return SvgPolygonModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SvgPolylineComponent = /** @class */ (function () {
        function SvgPolylineComponent(differs, svghelper) {
            this.differs = differs;
            this.svghelper = svghelper;
            this.polylineMousedown = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'g[svg-polyline]',
                        template: "<svg:polyline [attr.stroke]=\"polyline?.stroke?.strokeFill\"\n             [attr.fill]=\"polyline?.stroke?.fill\"\n             [attr.stroke-opacity]=\"polyline?.stroke?.opacity\"\n             [attr.stroke-dasharray]=\"polyline?.stroke?.dashArray\"\n             [attr.stroke-width]=\"polyline?.stroke?.thickness\"\n             [attr.points]=\"pointsString\"\n             vector-effect=\"non-scaling-stroke\"\n             (mousedown)=\"onPolylineMouseDown($event)\">\n</svg:polyline>",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        SvgPolylineComponent.ctorParameters = function () {
            return [
                { type: core.KeyValueDiffers },
                { type: SvgHelper }
            ];
        };
        SvgPolylineComponent.propDecorators = {
            pointsString: [{ type: core.Input }],
            polyline: [{ type: core.Input }],
            polylineMousedown: [{ type: core.Output }]
        };
        return SvgPolylineComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SvgPolylineModule = /** @class */ (function () {
        function SvgPolylineModule() {
        }
        SvgPolylineModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        declarations: [SvgPolylineComponent],
                        exports: [SvgPolylineComponent]
                    },] }
        ];
        return SvgPolylineModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SvgRectComponent = /** @class */ (function () {
        function SvgRectComponent() {
            this.rectangleMousedown = new core.EventEmitter();
        }
        /**
         * @return {?}
         */
        SvgRectComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                if (!this.rectangle.stroke) {
                    this.rectangle.stroke = new Stroke();
                }
            };
        /**
         * @param {?} $event
         * @return {?}
         */
        SvgRectComponent.prototype.onRectangleMouseDown = /**
         * @param {?} $event
         * @return {?}
         */
            function ($event) {
                if ($event) {
                    this.rectangleMousedown.emit({ mouseEvent: $event, rectangle: this.rectangle });
                }
            };
        SvgRectComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'g[svg-rect]',
                        template: "<svg:rect [attr.x]=\"rectangle?.x\"\n          [attr.y]=\"rectangle?.y\"\n          [attr.stroke]=\"rectangle?.stroke?.strokeFill\"\n          [attr.stroke-dasharray]=\"rectangle?.stroke?.dashArray\"\n          [attr.stroke-width]=\"rectangle?.stroke?.thickness\"\n          [attr.fill]=\"rectangle?.stroke?.fill\"\n          vector-effect=\"non-scaling-stroke\"\n          [attr.stroke-opacity]=\"rectangle?.stroke?.opacity\"\n          (mousedown)=\"onRectangleMouseDown($event)\"></svg:rect>",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        SvgRectComponent.ctorParameters = function () { return []; };
        SvgRectComponent.propDecorators = {
            rectangle: [{ type: core.Input }],
            rectangleMousedown: [{ type: core.Output }]
        };
        return SvgRectComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SvgrectModule = /** @class */ (function () {
        function SvgrectModule() {
        }
        SvgrectModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        declarations: [SvgRectComponent],
                        exports: [SvgRectComponent]
                    },] }
        ];
        return SvgrectModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SvgTextComponent = /** @class */ (function () {
        function SvgTextComponent() {
        }
        /**
         * @return {?}
         */
        SvgTextComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SvgTextComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'g[svg-text]',
                        template: "<svg:text [attr.transform]=\"transform\"\n          [attr.x]=\"x\"\n          [attr.y]=\"y\"\n          [attr.fill]=\"fontStyle?.fontFill\"\n          [attr.font-family]=\"fontStyle?.fontFamily\"\n          [attr.font-size]=\"fontStyle?.fontSize\"\n          [attr.font-weight]=\"fontStyle?.fontWeight\"\n          [attr.font-style]=\"fontStyle?.fontStyle\"\n          dominant-baseline=\"central\"\n          text-anchor=\"middle\">\n          <ng-content></ng-content>\n</svg:text>",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        SvgTextComponent.ctorParameters = function () { return []; };
        SvgTextComponent.propDecorators = {
            x: [{ type: core.Input }],
            y: [{ type: core.Input }],
            transform: [{ type: core.Input }],
            fontStyle: [{ type: core.Input }]
        };
        return SvgTextComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SvgTextModule = /** @class */ (function () {
        function SvgTextModule() {
        }
        SvgTextModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        declarations: [SvgTextComponent],
                        exports: [SvgTextComponent]
                    },] }
        ];
        return SvgTextModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.SvgCircleModule = SvgCircleModule;
    exports.SvgEllipseModule = SvgEllipseModule;
    exports.SvgLineModule = SvgLineModule;
    exports.SvgPathModule = SvgPathModule;
    exports.SvgPolygonModule = SvgPolygonModule;
    exports.SvgPolylineModule = SvgPolylineModule;
    exports.SvgrectModule = SvgrectModule;
    exports.SvgTextModule = SvgTextModule;
    exports.Polygon = Polygon;
    exports.Polyline = Polyline;
    exports.Stroke = Stroke;
    exports.Vertex = Vertex;
    exports.??f = SvgHelper;
    exports.??a = SvgCircleComponent;
    exports.??b = SvgEllipseComponent;
    exports.??c = SvgLineComponent;
    exports.??d = SvgPathComponent;
    exports.??e = SvgPolygonComponent;
    exports.??g = SvgPolylineComponent;
    exports.??h = SvgRectComponent;
    exports.??i = SvgTextComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1zdmcudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9hbmd1bGFyLXN2Zy9saWIvdHlwZXMvc3Ryb2tlLm1vZGVsLnRzIiwibmc6Ly9hbmd1bGFyLXN2Zy9saWIvdHlwZXMvdmVydGV4Lm1vZGVsLnRzIiwibmc6Ly9hbmd1bGFyLXN2Zy9saWIvdHlwZXMvcG9seWdvbi5tb2RlbC50cyIsIm5nOi8vYW5ndWxhci1zdmcvbGliL3R5cGVzL3BvbHlsaW5lLm1vZGVsLnRzIiwibmc6Ly9hbmd1bGFyLXN2Zy9saWIvbW9kdWxlcy9zdmdjaXJjbGUvc3ZnY2lyY2xlLmNvbXBvbmVudC50cyIsIm5nOi8vYW5ndWxhci1zdmcvbGliL21vZHVsZXMvc3ZnY2lyY2xlL3N2Z2NpcmNsZS5tb2R1bGUudHMiLCJuZzovL2FuZ3VsYXItc3ZnL2xpYi9tb2R1bGVzL3N2Z2VsbGlwc2Uvc3ZnZWxsaXBzZS5jb21wb25lbnQudHMiLCJuZzovL2FuZ3VsYXItc3ZnL2xpYi9tb2R1bGVzL3N2Z2VsbGlwc2Uvc3ZnZWxsaXBzZS5tb2R1bGUudHMiLCJuZzovL2FuZ3VsYXItc3ZnL2xpYi9tb2R1bGVzL3N2Z2xpbmUvc3ZnbGluZS5jb21wb25lbnQudHMiLCJuZzovL2FuZ3VsYXItc3ZnL2xpYi9tb2R1bGVzL3N2Z2xpbmUvc3ZnbGluZS5tb2R1bGUudHMiLCJuZzovL2FuZ3VsYXItc3ZnL2xpYi9tb2R1bGVzL3N2Z3BhdGgvc3ZncGF0aC5jb21wb25lbnQudHMiLCJuZzovL2FuZ3VsYXItc3ZnL2xpYi9tb2R1bGVzL3N2Z3BhdGgvc3ZncGF0aC5tb2R1bGUudHMiLCJuZzovL2FuZ3VsYXItc3ZnL2xpYi9oZWxwZXJzL3N2Z2hlbHBlci5zZXJ2aWNlLnRzIiwibmc6Ly9hbmd1bGFyLXN2Zy9saWIvbW9kdWxlcy9zdmdwb2x5Z29uL3N2Z3BvbHlnb24uY29tcG9uZW50LnRzIiwibmc6Ly9hbmd1bGFyLXN2Zy9saWIvbW9kdWxlcy9zdmdwb2x5Z29uL3N2Z3BvbHlnb24ubW9kdWxlLnRzIiwibmc6Ly9hbmd1bGFyLXN2Zy9saWIvbW9kdWxlcy9zdmdwb2x5bGluZS9zdmdwb2x5bGluZS5jb21wb25lbnQudHMiLCJuZzovL2FuZ3VsYXItc3ZnL2xpYi9tb2R1bGVzL3N2Z3BvbHlsaW5lL3N2Z3BvbHlsaW5lLm1vZHVsZS50cyIsIm5nOi8vYW5ndWxhci1zdmcvbGliL21vZHVsZXMvc3ZncmVjdC9zdmdyZWN0LmNvbXBvbmVudC50cyIsIm5nOi8vYW5ndWxhci1zdmcvbGliL21vZHVsZXMvc3ZncmVjdC9zdmdyZWN0Lm1vZHVsZS50cyIsIm5nOi8vYW5ndWxhci1zdmcvbGliL21vZHVsZXMvc3ZndGV4dC9zdmd0ZXh0LmNvbXBvbmVudC50cyIsIm5nOi8vYW5ndWxhci1zdmcvbGliL21vZHVsZXMvc3ZndGV4dC9zdmd0ZXh0Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgU3Ryb2tlIHtcclxuICAgIHB1YmxpYyBmaWxsOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgc3Ryb2tlRmlsbDogc3RyaW5nO1xyXG4gICAgcHVibGljIGRhc2hBcnJheTogbnVtYmVyO1xyXG4gICAgcHVibGljIHN0cm9rZV9saW5lY2FwOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgdGhpY2tuZXNzOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgb3BhY2l0eTogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGZpbGw/OiBzdHJpbmcsIHN0cm9rZUZpbGw/OiBzdHJpbmcsIGRhc2hBcnJheT86IG51bWJlciwgdGhpY2tuZXNzPzogbnVtYmVyLCBvcGFjaXR5PzogbnVtYmVyKSB7XHJcblxyXG4gICAgICAgIHRoaXMuZmlsbCA9IGZpbGwgIT0gbnVsbCA/IGZpbGwgOiAndHJhbnNwYXJlbnQnO1xyXG4gICAgICAgIHRoaXMuc3Ryb2tlRmlsbCA9IHN0cm9rZUZpbGwgIT0gbnVsbCA/IHN0cm9rZUZpbGwgOiAnYmxhY2snO1xyXG4gICAgICAgIHRoaXMuZGFzaEFycmF5ID0gZGFzaEFycmF5ICE9IG51bGwgPyBkYXNoQXJyYXkgOiAwO1xyXG4gICAgICAgIHRoaXMudGhpY2tuZXNzID0gdGhpY2tuZXNzICE9IG51bGwgPyB0aGlja25lc3MgOiAxO1xyXG4gICAgICAgIHRoaXMub3BhY2l0eSA9IG9wYWNpdHkgIT0gbnVsbCA/IG9wYWNpdHkgOiAxO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBWZXJ0ZXgge1xyXG4gICAgcHVibGljIHg6IG51bWJlcjtcclxuICAgIHB1YmxpYyB5OiBudW1iZXI7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnggPSAwO1xyXG4gICAgICAgIHRoaXMueSA9IDA7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgU3Ryb2tlIH0gZnJvbSAnLi9zdHJva2UubW9kZWwnO1xyXG5pbXBvcnQgeyBWZXJ0ZXggfSBmcm9tICcuL3ZlcnRleC5tb2RlbCc7XHJcblxyXG5leHBvcnQgY2xhc3MgUG9seWdvbiB7XHJcbiAgICBwdWJsaWMgdmVydGljZXM6IFZlcnRleFtdO1xyXG4gICAgc3Ryb2tlOiBTdHJva2U7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnZlcnRpY2VzID0gbmV3IEFycmF5PFZlcnRleD4oKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBTdHJva2UgfSBmcm9tICcuL3N0cm9rZS5tb2RlbCc7XHJcbmltcG9ydCB7IFZlcnRleCB9IGZyb20gJy4vdmVydGV4Lm1vZGVsJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQb2x5bGluZSB7XHJcbiAgICBwdWJsaWMgdmVydGljZXM6IFZlcnRleFtdO1xyXG4gICAgc3Ryb2tlOiBTdHJva2U7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnZlcnRpY2VzID0gbmV3IEFycmF5PFZlcnRleD4oKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENpcmNsZSwgRWxlbWVudEV2ZW50Q2xpY2ssIFN0cm9rZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ1tzdmctY2lyY2xlXScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3N2Z2NpcmNsZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc3ZnY2lyY2xlLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3ZnQ2lyY2xlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBjaXJjbGU6IENpcmNsZTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIGNpcmNsZU1vdXNlZG93biA9IG5ldyBFdmVudEVtaXR0ZXI8eyBtb3VzZUV2ZW50OiBNb3VzZUV2ZW50LCBjaXJjbGU6IENpcmNsZSB9PigpO1xyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBjaXJjbGVNb3VzZW92ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPHsgbW91c2VFdmVudDogTW91c2VFdmVudCwgY2lyY2xlOiBDaXJjbGUgfT4oKTtcclxuXHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgaWYgKCF0aGlzLmNpcmNsZS5zdHJva2UpIHtcclxuICAgICAgdGhpcy5jaXJjbGUuc3Ryb2tlID0gbmV3IFN0cm9rZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uQ2lyY2xlTW91c2VEb3duKCRldmVudCkge1xyXG4gICAgaWYgKCRldmVudCkge1xyXG4gICAgICB0aGlzLmNpcmNsZU1vdXNlZG93bi5lbWl0KHsgbW91c2VFdmVudDogJGV2ZW50LCBjaXJjbGU6IHRoaXMuY2lyY2xlIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uQ2lyY2xlTW91c2VPdmVyKCRldmVudCkge1xyXG4gICAgaWYgKCRldmVudCkge1xyXG4gICAgICB0aGlzLmNpcmNsZU1vdXNlb3Zlci5lbWl0KHsgbW91c2VFdmVudDogJGV2ZW50LCBjaXJjbGU6IHRoaXMuY2lyY2xlIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFN2Z0NpcmNsZUNvbXBvbmVudCB9IGZyb20gJy4vc3ZnY2lyY2xlLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbU3ZnQ2lyY2xlQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1N2Z0NpcmNsZUNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgU3ZnQ2lyY2xlTW9kdWxlIHsgfVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRWxsaXBzZSwgRWxlbWVudEV2ZW50Q2xpY2ssIFN0cm9rZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ1tzdmctZWxsaXBzZV0nLFxuICB0ZW1wbGF0ZVVybDogJy4vc3ZnZWxsaXBzZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N2Z2VsbGlwc2UuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN2Z0VsbGlwc2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBlbGxpcHNlOiBFbGxpcHNlO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgZWxsaXBzZU1vdXNlZG93biA9IG5ldyBFdmVudEVtaXR0ZXI8eyBtb3VzZUV2ZW50OiBNb3VzZUV2ZW50LCBlbGxpcHNlOiBFbGxpcHNlIH0+KCk7XG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgZWxsaXBzZU1vdXNlb3ZlciA9IG5ldyBFdmVudEVtaXR0ZXI8eyBtb3VzZUV2ZW50OiBNb3VzZUV2ZW50LCBlbGxpcHNlOiBFbGxpcHNlIH0+KCk7XG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgICBpZiAoIXRoaXMuZWxsaXBzZS5zdHJva2UpIHtcbiAgICAgIHRoaXMuZWxsaXBzZS5zdHJva2UgPSBuZXcgU3Ryb2tlKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9uRWxsaXBzZU1vdXNlRG93bigkZXZlbnQpIHtcbiAgICBpZiAoJGV2ZW50KSB7XG4gICAgICB0aGlzLmVsbGlwc2VNb3VzZWRvd24uZW1pdCh7IG1vdXNlRXZlbnQ6ICRldmVudCwgZWxsaXBzZTogdGhpcy5lbGxpcHNlIH0pO1xuICAgIH1cblxuICB9XG4gIFxuICBwdWJsaWMgb25FbGxpcHNlTW91c2VPdmVyKCRldmVudCkge1xuICAgIGlmICgkZXZlbnQpIHtcbiAgICAgIHRoaXMuZWxsaXBzZU1vdXNlb3Zlci5lbWl0KHsgbW91c2VFdmVudDogJGV2ZW50LCBlbGxpcHNlOiB0aGlzLmVsbGlwc2UgfSk7XG4gICAgfVxuXG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU3ZnRWxsaXBzZUNvbXBvbmVudCB9IGZyb20gJy4vc3ZnZWxsaXBzZS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1N2Z0VsbGlwc2VDb21wb25lbnRdLFxuICBleHBvcnRzOiBbU3ZnRWxsaXBzZUNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgU3ZnRWxsaXBzZU1vZHVsZSB7IH1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExpbmUsIFN0cm9rZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ1tzdmctbGluZV0nLFxuICB0ZW1wbGF0ZVVybDogJy4vc3ZnbGluZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N2Z2xpbmUuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN2Z0xpbmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG5cbiAgQElucHV0KClcbiAgcHVibGljIGxpbmU6IExpbmU7XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBsaW5lTW91c2Vkb3duID0gbmV3IEV2ZW50RW1pdHRlcjx7IG1vdXNlRXZlbnQ6IE1vdXNlRXZlbnQsIGxpbmU6IExpbmUgfT4oKTtcblxuICBAT3V0cHV0KClcbiAgcHVibGljIGxpbmVNb3VzZW92ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPHsgbW91c2VFdmVudDogTW91c2VFdmVudCwgbGluZTogTGluZSB9PigpO1xuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy5saW5lLnN0cm9rZSkge1xuICAgICAgdGhpcy5saW5lLnN0cm9rZSA9IG5ldyBTdHJva2UoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb25MaW5lTW91c2VEb3duKCRldmVudCk6IHZvaWQge1xuICAgIGlmICgkZXZlbnQpIHtcbiAgICAgIHRoaXMubGluZU1vdXNlZG93bi5lbWl0KHsgbW91c2VFdmVudDogJGV2ZW50LCBsaW5lOiB0aGlzLmxpbmUgfSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9uTGluZU1vdXNlT3ZlcigkZXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoJGV2ZW50KSB7XG4gICAgICB0aGlzLmxpbmVNb3VzZW92ZXIuZW1pdCh7IG1vdXNlRXZlbnQ6ICRldmVudCwgbGluZTogdGhpcy5saW5lIH0pO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBTdmdMaW5lQ29tcG9uZW50IH0gZnJvbSAnLi9zdmdsaW5lLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbU3ZnTGluZUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtTdmdMaW5lQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBTdmdMaW5lTW9kdWxlIHsgfVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdHJva2UgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dbc3ZnLXBhdGhdJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N2Z3BhdGguY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdmdwYXRoLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdmdQYXRoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG5cbiAgQElucHV0KClcbiAgcHVibGljIHBhdGg6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc3Ryb2tlOiBTdHJva2U7XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLnN0cm9rZSkge1xuICAgICAgdGhpcy5zdHJva2UgPSBuZXcgU3Ryb2tlKCk7XG4gICAgfVxuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU3ZnUGF0aENvbXBvbmVudCB9IGZyb20gJy4vc3ZncGF0aC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1N2Z1BhdGhDb21wb25lbnRdLFxuICBleHBvcnRzOiBbU3ZnUGF0aENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgU3ZnUGF0aE1vZHVsZSB7IH1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVmVydGV4IH0gZnJvbSAnLi4vdHlwZXMnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU3ZnSGVscGVyIHtcclxuXHJcbiAgICBwdWJsaWMgZ2V0UG9seVBvaW50cyhwb2ludHM6IFZlcnRleFtdKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gcG9pbnRzLm1hcChwID0+IHAueC50b1N0cmluZygpICsgJyAnICsgcC55LnRvU3RyaW5nKCkpLmpvaW4oJyAnKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBEb0NoZWNrLFxuICBLZXlWYWx1ZURpZmZlcnNcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFBvbHlnb24sIFN0cm9rZSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgaXNOdWxsT3JVbmRlZmluZWQgfSBmcm9tIFwidXRpbFwiO1xuaW1wb3J0IHsgU3ZnSGVscGVyIH0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvc3ZnaGVscGVyLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImdbc3ZnLXBvbHlnb25dXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vc3ZncG9seWdvbi5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vc3ZncG9seWdvbi5jb21wb25lbnQuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIFN2Z1BvbHlnb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIERvQ2hlY2sge1xuICBkaWZmZXI6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRpZmZlcnM6IEtleVZhbHVlRGlmZmVycywgcHJpdmF0ZSBzdmdoZWxwZXI6IFN2Z0hlbHBlcikge1xuICAgIHRoaXMuZGlmZmVyID0gdGhpcy5kaWZmZXJzLmZpbmQoe30pLmNyZWF0ZSgpO1xuICB9XG5cbiAgQElucHV0KClcbiAgcHVibGljIHBvaW50c1N0cmluZztcblxuICBASW5wdXQoKVxuICBwdWJsaWMgcG9seWdvbjogUG9seWdvbjtcblxuICBAT3V0cHV0KClcbiAgcHVibGljIHBvbHlnb25Nb3VzZWRvd24gPSBuZXcgRXZlbnRFbWl0dGVyPHtcbiAgICBtb3VzZUV2ZW50OiBNb3VzZUV2ZW50O1xuICAgIHBvbHlnb246IFBvbHlnb247XG4gIH0+KCk7XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBwb2x5Z29uTW91c2VvdmVyID0gbmV3IEV2ZW50RW1pdHRlcjx7XG4gICAgbW91c2VFdmVudDogTW91c2VFdmVudDtcbiAgICBwb2x5Z29uOiBQb2x5Z29uO1xuICB9PigpO1xuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLnBvbHlnb24gJiYgaXNOdWxsT3JVbmRlZmluZWQodGhpcy5wb2ludHNTdHJpbmcpKSB7XG4gICAgICB0aGlzLnBvaW50c1N0cmluZyA9IHRoaXMuc3ZnaGVscGVyLmdldFBvbHlQb2ludHModGhpcy5wb2x5Z29uLnZlcnRpY2VzKTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLnBvbHlnb24uc3Ryb2tlKSB7XG4gICAgICB0aGlzLnBvbHlnb24uc3Ryb2tlID0gbmV3IFN0cm9rZSgpO1xuICAgIH1cbiAgfVxuXG4gIG5nRG9DaGVjaygpIHtcbiAgICBjb25zdCBjaGFuZ2VzID0gdGhpcy5kaWZmZXIuZGlmZih0aGlzLnBvbHlnb24pO1xuXG4gICAgaWYgKGNoYW5nZXMpIHtcbiAgICAgIHRoaXMucG9pbnRzU3RyaW5nID0gdGhpcy5zdmdoZWxwZXIuZ2V0UG9seVBvaW50cyh0aGlzLnBvbHlnb24udmVydGljZXMpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvblBvbHlnb25Nb3VzZURvd24oJGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICBpZiAoJGV2ZW50KSB7XG4gICAgICB0aGlzLnBvbHlnb25Nb3VzZWRvd24uZW1pdCh7IG1vdXNlRXZlbnQ6ICRldmVudCwgcG9seWdvbjogdGhpcy5wb2x5Z29uIH0pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvblBvbHlnb25Nb3VzZU92ZXIoJGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICBpZiAoJGV2ZW50KSB7XG4gICAgICB0aGlzLnBvbHlnb25Nb3VzZW92ZXIuZW1pdCh7IG1vdXNlRXZlbnQ6ICRldmVudCwgcG9seWdvbjogdGhpcy5wb2x5Z29uIH0pO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBTdmdQb2x5Z29uQ29tcG9uZW50IH0gZnJvbSAnLi9zdmdwb2x5Z29uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdmdIZWxwZXIgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3N2Z2hlbHBlci5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtTdmdQb2x5Z29uQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1N2Z1BvbHlnb25Db21wb25lbnRdLFxuICBwcm92aWRlcnM6IFtTdmdIZWxwZXJdXG59KVxuZXhwb3J0IGNsYXNzIFN2Z1BvbHlnb25Nb2R1bGUgeyB9XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBLZXlWYWx1ZURpZmZlcnMsXG4gIERvQ2hlY2tcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQb2x5bGluZSwgU3Ryb2tlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgU3ZnSGVscGVyIH0gZnJvbSAnLi4vLi4vaGVscGVycy9zdmdoZWxwZXIuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dbc3ZnLXBvbHlsaW5lXScsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdmdwb2x5bGluZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N2Z3BvbHlsaW5lLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdmdQb2x5bGluZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgRG9DaGVjayB7XG4gIGRpZmZlcjogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGlmZmVyczogS2V5VmFsdWVEaWZmZXJzLCBwcml2YXRlIHN2Z2hlbHBlcjogU3ZnSGVscGVyKSB7XG4gICAgdGhpcy5kaWZmZXIgPSB0aGlzLmRpZmZlcnMuZmluZCh7fSkuY3JlYXRlKCk7XG4gIH1cblxuICBASW5wdXQoKVxuICBwdWJsaWMgcG9pbnRzU3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBwb2x5bGluZTogUG9seWxpbmU7XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBwb2x5bGluZU1vdXNlZG93biA9IG5ldyBFdmVudEVtaXR0ZXI8e1xuICAgIG1vdXNlRXZlbnQ6IE1vdXNlRXZlbnQ7XG4gICAgcG9seWxpbmU6IFBvbHlsaW5lO1xuICB9PigpO1xuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLnBvbHlsaW5lKSB7XG4gICAgICB0aGlzLnBvaW50c1N0cmluZyA9IHRoaXMuc3ZnaGVscGVyLmdldFBvbHlQb2ludHModGhpcy5wb2x5bGluZS52ZXJ0aWNlcyk7XG4gICAgfVxuICAgIGlmICghdGhpcy5wb2x5bGluZS5zdHJva2UpIHtcbiAgICAgIHRoaXMucG9seWxpbmUuc3Ryb2tlID0gbmV3IFN0cm9rZSgpO1xuICAgIH1cbiAgfVxuXG4gIG5nRG9DaGVjaygpIHtcbiAgICBjb25zdCBjaGFuZ2VzID0gdGhpcy5kaWZmZXIuZGlmZih0aGlzLnBvbHlsaW5lKTtcblxuICAgIGlmIChjaGFuZ2VzKSB7XG4gICAgICB0aGlzLnBvaW50c1N0cmluZyA9IHRoaXMuc3ZnaGVscGVyLmdldFBvbHlQb2ludHModGhpcy5wb2x5bGluZS52ZXJ0aWNlcyk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9uUG9seWxpbmVNb3VzZURvd24oZXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIHRoaXMucG9seWxpbmVNb3VzZWRvd24uZW1pdCh7XG4gICAgICAgIG1vdXNlRXZlbnQ6IGV2ZW50LFxuICAgICAgICBwb2x5bGluZTogdGhpcy5wb2x5bGluZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFN2Z1BvbHlsaW5lQ29tcG9uZW50IH0gZnJvbSAnLi9zdmdwb2x5bGluZS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1N2Z1BvbHlsaW5lQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1N2Z1BvbHlsaW5lQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBTdmdQb2x5bGluZU1vZHVsZSB7IH1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlY3RhbmdsZSwgRWxlbWVudEV2ZW50Q2xpY2ssIFN0cm9rZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ1tzdmctcmVjdF0nLFxuICB0ZW1wbGF0ZVVybDogJy4vc3ZncmVjdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N2Z3JlY3QuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN2Z1JlY3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyByZWN0YW5nbGU6IFJlY3RhbmdsZTtcblxuICBAT3V0cHV0KClcbiAgcHVibGljIHJlY3RhbmdsZU1vdXNlZG93biA9IG5ldyBFdmVudEVtaXR0ZXI8eyBtb3VzZUV2ZW50OiBNb3VzZUV2ZW50LCByZWN0YW5nbGU6IFJlY3RhbmdsZSB9PigpO1xuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy5yZWN0YW5nbGUuc3Ryb2tlKSB7XG4gICAgICB0aGlzLnJlY3RhbmdsZS5zdHJva2UgPSBuZXcgU3Ryb2tlKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9uUmVjdGFuZ2xlTW91c2VEb3duKCRldmVudCkge1xuICAgIGlmICgkZXZlbnQpIHtcbiAgICAgIHRoaXMucmVjdGFuZ2xlTW91c2Vkb3duLmVtaXQoeyBtb3VzZUV2ZW50OiAkZXZlbnQsIHJlY3RhbmdsZTogdGhpcy5yZWN0YW5nbGUgfSk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFN2Z1JlY3RDb21wb25lbnQgfSBmcm9tICcuL3N2Z3JlY3QuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtTdmdSZWN0Q29tcG9uZW50XSxcbiAgZXhwb3J0czogW1N2Z1JlY3RDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFN2Z3JlY3RNb2R1bGUgeyB9XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRleHRGb250fSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dbc3ZnLXRleHRdJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N2Z3RleHQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdmd0ZXh0LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdmdUZXh0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyB4OiBudW1iZXI7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHk6IG51bWJlcjtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgdHJhbnNmb3JtOiBudW1iZXI7XG5cbiAgQElucHV0KClcbiAgcHVibGljIGZvbnRTdHlsZTogVGV4dEZvbnQ7XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBTdmdUZXh0Q29tcG9uZW50IH0gZnJvbSAnLi9zdmd0ZXh0LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbU3ZnVGV4dENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtTdmdUZXh0Q29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBTdmdUZXh0TW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbIkV2ZW50RW1pdHRlciIsIkNvbXBvbmVudCIsIklucHV0IiwiT3V0cHV0IiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJJbmplY3RhYmxlIiwiaXNOdWxsT3JVbmRlZmluZWQiLCJLZXlWYWx1ZURpZmZlcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQVFJLGdCQUFZLElBQWEsRUFBRSxVQUFtQixFQUFFLFNBQWtCLEVBQUUsU0FBa0IsRUFBRSxPQUFnQjtZQUVwRyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxHQUFHLGFBQWEsQ0FBQztZQUNoRCxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsSUFBSSxJQUFJLEdBQUcsVUFBVSxHQUFHLE9BQU8sQ0FBQztZQUM1RCxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsSUFBSSxJQUFJLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztZQUNuRCxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsSUFBSSxJQUFJLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztZQUNuRCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sSUFBSSxJQUFJLEdBQUcsT0FBTyxHQUFHLENBQUMsQ0FBQztTQUNoRDtRQUNMLGFBQUM7SUFBRCxDQUFDOzs7Ozs7QUNoQkQ7UUFHSTtZQUNJLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ1gsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDZDtRQUNMLGFBQUM7SUFBRCxDQUFDOzs7Ozs7QUNKRDtRQUdJO1lBQ0ksSUFB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