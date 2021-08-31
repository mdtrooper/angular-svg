# Angular-svg

It is a fork of original (without git/cvs/hg/fossil repository) from [angular-svg in npm](https://www.npmjs.com/package/angular-svg) .

This readme is working progress (put the oldie gif) .

## Original author

 - kata.yaswanth

---
# Old

## SetUp

npm install angular-svg

## Usage

  import {
    SvgCircleModule,
    SvgLineModule,
    SvgPolygonModule,
    SvgPolylineModule,
    SvgTextModule,
    SvgPathModule
  } from 'angular-svg'

#Modules List :

1) SvgCricle
2) SvgText
3) SvgRectangle
4) SvgPolygon
5) SvgPolyline
6) SvgLine
7) SvgEllipse
8) SvgPath
  
## In Html

Add a root svg tag in your html



//Your root svg tag here

// for circle

  <g svg-circle
     [circle]="circle"
     (circleMousedown)="onCircleClick($event)"></g>

// for line

  <g svg-line
     [line]="line"
     (lineMousedown)="onLineClick($event)"></g>

//for polygon
  <g svg-polygon
     [polygon]="polygon"
     (polygonMousedown)="onPolygonClick($event)"></g>

     // for polyline
  <g svg-polyline
     [polyline]="polyline"></g>

     //for svg path
  <g svg-path
     [path]="pathString"
     [stroke]="colorstroke"></g>

     // for svg text
  <g svg-text
     [text]="text">test</g>

// Svg end tag
