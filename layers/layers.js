var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: 'Интегральный индекс',
                interactive: true,
    title: 'Интегральный индекс<br />\
    <img src="styles/legend/_1_0.png" /> Низкая устойчивость<br />\
    <img src="styles/legend/_1_1.png" /> Пониженная устойчивость<br />\
    <img src="styles/legend/_1_2.png" /> Средняя устойчивость<br />\
    <img src="styles/legend/_1_3.png" /> Высокая устойчивость<br />' });
var format_2024_2 = new ol.format.GeoJSON();
var features_2024_2 = format_2024_2.readFeatures(json_2024_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2024_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2024_2.addFeatures(features_2024_2);
var lyr_2024_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2024_2, 
                style: style_2024_2,
                popuplayertitle: 'Оборот розничной торговли на душу населения 2024 год (рублей)',
                interactive: true,
    title: 'Оборот розничной торговли на душу населения 2024 год (рублей)<br />\
    <img src="styles/legend/2024_2_0.png" /> 245 000 и менее<br />\
    <img src="styles/legend/2024_2_1.png" /> от 245 000 до 275 000<br />\
    <img src="styles/legend/2024_2_2.png" /> от 275 000 до 330 000<br />\
    <img src="styles/legend/2024_2_3.png" /> 330 000 и более<br />' });
var format_2020_3 = new ol.format.GeoJSON();
var features_2020_3 = format_2020_3.readFeatures(json_2020_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2020_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2020_3.addFeatures(features_2020_3);
var lyr_2020_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2020_3, 
                style: style_2020_3,
                popuplayertitle: 'Оборот розничной торговли на душу населения 2020 год (рублей)',
                interactive: true,
    title: 'Оборот розничной торговли на душу населения 2020 год (рублей)<br />\
    <img src="styles/legend/2020_3_0.png" /> 145 000 и менее<br />\
    <img src="styles/legend/2020_3_1.png" /> от 145 000 до 175 000<br />\
    <img src="styles/legend/2020_3_2.png" /> от 175 000 до 220 000<br />\
    <img src="styles/legend/2020_3_3.png" /> 220 000 и более<br />' });
var format_2015_4 = new ol.format.GeoJSON();
var features_2015_4 = format_2015_4.readFeatures(json_2015_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2015_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2015_4.addFeatures(features_2015_4);
var lyr_2015_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2015_4, 
                style: style_2015_4,
                popuplayertitle: 'Оборот розничной торговли на душу населения 2015 год (рублей)',
                interactive: true,
    title: 'Оборот розничной торговли на душу населения 2015 год (рублей)<br />\
    <img src="styles/legend/2015_4_0.png" /> 95 000 и менее<br />\
    <img src="styles/legend/2015_4_1.png" /> от 95 000 до 125 000<br />\
    <img src="styles/legend/2015_4_2.png" /> от 125 000 до 140 000<br />\
    <img src="styles/legend/2015_4_3.png" /> 145 000 и более<br />' });
var format_2010_5 = new ol.format.GeoJSON();
var features_2010_5 = format_2010_5.readFeatures(json_2010_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2010_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2010_5.addFeatures(features_2010_5);
var lyr_2010_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2010_5, 
                style: style_2010_5,
                popuplayertitle: 'Оборот розничной торговли на душу населения 2010 год (рублей)',
                interactive: true,
    title: 'Оборот розничной торговли на душу населения 2010 год (рублей)<br />\
    <img src="styles/legend/2010_5_0.png" /> 65 000 и менее<br />\
    <img src="styles/legend/2010_5_1.png" /> от 65 000 до 75 000<br />\
    <img src="styles/legend/2010_5_2.png" /> от 75 000 до 105 000<br />\
    <img src="styles/legend/2010_5_3.png" /> 105 000 и более<br />' });
var format_2024_6 = new ol.format.GeoJSON();
var features_2024_6 = format_2024_6.readFeatures(json_2024_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2024_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2024_6.addFeatures(features_2024_6);
var lyr_2024_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2024_6, 
                style: style_2024_6,
                popuplayertitle: 'Индексы промышленного производства 2024 год (% к предыдущему году)',
                interactive: true,
    title: 'Индексы промышленного производства 2024 год (% к предыдущему году)<br />\
    <img src="styles/legend/2024_6_0.png" /> 455 000 и менее<br />\
    <img src="styles/legend/2024_6_1.png" /> от 455 000 до 605 000<br />\
    <img src="styles/legend/2024_6_2.png" /> от 605 000 до 960 000<br />\
    <img src="styles/legend/2024_6_3.png" /> 960 000 и более<br />' });
var format_2020_7 = new ol.format.GeoJSON();
var features_2020_7 = format_2020_7.readFeatures(json_2020_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2020_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2020_7.addFeatures(features_2020_7);
var lyr_2020_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2020_7, 
                style: style_2020_7,
                popuplayertitle: 'Индексы промышленного производства 2020 год (% к предыдущему году)',
                interactive: true,
    title: 'Индексы промышленного производства 2020 год (% к предыдущему году)<br />\
    <img src="styles/legend/2020_7_0.png" /> 290 000 и менее<br />\
    <img src="styles/legend/2020_7_1.png" /> от 290 000 до 415 000<br />\
    <img src="styles/legend/2020_7_2.png" /> от 415 000 до 555 000<br />\
    <img src="styles/legend/2020_7_3.png" /> 555 000 и более<br />' });
var format_2015_8 = new ol.format.GeoJSON();
var features_2015_8 = format_2015_8.readFeatures(json_2015_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2015_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2015_8.addFeatures(features_2015_8);
var lyr_2015_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2015_8, 
                style: style_2015_8,
                popuplayertitle: 'Индексы промышленного производства 2015 год (% к предыдущему году)',
                interactive: true,
    title: 'Индексы промышленного производства 2015 год (% к предыдущему году)<br />\
    <img src="styles/legend/2015_8_0.png" /> 255 000 и менее<br />\
    <img src="styles/legend/2015_8_1.png" /> от 255 000 до 345 000<br />\
    <img src="styles/legend/2015_8_2.png" /> 345 000 до 405 000<br />\
    <img src="styles/legend/2015_8_3.png" /> 405 000 и более<br />' });
var format_2010_9 = new ol.format.GeoJSON();
var features_2010_9 = format_2010_9.readFeatures(json_2010_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2010_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2010_9.addFeatures(features_2010_9);
var lyr_2010_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2010_9, 
                style: style_2010_9,
                popuplayertitle: 'Индексы промышленного производства 2010 год (% к предыдущему году)',
                interactive: true,
    title: 'Индексы промышленного производства 2010 год (% к предыдущему году)<br />\
    <img src="styles/legend/2010_9_0.png" /> 150 000 и менее<br />\
    <img src="styles/legend/2010_9_1.png" /> от 150 000 до 200 000<br />\
    <img src="styles/legend/2010_9_2.png" /> 200 000 до 235 000<br />\
    <img src="styles/legend/2010_9_3.png" /> 235 000 и более<br />' });
var format_2024_10 = new ol.format.GeoJSON();
var features_2024_10 = format_2024_10.readFeatures(json_2024_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2024_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2024_10.addFeatures(features_2024_10);
var lyr_2024_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2024_10, 
                style: style_2024_10,
                popuplayertitle: 'Инвестиции в основной капитал на душу населения 2024 год (рублей)',
                interactive: true,
    title: 'Инвестиции в основной капитал на душу населения 2024 год (рублей)<br />\
    <img src="styles/legend/2024_10_0.png" /> 135 000 и менее<br />\
    <img src="styles/legend/2024_10_1.png" /> от 133209 до 195 000<br />\
    <img src="styles/legend/2024_10_2.png" /> от 195 000 до 250 000<br />\
    <img src="styles/legend/2024_10_3.png" /> 250 000 и более<br />' });
var format_2020_11 = new ol.format.GeoJSON();
var features_2020_11 = format_2020_11.readFeatures(json_2020_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2020_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2020_11.addFeatures(features_2020_11);
var lyr_2020_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2020_11, 
                style: style_2020_11,
                popuplayertitle: 'Инвестиции в основной капитал на душу населения 2020 год (рублей)',
                interactive: true,
    title: 'Инвестиции в основной капитал на душу населения 2020 год (рублей)<br />\
    <img src="styles/legend/2020_11_0.png" /> 60 000 и менее<br />\
    <img src="styles/legend/2020_11_1.png" /> от 60 000 до 80 000<br />\
    <img src="styles/legend/2020_11_2.png" /> от 80 000 до 120 000<br />\
    <img src="styles/legend/2020_11_3.png" /> 120 000 и более<br />' });
var format_2015_12 = new ol.format.GeoJSON();
var features_2015_12 = format_2015_12.readFeatures(json_2015_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2015_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2015_12.addFeatures(features_2015_12);
var lyr_2015_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2015_12, 
                style: style_2015_12,
                popuplayertitle: 'Инвестиции в основной капитал на душу населения 2015 год (рублей)',
                interactive: true,
    title: 'Инвестиции в основной капитал на душу населения 2015 год (рублей)<br />\
    <img src="styles/legend/2015_12_0.png" /> 45 000 и менее<br />\
    <img src="styles/legend/2015_12_1.png" /> от 45 000 до 70 000<br />\
    <img src="styles/legend/2015_12_2.png" /> от 70 000 до 95 000<br />\
    <img src="styles/legend/2015_12_3.png" /> 95 000 и более<br />' });
var format_2010_13 = new ol.format.GeoJSON();
var features_2010_13 = format_2010_13.readFeatures(json_2010_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2010_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2010_13.addFeatures(features_2010_13);
var lyr_2010_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2010_13, 
                style: style_2010_13,
                popuplayertitle: 'Инвестиции в основной капитал на душу населения 2010 год (рублей)',
                interactive: true,
    title: 'Инвестиции в основной капитал на душу населения 2010 год (рублей)<br />\
    <img src="styles/legend/2010_13_0.png" /> 25 500 и менее<br />\
    <img src="styles/legend/2010_13_1.png" /> от 25 000 до 35 000<br />\
    <img src="styles/legend/2010_13_2.png" /> от 35 000 до 55 000<br />\
    <img src="styles/legend/2010_13_3.png" /> 55 000 и более<br />' });
var format_2024_14 = new ol.format.GeoJSON();
var features_2024_14 = format_2024_14.readFeatures(json_2024_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2024_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2024_14.addFeatures(features_2024_14);
var lyr_2024_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2024_14, 
                style: style_2024_14,
                popuplayertitle: 'Реальная начисленная заработная плата работников организаций 2024 год (% к предыдущему году)',
                interactive: true,
    title: 'Реальная начисленная заработная плата работников организаций 2024 год (% к предыдущему году)<br />\
    <img src="styles/legend/2024_14_0.png" /> 110 и менее<br />\
    <img src="styles/legend/2024_14_1.png" /> от 110 до 112<br />\
    <img src="styles/legend/2024_14_2.png" /> от 112 до 114<br />\
    <img src="styles/legend/2024_14_3.png" /> 114 и более<br />' });
var format_2020_15 = new ol.format.GeoJSON();
var features_2020_15 = format_2020_15.readFeatures(json_2020_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2020_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2020_15.addFeatures(features_2020_15);
var lyr_2020_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2020_15, 
                style: style_2020_15,
                popuplayertitle: 'Реальная начисленная заработная плата работников организаций 2020 год (% к предыдущему году)',
                interactive: true,
    title: 'Реальная начисленная заработная плата работников организаций 2020 год (% к предыдущему году)<br />\
    <img src="styles/legend/2020_15_0.png" /> 102 и менее<br />\
    <img src="styles/legend/2020_15_1.png" /> от 102 до 103<br />\
    <img src="styles/legend/2020_15_2.png" /> от 103 до 104<br />\
    <img src="styles/legend/2020_15_3.png" /> 104 и более<br />' });
var format_2015_16 = new ol.format.GeoJSON();
var features_2015_16 = format_2015_16.readFeatures(json_2015_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2015_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2015_16.addFeatures(features_2015_16);
var lyr_2015_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2015_16, 
                style: style_2015_16,
                popuplayertitle: 'Реальная начисленная заработная плата работников организаций 2015 год (% к предыдущему году)',
                interactive: true,
    title: 'Реальная начисленная заработная плата работников организаций 2015 год (% к предыдущему году)<br />\
    <img src="styles/legend/2015_16_0.png" /> 90 и менее<br />\
    <img src="styles/legend/2015_16_1.png" /> от 90 до 91<br />\
    <img src="styles/legend/2015_16_2.png" /> от 91 до 92<br />\
    <img src="styles/legend/2015_16_3.png" /> 92 и более<br />' });
var format_2010_17 = new ol.format.GeoJSON();
var features_2010_17 = format_2010_17.readFeatures(json_2010_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2010_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2010_17.addFeatures(features_2010_17);
var lyr_2010_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2010_17, 
                style: style_2010_17,
                popuplayertitle: 'Реальная начисленная заработная плата работников организаций 2010 год (% к предыдущему году)',
                interactive: true,
    title: 'Реальная начисленная заработная плата работников организаций 2010 год (% к предыдущему году)<br />\
    <img src="styles/legend/2010_17_0.png" /> 101 и менее<br />\
    <img src="styles/legend/2010_17_1.png" /> от 101 до 103<br />\
    <img src="styles/legend/2010_17_2.png" /> от 103 до 105<br />\
    <img src="styles/legend/2010_17_3.png" /> 105 и более<br />' });
var format_2024_18 = new ol.format.GeoJSON();
var features_2024_18 = format_2024_18.readFeatures(json_2024_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2024_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2024_18.addFeatures(features_2024_18);
var lyr_2024_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2024_18, 
                style: style_2024_18,
                popuplayertitle: 'Уровень безработицы 2024 год  (%)',
                interactive: true,
    title: 'Уровень безработицы 2024 год  (%)<br />\
    <img src="styles/legend/2024_18_0.png" /> 1,3 и менее<br />\
    <img src="styles/legend/2024_18_1.png" /> от 1,3 до 1,8<br />\
    <img src="styles/legend/2024_18_2.png" /> от 1,8 до 2,1<br />\
    <img src="styles/legend/2024_18_3.png" /> 2,1 и более<br />' });
var format_2020_19 = new ol.format.GeoJSON();
var features_2020_19 = format_2020_19.readFeatures(json_2020_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2020_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2020_19.addFeatures(features_2020_19);
var lyr_2020_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2020_19, 
                style: style_2020_19,
                popuplayertitle: 'Уровень безработицы 2020 год (%)',
                interactive: true,
    title: 'Уровень безработицы 2020 год (%)<br />\
    <img src="styles/legend/2020_19_0.png" /> 3,5 и менее<br />\
    <img src="styles/legend/2020_19_1.png" /> от 3,5 до 5,0<br />\
    <img src="styles/legend/2020_19_2.png" /> от 5,0 до 6,0<br />\
    <img src="styles/legend/2020_19_3.png" /> 6,0 и более<br />' });
var format_2015_20 = new ol.format.GeoJSON();
var features_2015_20 = format_2015_20.readFeatures(json_2015_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2015_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2015_20.addFeatures(features_2015_20);
var lyr_2015_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2015_20, 
                style: style_2015_20,
                popuplayertitle: 'Уровень безработицы 2015 год (%)',
                interactive: true,
    title: 'Уровень безработицы 2015 год (%)<br />\
    <img src="styles/legend/2015_20_0.png" /> 3,5 и менее<br />\
    <img src="styles/legend/2015_20_1.png" /> от 3,5 до 4,5<br />\
    <img src="styles/legend/2015_20_2.png" /> от 4,5 до 5,5<br />\
    <img src="styles/legend/2015_20_3.png" /> 5,5 и более<br />' });
