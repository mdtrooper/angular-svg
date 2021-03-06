/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
 * Public API Surface of angularsvg
 */
export { SvgCircleModule } from './lib/modules/svgcircle/svgcircle.module';
export { SvgEllipseModule } from './lib/modules/svgellipse/svgellipse.module';
export { SvgLineModule } from './lib/modules/svgline/svgline.module';
export { SvgPathModule } from './lib/modules/svgpath/svgpath.module';
export { SvgPolygonModule } from './lib/modules/svgpolygon/svgpolygon.module';
export { SvgPolylineModule } from './lib/modules/svgpolyline/svgpolyline.module';
export { SvgrectModule } from './lib/modules/svgrect/svgrect.module';
export { SvgTextModule } from './lib/modules/svgtext/svgtext.module';
export {} from './lib/types/circle.model';
export {} from './lib/types/ellipse.model';
export {} from './lib/types/path.model';
export { Polygon } from './lib/types/polygon.model';
export {} from './lib/types/elementclick-event.model';
export {} from './lib/types/line.model';
export { Polyline } from './lib/types/polyline.model';
export {} from './lib/types/rectangle.model';
export { Stroke } from './lib/types/stroke.model';
export {} from './lib/types/textfont.model';
export { Vertex } from './lib/types/vertex.model';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljX2FwaS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItc3ZnLyIsInNvdXJjZXMiOlsicHVibGljX2FwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUEsZ0NBQWMsMENBQTBDLENBQUM7QUFDekQsaUNBQWMsNENBQTRDLENBQUM7QUFDM0QsOEJBQWMsc0NBQXNDLENBQUM7QUFDckQsOEJBQWMsc0NBQXNDLENBQUM7QUFDckQsaUNBQWMsNENBQTRDLENBQUM7QUFDM0Qsa0NBQWMsOENBQThDLENBQUM7QUFDN0QsOEJBQWMsc0NBQXNDLENBQUM7QUFDckQsOEJBQWMsc0NBQXNDLENBQUM7QUFDckQsZUFBYywwQkFBMEIsQ0FBQztBQUN6QyxlQUFjLDJCQUEyQixDQUFDO0FBQzFDLGVBQWMsd0JBQXdCLENBQUM7QUFDdkMsd0JBQWMsMkJBQTJCLENBQUM7QUFDMUMsZUFBYyxzQ0FBc0MsQ0FBQztBQUNyRCxlQUFjLHdCQUF3QixDQUFDO0FBQ3ZDLHlCQUFjLDRCQUE0QixDQUFDO0FBQzNDLGVBQWMsNkJBQTZCLENBQUM7QUFDNUMsdUJBQWMsMEJBQTBCLENBQUM7QUFDekMsZUFBYyw0QkFBNEIsQ0FBQztBQUMzQyx1QkFBYywwQkFBMEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBQdWJsaWMgQVBJIFN1cmZhY2Ugb2YgYW5ndWxhcnN2Z1xuICovXG5cbmV4cG9ydCAqIGZyb20gJy4vbGliL21vZHVsZXMvc3ZnY2lyY2xlL3N2Z2NpcmNsZS5tb2R1bGUnO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvbW9kdWxlcy9zdmdlbGxpcHNlL3N2Z2VsbGlwc2UubW9kdWxlJztcbmV4cG9ydCAqIGZyb20gJy4vbGliL21vZHVsZXMvc3ZnbGluZS9zdmdsaW5lLm1vZHVsZSc7XG5leHBvcnQgKiBmcm9tICcuL2xpYi9tb2R1bGVzL3N2Z3BhdGgvc3ZncGF0aC5tb2R1bGUnO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvbW9kdWxlcy9zdmdwb2x5Z29uL3N2Z3BvbHlnb24ubW9kdWxlJztcbmV4cG9ydCAqIGZyb20gJy4vbGliL21vZHVsZXMvc3ZncG9seWxpbmUvc3ZncG9seWxpbmUubW9kdWxlJztcbmV4cG9ydCAqIGZyb20gJy4vbGliL21vZHVsZXMvc3ZncmVjdC9zdmdyZWN0Lm1vZHVsZSc7XG5leHBvcnQgKiBmcm9tICcuL2xpYi9tb2R1bGVzL3N2Z3RleHQvc3ZndGV4dC5tb2R1bGUnO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvdHlwZXMvY2lyY2xlLm1vZGVsJztcbmV4cG9ydCAqIGZyb20gJy4vbGliL3R5cGVzL2VsbGlwc2UubW9kZWwnO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvdHlwZXMvcGF0aC5tb2RlbCc7XG5leHBvcnQgKiBmcm9tICcuL2xpYi90eXBlcy9wb2x5Z29uLm1vZGVsJztcbmV4cG9ydCAqIGZyb20gJy4vbGliL3R5cGVzL2VsZW1lbnRjbGljay1ldmVudC5tb2RlbCc7XG5leHBvcnQgKiBmcm9tICcuL2xpYi90eXBlcy9saW5lLm1vZGVsJztcbmV4cG9ydCAqIGZyb20gJy4vbGliL3R5cGVzL3BvbHlsaW5lLm1vZGVsJztcbmV4cG9ydCAqIGZyb20gJy4vbGliL3R5cGVzL3JlY3RhbmdsZS5tb2RlbCc7XG5leHBvcnQgKiBmcm9tICcuL2xpYi90eXBlcy9zdHJva2UubW9kZWwnO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvdHlwZXMvdGV4dGZvbnQubW9kZWwnO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvdHlwZXMvdmVydGV4Lm1vZGVsJztcbiJdfQ==