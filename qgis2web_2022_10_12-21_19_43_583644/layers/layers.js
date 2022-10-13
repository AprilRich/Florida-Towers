var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_CellTower2019_1 = new ol.format.GeoJSON();
var features_CellTower2019_1 = format_CellTower2019_1.readFeatures(json_CellTower2019_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CellTower2019_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CellTower2019_1.addFeatures(features_CellTower2019_1);
var lyr_CellTower2019_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CellTower2019_1, 
                style: style_CellTower2019_1,
                interactive: true,
                title: '<img src="styles/legend/CellTower2019_1.png" /> Cell Tower (2019)'
            });

lyr_OSMStandard_0.setVisible(true);lyr_CellTower2019_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_CellTower2019_1];
lyr_CellTower2019_1.set('fieldAliases', {'LICENSEE': 'LICENSEE', 'CALLSIGN': 'CALLSIGN', 'LOCNUM': 'LOCNUM', 'LAT': 'LAT', 'LON': 'LON', 'LATDD': 'LATDD', 'LONDD': 'LONDD', 'LOCADD': 'LOCADD', 'LOCCITY': 'LOCCITY', 'LOCCOUNTY': 'LOCCOUNTY', 'LOCSTATE': 'LOCSTATE', 'NEPA': 'NEPA', 'TOWREG': 'TOWREG', 'SUPSTRUC': 'SUPSTRUC', 'ALLSTRUC': 'ALLSTRUC', 'STRUCTYPE': 'STRUCTYPE', 'LIC_ID': 'LIC_ID', 'MGRS': 'MGRS', 'GOOGLEMAP': 'GOOGLEMAP', 'DESCRIPT': 'DESCRIPT', 'FGDLAQDATE': 'FGDLAQDATE', 'AUTOID': 'AUTOID', });
lyr_CellTower2019_1.set('fieldImages', {'LICENSEE': 'TextEdit', 'CALLSIGN': 'TextEdit', 'LOCNUM': 'Hidden', 'LAT': 'Hidden', 'LON': 'Hidden', 'LATDD': 'Hidden', 'LONDD': 'Hidden', 'LOCADD': 'TextEdit', 'LOCCITY': 'TextEdit', 'LOCCOUNTY': 'Hidden', 'LOCSTATE': 'Hidden', 'NEPA': 'Hidden', 'TOWREG': 'Hidden', 'SUPSTRUC': 'Hidden', 'ALLSTRUC': 'Hidden', 'STRUCTYPE': 'Hidden', 'LIC_ID': 'Hidden', 'MGRS': 'Hidden', 'GOOGLEMAP': 'Hidden', 'DESCRIPT': 'Hidden', 'FGDLAQDATE': 'Hidden', 'AUTOID': 'Hidden', });
lyr_CellTower2019_1.set('fieldLabels', {'LICENSEE': 'inline label', 'CALLSIGN': 'inline label', 'LOCADD': 'inline label', 'LOCCITY': 'inline label', });
lyr_CellTower2019_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});