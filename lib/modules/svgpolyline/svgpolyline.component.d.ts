import { OnInit, EventEmitter, KeyValueDiffers, DoCheck } from '@angular/core';
import { Polyline } from '../../types';
import { SvgHelper } from '../../helpers/svghelper.service';
export declare class SvgPolylineComponent implements OnInit, DoCheck {
    private differs;
    private svghelper;
    differ: any;
    constructor(differs: KeyValueDiffers, svghelper: SvgHelper);
    pointsString: any;
    polyline: Polyline;
    polylineMousedown: EventEmitter<{
        mouseEvent: MouseEvent;
        polyline: Polyline;
    }>;
    ngOnInit(): void;
    ngDoCheck(): void;
    onPolylineMouseDown(event: any): void;
}
