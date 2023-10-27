var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_SATELITAL_1 = new ol.layer.Tile({
            'title': 'SATELITAL',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_GGUU_2 = new ol.format.GeoJSON();
var features_GGUU_2 = format_GGUU_2.readFeatures(json_GGUU_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GGUU_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GGUU_2.addFeatures(features_GGUU_2);
var lyr_GGUU_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GGUU_2, 
                style: style_GGUU_2,
                interactive: true,
                title: '<img src="styles/legend/GGUU_2.png" /> GG.UU.'
            });
var format_DIVMEC_3 = new ol.format.GeoJSON();
var features_DIVMEC_3 = format_DIVMEC_3.readFeatures(json_DIVMEC_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DIVMEC_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DIVMEC_3.addFeatures(features_DIVMEC_3);
var lyr_DIVMEC_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DIVMEC_3, 
                style: style_DIVMEC_3,
                interactive: true,
                title: '<img src="styles/legend/DIVMEC_3.png" /> DIVMEC'
            });
var format_GUC_4 = new ol.format.GeoJSON();
var features_GUC_4 = format_GUC_4.readFeatures(json_GUC_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GUC_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GUC_4.addFeatures(features_GUC_4);
var lyr_GUC_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GUC_4, 
                style: style_GUC_4,
                interactive: true,
                title: '<img src="styles/legend/GUC_4.png" /> G.U.C.'
            });
var format_PUC_5 = new ol.format.GeoJSON();
var features_PUC_5 = format_PUC_5.readFeatures(json_PUC_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PUC_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PUC_5.addFeatures(features_PUC_5);
var lyr_PUC_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PUC_5, 
                style: style_PUC_5,
                interactive: true,
                title: '<img src="styles/legend/PUC_5.png" /> P.U.C.'
            });
var format_POBEJTO_6 = new ol.format.GeoJSON();
var features_POBEJTO_6 = format_POBEJTO_6.readFeatures(json_POBEJTO_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POBEJTO_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POBEJTO_6.addFeatures(features_POBEJTO_6);
var lyr_POBEJTO_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_POBEJTO_6, 
                style: style_POBEJTO_6,
                interactive: true,
                title: '<img src="styles/legend/POBEJTO_6.png" /> POB.EJTO.'
            });
var format_PPUU_7 = new ol.format.GeoJSON();
var features_PPUU_7 = format_PPUU_7.readFeatures(json_PPUU_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PPUU_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PPUU_7.addFeatures(features_PPUU_7);
var lyr_PPUU_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PPUU_7, 
                style: style_PPUU_7,
                interactive: true,
                title: '<img src="styles/legend/PPUU_7.png" /> PP.UU.'
            });
var format_UUSIMB_8 = new ol.format.GeoJSON();
var features_UUSIMB_8 = format_UUSIMB_8.readFeatures(json_UUSIMB_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UUSIMB_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UUSIMB_8.addFeatures(features_UUSIMB_8);
var lyr_UUSIMB_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UUSIMB_8, 
                style: style_UUSIMB_8,
                interactive: true,
                title: '<img src="styles/legend/UUSIMB_8.png" /> UU.SIMB.'
            });
var format_UUTEXTO_9 = new ol.format.GeoJSON();
var features_UUTEXTO_9 = format_UUTEXTO_9.readFeatures(json_UUTEXTO_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UUTEXTO_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UUTEXTO_9.addFeatures(features_UUTEXTO_9);
var lyr_UUTEXTO_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UUTEXTO_9, 
                style: style_UUTEXTO_9,
                interactive: true,
                title: '<img src="styles/legend/UUTEXTO_9.png" /> UU.TEXTO'
            });
var format_vias_de_comunicacion_10 = new ol.format.GeoJSON();
var features_vias_de_comunicacion_10 = format_vias_de_comunicacion_10.readFeatures(json_vias_de_comunicacion_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vias_de_comunicacion_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vias_de_comunicacion_10.addFeatures(features_vias_de_comunicacion_10);
var lyr_vias_de_comunicacion_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_vias_de_comunicacion_10, 
                style: style_vias_de_comunicacion_10,
                interactive: true,
                title: '<img src="styles/legend/vias_de_comunicacion_10.png" /> vias_de_comunicacion'
            });
