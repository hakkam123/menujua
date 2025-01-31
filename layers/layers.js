var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_datanamaoutlet_1 = new ol.format.GeoJSON();
var features_datanamaoutlet_1 = format_datanamaoutlet_1.readFeatures(json_datanamaoutlet_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_datanamaoutlet_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_datanamaoutlet_1.addFeatures(features_datanamaoutlet_1);
var lyr_datanamaoutlet_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_datanamaoutlet_1, 
                style: style_datanamaoutlet_1,
                popuplayertitle: 'data nama outlet',
                interactive: true,
                title: '<img src="styles/legend/datanamaoutlet_1.png" /> data nama outlet'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_datanamaoutlet_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_datanamaoutlet_1];
lyr_datanamaoutlet_1.set('fieldAliases', {'longitude': 'longitude', 'lattitude': 'lattitude', 'nama outlet / sekolah': 'nama outlet / sekolah', });
lyr_datanamaoutlet_1.set('fieldImages', {'longitude': 'TextEdit', 'lattitude': 'TextEdit', 'nama outlet / sekolah': 'TextEdit', });
lyr_datanamaoutlet_1.set('fieldLabels', {'longitude': 'no label', 'lattitude': 'no label', 'nama outlet / sekolah': 'inline label - always visible', });
lyr_datanamaoutlet_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});