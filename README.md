L.TileLayer.ArcGIS
==========

Plugin for ArcGIS tiles.

## Demos

- [View OSM and Rosreestr &rarr;](http://originalsin.github.io/Leaflet.TileLayer.ArcGIS/examples/LayerRosreestr.html)


## Basic Usage

```js
    var rosreestr = L.tileLayer.ArcGIS('http://{s}.maps.rosreestr.ru/arcgis/rest/services/Cadastre/Cadastre/MapServer/export?dpi=96&transparent=true&format=png32&bbox={bbox}&size=1024,1024&bboxSR=102100&imageSR=102100&f=image', {
        tileSize: 1024,
        attribution: 'Rosreestr'
    });
```

## Changelog

#### 0.0.1 &mdash; Apr 03, 2015

- Initial release.