var format_VIASDECOMUNICACION_11 = new ol.format.GeoJSON();
var features_VIASDECOMUNICACION_11 = format_VIASDECOMUNICACION_11.readFeatures(json_VIASDECOMUNICACION_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VIASDECOMUNICACION_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VIASDECOMUNICACION_11.addFeatures(features_VIASDECOMUNICACION_11);
var lyr_VIASDECOMUNICACION_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VIASDECOMUNICACION_11, 
                style: style_VIASDECOMUNICACION_11,
                interactive: true,
                title: '<img src="styles/legend/VIASDECOMUNICACION_11.png" /> VIAS DE COMUNICACION'
            });
var format_DRENAJES_12 = new ol.format.GeoJSON();
var features_DRENAJES_12 = format_DRENAJES_12.readFeatures(json_DRENAJES_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DRENAJES_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRENAJES_12.addFeatures(features_DRENAJES_12);
var lyr_DRENAJES_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DRENAJES_12, 
                style: style_DRENAJES_12,
                interactive: true,
                title: '<img src="styles/legend/DRENAJES_12.png" /> DRENAJES'
            });
var format_POBLACIONES_13 = new ol.format.GeoJSON();
var features_POBLACIONES_13 = format_POBLACIONES_13.readFeatures(json_POBLACIONES_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POBLACIONES_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POBLACIONES_13.addFeatures(features_POBLACIONES_13);
var lyr_POBLACIONES_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_POBLACIONES_13, 
                style: style_POBLACIONES_13,
                interactive: true,
                title: '<img src="styles/legend/POBLACIONES_13.png" /> POBLACIONES'
            });
var format_JURISDICCION_14 = new ol.format.GeoJSON();
var features_JURISDICCION_14 = format_JURISDICCION_14.readFeatures(json_JURISDICCION_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JURISDICCION_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JURISDICCION_14.addFeatures(features_JURISDICCION_14);
var lyr_JURISDICCION_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JURISDICCION_14, 
                style: style_JURISDICCION_14,
                interactive: true,
                title: '<img src="styles/legend/JURISDICCION_14.png" /> JURISDICCION'
            });
var group_BATINGIIGRALROMAN = new ol.layer.Group({
                                layers: [lyr_VIASDECOMUNICACION_11,lyr_DRENAJES_12,lyr_POBLACIONES_13,lyr_JURISDICCION_14,],
                                title: "BAT ING II GRAL. ROMAN"});
var group_DIVMEC1 = new ol.layer.Group({
                                layers: [lyr_GGUU_2,lyr_DIVMEC_3,lyr_GUC_4,lyr_PUC_5,lyr_POBEJTO_6,lyr_PPUU_7,lyr_UUSIMB_8,lyr_UUTEXTO_9,lyr_vias_de_comunicacion_10,],
                                title: "DIV MEC - 1"});
var group_MAPABASE = new ol.layer.Group({
                                layers: [lyr_OpenStreetMap_0,lyr_SATELITAL_1,],
                                title: "MAPA BASE"});

