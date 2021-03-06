import { OnInit, EventEmitter } from '@angular/core';
import { Ellipse } from '../../types';
export declare class SvgEllipseComponent implements OnInit {
    constructor();
    ellipse: Ellipse;
    ellipseMousedown: EventEmitter<{
        mouseEvent: MouseEvent;
        ellipse: Ellipse;
    }>;
    ellipseMouseover: EventEmitter<{
        mouseEvent: MouseEvent;
        ellipse: Ellipse;
    }>;
    ngOnInit(): void;
    onEllipseMouseDown($event: any): void;
    onEllipseMouseOver($event: any): void;
}
