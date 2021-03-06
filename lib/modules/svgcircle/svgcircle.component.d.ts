import { OnInit, EventEmitter } from '@angular/core';
import { Circle } from '../../types';
export declare class SvgCircleComponent implements OnInit {
    constructor();
    circle: Circle;
    circleMousedown: EventEmitter<{
        mouseEvent: MouseEvent;
        circle: Circle;
    }>;
    circleMouseover: EventEmitter<{
        mouseEvent: MouseEvent;
        circle: Circle;
    }>;
    ngOnInit(): void;
    onCircleMouseDown($event: any): void;
    onCircleMouseOver($event: any): void;
}