lyr_OpenStreetMap_0.setVisible(true);lyr_SATELITAL_1.setVisible(true);lyr_GGUU_2.setVisible(true);lyr_DIVMEC_3.setVisible(true);lyr_GUC_4.setVisible(true);lyr_PUC_5.setVisible(true);lyr_POBEJTO_6.setVisible(true);lyr_PPUU_7.setVisible(true);lyr_UUSIMB_8.setVisible(true);lyr_UUTEXTO_9.setVisible(true);lyr_vias_de_comunicacion_10.setVisible(true);lyr_VIASDECOMUNICACION_11.setVisible(true);lyr_DRENAJES_12.setVisible(true);lyr_POBLACIONES_13.setVisible(true);lyr_JURISDICCION_14.setVisible(true);
var layersList = [group_MAPABASE,group_DIVMEC1,group_BATINGIIGRALROMAN];
lyr_GGUU_2.set('fieldAliases', {'G_U_C_': 'G_U_C_', 'UBICACIÓN': 'UBICACIÓN', });
lyr_DIVMEC_3.set('fieldAliases', {'SIGLA': 'SIGLA', });
lyr_GUC_4.set('fieldAliases', {'DIVISION': 'DIVISION', });
lyr_PUC_5.set('fieldAliases', {'SIGLA': 'SIGLA', });
lyr_POBEJTO_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'GRUPO': 'GRUPO', 'OBJETO': 'OBJETO', 'NOMBRE': 'NOMBRE', 'TIPO': 'TIPO', });
lyr_PPUU_7.set('fieldAliases', {'G_U_C_': 'G_U_C_', 'NOMBRE_UNI': 'NOMBRE_UNI', 'DENOMINATI': 'DENOMINATI', 'UBICACIÓN': 'UBICACIÓN', });
lyr_UUSIMB_8.set('fieldAliases', {'FID_': 'FID_', 'Entity': 'Entity', 'Handle': 'Handle', 'Level': 'Level', 'Layer': 'Layer', 'LvlDesc': 'LvlDesc', 'LyrFrzn': 'LyrFrzn', 'LyrLock': 'LyrLock', 'LyrOn': 'LyrOn', 'LvlPlot': 'LvlPlot', 'Color': 'Color', 'EntColor': 'EntColor', 'LyrColor': 'LyrColor', 'Linetype': 'Linetype', 'EntLinetyp': 'EntLinetyp', 'LyrLnType': 'LyrLnType', 'Elevation': 'Elevation', 'Class': 'Class', 'GGroup': 'GGroup', 'CadModel': 'CadModel', 'Fill': 'Fill', 'LineWt': 'LineWt', 'EntLineWt': 'EntLineWt', 'LyrLineWt': 'LyrLineWt', 'RefName': 'RefName', 'LTScale': 'LTScale', 'QrotW': 'QrotW', 'QrotX': 'QrotX', 'QrotY': 'QrotY', 'QrotZ': 'QrotZ', 'DocName': 'DocName', 'DocPath': 'DocPath', 'DocType': 'DocType', 'DocVer': 'DocVer', 'DIVISION': 'DIVISION', });
lyr_UUTEXTO_9.set('fieldAliases', {'Entity': 'Entity', 'Color': 'Color', 'Elevation': 'Elevation', 'RefName': 'RefName', 'Text': 'Text', 'TxtMemo': 'TxtMemo', 'DIVISION': 'DIVISION', });
lyr_vias_de_comunicacion_10.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FNODE_': 'FNODE_', 'TNODE_': 'TNODE_', 'TIP_VIA': 'TIP_VIA', 'DESCRIPCIO': 'DESCRIPCIO', 'LENGTH': 'LENGTH', 'Shape_Leng': 'Shape_Leng', });
lyr_VIASDECOMUNICACION_11.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'RUTA': 'RUTA', 'LONG_2D': 'LONG_2D', 'LONG_3D': 'LONG_3D', 'RODADURA': 'RODADURA', 'TIPO': 'TIPO', 'Z': 'Z', 'Longitud': 'Longitud', 'COD_RST': 'COD_RST', 'TIPO_RST': 'TIPO_RST', 'OBJETO': 'OBJETO', 'COD_TEMA': 'COD_TEMA', 'COD_OBJETO': 'COD_OBJETO', 'CLASE': 'CLASE', 'NAM': 'NAM', 'Codigo': 'Codigo', 'Shape_Leng': 'Shape_Leng', 'TIPO_IGM': 'TIPO_IGM', 'Shape_Le_1': 'Shape_Le_1', });
lyr_DRENAJES_12.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'TEMA': 'TEMA', 'COD_HYP': 'COD_HYP', 'TIPO_HYP': 'TIPO_HYP', 'COD_TEMA': 'COD_TEMA', 'COD_OBJETO': 'COD_OBJETO', 'OBJETO': 'OBJETO', 'SHAPE_LENG': 'SHAPE_LENG', 'NM3': 'NM3', 'Asignacion': 'Asignacion', 'NOMBRE': 'NOMBRE', 'SUBCUENCA': 'SUBCUENCA', 'AFLUENTE': 'AFLUENTE', 'OBS': 'OBS', 'Shape_Le_1': 'Shape_Le_1', });
lyr_POBLACIONES_13.set('fieldAliases', {'dpto': 'dpto', 'CodigoDepa': 'CodigoDepa', 'NombreDepa': 'NombreDepa', 'CodigoProv': 'CodigoProv', 'NombreProv': 'NombreProv', 'CodigoMuni': 'CodigoMuni', 'NombreMuni': 'NombreMuni', 'nombrecomu': 'nombrecomu', 'nombreloca': 'nombreloca', });
lyr_JURISDICCION_14.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PPUUCC': 'PPUUCC', 'GGUUCC': 'GGUUCC', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_GGUU_2.set('fieldImages', {'G_U_C_': 'TextEdit', 'UBICACIÓN': 'TextEdit', });
lyr_DIVMEC_3.set('fieldImages', {'SIGLA': 'TextEdit', });
lyr_GUC_4.set('fieldImages', {'DIVISION': 'TextEdit', });
lyr_PUC_5.set('fieldImages', {'SIGLA': '', });
lyr_POBEJTO_6.set('fieldImages', {'OBJECTID': '', 'GRUPO': '', 'OBJETO': '', 'NOMBRE': '', 'TIPO': '', });
lyr_PPUU_7.set('fieldImages', {'G_U_C_': '', 'NOMBRE_UNI': '', 'DENOMINATI': '', 'UBICACIÓN': '', });
lyr_UUSIMB_8.set('fieldImages', {'FID_': '', 'Entity': '', 'Handle': '', 'Level': '', 'Layer': '', 'LvlDesc': '', 'LyrFrzn': '', 'LyrLock': '', 'LyrOn': '', 'LvlPlot': '', 'Color': '', 'EntColor': '', 'LyrColor': '', 'Linetype': '', 'EntLinetyp': '', 'LyrLnType': '', 'Elevation': '', 'Class': '', 'GGroup': '', 'CadModel': '', 'Fill': '', 'LineWt': '', 'EntLineWt': '', 'LyrLineWt': '', 'RefName': '', 'LTScale': '', 'QrotW': '', 'QrotX': '', 'QrotY': '', 'QrotZ': '', 'DocName': '', 'DocPath': '', 'DocType': '', 'DocVer': '', 'DIVISION': '', });
lyr_UUTEXTO_9.set('fieldImages', {'Entity': '', 'Color': '', 'Elevation': '', 'RefName': '', 'Text': '', 'TxtMemo': '', 'DIVISION': '', });
lyr_vias_de_comunicacion_10.set('fieldImages', {'OBJECTID': '', 'FNODE_': '', 'TNODE_': '', 'TIP_VIA': '', 'DESCRIPCIO': '', 'LENGTH': '', 'Shape_Leng': '', });
lyr_VIASDECOMUNICACION_11.set('fieldImages', {'OBJECTID': '', 'Id': '', 'RUTA': '', 'LONG_2D': '', 'LONG_3D': '', 'RODADURA': '', 'TIPO': '', 'Z': '', 'Longitud': '', 'COD_RST': '', 'TIPO_RST': '', 'OBJETO': '', 'COD_TEMA': '', 'COD_OBJETO': '', 'CLASE': '', 'NAM': '', 'Codigo': '', 'Shape_Leng': '', 'TIPO_IGM': '', 'Shape_Le_1': '', });
lyr_DRENAJES_12.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'TEMA': 'TextEdit', 'COD_HYP': 'TextEdit', 'TIPO_HYP': 'TextEdit', 'COD_TEMA': 'TextEdit', 'COD_OBJETO': 'TextEdit', 'OBJETO': 'TextEdit', 'SHAPE_LENG': 'TextEdit', 'NM3': 'TextEdit', 'Asignacion': 'TextEdit', 'NOMBRE': 'TextEdit', 'SUBCUENCA': 'TextEdit', 'AFLUENTE': 'TextEdit', 'OBS': 'TextEdit', 'Shape_Le_1': 'TextEdit', });
lyr_POBLACIONES_13.set('fieldImages', {'dpto': 'TextEdit', 'CodigoDepa': 'TextEdit', 'NombreDepa': 'TextEdit', 'CodigoProv': 'TextEdit', 'NombreProv': 'TextEdit', 'CodigoMuni': 'TextEdit', 'NombreMuni': 'TextEdit', 'nombrecomu': 'TextEdit', 'nombreloca': 'TextEdit', });
lyr_JURISDICCION_14.set('fieldImages', {'OBJECTID': 'TextEdit', 'PPUUCC': 'TextEdit', 'GGUUCC': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_GGUU_2.set('fieldLabels', {});
lyr_DIVMEC_3.set('fieldLabels', {});
lyr_GUC_4.set('fieldLabels', {});
lyr_PUC_5.set('fieldLabels', {});
lyr_POBEJTO_6.set('fieldLabels', {});
lyr_PPUU_7.set('fieldLabels', {});
lyr_UUSIMB_8.set('fieldLabels', {});
lyr_UUTEXTO_9.set('fieldLabels', {});
lyr_vias_de_comunicacion_10.set('fieldLabels', {});
lyr_VIASDECOMUNICACION_11.set('fieldLabels', {});
lyr_DRENAJES_12.set('fieldLabels', {});
lyr_POBLACIONES_13.set('fieldLabels', {});
lyr_JURISDICCION_14.set('fieldLabels', {});
lyr_JURISDICCION_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});