var format_2010_21 = new ol.format.GeoJSON();
var features_2010_21 = format_2010_21.readFeatures(json_2010_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2010_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2010_21.addFeatures(features_2010_21);
var lyr_2010_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2010_21, 
                style: style_2010_21,
                popuplayertitle: 'Уровень безработицы 2010 год (%)',
                interactive: true,
    title: 'Уровень безработицы 2010 год (%)<br />\
    <img src="styles/legend/2010_21_0.png" /> 6,5 и менее<br />\
    <img src="styles/legend/2010_21_1.png" /> от 6,5 до 7,5<br />\
    <img src="styles/legend/2010_21_2.png" /> от 7,5 до 9,5<br />\
    <img src="styles/legend/2010_21_3.png" /> 9,5 и более<br />' });
var format_2024_22 = new ol.format.GeoJSON();
var features_2024_22 = format_2024_22.readFeatures(json_2024_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2024_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2024_22.addFeatures(features_2024_22);
var lyr_2024_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2024_22, 
                style: style_2024_22,
                popuplayertitle: 'Реальные денежные доходы 2024 год (% к предыдущему году)',
                interactive: true,
    title: 'Реальные денежные доходы 2024 год (% к предыдущему году)<br />\
    <img src="styles/legend/2024_22_0.png" /> 106 и менее<br />\
    <img src="styles/legend/2024_22_1.png" /> от 106 до 108<br />\
    <img src="styles/legend/2024_22_2.png" /> от 108 до 110<br />\
    <img src="styles/legend/2024_22_3.png" /> 110 и более<br />' });
var format_2020_23 = new ol.format.GeoJSON();
var features_2020_23 = format_2020_23.readFeatures(json_2020_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2020_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2020_23.addFeatures(features_2020_23);
var lyr_2020_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2020_23, 
                style: style_2020_23,
                popuplayertitle: 'Реальные денежные доходы 2020 год (% к предыдущему году)',
                interactive: true,
    title: 'Реальные денежные доходы 2020 год (% к предыдущему году)<br />\
    <img src="styles/legend/2020_23_0.png" /> 95 и менее<br />\
    <img src="styles/legend/2020_23_1.png" /> от 95 до 97<br />\
    <img src="styles/legend/2020_23_2.png" /> от 97 до 99<br />\
    <img src="styles/legend/2020_23_3.png" /> 99 и более<br />' });
var format_2015_24 = new ol.format.GeoJSON();
var features_2015_24 = format_2015_24.readFeatures(json_2015_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2015_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2015_24.addFeatures(features_2015_24);
var lyr_2015_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2015_24, 
                style: style_2015_24,
                popuplayertitle: 'Реальные денежные доходы 2015 год (% к предыдущему году)',
                interactive: true,
    title: 'Реальные денежные доходы 2015 год (% к предыдущему году)<br />\
    <img src="styles/legend/2015_24_0.png" /> 94 и менее<br />\
    <img src="styles/legend/2015_24_1.png" /> от 94 до 97<br />\
    <img src="styles/legend/2015_24_2.png" /> от 97 до 101<br />\
    <img src="styles/legend/2015_24_3.png" /> 101 и более<br />' });
var format_2010_25 = new ol.format.GeoJSON();
var features_2010_25 = format_2010_25.readFeatures(json_2010_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2010_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2010_25.addFeatures(features_2010_25);
var lyr_2010_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2010_25, 
                style: style_2010_25,
                popuplayertitle: 'Реальные денежные доходы 2010 год (% к предыдущему году)',
                interactive: true,
    title: 'Реальные денежные доходы 2010 год (% к предыдущему году)<br />\
    <img src="styles/legend/2010_25_0.png" /> 103 и менее<br />\
    <img src="styles/legend/2010_25_1.png" /> от 103 до 106<br />\
    <img src="styles/legend/2010_25_2.png" /> от 106 до 110<br />\
    <img src="styles/legend/2010_25_3.png" /> 110 и более<br />' });
var format_2024_26 = new ol.format.GeoJSON();
var features_2024_26 = format_2024_26.readFeatures(json_2024_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2024_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2024_26.addFeatures(features_2024_26);
var lyr_2024_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2024_26, 
                style: style_2024_26,
                popuplayertitle: 'Индекс физического объема валового регионального продукта 2024 год (% к предыдущему году)',
                interactive: true,
    title: 'Индекс физического объема валового регионального продукта 2024 год (% к предыдущему году)<br />\
    <img src="styles/legend/2024_26_0.png" /> 105 и менее<br />\
    <img src="styles/legend/2024_26_1.png" /> от 105 до 107<br />\
    <img src="styles/legend/2024_26_2.png" /> от 107 до 109<br />\
    <img src="styles/legend/2024_26_3.png" /> 109 и более<br />' });
var format_2020_27 = new ol.format.GeoJSON();
var features_2020_27 = format_2020_27.readFeatures(json_2020_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2020_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2020_27.addFeatures(features_2020_27);
var lyr_2020_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2020_27, 
                style: style_2020_27,
                popuplayertitle: 'Индекс физического объема валового регионального продукта 2020 год (% к предыдущему году)',
                interactive: true,
    title: 'Индекс физического объема валового регионального продукта 2020 год (% к предыдущему году)<br />\
    <img src="styles/legend/2020_27_0.png" /> 94 и менее<br />\
    <img src="styles/legend/2020_27_1.png" /> от 94 до 98<br />\
    <img src="styles/legend/2020_27_2.png" /> от 98 до 100<br />\
    <img src="styles/legend/2020_27_3.png" /> 100 и более<br />' });
var format_2015_28 = new ol.format.GeoJSON();
var features_2015_28 = format_2015_28.readFeatures(json_2015_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2015_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2015_28.addFeatures(features_2015_28);
var lyr_2015_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2015_28, 
                style: style_2015_28,
                popuplayertitle: 'Индекс физического объема валового регионального продукта 2015 год (% к предыдущему году)',
                interactive: true,
    title: 'Индекс физического объема валового регионального продукта 2015 год (% к предыдущему году)<br />\
    <img src="styles/legend/2015_28_0.png" /> 97 и менее<br />\
    <img src="styles/legend/2015_28_1.png" /> от 97 до 99<br />\
    <img src="styles/legend/2015_28_2.png" /> от 99 до 101<br />\
    <img src="styles/legend/2015_28_3.png" /> 101 и более<br />' });
var format_2010_29 = new ol.format.GeoJSON();
var features_2010_29 = format_2010_29.readFeatures(json_2010_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2010_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2010_29.addFeatures(features_2010_29);
var lyr_2010_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2010_29, 
                style: style_2010_29,
                popuplayertitle: 'Индекс физического объема валового регионального продукта 2010 год (% к предыдущему году)',
                interactive: true,
    title: 'Индекс физического объема валового регионального продукта 2010 год (% к предыдущему году)<br />\
    <img src="styles/legend/2010_29_0.png" /> 102 и менее<br />\
    <img src="styles/legend/2010_29_1.png" /> от 102 до 104<br />\
    <img src="styles/legend/2010_29_2.png" /> от 104 до 106<br />\
    <img src="styles/legend/2010_29_3.png" /> 106 и более<br />' });
var format_2024_30 = new ol.format.GeoJSON();
var features_2024_30 = format_2024_30.readFeatures(json_2024_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2024_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2024_30.addFeatures(features_2024_30);
var lyr_2024_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2024_30, 
                style: style_2024_30,
                popuplayertitle: 'ВРП на душу населения 2024 год (рублей)',
                interactive: true,
    title: 'ВРП на душу населения 2024 год (рублей)<br />\
    <img src="styles/legend/2024_30_0.png" /> 450 000 и менее<br />\
    <img src="styles/legend/2024_30_1.png" /> от 450 000 до 600 000<br />\
    <img src="styles/legend/2024_30_2.png" /> от 600 000 до 960 000<br />\
    <img src="styles/legend/2024_30_3.png" /> 960 000 и более<br />' });
var format_2020_31 = new ol.format.GeoJSON();
var features_2020_31 = format_2020_31.readFeatures(json_2020_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2020_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2020_31.addFeatures(features_2020_31);
var lyr_2020_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2020_31, 
                style: style_2020_31,
                popuplayertitle: 'ВРП на душу населения 2020 год (рублей)',
                interactive: true,
    title: 'ВРП на душу населения 2020 год (рублей)<br />\
    <img src="styles/legend/2020_31_0.png" /> 290 000 и менее<br />\
    <img src="styles/legend/2020_31_1.png" /> от 290 000 до 410 000<br />\
    <img src="styles/legend/2020_31_2.png" /> от 410 000 до 555 000<br />\
    <img src="styles/legend/2020_31_3.png" /> 555 000 и более<br />' });
var format_2015_32 = new ol.format.GeoJSON();
var features_2015_32 = format_2015_32.readFeatures(json_2015_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2015_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2015_32.addFeatures(features_2015_32);
var lyr_2015_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2015_32, 
                style: style_2015_32,
                popuplayertitle: 'ВРП на душу населения 2015 год (рублей)',
                interactive: true,
    title: 'ВРП на душу населения 2015 год (рублей)<br />\
    <img src="styles/legend/2015_32_0.png" /> 255 000 и менее<br />\
    <img src="styles/legend/2015_32_1.png" /> от 255 000 до 345 000<br />\
    <img src="styles/legend/2015_32_2.png" /> от 345 000 до 405 000<br />\
    <img src="styles/legend/2015_32_3.png" /> 405 000 и более<br />' });
var format_2010_33 = new ol.format.GeoJSON();
var features_2010_33 = format_2010_33.readFeatures(json_2010_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2010_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2010_33.addFeatures(features_2010_33);
var lyr_2010_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2010_33, 
                style: style_2010_33,
                popuplayertitle: 'ВРП на душу населения 2010 год (рублей)',
                interactive: true,
    title: 'ВРП на душу населения 2010 год (рублей)<br />\
    <img src="styles/legend/2010_33_0.png" /> 120 000 и менее<br />\
    <img src="styles/legend/2010_33_1.png" /> от 150 000 до 200 000<br />\
    <img src="styles/legend/2010_33_2.png" /> от 196793 до 235931<br />\
    <img src="styles/legend/2010_33_3.png" /> 235 000 и более<br />' });
var format__34 = new ol.format.GeoJSON();
var features__34 = format__34.readFeatures(json__34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__34.addFeatures(features__34);
var lyr__34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__34, 
                style: style__34,
                popuplayertitle: 'Города ПФО',
                interactive: true,
                title: '<img src="styles/legend/_34.png" /> Города ПФО'
            });
var group_group1 = new ol.layer.Group({
                                layers: [lyr__1,lyr_2024_2,lyr_2020_3,lyr_2015_4,lyr_2010_5,lyr_2024_6,lyr_2020_7,lyr_2015_8,lyr_2010_9,lyr_2024_10,lyr_2020_11,lyr_2015_12,lyr_2010_13,lyr_2024_14,lyr_2020_15,lyr_2015_16,lyr_2010_17,lyr_2024_18,lyr_2020_19,lyr_2015_20,lyr_2010_21,lyr_2024_22,lyr_2020_23,lyr_2015_24,lyr_2010_25,lyr_2024_26,lyr_2020_27,lyr_2015_28,lyr_2010_29,lyr_2024_30,lyr_2020_31,lyr_2015_32,lyr_2010_33,lyr__34,],
                                fold: 'close',
                                title: 'group1'});

