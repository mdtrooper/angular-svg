import { OnInit, EventEmitter } from '@angular/core';
import { Line } from '../../types';
export declare class SvgLineComponent implements OnInit {
    constructor();
    line: Line;
    lineMousedown: EventEmitter<{
        mouseEvent: MouseEvent;
        line: Line;
    }>;
    lineMouseover: EventEmitter<{
        mouseEvent: MouseEvent;
        line: Line;
    }>;
    ngOnInit(): void;
    onLineMouseDown($event: any): void;
    onLineMouseOver($event: any): void;
}
