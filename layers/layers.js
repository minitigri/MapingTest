var wms_layers = [];


        var lyr_CartoDark_0 = new ol.layer.Tile({
            'title': 'Carto - Dark',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
            })
        });
var format_KUALIPLANO_1 = new ol.format.GeoJSON();
var features_KUALIPLANO_1 = format_KUALIPLANO_1.readFeatures(json_KUALIPLANO_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KUALIPLANO_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KUALIPLANO_1.addFeatures(features_KUALIPLANO_1);
var lyr_KUALIPLANO_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KUALIPLANO_1, 
                style: style_KUALIPLANO_1,
                interactive: true,
                title: '<img src="styles/legend/KUALIPLANO_1.png" /> KUALIPLANO'
            });
var format_BOSQUE_2 = new ol.format.GeoJSON();
var features_BOSQUE_2 = format_BOSQUE_2.readFeatures(json_BOSQUE_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BOSQUE_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BOSQUE_2.addFeatures(features_BOSQUE_2);
var lyr_BOSQUE_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BOSQUE_2, 
                style: style_BOSQUE_2,
                interactive: true,
                title: '<img src="styles/legend/BOSQUE_2.png" /> BOSQUE'
            });
var format_CURVAS_3 = new ol.format.GeoJSON();
var features_CURVAS_3 = format_CURVAS_3.readFeatures(json_CURVAS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CURVAS_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CURVAS_3.addFeatures(features_CURVAS_3);
var lyr_CURVAS_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CURVAS_3, 
                style: style_CURVAS_3,
                interactive: true,
                title: '<img src="styles/legend/CURVAS_3.png" /> CURVAS'
            });

lyr_CartoDark_0.setVisible(true);lyr_KUALIPLANO_1.setVisible(true);lyr_BOSQUE_2.setVisible(true);lyr_CURVAS_3.setVisible(true);
var layersList = [lyr_CartoDark_0,lyr_KUALIPLANO_1,lyr_BOSQUE_2,lyr_CURVAS_3];
lyr_KUALIPLANO_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_BOSQUE_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_CURVAS_3.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_KUALIPLANO_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', });
lyr_BOSQUE_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', });
lyr_CURVAS_3.set('fieldImages', {'fid': '', 'ID': '', 'ELEV': '', });
lyr_KUALIPLANO_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_BOSQUE_2.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_CURVAS_3.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ELEV': 'no label', });
lyr_CURVAS_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});