import { OnInit, EventEmitter, DoCheck, KeyValueDiffers } from "@angular/core";
import { Polygon } from "../../types";
import { SvgHelper } from "../../helpers/svghelper.service";
export declare class SvgPolygonComponent implements OnInit, DoCheck {
    private differs;
    private svghelper;
    differ: any;
    constructor(differs: KeyValueDiffers, svghelper: SvgHelper);
    pointsString: any;
    polygon: Polygon;
    polygonMousedown: EventEmitter<{
        mouseEvent: MouseEvent;
        polygon: Polygon;
    }>;
    polygonMouseover: EventEmitter<{
        mouseEvent: MouseEvent;
        polygon: Polygon;
    }>;
    ngOnInit(): void;
    ngDoCheck(): void;
    onPolygonMouseDown($event: any): void;
    onPolygonMouseOver($event: any): void;
}
