/*
 * L.TileLayer.ArcGIS
 */

L.TileLayer.ArcGIS = L.TileLayer.extend({
    options: {
        tileSize: 1024
    },

    getTileUrl: function (tilePoint) {
        var map = this._map,
            crs = map.options.crs,
            tileSize = this.options.tileSize,
            nwPoint = tilePoint.multiplyBy(tileSize),
            sePoint = nwPoint.add([tileSize, tileSize]);
 
        var nw = crs.project(map.unproject(nwPoint, tilePoint.z)),
            se = crs.project(map.unproject(sePoint, tilePoint.z)),
            bbox = [nw.x, se.y, se.x, nw.y].join(',');

        return L.Util.template(this._url, L.extend({
            s: this._getSubdomain(tilePoint),
            bbox: bbox
        }, this.options));
    }
});

L.tileLayer.ArcGIS = function (url, options) {
    return new L.TileLayer.ArcGIS(url, options);
};