lyr_OSMStandard_0.setVisible(true);lyr__1.setVisible(true);lyr_2024_2.setVisible(true);lyr_2020_3.setVisible(true);lyr_2015_4.setVisible(true);lyr_2010_5.setVisible(true);lyr_2024_6.setVisible(true);lyr_2020_7.setVisible(true);lyr_2015_8.setVisible(true);lyr_2010_9.setVisible(true);lyr_2024_10.setVisible(true);lyr_2020_11.setVisible(true);lyr_2015_12.setVisible(true);lyr_2010_13.setVisible(true);lyr_2024_14.setVisible(true);lyr_2020_15.setVisible(true);lyr_2015_16.setVisible(true);lyr_2010_17.setVisible(true);lyr_2024_18.setVisible(true);lyr_2020_19.setVisible(true);lyr_2015_20.setVisible(true);lyr_2010_21.setVisible(true);lyr_2024_22.setVisible(true);lyr_2020_23.setVisible(true);lyr_2015_24.setVisible(true);lyr_2010_25.setVisible(true);lyr_2024_26.setVisible(true);lyr_2020_27.setVisible(true);lyr_2015_28.setVisible(true);lyr_2010_29.setVisible(true);lyr_2024_30.setVisible(true);lyr_2020_31.setVisible(true);lyr_2015_32.setVisible(true);lyr_2010_33.setVisible(true);lyr__34.setVisible(true);
var layersList = [lyr_OSMStandard_0,group_group1];
lyr__1.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ID': 'ID', 'L_CODE': 'L_CODE', 'COUNT': 'COUNT', 'ADM': 'ADM', 'FDR': 'FDR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'европ': 'европ', 'евро_1': 'евро_1', 'евро_2': 'евро_2', 'евро_3': 'евро_3', 'евро_4': 'евро_4', 'евро_5': 'евро_5', 'евро_6': 'евро_6', 'евро_7': 'евро_7', 'евро_8': 'евро_8', 'евро_9': 'евро_9', 'евро10': 'евро10', 'евро11': 'евро11', 'евро12': 'евро12', 'евро13': 'евро13', 'евро14': 'евро14', 'евро15': 'евро15', 'евро16': 'евро16', '9 карта-9 карта_8.3 показатель': '9 карта-9 карта_8.3 показатель', '9 карта-9 карта_3.1 показатель': '9 карта-9 карта_3.1 показатель', '9 карта-9 карта_ВРП на душу': '9 карта-9 карта_ВРП на душу', '9 карта-9 карта_безработица': '9 карта-9 карта_безработица', 'карты2-9 карта 2_Интегральный индекс': 'карты2-9 карта 2_Интегральный индекс', });
lyr_2024_2.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ID': 'ID', 'L_CODE': 'L_CODE', 'COUNT': 'COUNT', 'ADM': 'ADM', 'FDR': 'FDR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'европ': 'европ', 'евро_1': 'евро_1', 'евро_2': 'евро_2', 'евро_3': 'евро_3', 'евро_4': 'евро_4', 'евро_5': 'евро_5', 'евро_6': 'евро_6', 'евро_7': 'евро_7', 'евро_8': 'евро_8', 'евро_9': 'евро_9', 'евро10': 'евро10', 'евро11': 'евро11', 'евро12': 'евро12', 'евро13': 'евро13', 'евро14': 'евро14', 'евро15': 'евро15', 'евро16': 'евро16', '8 карта-8 карта_Field2': '8 карта-8 карта_Field2', '8 карта-8 карта_Field3': '8 карта-8 карта_Field3', '8 карта-8 карта_Field4': '8 карта-8 карта_Field4', '8 карта-8 карта_Field5': '8 карта-8 карта_Field5', });
lyr_2020_3.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ID': 'ID', 'L_CODE': 'L_CODE', 'COUNT': 'COUNT', 'ADM': 'ADM', 'FDR': 'FDR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'европ': 'европ', 'евро_1': 'евро_1', 'евро_2': 'евро_2', 'евро_3': 'евро_3', 'евро_4': 'евро_4', 'евро_5': 'евро_5', 'евро_6': 'евро_6', 'евро_7': 'евро_7', 'евро_8': 'евро_8', 'евро_9': 'евро_9', 'евро10': 'евро10', 'евро11': 'евро11', 'евро12': 'евро12', 'евро13': 'евро13', 'евро14': 'евро14', 'евро15': 'евро15', 'евро16': 'евро16', '8 карта-8 карта_Field2': '8 карта-8 карта_Field2', '8 карта-8 карта_Field3': '8 карта-8 карта_Field3', '8 карта-8 карта_Field4': '8 карта-8 карта_Field4', '8 карта-8 карта_Field5': '8 карта-8 карта_Field5', });
lyr_2015_4.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ID': 'ID', 'L_CODE': 'L_CODE', 'COUNT': 'COUNT', 'ADM': 'ADM', 'FDR': 'FDR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'европ': 'европ', 'евро_1': 'евро_1', 'евро_2': 'евро_2', 'евро_3': 'евро_3', 'евро_4': 'евро_4', 'евро_5': 'евро_5', 'евро_6': 'евро_6', 'евро_7': 'евро_7', 'евро_8': 'евро_8', 'евро_9': 'евро_9', 'евро10': 'евро10', 'евро11': 'евро11', 'евро12': 'евро12', 'евро13': 'евро13', 'евро14': 'евро14', 'евро15': 'евро15', 'евро16': 'евро16', '8 карта-8 карта_Field2': '8 карта-8 карта_Field2', '8 карта-8 карта_Field3': '8 карта-8 карта_Field3', '8 карта-8 карта_Field4': '8 карта-8 карта_Field4', '8 карта-8 карта_Field5': '8 карта-8 карта_Field5', });
lyr_2010_5.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ID': 'ID', 'L_CODE': 'L_CODE', 'COUNT': 'COUNT', 'ADM': 'ADM', 'FDR': 'FDR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'европ': 'европ', 'евро_1': 'евро_1', 'евро_2': 'евро_2', 'евро_3': 'евро_3', 'евро_4': 'евро_4', 'евро_5': 'евро_5', 'евро_6': 'евро_6', 'евро_7': 'евро_7', 'евро_8': 'евро_8', 'евро_9': 'евро_9', 'евро10': 'евро10', 'евро11': 'евро11', 'евро12': 'евро12', 'евро13': 'евро13', 'евро14': 'евро14', 'евро15': 'евро15', 'евро16': 'евро16', '8 карта-8 карта_Field2': '8 карта-8 карта_Field2', '8 карта-8 карта_Field3': '8 карта-8 карта_Field3', '8 карта-8 карта_Field4': '8 карта-8 карта_Field4', '8 карта-8 карта_Field5': '8 карта-8 карта_Field5', });
lyr_2024_6.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ID': 'ID', 'L_CODE': 'L_CODE', 'COUNT': 'COUNT', 'ADM': 'ADM', 'FDR': 'FDR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'европ': 'европ', 'евро_1': 'евро_1', 'евро_2': 'евро_2', 'евро_3': 'евро_3', 'евро_4': 'евро_4', 'евро_5': 'евро_5', 'евро_6': 'евро_6', 'евро_7': 'евро_7', 'евро_8': 'евро_8', 'евро_9': 'евро_9', 'евро10': 'евро10', 'евро11': 'евро11', 'евро12': 'евро12', 'евро13': 'евро13', 'евро14': 'евро14', 'евро15': 'евро15', 'евро16': 'евро16', '1 карта-1 карта_Field2': '1 карта-1 карта_Field2', '1 карта-1 карта_Field3': '1 карта-1 карта_Field3', '1 карта-1 карта_Field4': '1 карта-1 карта_Field4', '1 карта-1 карта_Field5': '1 карта-1 карта_Field5', });
lyr_2020_7.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ID': 'ID', 'L_CODE': 'L_CODE', 'COUNT': 'COUNT', 'ADM': 'ADM', 'FDR': 'FDR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'европ': 'европ', 'евро_1': 'евро_1', 'евро_2': 'евро_2', 'евро_3': 'евро_3', 'евро_4': 'евро_4', 'евро_5': 'евро_5', 'евро_6': 'евро_6', 'евро_7': 'евро_7', 'евро_8': 'евро_8', 'евро_9': 'евро_9', 'евро10': 'евро10', 'евро11': 'евро11', 'евро12': 'евро12', 'евро13': 'евро13', 'евро14': 'евро14', 'евро15': 'евро15', 'евро16': 'евро16', '1 карта-1 карта_Field2': '1 карта-1 карта_Field2', '1 карта-1 карта_Field3': '1 карта-1 карта_Field3', '1 карта-1 карта_Field4': '1 карта-1 карта_Field4', '1 карта-1 карта_Field5': '1 карта-1 карта_Field5', });
lyr_2015_8.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ID': 'ID', 'L_CODE': 'L_CODE', 'COUNT': 'COUNT', 'ADM': 'ADM', 'FDR': 'FDR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'европ': 'европ', 'евро_1': 'евро_1', 'евро_2': 'евро_2', 'евро_3': 'евро_3', 'евро_4': 'евро_4', 'евро_5': 'евро_5', 'евро_6': 'евро_6', 'евро_7': 'евро_7', 'евро_8': 'евро_8', 'евро_9': 'евро_9', 'евро10': 'евро10', 'евро11': 'евро11', 'евро12': 'евро12', 'евро13': 'евро13', 'евро14': 'евро14', 'евро15': 'евро15', 'евро16': 'евро16', '1 карта-1 карта_Field2': '1 карта-1 карта_Field2', '1 карта-1 карта_Field3': '1 карта-1 карта_Field3', '1 карта-1 карта_Field4': '1 карта-1 карта_Field4', '1 карта-1 карта_Field5': '1 карта-1 карта_Field5', });
lyr_2010_9.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ID': 'ID', 'L_CODE': 'L_CODE', 'COUNT': 'COUNT', 'ADM': 'ADM', 'FDR': 'FDR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'европ': 'европ', 'евро_1': 'евро_1', 'евро_2': 'евро_2', 'евро_3': 'евро_3', 'евро_4': 'евро_4', 'евро_5': 'евро_5', 'евро_6': 'евро_6', 'евро_7': 'евро_7', 'евро_8': 'евро_8', 'евро_9': 'евро_9', 'евро10': 'евро10', 'евро11': 'евро11', 'евро12': 'евро12', 'евро13': 'евро13', 'евро14': 'евро14', 'евро15': 'евро15', 'евро16': 'евро16', '1 карта-1 карта_Field2': '1 карта-1 карта_Field2', '1 карта-1 карта_Field3': '1 карта-1 карта_Field3', '1 карта-1 карта_Field4': '1 карта-1 карта_Field4', '1 карта-1 карта_Field5': '1 карта-1 карта_Field5', });
lyr_2024_10.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ID': 'ID', 'L_CODE': 'L_CODE', 'COUNT': 'COUNT', 'ADM': 'ADM', 'FDR': 'FDR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'европ': 'европ', 'евро_1': 'евро_1', 'евро_2': 'евро_2', 'евро_3': 'евро_3', 'евро_4': 'евро_4', 'евро_5': 'евро_5', 'евро_6': 'евро_6', 'евро_7': 'евро_7', 'евро_8': 'евро_8', 'евро_9': 'евро_9', 'евро10': 'евро10', 'евро11': 'евро11', 'евро12': 'евро12', 'евро13': 'евро13', 'евро14': 'евро14', 'евро15': 'евро15', 'евро16': 'евро16', '6 карта-6 карта_Field2': '6 карта-6 карта_Field2', '6 карта-6 карта_Field3': '6 карта-6 карта_Field3', '6 карта-6 карта_Field4': '6 карта-6 карта_Field4', '6 карта-6 карта_Field5': '6 карта-6 карта_Field5', });
lyr_2020_11.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ID': 'ID', 'L_CODE': 'L_CODE', 'COUNT': 'COUNT', 'ADM': 'ADM', 'FDR': 'FDR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'европ': 'европ', 'евро_1': 'евро_1', 'евро_2': 'евро_2', 'евро_3': 'евро_3', 'евро_4': 'евро_4', 'евро_5': 'евро_5', 'евро_6': 'евро_6', 'евро_7': 'евро_7', 'евро_8': 'евро_8', 'евро_9': 'евро_9', 'евро10': 'евро10', 'евро11': 'евро11', 'евро12': 'евро12', 'евро13': 'евро13', 'евро14': 'евро14', 'евро15': 'евро15', 'евро16': 'евро16', '6 карта-6 карта_Field2': '6 карта-6 карта_Field2', '6 карта-6 карта_Field3': '6 карта-6 карта_Field3', '6 карта-6 карта_Field4': '6 карта-6 карта_Field4', '6 карта-6 карта_Field5': '6 карта-6 карта_Field5', });
lyr_2015_12.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ID': 'ID', 'L_CODE': 'L_CODE', 'COUNT': 'COUNT', 'ADM': 'ADM', 'FDR': 'FDR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'европ': 'европ', 'евро_1': 'евро_1', 'евро_2': 'евро_2', 'евро_3': 'евро_3', 'евро_4': 'евро_4', 'евро_5': 'евро_5', 'евро_6': 'евро_6', 'евро_7': 'евро_7', 'евро_8': 'евро_8', 'евро_9': 'евро_9', 'евро10': 'евро10', 'евро11': 'евро11', 'евро12': 'евро12', 'евро13': 'евро13', 'евро14': 'евро14', 'евро15': 'евро15', 'евро16': 'евро16', '6 карта-6 карта_Field2': '6 карта-6 карта_Field2', '6 карта-6 карта_Field3': '6 карта-6 карта_Field3', '6 карта-6 карта_Field4': '6 карта-6 карта_Field4', '6 карта-6 карта_Field5': '6 карта-6 карта_Field5', });
lyr_2010_13.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ID': 'ID', 'L_CODE': 'L_CODE', 'COUNT': 'COUNT', 'ADM': 'ADM', 'FDR': 'FDR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'европ': 'европ', 'евро_1': 'евро_1', 'евро_2': 'евро_2', 'евро_3': 'евро_3', 'евро_4': 'евро_4', 'евро_5': 'евро_5', 'евро_6': 'евро_6', 'евро_7': 'евро_7', 'евро_8': 'евро_8', 'евро_9': 'евро_9', 'евро10': 'евро10', 'евро11': 'евро11', 'евро12': 'евро12', 'евро13': 'евро13', 'евро14': 'евро14', 'евро15': 'евро15', 'евро16': 'евро16', '6 карта-6 карта_Field2': '6 карта-6 карта_Field2', '6 карта-6 карта_Field3': '6 карта-6 карта_Field3', '6 карта-6 карта_Field4': '6 карта-6 карта_Field4', '6 карта-6 карта_Field5': '6 карта-6 карта_Field5', });
lyr_2024_14.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ID': 'ID', 'L_CODE': 'L_CODE', 'COUNT': 'COUNT', 'ADM': 'ADM', 'FDR': 'FDR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'европ': 'европ', 'евро_1': 'евро_1', 'евро_2': 'евро_2', 'евро_3': 'евро_3', 'евро_4': 'евро_4', 'евро_5': 'евро_5', 'евро_6': 'евро_6', 'евро_7': 'евро_7', 'евро_8': 'евро_8', 'евро_9': 'евро_9', 'евро10': 'евро10', 'евро11': 'евро11', 'евро12': 'евро12', 'евро13': 'евро13', 'евро14': 'евро14', 'евро15': 'евро15', 'евро16': 'евро16', '5 карта-5 карта_Field2': '5 карта-5 карта_Field2', '5 карта-5 карта_Field3': '5 карта-5 карта_Field3', '5 карта-5 карта_Field4': '5 карта-5 карта_Field4', '5 карта-5 карта_Field5': '5 карта-5 карта_Field5', });
lyr_2020_15.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ID': 'ID', 'L_CODE': 'L_CODE', 'COUNT': 'COUNT', 'ADM': 'ADM', 'FDR': 'FDR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'европ': 'европ', 'евро_1': 'евро_1', 'евро_2': 'евро_2', 'евро_3': 'евро_3', 'евро_4': 'евро_4', 'евро_5': 'евро_5', 'евро_6': 'евро_6', 'евро_7': 'евро_7', 'евро_8': 'евро_8', 'евро_9': 'евро_9', 'евро10': 'евро10', 'евро11': 'евро11', 'евро12': 'евро12', 'евро13': 'евро13', 'евро14': 'евро14', 'евро15': 'евро15', 'евро16': 'евро16', '5 карта-5 карта_Field2': '5 карта-5 карта_Field2', '5 карта-5 карта_Field3': '5 карта-5 карта_Field3', '5 карта-5 карта_Field4': '5 карта-5 карта_Field4', '5 карта-5 карта_Field5': '5 карта-5 карта_Field5', });
lyr_2015_16.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ID': 'ID', 'L_CODE': 'L_CODE', 'COUNT': 'COUNT', 'ADM': 'ADM', 'FDR': 'FDR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'европ': 'европ', 'евро_1': 'евро_1', 'евро_2': 'евро_2', 'евро_3': 'евро_3', 'евро_4': 'евро_4', 'евро_5': 'евро_5', 'евро_6': 'евро_6', 'евро_7': 'евро_7', 'евро_8': 'евро_8', 'евро_9': 'евро_9', 'евро10': 'евро10', 'евро11': 'евро11', 'евро12': 'евро12', 'евро13': 'евро13', 'евро14': 'евро14', 'евро15': 'евро15', 'евро16': 'евро16', '5 карта-5 карта_Field2': '5 карта-5 карта_Field2', '5 карта-5 карта_Field3': '5 карта-5 карта_Field3', '5 карта-5 карта_Field4': '5 карта-5 карта_Field4', '5 карта-5 карта_Field5': '5 карта-5 карта_Field5', });
lyr_2010_17.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ID': 'ID', 'L_CODE': 'L_CODE', 'COUNT': 'COUNT', 'ADM': 'ADM', 'FDR': 'FDR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'европ': 'европ', 'евро_1': 'евро_1', 'евро_2': 'евро_2', 'евро_3': 'евро_3', 'евро_4': 'евро_4', 'евро_5': 'евро_5', 'евро_6': 'евро_6', 'евро_7': 'евро_7', 'евро_8': 'евро_8', 'евро_9': 'евро_9', 'евро10': 'евро10', 'евро11': 'евро11', 'евро12': 'евро12', 'евро13': 'евро13', 'евро14': 'евро14', 'евро15': 'евро15', 'евро16': 'евро16', '5 карта-5 карта_Field2': '5 карта-5 карта_Field2', '5 карта-5 карта_Field3': '5 карта-5 карта_Field3', '5 карта-5 карта_Field4': '5 карта-5 карта_Field4', '5 карта-5 карта_Field5': '5 карта-5 карта_Field5', });
lyr_2024_18.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ID': 'ID', 'L_CODE': 'L_CODE', 'COUNT': 'COUNT', 'ADM': 'ADM', 'FDR': 'FDR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'европ': 'европ', 'евро_1': 'евро_1', 'евро_2': 'евро_2', 'евро_3': 'евро_3', 'евро_4': 'евро_4', 'евро_5': 'евро_5', 'евро_6': 'евро_6', 'евро_7': 'евро_7', 'евро_8': 'евро_8', 'евро_9': 'евро_9', 'евро10': 'евро10', 'евро11': 'евро11', 'евро12': 'евро12', 'евро13': 'евро13', 'евро14': 'евро14', 'евро15': 'евро15', 'евро16': 'евро16', '4 карта-4 карта_Field2': '4 карта-4 карта_Field2', '4 карта-4 карта_Field3': '4 карта-4 карта_Field3', '4 карта-4 карта_Field4': '4 карта-4 карта_Field4', '4 карта-4 карта_Field5': '4 карта-4 карта_Field5', });
lyr_2020_19.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ID': 'ID', 'L_CODE': 'L_CODE', 'COUNT': 'COUNT', 'ADM': 'ADM', 'FDR': 'FDR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'европ': 'европ', 'евро_1': 'евро_1', 'евро_2': 'евро_2', 'евро_3': 'евро_3', 'евро_4': 'евро_4', 'евро_5': 'евро_5', 'евро_6': 'евро_6', 'евро_7': 'евро_7', 'евро_8': 'евро_8', 'евро_9': 'евро_9', 'евро10': 'евро10', 'евро11': 'евро11', 'евро12': 'евро12', 'евро13': 'евро13', 'евро14': 'евро14', 'евро15': 'евро15', 'евро16': 'евро16', '4 карта-4 карта_Field2': '4 карта-4 карта_Field2', '4 карта-4 карта_Field3': '4 карта-4 карта_Field3', '4 карта-4 карта_Field4': '4 карта-4 карта_Field4', '4 карта-4 карта_Field5': '4 карта-4 карта_Field5', });
lyr_2015_20.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ID': 'ID', 'L_CODE': 'L_CODE', 'COUNT': 'COUNT', 'ADM': 'ADM', 'FDR': 'FDR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'европ': 'европ', 'евро_1': 'евро_1', 'евро_2': 'евро_2', 'евро_3': 'евро_3', 'евро_4': 'евро_4', 'евро_5': 'евро_5', 'евро_6': 'евро_6', 'евро_7': 'евро_7', 'евро_8': 'евро_8', 'евро_9': 'евро_9', 'евро10': 'евро10', 'евро11': 'евро11', 'евро12': 'евро12', 'евро13': 'евро13', 'евро14': 'евро14', 'евро15': 'евро15', 'евро16': 'евро16', '4 карта-4 карта_Field2': '4 карта-4 карта_Field2', '4 карта-4 карта_Field3': '4 карта-4 карта_Field3', '4 карта-4 карта_Field4': '4 карта-4 карта_Field4', '4 карта-4 карта_Field5': '4 карта-4 карта_Field5', });
lyr_2010_21.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ID': 'ID', 'L_CODE': 'L_CODE', 'COUNT': 'COUNT', 'ADM': 'ADM', 'FDR': 'FDR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'европ': 'европ', 'евро_1': 'евро_1', 'евро_2': 'евро_2', 'евро_3': 'евро_3', 'евро_4': 'евро_4', 'евро_5': 'евро_5', 'евро_6': 'евро_6', 'евро_7': 'евро_7', 'евро_8': 'евро_8', 'евро_9': 'евро_9', 'евро10': 'евро10', 'евро11': 'евро11', 'евро12': 'евро12', 'евро13': 'евро13', 'евро14': 'евро14', 'евро15': 'евро15', 'евро16': 'евро16', '4 карта-4 карта_Field2': '4 карта-4 карта_Field2', '4 карта-4 карта_Field3': '4 карта-4 карта_Field3', '4 карта-4 карта_Field4': '4 карта-4 карта_Field4', '4 карта-4 карта_Field5': '4 карта-4 карта_Field5', });
lyr_2024_22.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ID': 'ID', 'L_CODE': 'L_CODE', 'COUNT': 'COUNT', 'ADM': 'ADM', 'FDR': 'FDR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'европ': 'европ', 'евро_1': 'евро_1', 'евро_2': 'евро_2', 'евро_3': 'евро_3', 'евро_4': 'евро_4', 'евро_5': 'евро_5', 'евро_6': 'евро_6', 'евро_7': 'евро_7', 'евро_8': 'евро_8', 'евро_9': 'евро_9', 'евро10': 'евро10', 'евро11': 'евро11', 'евро12': 'евро12', 'евро13': 'евро13', 'евро14': 'евро14', 'евро15': 'евро15', 'евро16': 'евро16', '3 карта-3 карта_Field2': '3 карта-3 карта_Field2', '3 карта-3 карта_Field3': '3 карта-3 карта_Field3', '3 карта-3 карта_Field4': '3 карта-3 карта_Field4', '3 карта-3 карта_Field5': '3 карта-3 карта_Field5', });
lyr_2020_23.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ID': 'ID', 'L_CODE': 'L_CODE', 'COUNT': 'COUNT', 'ADM': 'ADM', 'FDR': 'FDR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'европ': 'европ', 'евро_1': 'евро_1', 'евро_2': 'евро_2', 'евро_3': 'евро_3', 'евро_4': 'евро_4', 'евро_5': 'евро_5', 'евро_6': 'евро_6', 'евро_7': 'евро_7', 'евро_8': 'евро_8', 'евро_9': 'евро_9', 'евро10': 'евро10', 'евро11': 'евро11', 'евро12': 'евро12', 'евро13': 'евро13', 'евро14': 'евро14', 'евро15': 'евро15', 'евро16': 'евро16', '3 карта-3 карта_Field2': '3 карта-3 карта_Field2', '3 карта-3 карта_Field3': '3 карта-3 карта_Field3', '3 карта-3 карта_Field4': '3 карта-3 карта_Field4', '3 карта-3 карта_Field5': '3 карта-3 карта_Field5', });
lyr_2015_24.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ID': 'ID', 'L_CODE': 'L_CODE', 'COUNT': 'COUNT', 'ADM': 'ADM', 'FDR': 'FDR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'европ': 'европ', 'евро_1': 'евро_1', 'евро_2': 'евро_2', 'евро_3': 'евро_3', 'евро_4': 'евро_4', 'евро_5': 'евро_5', 'евро_6': 'евро_6', 'евро_7': 'евро_7', 'евро_8': 'евро_8', 'евро_9': 'евро_9', 'евро10': 'евро10', 'евро11': 'евро11', 'евро12': 'евро12', 'евро13': 'евро13', 'евро14': 'евро14', 'евро15': 'евро15', 'евро16': 'евро16', '3 карта-3 карта_Field2': '3 карта-3 карта_Field2', '3 карта-3 карта_Field3': '3 карта-3 карта_Field3', '3 карта-3 карта_Field4': '3 карта-3 карта_Field4', '3 карта-3 карта_Field5': '3 карта-3 карта_Field5', });
lyr_2010_25.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ID': 'ID', 'L_CODE': 'L_CODE', 'COUNT': 'COUNT', 'ADM': 'ADM', 'FDR': 'FDR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'европ': 'европ', 'евро_1': 'евро_1', 'евро_2': 'евро_2', 'евро_3': 'евро_3', 'евро_4': 'евро_4', 'евро_5': 'евро_5', 'евро_6': 'евро_6', 'евро_7': 'евро_7', 'евро_8': 'евро_8', 'евро_9': 'евро_9', 'евро10': 'евро10', 'евро11': 'евро11', 'евро12': 'евро12', 'евро13': 'евро13', 'евро14': 'евро14', 'евро15': 'евро15', 'евро16': 'евро16', '3 карта-3 карта_Field2': '3 карта-3 карта_Field2', '3 карта-3 карта_Field3': '3 карта-3 карта_Field3', '3 карта-3 карта_Field4': '3 карта-3 карта_Field4', '3 карта-3 карта_Field5': '3 карта-3 карта_Field5', });
lyr_2024_26.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ID': 'ID', 'L_CODE': 'L_CODE', 'COUNT': 'COUNT', 'ADM': 'ADM', 'FDR': 'FDR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'европ': 'европ', 'евро_1': 'евро_1', 'евро_2': 'евро_2', 'евро_3': 'евро_3', 'евро_4': 'евро_4', 'евро_5': 'евро_5', 'евро_6': 'евро_6', 'евро_7': 'евро_7', 'евро_8': 'евро_8', 'евро_9': 'евро_9', 'евро10': 'евро10', 'евро11': 'евро11', 'евро12': 'евро12', 'евро13': 'евро13', 'евро14': 'евро14', 'евро15': 'евро15', 'евро16': 'евро16', '2 карта-2 карта_Field2': '2 карта-2 карта_Field2', '2 карта-2 карта_Field3': '2 карта-2 карта_Field3', '2 карта-2 карта_Field4': '2 карта-2 карта_Field4', '2 карта-2 карта_Field5': '2 карта-2 карта_Field5', });
lyr_2020_27.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ID': 'ID', 'L_CODE': 'L_CODE', 'COUNT': 'COUNT', 'ADM': 'ADM', 'FDR': 'FDR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'европ': 'европ', 'евро_1': 'евро_1', 'евро_2': 'евро_2', 'евро_3': 'евро_3', 'евро_4': 'евро_4', 'евро_5': 'евро_5', 'евро_6': 'евро_6', 'евро_7': 'евро_7', 'евро_8': 'евро_8', 'евро_9': 'евро_9', 'евро10': 'евро10', 'евро11': 'евро11', 'евро12': 'евро12', 'евро13': 'евро13', 'евро14': 'евро14', 'евро15': 'евро15', 'евро16': 'евро16', '2 карта-2 карта_Field2': '2 карта-2 карта_Field2', '2 карта-2 карта_Field3': '2 карта-2 карта_Field3', '2 карта-2 карта_Field4': '2 карта-2 карта_Field4', '2 карта-2 карта_Field5': '2 карта-2 карта_Field5', });
lyr_2015_28.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ID': 'ID', 'L_CODE': 'L_CODE', 'COUNT': 'COUNT', 'ADM': 'ADM', 'FDR': 'FDR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'европ': 'европ', 'евро_1': 'евро_1', 'евро_2': 'евро_2', 'евро_3': 'евро_3', 'евро_4': 'евро_4', 'евро_5': 'евро_5', 'евро_6': 'евро_6', 'евро_7': 'евро_7', 'евро_8': 'евро_8', 'евро_9': 'евро_9', 'евро10': 'евро10', 'евро11': 'евро11', 'евро12': 'евро12', 'евро13': 'евро13', 'евро14': 'евро14', 'евро15': 'евро15', 'евро16': 'евро16', '2 карта-2 карта_Field2': '2 карта-2 карта_Field2', '2 карта-2 карта_Field3': '2 карта-2 карта_Field3', '2 карта-2 карта_Field4': '2 карта-2 карта_Field4', '2 карта-2 карта_Field5': '2 карта-2 карта_Field5', });
lyr_2010_29.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ID': 'ID', 'L_CODE': 'L_CODE', 'COUNT': 'COUNT', 'ADM': 'ADM', 'FDR': 'FDR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'европ': 'европ', 'евро_1': 'евро_1', 'евро_2': 'евро_2', 'евро_3': 'евро_3', 'евро_4': 'евро_4', 'евро_5': 'евро_5', 'евро_6': 'евро_6', 'евро_7': 'евро_7', 'евро_8': 'евро_8', 'евро_9': 'евро_9', 'евро10': 'евро10', 'евро11': 'евро11', 'евро12': 'евро12', 'евро13': 'евро13', 'евро14': 'евро14', 'евро15': 'евро15', 'евро16': 'евро16', '2 карта-2 карта_Field2': '2 карта-2 карта_Field2', '2 карта-2 карта_Field3': '2 карта-2 карта_Field3', '2 карта-2 карта_Field4': '2 карта-2 карта_Field4', '2 карта-2 карта_Field5': '2 карта-2 карта_Field5', });
lyr_2024_30.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ID': 'ID', 'L_CODE': 'L_CODE', 'COUNT': 'COUNT', 'ADM': 'ADM', 'FDR': 'FDR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'европ': 'европ', 'евро_1': 'евро_1', 'евро_2': 'евро_2', 'евро_3': 'евро_3', 'евро_4': 'евро_4', 'евро_5': 'евро_5', 'евро_6': 'евро_6', 'евро_7': 'евро_7', 'евро_8': 'евро_8', 'евро_9': 'евро_9', 'евро10': 'евро10', 'евро11': 'евро11', 'евро12': 'евро12', 'евро13': 'евро13', 'евро14': 'евро14', 'евро15': 'евро15', 'евро16': 'евро16', '1 карта-1 карта_Field2': '1 карта-1 карта_Field2', '1 карта-1 карта_Field3': '1 карта-1 карта_Field3', '1 карта-1 карта_Field4': '1 карта-1 карта_Field4', '1 карта-1 карта_Field5': '1 карта-1 карта_Field5', });
lyr_2020_31.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ID': 'ID', 'L_CODE': 'L_CODE', 'COUNT': 'COUNT', 'ADM': 'ADM', 'FDR': 'FDR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'европ': 'европ', 'евро_1': 'евро_1', 'евро_2': 'евро_2', 'евро_3': 'евро_3', 'евро_4': 'евро_4', 'евро_5': 'евро_5', 'евро_6': 'евро_6', 'евро_7': 'евро_7', 'евро_8': 'евро_8', 'евро_9': 'евро_9', 'евро10': 'евро10', 'евро11': 'евро11', 'евро12': 'евро12', 'евро13': 'евро13', 'евро14': 'евро14', 'евро15': 'евро15', 'евро16': 'евро16', '1 карта-1 карта_Field2': '1 карта-1 карта_Field2', '1 карта-1 карта_Field3': '1 карта-1 карта_Field3', '1 карта-1 карта_Field4': '1 карта-1 карта_Field4', '1 карта-1 карта_Field5': '1 карта-1 карта_Field5', });
lyr_2015_32.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ID': 'ID', 'L_CODE': 'L_CODE', 'COUNT': 'COUNT', 'ADM': 'ADM', 'FDR': 'FDR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'европ': 'европ', 'евро_1': 'евро_1', 'евро_2': 'евро_2', 'евро_3': 'евро_3', 'евро_4': 'евро_4', 'евро_5': 'евро_5', 'евро_6': 'евро_6', 'евро_7': 'евро_7', 'евро_8': 'евро_8', 'евро_9': 'евро_9', 'евро10': 'евро10', 'евро11': 'евро11', 'евро12': 'евро12', 'евро13': 'евро13', 'евро14': 'евро14', 'евро15': 'евро15', 'евро16': 'евро16', '1 карта-1 карта_Field2': '1 карта-1 карта_Field2', '1 карта-1 карта_Field3': '1 карта-1 карта_Field3', '1 карта-1 карта_Field4': '1 карта-1 карта_Field4', '1 карта-1 карта_Field5': '1 карта-1 карта_Field5', });
lyr_2010_33.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ID': 'ID', 'L_CODE': 'L_CODE', 'COUNT': 'COUNT', 'ADM': 'ADM', 'FDR': 'FDR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'европ': 'европ', 'евро_1': 'евро_1', 'евро_2': 'евро_2', 'евро_3': 'евро_3', 'евро_4': 'евро_4', 'евро_5': 'евро_5', 'евро_6': 'евро_6', 'евро_7': 'евро_7', 'евро_8': 'евро_8', 'евро_9': 'евро_9', 'евро10': 'евро10', 'евро11': 'евро11', 'евро12': 'евро12', 'евро13': 'евро13', 'евро14': 'евро14', 'евро15': 'евро15', 'евро16': 'евро16', '1 карта-1 карта_Field2': '1 карта-1 карта_Field2', '1 карта-1 карта_Field3': '1 карта-1 карта_Field3', '1 карта-1 карта_Field4': '1 карта-1 карта_Field4', '1 карта-1 карта_Field5': '1 карта-1 карта_Field5', });
lyr__34.set('fieldAliases', {'id': 'id', 'назв': 'назв', });
lyr__1.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'ID': 'TextEdit', 'L_CODE': 'TextEdit', 'COUNT': 'TextEdit', 'ADM': 'TextEdit', 'FDR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'европ': 'TextEdit', 'евро_1': 'TextEdit', 'евро_2': 'TextEdit', 'евро_3': 'TextEdit', 'евро_4': 'TextEdit', 'евро_5': 'TextEdit', 'евро_6': 'TextEdit', 'евро_7': 'TextEdit', 'евро_8': 'TextEdit', 'евро_9': 'TextEdit', 'евро10': 'TextEdit', 'евро11': 'TextEdit', 'евро12': 'TextEdit', 'евро13': 'TextEdit', 'евро14': 'TextEdit', 'евро15': 'TextEdit', 'евро16': 'TextEdit', '9 карта-9 карта_8.3 показатель': 'TextEdit', '9 карта-9 карта_3.1 показатель': 'TextEdit', '9 карта-9 карта_ВРП на душу': 'TextEdit', '9 карта-9 карта_безработица': 'TextEdit', 'карты2-9 карта 2_Интегральный индекс': 'TextEdit', });
lyr_2024_2.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'ID': 'TextEdit', 'L_CODE': 'TextEdit', 'COUNT': 'TextEdit', 'ADM': 'TextEdit', 'FDR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'европ': 'TextEdit', 'евро_1': 'TextEdit', 'евро_2': 'TextEdit', 'евро_3': 'TextEdit', 'евро_4': 'TextEdit', 'евро_5': 'TextEdit', 'евро_6': 'TextEdit', 'евро_7': 'TextEdit', 'евро_8': 'TextEdit', 'евро_9': 'TextEdit', 'евро10': 'TextEdit', 'евро11': 'TextEdit', 'евро12': 'TextEdit', 'евро13': 'TextEdit', 'евро14': 'TextEdit', 'евро15': 'TextEdit', 'евро16': 'TextEdit', '8 карта-8 карта_Field2': 'Range', '8 карта-8 карта_Field3': 'Range', '8 карта-8 карта_Field4': 'Range', '8 карта-8 карта_Field5': 'Range', });
lyr_2020_3.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'ID': 'TextEdit', 'L_CODE': 'TextEdit', 'COUNT': 'TextEdit', 'ADM': 'TextEdit', 'FDR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'европ': 'TextEdit', 'евро_1': 'TextEdit', 'евро_2': 'TextEdit', 'евро_3': 'TextEdit', 'евро_4': 'TextEdit', 'евро_5': 'TextEdit', 'евро_6': 'TextEdit', 'евро_7': 'TextEdit', 'евро_8': 'TextEdit', 'евро_9': 'TextEdit', 'евро10': 'TextEdit', 'евро11': 'TextEdit', 'евро12': 'TextEdit', 'евро13': 'TextEdit', 'евро14': 'TextEdit', 'евро15': 'TextEdit', 'евро16': 'TextEdit', '8 карта-8 карта_Field2': 'Range', '8 карта-8 карта_Field3': 'Range', '8 карта-8 карта_Field4': 'Range', '8 карта-8 карта_Field5': 'Range', });
lyr_2015_4.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'ID': 'TextEdit', 'L_CODE': 'TextEdit', 'COUNT': 'TextEdit', 'ADM': 'TextEdit', 'FDR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'европ': 'TextEdit', 'евро_1': 'TextEdit', 'евро_2': 'TextEdit', 'евро_3': 'TextEdit', 'евро_4': 'TextEdit', 'евро_5': 'TextEdit', 'евро_6': 'TextEdit', 'евро_7': 'TextEdit', 'евро_8': 'TextEdit', 'евро_9': 'TextEdit', 'евро10': 'TextEdit', 'евро11': 'TextEdit', 'евро12': 'TextEdit', 'евро13': 'TextEdit', 'евро14': 'TextEdit', 'евро15': 'TextEdit', 'евро16': 'TextEdit', '8 карта-8 карта_Field2': 'Range', '8 карта-8 карта_Field3': 'Range', '8 карта-8 карта_Field4': 'Range', '8 карта-8 карта_Field5': 'Range', });
lyr_2010_5.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'ID': 'TextEdit', 'L_CODE': 'TextEdit', 'COUNT': 'TextEdit', 'ADM': 'TextEdit', 'FDR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'европ': 'TextEdit', 'евро_1': 'TextEdit', 'евро_2': 'TextEdit', 'евро_3': 'TextEdit', 'евро_4': 'TextEdit', 'евро_5': 'TextEdit', 'евро_6': 'TextEdit', 'евро_7': 'TextEdit', 'евро_8': 'TextEdit', 'евро_9': 'TextEdit', 'евро10': 'TextEdit', 'евро11': 'TextEdit', 'евро12': 'TextEdit', 'евро13': 'TextEdit', 'евро14': 'TextEdit', 'евро15': 'TextEdit', 'евро16': 'TextEdit', '8 карта-8 карта_Field2': 'Range', '8 карта-8 карта_Field3': 'Range', '8 карта-8 карта_Field4': 'Range', '8 карта-8 карта_Field5': 'Range', });
lyr_2024_6.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'ID': 'TextEdit', 'L_CODE': 'TextEdit', 'COUNT': 'TextEdit', 'ADM': 'TextEdit', 'FDR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'европ': 'TextEdit', 'евро_1': 'TextEdit', 'евро_2': 'TextEdit', 'евро_3': 'TextEdit', 'евро_4': 'TextEdit', 'евро_5': 'TextEdit', 'евро_6': 'TextEdit', 'евро_7': 'TextEdit', 'евро_8': 'TextEdit', 'евро_9': 'TextEdit', 'евро10': 'TextEdit', 'евро11': 'TextEdit', 'евро12': 'TextEdit', 'евро13': 'TextEdit', 'евро14': 'TextEdit', 'евро15': 'TextEdit', 'евро16': 'TextEdit', '1 карта-1 карта_Field2': 'TextEdit', '1 карта-1 карта_Field3': 'TextEdit', '1 карта-1 карта_Field4': 'TextEdit', '1 карта-1 карта_Field5': 'TextEdit', });
lyr_2020_7.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'ID': 'TextEdit', 'L_CODE': 'TextEdit', 'COUNT': 'TextEdit', 'ADM': 'TextEdit', 'FDR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'европ': 'TextEdit', 'евро_1': 'TextEdit', 'евро_2': 'TextEdit', 'евро_3': 'TextEdit', 'евро_4': 'TextEdit', 'евро_5': 'TextEdit', 'евро_6': 'TextEdit', 'евро_7': 'TextEdit', 'евро_8': 'TextEdit', 'евро_9': 'TextEdit', 'евро10': 'TextEdit', 'евро11': 'TextEdit', 'евро12': 'TextEdit', 'евро13': 'TextEdit', 'евро14': 'TextEdit', 'евро15': 'TextEdit', 'евро16': 'TextEdit', '1 карта-1 карта_Field2': 'TextEdit', '1 карта-1 карта_Field3': 'TextEdit', '1 карта-1 карта_Field4': 'TextEdit', '1 карта-1 карта_Field5': 'TextEdit', });
lyr_2015_8.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'ID': 'TextEdit', 'L_CODE': 'TextEdit', 'COUNT': 'TextEdit', 'ADM': 'TextEdit', 'FDR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'европ': 'TextEdit', 'евро_1': 'TextEdit', 'евро_2': 'TextEdit', 'евро_3': 'TextEdit', 'евро_4': 'TextEdit', 'евро_5': 'TextEdit', 'евро_6': 'TextEdit', 'евро_7': 'TextEdit', 'евро_8': 'TextEdit', 'евро_9': 'TextEdit', 'евро10': 'TextEdit', 'евро11': 'TextEdit', 'евро12': 'TextEdit', 'евро13': 'TextEdit', 'евро14': 'TextEdit', 'евро15': 'TextEdit', 'евро16': 'TextEdit', '1 карта-1 карта_Field2': 'TextEdit', '1 карта-1 карта_Field3': 'TextEdit', '1 карта-1 карта_Field4': 'TextEdit', '1 карта-1 карта_Field5': 'TextEdit', });
lyr_2010_9.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'ID': 'TextEdit', 'L_CODE': 'TextEdit', 'COUNT': 'TextEdit', 'ADM': 'TextEdit', 'FDR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'европ': 'TextEdit', 'евро_1': 'TextEdit', 'евро_2': 'TextEdit', 'евро_3': 'TextEdit', 'евро_4': 'TextEdit', 'евро_5': 'TextEdit', 'евро_6': 'TextEdit', 'евро_7': 'TextEdit', 'евро_8': 'TextEdit', 'евро_9': 'TextEdit', 'евро10': 'TextEdit', 'евро11': 'TextEdit', 'евро12': 'TextEdit', 'евро13': 'TextEdit', 'евро14': 'TextEdit', 'евро15': 'TextEdit', 'евро16': 'TextEdit', '1 карта-1 карта_Field2': 'TextEdit', '1 карта-1 карта_Field3': 'TextEdit', '1 карта-1 карта_Field4': 'TextEdit', '1 карта-1 карта_Field5': 'TextEdit', });
lyr_2024_10.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'ID': 'TextEdit', 'L_CODE': 'TextEdit', 'COUNT': 'TextEdit', 'ADM': 'TextEdit', 'FDR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'европ': 'TextEdit', 'евро_1': 'TextEdit', 'евро_2': 'TextEdit', 'евро_3': 'TextEdit', 'евро_4': 'TextEdit', 'евро_5': 'TextEdit', 'евро_6': 'TextEdit', 'евро_7': 'TextEdit', 'евро_8': 'TextEdit', 'евро_9': 'TextEdit', 'евро10': 'TextEdit', 'евро11': 'TextEdit', 'евро12': 'TextEdit', 'евро13': 'TextEdit', 'евро14': 'TextEdit', 'евро15': 'TextEdit', 'евро16': 'TextEdit', '6 карта-6 карта_Field2': 'Range', '6 карта-6 карта_Field3': 'TextEdit', '6 карта-6 карта_Field4': 'TextEdit', '6 карта-6 карта_Field5': 'Range', });
lyr_2020_11.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'ID': 'TextEdit', 'L_CODE': 'TextEdit', 'COUNT': 'TextEdit', 'ADM': 'TextEdit', 'FDR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'европ': 'TextEdit', 'евро_1': 'TextEdit', 'евро_2': 'TextEdit', 'евро_3': 'TextEdit', 'евро_4': 'TextEdit', 'евро_5': 'TextEdit', 'евро_6': 'TextEdit', 'евро_7': 'TextEdit', 'евро_8': 'TextEdit', 'евро_9': 'TextEdit', 'евро10': 'TextEdit', 'евро11': 'TextEdit', 'евро12': 'TextEdit', 'евро13': 'TextEdit', 'евро14': 'TextEdit', 'евро15': 'TextEdit', 'евро16': 'TextEdit', '6 карта-6 карта_Field2': 'Range', '6 карта-6 карта_Field3': 'TextEdit', '6 карта-6 карта_Field4': 'TextEdit', '6 карта-6 карта_Field5': 'Range', });
lyr_2015_12.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'ID': 'TextEdit', 'L_CODE': 'TextEdit', 'COUNT': 'TextEdit', 'ADM': 'TextEdit', 'FDR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'европ': 'TextEdit', 'евро_1': 'TextEdit', 'евро_2': 'TextEdit', 'евро_3': 'TextEdit', 'евро_4': 'TextEdit', 'евро_5': 'TextEdit', 'евро_6': 'TextEdit', 'евро_7': 'TextEdit', 'евро_8': 'TextEdit', 'евро_9': 'TextEdit', 'евро10': 'TextEdit', 'евро11': 'TextEdit', 'евро12': 'TextEdit', 'евро13': 'TextEdit', 'евро14': 'TextEdit', 'евро15': 'TextEdit', 'евро16': 'TextEdit', '6 карта-6 карта_Field2': 'Range', '6 карта-6 карта_Field3': 'TextEdit', '6 карта-6 карта_Field4': 'TextEdit', '6 карта-6 карта_Field5': 'Range', });
lyr_2010_13.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'ID': 'TextEdit', 'L_CODE': 'TextEdit', 'COUNT': 'TextEdit', 'ADM': 'TextEdit', 'FDR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'европ': 'TextEdit', 'евро_1': 'TextEdit', 'евро_2': 'TextEdit', 'евро_3': 'TextEdit', 'евро_4': 'TextEdit', 'евро_5': 'TextEdit', 'евро_6': 'TextEdit', 'евро_7': 'TextEdit', 'евро_8': 'TextEdit', 'евро_9': 'TextEdit', 'евро10': 'TextEdit', 'евро11': 'TextEdit', 'евро12': 'TextEdit', 'евро13': 'TextEdit', 'евро14': 'TextEdit', 'евро15': 'TextEdit', 'евро16': 'TextEdit', '6 карта-6 карта_Field2': 'Range', '6 карта-6 карта_Field3': 'TextEdit', '6 карта-6 карта_Field4': 'TextEdit', '6 карта-6 карта_Field5': 'Range', });
lyr_2024_14.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'ID': 'TextEdit', 'L_CODE': 'TextEdit', 'COUNT': 'TextEdit', 'ADM': 'TextEdit', 'FDR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'европ': 'TextEdit', 'евро_1': 'TextEdit', 'евро_2': 'TextEdit', 'евро_3': 'TextEdit', 'евро_4': 'TextEdit', 'евро_5': 'TextEdit', 'евро_6': 'TextEdit', 'евро_7': 'TextEdit', 'евро_8': 'TextEdit', 'евро_9': 'TextEdit', 'евро10': 'TextEdit', 'евро11': 'TextEdit', 'евро12': 'TextEdit', 'евро13': 'TextEdit', 'евро14': 'TextEdit', 'евро15': 'TextEdit', 'евро16': 'TextEdit', '5 карта-5 карта_Field2': 'TextEdit', '5 карта-5 карта_Field3': 'TextEdit', '5 карта-5 карта_Field4': 'TextEdit', '5 карта-5 карта_Field5': 'TextEdit', });
lyr_2020_15.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'ID': 'TextEdit', 'L_CODE': 'TextEdit', 'COUNT': 'TextEdit', 'ADM': 'TextEdit', 'FDR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'европ': 'TextEdit', 'евро_1': 'TextEdit', 'евро_2': 'TextEdit', 'евро_3': 'TextEdit', 'евро_4': 'TextEdit', 'евро_5': 'TextEdit', 'евро_6': 'TextEdit', 'евро_7': 'TextEdit', 'евро_8': 'TextEdit', 'евро_9': 'TextEdit', 'евро10': 'TextEdit', 'евро11': 'TextEdit', 'евро12': 'TextEdit', 'евро13': 'TextEdit', 'евро14': 'TextEdit', 'евро15': 'TextEdit', 'евро16': 'TextEdit', '5 карта-5 карта_Field2': 'TextEdit', '5 карта-5 карта_Field3': 'TextEdit', '5 карта-5 карта_Field4': 'TextEdit', '5 карта-5 карта_Field5': 'TextEdit', });
lyr_2015_16.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'ID': 'TextEdit', 'L_CODE': 'TextEdit', 'COUNT': 'TextEdit', 'ADM': 'TextEdit', 'FDR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'европ': 'TextEdit', 'евро_1': 'TextEdit', 'евро_2': 'TextEdit', 'евро_3': 'TextEdit', 'евро_4': 'TextEdit', 'евро_5': 'TextEdit', 'евро_6': 'TextEdit', 'евро_7': 'TextEdit', 'евро_8': 'TextEdit', 'евро_9': 'TextEdit', 'евро10': 'TextEdit', 'евро11': 'TextEdit', 'евро12': 'TextEdit', 'евро13': 'TextEdit', 'евро14': 'TextEdit', 'евро15': 'TextEdit', 'евро16': 'TextEdit', '5 карта-5 карта_Field2': 'TextEdit', '5 карта-5 карта_Field3': 'TextEdit', '5 карта-5 карта_Field4': 'TextEdit', '5 карта-5 карта_Field5': 'TextEdit', });
lyr_2010_17.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'ID': 'TextEdit', 'L_CODE': 'TextEdit', 'COUNT': 'TextEdit', 'ADM': 'TextEdit', 'FDR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'европ': 'TextEdit', 'евро_1': 'TextEdit', 'евро_2': 'TextEdit', 'евро_3': 'TextEdit', 'евро_4': 'TextEdit', 'евро_5': 'TextEdit', 'евро_6': 'TextEdit', 'евро_7': 'TextEdit', 'евро_8': 'TextEdit', 'евро_9': 'TextEdit', 'евро10': 'TextEdit', 'евро11': 'TextEdit', 'евро12': 'TextEdit', 'евро13': 'TextEdit', 'евро14': 'TextEdit', 'евро15': 'TextEdit', 'евро16': 'TextEdit', '5 карта-5 карта_Field2': 'TextEdit', '5 карта-5 карта_Field3': 'TextEdit', '5 карта-5 карта_Field4': 'TextEdit', '5 карта-5 карта_Field5': 'TextEdit', });
lyr_2024_18.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'ID': 'TextEdit', 'L_CODE': 'TextEdit', 'COUNT': 'TextEdit', 'ADM': 'TextEdit', 'FDR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'европ': 'TextEdit', 'евро_1': 'TextEdit', 'евро_2': 'TextEdit', 'евро_3': 'TextEdit', 'евро_4': 'TextEdit', 'евро_5': 'TextEdit', 'евро_6': 'TextEdit', 'евро_7': 'TextEdit', 'евро_8': 'TextEdit', 'евро_9': 'TextEdit', 'евро10': 'TextEdit', 'евро11': 'TextEdit', 'евро12': 'TextEdit', 'евро13': 'TextEdit', 'евро14': 'TextEdit', 'евро15': 'TextEdit', 'евро16': 'TextEdit', '4 карта-4 карта_Field2': 'TextEdit', '4 карта-4 карта_Field3': 'TextEdit', '4 карта-4 карта_Field4': 'TextEdit', '4 карта-4 карта_Field5': 'TextEdit', });
lyr_2020_19.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'ID': 'TextEdit', 'L_CODE': 'TextEdit', 'COUNT': 'TextEdit', 'ADM': 'TextEdit', 'FDR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'европ': 'TextEdit', 'евро_1': 'TextEdit', 'евро_2': 'TextEdit', 'евро_3': 'TextEdit', 'евро_4': 'TextEdit', 'евро_5': 'TextEdit', 'евро_6': 'TextEdit', 'евро_7': 'TextEdit', 'евро_8': 'TextEdit', 'евро_9': 'TextEdit', 'евро10': 'TextEdit', 'евро11': 'TextEdit', 'евро12': 'TextEdit', 'евро13': 'TextEdit', 'евро14': 'TextEdit', 'евро15': 'TextEdit', 'евро16': 'TextEdit', '4 карта-4 карта_Field2': 'TextEdit', '4 карта-4 карта_Field3': 'TextEdit', '4 карта-4 карта_Field4': 'TextEdit', '4 карта-4 карта_Field5': 'TextEdit', });
lyr_2015_20.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'ID': 'TextEdit', 'L_CODE': 'TextEdit', 'COUNT': 'TextEdit', 'ADM': 'TextEdit', 'FDR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'европ': 'TextEdit', 'евро_1': 'TextEdit', 'евро_2': 'TextEdit', 'евро_3': 'TextEdit', 'евро_4': 'TextEdit', 'евро_5': 'TextEdit', 'евро_6': 'TextEdit', 'евро_7': 'TextEdit', 'евро_8': 'TextEdit', 'евро_9': 'TextEdit', 'евро10': 'TextEdit', 'евро11': 'TextEdit', 'евро12': 'TextEdit', 'евро13': 'TextEdit', 'евро14': 'TextEdit', 'евро15': 'TextEdit', 'евро16': 'TextEdit', '4 карта-4 карта_Field2': 'TextEdit', '4 карта-4 карта_Field3': 'TextEdit', '4 карта-4 карта_Field4': 'TextEdit', '4 карта-4 карта_Field5': 'TextEdit', });
lyr_2010_21.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'ID': 'TextEdit', 'L_CODE': 'TextEdit', 'COUNT': 'TextEdit', 'ADM': 'TextEdit', 'FDR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'европ': 'TextEdit', 'евро_1': 'TextEdit', 'евро_2': 'TextEdit', 'евро_3': 'TextEdit', 'евро_4': 'TextEdit', 'евро_5': 'TextEdit', 'евро_6': 'TextEdit', 'евро_7': 'TextEdit', 'евро_8': 'TextEdit', 'евро_9': 'TextEdit', 'евро10': 'TextEdit', 'евро11': 'TextEdit', 'евро12': 'TextEdit', 'евро13': 'TextEdit', 'евро14': 'TextEdit', 'евро15': 'TextEdit', 'евро16': 'TextEdit', '4 карта-4 карта_Field2': 'TextEdit', '4 карта-4 карта_Field3': 'TextEdit', '4 карта-4 карта_Field4': 'TextEdit', '4 карта-4 карта_Field5': 'TextEdit', });
lyr_2024_22.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'ID': 'TextEdit', 'L_CODE': 'TextEdit', 'COUNT': 'TextEdit', 'ADM': 'TextEdit', 'FDR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'европ': 'TextEdit', 'евро_1': 'TextEdit', 'евро_2': 'TextEdit', 'евро_3': 'TextEdit', 'евро_4': 'TextEdit', 'евро_5': 'TextEdit', 'евро_6': 'TextEdit', 'евро_7': 'TextEdit', 'евро_8': 'TextEdit', 'евро_9': 'TextEdit', 'евро10': 'TextEdit', 'евро11': 'TextEdit', 'евро12': 'TextEdit', 'евро13': 'TextEdit', 'евро14': 'TextEdit', 'евро15': 'TextEdit', 'евро16': 'TextEdit', '3 карта-3 карта_Field2': 'TextEdit', '3 карта-3 карта_Field3': 'TextEdit', '3 карта-3 карта_Field4': 'TextEdit', '3 карта-3 карта_Field5': 'TextEdit', });
lyr_2020_23.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'ID': 'TextEdit', 'L_CODE': 'TextEdit', 'COUNT': 'TextEdit', 'ADM': 'TextEdit', 'FDR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'европ': 'TextEdit', 'евро_1': 'TextEdit', 'евро_2': 'TextEdit', 'евро_3': 'TextEdit', 'евро_4': 'TextEdit', 'евро_5': 'TextEdit', 'евро_6': 'TextEdit', 'евро_7': 'TextEdit', 'евро_8': 'TextEdit', 'евро_9': 'TextEdit', 'евро10': 'TextEdit', 'евро11': 'TextEdit', 'евро12': 'TextEdit', 'евро13': 'TextEdit', 'евро14': 'TextEdit', 'евро15': 'TextEdit', 'евро16': 'TextEdit', '3 карта-3 карта_Field2': 'TextEdit', '3 карта-3 карта_Field3': 'TextEdit', '3 карта-3 карта_Field4': 'TextEdit', '3 карта-3 карта_Field5': 'TextEdit', });
lyr_2015_24.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'ID': 'TextEdit', 'L_CODE': 'TextEdit', 'COUNT': 'TextEdit', 'ADM': 'TextEdit', 'FDR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'европ': 'TextEdit', 'евро_1': 'TextEdit', 'евро_2': 'TextEdit', 'евро_3': 'TextEdit', 'евро_4': 'TextEdit', 'евро_5': 'TextEdit', 'евро_6': 'TextEdit', 'евро_7': 'TextEdit', 'евро_8': 'TextEdit', 'евро_9': 'TextEdit', 'евро10': 'TextEdit', 'евро11': 'TextEdit', 'евро12': 'TextEdit', 'евро13': 'TextEdit', 'евро14': 'TextEdit', 'евро15': 'TextEdit', 'евро16': 'TextEdit', '3 карта-3 карта_Field2': 'TextEdit', '3 карта-3 карта_Field3': 'TextEdit', '3 карта-3 карта_Field4': 'TextEdit', '3 карта-3 карта_Field5': 'TextEdit', });
lyr_2010_25.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'ID': 'TextEdit', 'L_CODE': 'TextEdit', 'COUNT': 'TextEdit', 'ADM': 'TextEdit', 'FDR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'европ': 'TextEdit', 'евро_1': 'TextEdit', 'евро_2': 'TextEdit', 'евро_3': 'TextEdit', 'евро_4': 'TextEdit', 'евро_5': 'TextEdit', 'евро_6': 'TextEdit', 'евро_7': 'TextEdit', 'евро_8': 'TextEdit', 'евро_9': 'TextEdit', 'евро10': 'TextEdit', 'евро11': 'TextEdit', 'евро12': 'TextEdit', 'евро13': 'TextEdit', 'евро14': 'TextEdit', 'евро15': 'TextEdit', 'евро16': 'TextEdit', '3 карта-3 карта_Field2': 'TextEdit', '3 карта-3 карта_Field3': 'TextEdit', '3 карта-3 карта_Field4': 'TextEdit', '3 карта-3 карта_Field5': 'TextEdit', });
lyr_2024_26.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'ID': 'TextEdit', 'L_CODE': 'TextEdit', 'COUNT': 'TextEdit', 'ADM': 'TextEdit', 'FDR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'европ': 'TextEdit', 'евро_1': 'TextEdit', 'евро_2': 'TextEdit', 'евро_3': 'TextEdit', 'евро_4': 'TextEdit', 'евро_5': 'TextEdit', 'евро_6': 'TextEdit', 'евро_7': 'TextEdit', 'евро_8': 'TextEdit', 'евро_9': 'TextEdit', 'евро10': 'TextEdit', 'евро11': 'TextEdit', 'евро12': 'TextEdit', 'евро13': 'TextEdit', 'евро14': 'TextEdit', 'евро15': 'TextEdit', 'евро16': 'TextEdit', '2 карта-2 карта_Field2': 'TextEdit', '2 карта-2 карта_Field3': 'TextEdit', '2 карта-2 карта_Field4': 'TextEdit', '2 карта-2 карта_Field5': 'TextEdit', });
lyr_2020_27.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'ID': 'TextEdit', 'L_CODE': 'TextEdit', 'COUNT': 'TextEdit', 'ADM': 'TextEdit', 'FDR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'европ': 'TextEdit', 'евро_1': 'TextEdit', 'евро_2': 'TextEdit', 'евро_3': 'TextEdit', 'евро_4': 'TextEdit', 'евро_5': 'TextEdit', 'евро_6': 'TextEdit', 'евро_7': 'TextEdit', 'евро_8': 'TextEdit', 'евро_9': 'TextEdit', 'евро10': 'TextEdit', 'евро11': 'TextEdit', 'евро12': 'TextEdit', 'евро13': 'TextEdit', 'евро14': 'TextEdit', 'евро15': 'TextEdit', 'евро16': 'TextEdit', '2 карта-2 карта_Field2': 'TextEdit', '2 карта-2 карта_Field3': 'TextEdit', '2 карта-2 карта_Field4': 'TextEdit', '2 карта-2 карта_Field5': 'TextEdit', });
lyr_2015_28.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'ID': 'TextEdit', 'L_CODE': 'TextEdit', 'COUNT': 'TextEdit', 'ADM': 'TextEdit', 'FDR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'европ': 'TextEdit', 'евро_1': 'TextEdit', 'евро_2': 'TextEdit', 'евро_3': 'TextEdit', 'евро_4': 'TextEdit', 'евро_5': 'TextEdit', 'евро_6': 'TextEdit', 'евро_7': 'TextEdit', 'евро_8': 'TextEdit', 'евро_9': 'TextEdit', 'евро10': 'TextEdit', 'евро11': 'TextEdit', 'евро12': 'TextEdit', 'евро13': 'TextEdit', 'евро14': 'TextEdit', 'евро15': 'TextEdit', 'евро16': 'TextEdit', '2 карта-2 карта_Field2': 'TextEdit', '2 карта-2 карта_Field3': 'TextEdit', '2 карта-2 карта_Field4': 'TextEdit', '2 карта-2 карта_Field5': 'TextEdit', });
lyr_2010_29.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'ID': 'TextEdit', 'L_CODE': 'TextEdit', 'COUNT': 'TextEdit', 'ADM': 'TextEdit', 'FDR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'европ': 'TextEdit', 'евро_1': 'TextEdit', 'евро_2': 'TextEdit', 'евро_3': 'TextEdit', 'евро_4': 'TextEdit', 'евро_5': 'TextEdit', 'евро_6': 'TextEdit', 'евро_7': 'TextEdit', 'евро_8': 'TextEdit', 'евро_9': 'TextEdit', 'евро10': 'TextEdit', 'евро11': 'TextEdit', 'евро12': 'TextEdit', 'евро13': 'TextEdit', 'евро14': 'TextEdit', 'евро15': 'TextEdit', 'евро16': 'TextEdit', '2 карта-2 карта_Field2': 'TextEdit', '2 карта-2 карта_Field3': 'TextEdit', '2 карта-2 карта_Field4': 'TextEdit', '2 карта-2 карта_Field5': 'TextEdit', });
lyr_2024_30.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'ID': 'TextEdit', 'L_CODE': 'TextEdit', 'COUNT': 'TextEdit', 'ADM': 'TextEdit', 'FDR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'европ': 'TextEdit', 'евро_1': 'TextEdit', 'евро_2': 'TextEdit', 'евро_3': 'TextEdit', 'евро_4': 'TextEdit', 'евро_5': 'TextEdit', 'евро_6': 'TextEdit', 'евро_7': 'TextEdit', 'евро_8': 'TextEdit', 'евро_9': 'TextEdit', 'евро10': 'TextEdit', 'евро11': 'TextEdit', 'евро12': 'TextEdit', 'евро13': 'TextEdit', 'евро14': 'TextEdit', 'евро15': 'TextEdit', 'евро16': 'TextEdit', '1 карта-1 карта_Field2': 'TextEdit', '1 карта-1 карта_Field3': 'TextEdit', '1 карта-1 карта_Field4': 'TextEdit', '1 карта-1 карта_Field5': 'TextEdit', });
lyr_2020_31.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'ID': 'TextEdit', 'L_CODE': 'TextEdit', 'COUNT': 'TextEdit', 'ADM': 'TextEdit', 'FDR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'европ': 'TextEdit', 'евро_1': 'TextEdit', 'евро_2': 'TextEdit', 'евро_3': 'TextEdit', 'евро_4': 'TextEdit', 'евро_5': 'TextEdit', 'евро_6': 'TextEdit', 'евро_7': 'TextEdit', 'евро_8': 'TextEdit', 'евро_9': 'TextEdit', 'евро10': 'TextEdit', 'евро11': 'TextEdit', 'евро12': 'TextEdit', 'евро13': 'TextEdit', 'евро14': 'TextEdit', 'евро15': 'TextEdit', 'евро16': 'TextEdit', '1 карта-1 карта_Field2': 'TextEdit', '1 карта-1 карта_Field3': 'TextEdit', '1 карта-1 карта_Field4': 'TextEdit', '1 карта-1 карта_Field5': 'TextEdit', });
lyr_2015_32.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'ID': 'TextEdit', 'L_CODE': 'TextEdit', 'COUNT': 'TextEdit', 'ADM': 'TextEdit', 'FDR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'европ': 'TextEdit', 'евро_1': 'TextEdit', 'евро_2': 'TextEdit', 'евро_3': 'TextEdit', 'евро_4': 'TextEdit', 'евро_5': 'TextEdit', 'евро_6': 'TextEdit', 'евро_7': 'TextEdit', 'евро_8': 'TextEdit', 'евро_9': 'TextEdit', 'евро10': 'TextEdit', 'евро11': 'TextEdit', 'евро12': 'TextEdit', 'евро13': 'TextEdit', 'евро14': 'TextEdit', 'евро15': 'TextEdit', 'евро16': 'TextEdit', '1 карта-1 карта_Field2': 'TextEdit', '1 карта-1 карта_Field3': 'TextEdit', '1 карта-1 карта_Field4': 'TextEdit', '1 карта-1 карта_Field5': 'TextEdit', });
lyr_2010_33.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'ID': 'TextEdit', 'L_CODE': 'TextEdit', 'COUNT': 'TextEdit', 'ADM': 'TextEdit', 'FDR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'европ': 'TextEdit', 'евро_1': 'TextEdit', 'евро_2': 'TextEdit', 'евро_3': 'TextEdit', 'евро_4': 'TextEdit', 'евро_5': 'TextEdit', 'евро_6': 'TextEdit', 'евро_7': 'TextEdit', 'евро_8': 'TextEdit', 'евро_9': 'TextEdit', 'евро10': 'TextEdit', 'евро11': 'TextEdit', 'евро12': 'TextEdit', 'евро13': 'TextEdit', 'евро14': 'TextEdit', 'евро15': 'TextEdit', 'евро16': 'TextEdit', '1 карта-1 карта_Field2': 'TextEdit', '1 карта-1 карта_Field3': 'TextEdit', '1 карта-1 карта_Field4': 'TextEdit', '1 карта-1 карта_Field5': 'TextEdit', });
lyr__34.set('fieldImages', {'id': 'TextEdit', 'назв': 'TextEdit', });
lyr__1.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'ID': 'no label', 'L_CODE': 'no label', 'COUNT': 'no label', 'ADM': 'no label', 'FDR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'европ': 'no label', 'евро_1': 'no label', 'евро_2': 'no label', 'евро_3': 'no label', 'евро_4': 'no label', 'евро_5': 'no label', 'евро_6': 'no label', 'евро_7': 'no label', 'евро_8': 'no label', 'евро_9': 'no label', 'евро10': 'no label', 'евро11': 'no label', 'евро12': 'no label', 'евро13': 'no label', 'евро14': 'no label', 'евро15': 'no label', 'евро16': 'no label', '9 карта-9 карта_8.3 показатель': 'no label', '9 карта-9 карта_3.1 показатель': 'no label', '9 карта-9 карта_ВРП на душу': 'no label', '9 карта-9 карта_безработица': 'no label', 'карты2-9 карта 2_Интегральный индекс': 'no label', });
lyr_2024_2.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'ID': 'no label', 'L_CODE': 'no label', 'COUNT': 'no label', 'ADM': 'no label', 'FDR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'европ': 'no label', 'евро_1': 'no label', 'евро_2': 'no label', 'евро_3': 'no label', 'евро_4': 'no label', 'евро_5': 'no label', 'евро_6': 'no label', 'евро_7': 'no label', 'евро_8': 'no label', 'евро_9': 'no label', 'евро10': 'no label', 'евро11': 'no label', 'евро12': 'no label', 'евро13': 'no label', 'евро14': 'no label', 'евро15': 'no label', 'евро16': 'no label', '8 карта-8 карта_Field2': 'no label', '8 карта-8 карта_Field3': 'no label', '8 карта-8 карта_Field4': 'no label', '8 карта-8 карта_Field5': 'no label', });
lyr_2020_3.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'ID': 'no label', 'L_CODE': 'no label', 'COUNT': 'no label', 'ADM': 'no label', 'FDR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'европ': 'no label', 'евро_1': 'no label', 'евро_2': 'no label', 'евро_3': 'no label', 'евро_4': 'no label', 'евро_5': 'no label', 'евро_6': 'no label', 'евро_7': 'no label', 'евро_8': 'no label', 'евро_9': 'no label', 'евро10': 'no label', 'евро11': 'no label', 'евро12': 'no label', 'евро13': 'no label', 'евро14': 'no label', 'евро15': 'no label', 'евро16': 'no label', '8 карта-8 карта_Field2': 'no label', '8 карта-8 карта_Field3': 'no label', '8 карта-8 карта_Field4': 'no label', '8 карта-8 карта_Field5': 'no label', });
lyr_2015_4.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'ID': 'no label', 'L_CODE': 'no label', 'COUNT': 'no label', 'ADM': 'no label', 'FDR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'европ': 'no label', 'евро_1': 'no label', 'евро_2': 'no label', 'евро_3': 'no label', 'евро_4': 'no label', 'евро_5': 'no label', 'евро_6': 'no label', 'евро_7': 'no label', 'евро_8': 'no label', 'евро_9': 'no label', 'евро10': 'no label', 'евро11': 'no label', 'евро12': 'no label', 'евро13': 'no label', 'евро14': 'no label', 'евро15': 'no label', 'евро16': 'no label', '8 карта-8 карта_Field2': 'no label', '8 карта-8 карта_Field3': 'no label', '8 карта-8 карта_Field4': 'no label', '8 карта-8 карта_Field5': 'no label', });
lyr_2010_5.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'ID': 'no label', 'L_CODE': 'no label', 'COUNT': 'no label', 'ADM': 'no label', 'FDR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'европ': 'no label', 'евро_1': 'no label', 'евро_2': 'no label', 'евро_3': 'no label', 'евро_4': 'no label', 'евро_5': 'no label', 'евро_6': 'no label', 'евро_7': 'no label', 'евро_8': 'no label', 'евро_9': 'no label', 'евро10': 'no label', 'евро11': 'no label', 'евро12': 'no label', 'евро13': 'no label', 'евро14': 'no label', 'евро15': 'no label', 'евро16': 'no label', '8 карта-8 карта_Field2': 'no label', '8 карта-8 карта_Field3': 'no label', '8 карта-8 карта_Field4': 'no label', '8 карта-8 карта_Field5': 'no label', });
lyr_2024_6.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'ID': 'no label', 'L_CODE': 'no label', 'COUNT': 'no label', 'ADM': 'no label', 'FDR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'европ': 'no label', 'евро_1': 'no label', 'евро_2': 'no label', 'евро_3': 'no label', 'евро_4': 'no label', 'евро_5': 'no label', 'евро_6': 'no label', 'евро_7': 'no label', 'евро_8': 'no label', 'евро_9': 'no label', 'евро10': 'no label', 'евро11': 'no label', 'евро12': 'no label', 'евро13': 'no label', 'евро14': 'no label', 'евро15': 'no label', 'евро16': 'no label', '1 карта-1 карта_Field2': 'no label', '1 карта-1 карта_Field3': 'no label', '1 карта-1 карта_Field4': 'no label', '1 карта-1 карта_Field5': 'no label', });
lyr_2020_7.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'ID': 'no label', 'L_CODE': 'no label', 'COUNT': 'no label', 'ADM': 'no label', 'FDR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'европ': 'no label', 'евро_1': 'no label', 'евро_2': 'no label', 'евро_3': 'no label', 'евро_4': 'no label', 'евро_5': 'no label', 'евро_6': 'no label', 'евро_7': 'no label', 'евро_8': 'no label', 'евро_9': 'no label', 'евро10': 'no label', 'евро11': 'no label', 'евро12': 'no label', 'евро13': 'no label', 'евро14': 'no label', 'евро15': 'no label', 'евро16': 'no label', '1 карта-1 карта_Field2': 'no label', '1 карта-1 карта_Field3': 'no label', '1 карта-1 карта_Field4': 'no label', '1 карта-1 карта_Field5': 'no label', });
lyr_2015_8.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'ID': 'no label', 'L_CODE': 'no label', 'COUNT': 'no label', 'ADM': 'no label', 'FDR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'европ': 'no label', 'евро_1': 'no label', 'евро_2': 'no label', 'евро_3': 'no label', 'евро_4': 'no label', 'евро_5': 'no label', 'евро_6': 'no label', 'евро_7': 'no label', 'евро_8': 'no label', 'евро_9': 'no label', 'евро10': 'no label', 'евро11': 'no label', 'евро12': 'no label', 'евро13': 'no label', 'евро14': 'no label', 'евро15': 'no label', 'евро16': 'no label', '1 карта-1 карта_Field2': 'no label', '1 карта-1 карта_Field3': 'no label', '1 карта-1 карта_Field4': 'no label', '1 карта-1 карта_Field5': 'no label', });
lyr_2010_9.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'ID': 'no label', 'L_CODE': 'no label', 'COUNT': 'no label', 'ADM': 'no label', 'FDR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'европ': 'no label', 'евро_1': 'no label', 'евро_2': 'no label', 'евро_3': 'no label', 'евро_4': 'no label', 'евро_5': 'no label', 'евро_6': 'no label', 'евро_7': 'no label', 'евро_8': 'no label', 'евро_9': 'no label', 'евро10': 'no label', 'евро11': 'no label', 'евро12': 'no label', 'евро13': 'no label', 'евро14': 'no label', 'евро15': 'no label', 'евро16': 'no label', '1 карта-1 карта_Field2': 'no label', '1 карта-1 карта_Field3': 'no label', '1 карта-1 карта_Field4': 'no label', '1 карта-1 карта_Field5': 'no label', });
lyr_2024_10.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'ID': 'no label', 'L_CODE': 'no label', 'COUNT': 'no label', 'ADM': 'no label', 'FDR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'европ': 'no label', 'евро_1': 'no label', 'евро_2': 'no label', 'евро_3': 'no label', 'евро_4': 'no label', 'евро_5': 'no label', 'евро_6': 'no label', 'евро_7': 'no label', 'евро_8': 'no label', 'евро_9': 'no label', 'евро10': 'no label', 'евро11': 'no label', 'евро12': 'no label', 'евро13': 'no label', 'евро14': 'no label', 'евро15': 'no label', 'евро16': 'no label', '6 карта-6 карта_Field2': 'no label', '6 карта-6 карта_Field3': 'no label', '6 карта-6 карта_Field4': 'no label', '6 карта-6 карта_Field5': 'no label', });
lyr_2020_11.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'ID': 'no label', 'L_CODE': 'no label', 'COUNT': 'no label', 'ADM': 'no label', 'FDR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'европ': 'no label', 'евро_1': 'no label', 'евро_2': 'no label', 'евро_3': 'no label', 'евро_4': 'no label', 'евро_5': 'no label', 'евро_6': 'no label', 'евро_7': 'no label', 'евро_8': 'no label', 'евро_9': 'no label', 'евро10': 'no label', 'евро11': 'no label', 'евро12': 'no label', 'евро13': 'no label', 'евро14': 'no label', 'евро15': 'no label', 'евро16': 'no label', '6 карта-6 карта_Field2': 'no label', '6 карта-6 карта_Field3': 'no label', '6 карта-6 карта_Field4': 'no label', '6 карта-6 карта_Field5': 'no label', });
lyr_2015_12.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'ID': 'no label', 'L_CODE': 'no label', 'COUNT': 'no label', 'ADM': 'no label', 'FDR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'европ': 'no label', 'евро_1': 'no label', 'евро_2': 'no label', 'евро_3': 'no label', 'евро_4': 'no label', 'евро_5': 'no label', 'евро_6': 'no label', 'евро_7': 'no label', 'евро_8': 'no label', 'евро_9': 'no label', 'евро10': 'no label', 'евро11': 'no label', 'евро12': 'no label', 'евро13': 'no label', 'евро14': 'no label', 'евро15': 'no label', 'евро16': 'no label', '6 карта-6 карта_Field2': 'no label', '6 карта-6 карта_Field3': 'no label', '6 карта-6 карта_Field4': 'no label', '6 карта-6 карта_Field5': 'no label', });
lyr_2010_13.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'ID': 'no label', 'L_CODE': 'no label', 'COUNT': 'no label', 'ADM': 'no label', 'FDR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'европ': 'no label', 'евро_1': 'no label', 'евро_2': 'no label', 'евро_3': 'no label', 'евро_4': 'no label', 'евро_5': 'no label', 'евро_6': 'no label', 'евро_7': 'no label', 'евро_8': 'no label', 'евро_9': 'no label', 'евро10': 'no label', 'евро11': 'no label', 'евро12': 'no label', 'евро13': 'no label', 'евро14': 'no label', 'евро15': 'no label', 'евро16': 'no label', '6 карта-6 карта_Field2': 'no label', '6 карта-6 карта_Field3': 'no label', '6 карта-6 карта_Field4': 'no label', '6 карта-6 карта_Field5': 'no label', });
lyr_2024_14.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'ID': 'no label', 'L_CODE': 'no label', 'COUNT': 'no label', 'ADM': 'no label', 'FDR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'европ': 'no label', 'евро_1': 'no label', 'евро_2': 'no label', 'евро_3': 'no label', 'евро_4': 'no label', 'евро_5': 'no label', 'евро_6': 'no label', 'евро_7': 'no label', 'евро_8': 'no label', 'евро_9': 'no label', 'евро10': 'no label', 'евро11': 'no label', 'евро12': 'no label', 'евро13': 'no label', 'евро14': 'no label', 'евро15': 'no label', 'евро16': 'no label', '5 карта-5 карта_Field2': 'no label', '5 карта-5 карта_Field3': 'no label', '5 карта-5 карта_Field4': 'no label', '5 карта-5 карта_Field5': 'no label', });
lyr_2020_15.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'ID': 'no label', 'L_CODE': 'no label', 'COUNT': 'no label', 'ADM': 'no label', 'FDR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'европ': 'no label', 'евро_1': 'no label', 'евро_2': 'no label', 'евро_3': 'no label', 'евро_4': 'no label', 'евро_5': 'no label', 'евро_6': 'no label', 'евро_7': 'no label', 'евро_8': 'no label', 'евро_9': 'no label', 'евро10': 'no label', 'евро11': 'no label', 'евро12': 'no label', 'евро13': 'no label', 'евро14': 'no label', 'евро15': 'no label', 'евро16': 'no label', '5 карта-5 карта_Field2': 'no label', '5 карта-5 карта_Field3': 'no label', '5 карта-5 карта_Field4': 'no label', '5 карта-5 карта_Field5': 'no label', });
lyr_2015_16.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'ID': 'no label', 'L_CODE': 'no label', 'COUNT': 'no label', 'ADM': 'no label', 'FDR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'европ': 'no label', 'евро_1': 'no label', 'евро_2': 'no label', 'евро_3': 'no label', 'евро_4': 'no label', 'евро_5': 'no label', 'евро_6': 'no label', 'евро_7': 'no label', 'евро_8': 'no label', 'евро_9': 'no label', 'евро10': 'no label', 'евро11': 'no label', 'евро12': 'no label', 'евро13': 'no label', 'евро14': 'no label', 'евро15': 'no label', 'евро16': 'no label', '5 карта-5 карта_Field2': 'no label', '5 карта-5 карта_Field3': 'no label', '5 карта-5 карта_Field4': 'no label', '5 карта-5 карта_Field5': 'no label', });
lyr_2010_17.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'ID': 'no label', 'L_CODE': 'no label', 'COUNT': 'no label', 'ADM': 'no label', 'FDR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'европ': 'no label', 'евро_1': 'no label', 'евро_2': 'no label', 'евро_3': 'no label', 'евро_4': 'no label', 'евро_5': 'no label', 'евро_6': 'no label', 'евро_7': 'no label', 'евро_8': 'no label', 'евро_9': 'no label', 'евро10': 'no label', 'евро11': 'no label', 'евро12': 'no label', 'евро13': 'no label', 'евро14': 'no label', 'евро15': 'no label', 'евро16': 'no label', '5 карта-5 карта_Field2': 'no label', '5 карта-5 карта_Field3': 'no label', '5 карта-5 карта_Field4': 'no label', '5 карта-5 карта_Field5': 'no label', });
lyr_2024_18.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'ID': 'no label', 'L_CODE': 'no label', 'COUNT': 'no label', 'ADM': 'no label', 'FDR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'европ': 'no label', 'евро_1': 'no label', 'евро_2': 'no label', 'евро_3': 'no label', 'евро_4': 'no label', 'евро_5': 'no label', 'евро_6': 'no label', 'евро_7': 'no label', 'евро_8': 'no label', 'евро_9': 'no label', 'евро10': 'no label', 'евро11': 'no label', 'евро12': 'no label', 'евро13': 'no label', 'евро14': 'no label', 'евро15': 'no label', 'евро16': 'no label', '4 карта-4 карта_Field2': 'no label', '4 карта-4 карта_Field3': 'no label', '4 карта-4 карта_Field4': 'no label', '4 карта-4 карта_Field5': 'no label', });
lyr_2020_19.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'ID': 'no label', 'L_CODE': 'no label', 'COUNT': 'no label', 'ADM': 'no label', 'FDR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'европ': 'no label', 'евро_1': 'no label', 'евро_2': 'no label', 'евро_3': 'no label', 'евро_4': 'no label', 'евро_5': 'no label', 'евро_6': 'no label', 'евро_7': 'no label', 'евро_8': 'no label', 'евро_9': 'no label', 'евро10': 'no label', 'евро11': 'no label', 'евро12': 'no label', 'евро13': 'no label', 'евро14': 'no label', 'евро15': 'no label', 'евро16': 'no label', '4 карта-4 карта_Field2': 'no label', '4 карта-4 карта_Field3': 'no label', '4 карта-4 карта_Field4': 'no label', '4 карта-4 карта_Field5': 'no label', });
lyr_2015_20.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'ID': 'no label', 'L_CODE': 'no label', 'COUNT': 'no label', 'ADM': 'no label', 'FDR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'европ': 'no label', 'евро_1': 'no label', 'евро_2': 'no label', 'евро_3': 'no label', 'евро_4': 'no label', 'евро_5': 'no label', 'евро_6': 'no label', 'евро_7': 'no label', 'евро_8': 'no label', 'евро_9': 'no label', 'евро10': 'no label', 'евро11': 'no label', 'евро12': 'no label', 'евро13': 'no label', 'евро14': 'no label', 'евро15': 'no label', 'евро16': 'no label', '4 карта-4 карта_Field2': 'no label', '4 карта-4 карта_Field3': 'no label', '4 карта-4 карта_Field4': 'no label', '4 карта-4 карта_Field5': 'no label', });
lyr_2010_21.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'ID': 'no label', 'L_CODE': 'no label', 'COUNT': 'no label', 'ADM': 'no label', 'FDR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'европ': 'no label', 'евро_1': 'no label', 'евро_2': 'no label', 'евро_3': 'no label', 'евро_4': 'no label', 'евро_5': 'no label', 'евро_6': 'no label', 'евро_7': 'no label', 'евро_8': 'no label', 'евро_9': 'no label', 'евро10': 'no label', 'евро11': 'no label', 'евро12': 'no label', 'евро13': 'no label', 'евро14': 'no label', 'евро15': 'no label', 'евро16': 'no label', '4 карта-4 карта_Field2': 'no label', '4 карта-4 карта_Field3': 'no label', '4 карта-4 карта_Field4': 'no label', '4 карта-4 карта_Field5': 'no label', });
lyr_2024_22.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'ID': 'no label', 'L_CODE': 'no label', 'COUNT': 'no label', 'ADM': 'no label', 'FDR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'европ': 'no label', 'евро_1': 'no label', 'евро_2': 'no label', 'евро_3': 'no label', 'евро_4': 'no label', 'евро_5': 'no label', 'евро_6': 'no label', 'евро_7': 'no label', 'евро_8': 'no label', 'евро_9': 'no label', 'евро10': 'no label', 'евро11': 'no label', 'евро12': 'no label', 'евро13': 'no label', 'евро14': 'no label', 'евро15': 'no label', 'евро16': 'no label', '3 карта-3 карта_Field2': 'no label', '3 карта-3 карта_Field3': 'no label', '3 карта-3 карта_Field4': 'no label', '3 карта-3 карта_Field5': 'no label', });
lyr_2020_23.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'ID': 'no label', 'L_CODE': 'no label', 'COUNT': 'no label', 'ADM': 'no label', 'FDR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'европ': 'no label', 'евро_1': 'no label', 'евро_2': 'no label', 'евро_3': 'no label', 'евро_4': 'no label', 'евро_5': 'no label', 'евро_6': 'no label', 'евро_7': 'no label', 'евро_8': 'no label', 'евро_9': 'no label', 'евро10': 'no label', 'евро11': 'no label', 'евро12': 'no label', 'евро13': 'no label', 'евро14': 'no label', 'евро15': 'no label', 'евро16': 'no label', '3 карта-3 карта_Field2': 'no label', '3 карта-3 карта_Field3': 'no label', '3 карта-3 карта_Field4': 'no label', '3 карта-3 карта_Field5': 'no label', });
lyr_2015_24.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'ID': 'no label', 'L_CODE': 'no label', 'COUNT': 'no label', 'ADM': 'no label', 'FDR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'европ': 'no label', 'евро_1': 'no label', 'евро_2': 'no label', 'евро_3': 'no label', 'евро_4': 'no label', 'евро_5': 'no label', 'евро_6': 'no label', 'евро_7': 'no label', 'евро_8': 'no label', 'евро_9': 'no label', 'евро10': 'no label', 'евро11': 'no label', 'евро12': 'no label', 'евро13': 'no label', 'евро14': 'no label', 'евро15': 'no label', 'евро16': 'no label', '3 карта-3 карта_Field2': 'no label', '3 карта-3 карта_Field3': 'no label', '3 карта-3 карта_Field4': 'no label', '3 карта-3 карта_Field5': 'no label', });
lyr_2010_25.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'ID': 'no label', 'L_CODE': 'no label', 'COUNT': 'no label', 'ADM': 'no label', 'FDR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'европ': 'no label', 'евро_1': 'no label', 'евро_2': 'no label', 'евро_3': 'no label', 'евро_4': 'no label', 'евро_5': 'no label', 'евро_6': 'no label', 'евро_7': 'no label', 'евро_8': 'no label', 'евро_9': 'no label', 'евро10': 'no label', 'евро11': 'no label', 'евро12': 'no label', 'евро13': 'no label', 'евро14': 'no label', 'евро15': 'no label', 'евро16': 'no label', '3 карта-3 карта_Field2': 'no label', '3 карта-3 карта_Field3': 'no label', '3 карта-3 карта_Field4': 'no label', '3 карта-3 карта_Field5': 'no label', });
lyr_2024_26.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'ID': 'no label', 'L_CODE': 'no label', 'COUNT': 'no label', 'ADM': 'no label', 'FDR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'европ': 'no label', 'евро_1': 'no label', 'евро_2': 'no label', 'евро_3': 'no label', 'евро_4': 'no label', 'евро_5': 'no label', 'евро_6': 'no label', 'евро_7': 'no label', 'евро_8': 'no label', 'евро_9': 'no label', 'евро10': 'no label', 'евро11': 'no label', 'евро12': 'no label', 'евро13': 'no label', 'евро14': 'no label', 'евро15': 'no label', 'евро16': 'no label', '2 карта-2 карта_Field2': 'no label', '2 карта-2 карта_Field3': 'no label', '2 карта-2 карта_Field4': 'no label', '2 карта-2 карта_Field5': 'no label', });
lyr_2020_27.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'ID': 'no label', 'L_CODE': 'no label', 'COUNT': 'no label', 'ADM': 'no label', 'FDR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'европ': 'no label', 'евро_1': 'no label', 'евро_2': 'no label', 'евро_3': 'no label', 'евро_4': 'no label', 'евро_5': 'no label', 'евро_6': 'no label', 'евро_7': 'no label', 'евро_8': 'no label', 'евро_9': 'no label', 'евро10': 'no label', 'евро11': 'no label', 'евро12': 'no label', 'евро13': 'no label', 'евро14': 'no label', 'евро15': 'no label', 'евро16': 'no label', '2 карта-2 карта_Field2': 'no label', '2 карта-2 карта_Field3': 'no label', '2 карта-2 карта_Field4': 'no label', '2 карта-2 карта_Field5': 'no label', });
lyr_2015_28.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'ID': 'no label', 'L_CODE': 'no label', 'COUNT': 'no label', 'ADM': 'no label', 'FDR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'европ': 'no label', 'евро_1': 'no label', 'евро_2': 'no label', 'евро_3': 'no label', 'евро_4': 'no label', 'евро_5': 'no label', 'евро_6': 'no label', 'евро_7': 'no label', 'евро_8': 'no label', 'евро_9': 'no label', 'евро10': 'no label', 'евро11': 'no label', 'евро12': 'no label', 'евро13': 'no label', 'евро14': 'no label', 'евро15': 'no label', 'евро16': 'no label', '2 карта-2 карта_Field2': 'no label', '2 карта-2 карта_Field3': 'no label', '2 карта-2 карта_Field4': 'no label', '2 карта-2 карта_Field5': 'no label', });
lyr_2010_29.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'ID': 'no label', 'L_CODE': 'no label', 'COUNT': 'no label', 'ADM': 'no label', 'FDR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'европ': 'no label', 'евро_1': 'no label', 'евро_2': 'no label', 'евро_3': 'no label', 'евро_4': 'no label', 'евро_5': 'no label', 'евро_6': 'no label', 'евро_7': 'no label', 'евро_8': 'no label', 'евро_9': 'no label', 'евро10': 'no label', 'евро11': 'no label', 'евро12': 'no label', 'евро13': 'no label', 'евро14': 'no label', 'евро15': 'no label', 'евро16': 'no label', '2 карта-2 карта_Field2': 'no label', '2 карта-2 карта_Field3': 'no label', '2 карта-2 карта_Field4': 'no label', '2 карта-2 карта_Field5': 'no label', });
lyr_2024_30.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'ID': 'no label', 'L_CODE': 'no label', 'COUNT': 'no label', 'ADM': 'no label', 'FDR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'европ': 'no label', 'евро_1': 'no label', 'евро_2': 'no label', 'евро_3': 'no label', 'евро_4': 'no label', 'евро_5': 'no label', 'евро_6': 'no label', 'евро_7': 'no label', 'евро_8': 'no label', 'евро_9': 'no label', 'евро10': 'no label', 'евро11': 'no label', 'евро12': 'no label', 'евро13': 'no label', 'евро14': 'no label', 'евро15': 'no label', 'евро16': 'no label', '1 карта-1 карта_Field2': 'no label', '1 карта-1 карта_Field3': 'no label', '1 карта-1 карта_Field4': 'no label', '1 карта-1 карта_Field5': 'no label', });
lyr_2020_31.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'ID': 'no label', 'L_CODE': 'no label', 'COUNT': 'no label', 'ADM': 'no label', 'FDR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'европ': 'no label', 'евро_1': 'no label', 'евро_2': 'no label', 'евро_3': 'no label', 'евро_4': 'no label', 'евро_5': 'no label', 'евро_6': 'no label', 'евро_7': 'no label', 'евро_8': 'no label', 'евро_9': 'no label', 'евро10': 'no label', 'евро11': 'no label', 'евро12': 'no label', 'евро13': 'no label', 'евро14': 'no label', 'евро15': 'no label', 'евро16': 'no label', '1 карта-1 карта_Field2': 'no label', '1 карта-1 карта_Field3': 'no label', '1 карта-1 карта_Field4': 'no label', '1 карта-1 карта_Field5': 'no label', });
lyr_2015_32.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'ID': 'no label', 'L_CODE': 'no label', 'COUNT': 'no label', 'ADM': 'no label', 'FDR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'европ': 'no label', 'евро_1': 'no label', 'евро_2': 'no label', 'евро_3': 'no label', 'евро_4': 'no label', 'евро_5': 'no label', 'евро_6': 'no label', 'евро_7': 'no label', 'евро_8': 'no label', 'евро_9': 'no label', 'евро10': 'no label', 'евро11': 'no label', 'евро12': 'no label', 'евро13': 'no label', 'евро14': 'no label', 'евро15': 'no label', 'евро16': 'no label', '1 карта-1 карта_Field2': 'no label', '1 карта-1 карта_Field3': 'no label', '1 карта-1 карта_Field4': 'no label', '1 карта-1 карта_Field5': 'no label', });
lyr_2010_33.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'ID': 'no label', 'L_CODE': 'no label', 'COUNT': 'no label', 'ADM': 'no label', 'FDR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'европ': 'no label', 'евро_1': 'no label', 'евро_2': 'no label', 'евро_3': 'no label', 'евро_4': 'no label', 'евро_5': 'no label', 'евро_6': 'no label', 'евро_7': 'no label', 'евро_8': 'no label', 'евро_9': 'no label', 'евро10': 'no label', 'евро11': 'no label', 'евро12': 'no label', 'евро13': 'no label', 'евро14': 'no label', 'евро15': 'no label', 'евро16': 'no label', '1 карта-1 карта_Field2': 'no label', '1 карта-1 карта_Field3': 'no label', '1 карта-1 карта_Field4': 'no label', '1 карта-1 карта_Field5': 'no label', });
lyr__34.set('fieldLabels', {'id': 'no label', 'назв': 'no label', });
lyr__34.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});