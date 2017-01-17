# data-pipeline
Collating documentation for data conversion for various layers

## Mapbox-GL Layers
- 3D buildings
- Planimetrics Features
- Terrain Contours
- Surface Temperature
- Heat Risk
- Flood Risk

## 3D buildings

![img/mapbox.png](img/mapbox.png)

#### *Dataset* :
[Google Drive: OSM buildings](https://drive.google.com/open?id=0B9dyvT56AXu-R2ZjTFg2dDF2YXM)

#### *Description* :
The OSM dataset contains building and building part heights. It is used to reconstruct extruded geometries of the buildings.
The dataset is made available by [Overpass API](overpass-api.de)

#### *Generation/Conversion* :
- Follow the steps here [UrbanEcologyLab/overpass-api-tiles](https://github.com/UrbanEcologyLab/overpass-api-tiles) to download a OSM tiles and create a geoJSON from them, for a specified bounding box
- To convert the .geoJSON to .mbtiles, use tippecanoe

#### *Repository* :
To visualize the dataset refer to [3D-city-buildings](https://github.com/UrbanEcologyLab/3d-city-buildings)

## Planimetrics Features
#### *Dataset* :
[NYC Planimetrics](https://nycitymap.wordpress.com/tag/planimetrics/)

#### *Description* :
Contains detailed city infrastructure features. The data available is in `GML files`. Intermediate steps may require conversion of `GML -> .shp -> .mbtiles`

#### *Conversion*
*pending*

## Terrain Contours
*pending*

#### *Dataset* :
[Mapbox](https://www.mapbox.com/about/maps/):  Includes commercial terrain data from Intermap® NEXTMap® USA and Europe, 5 meter posted, Type II Digital Terrain Model; Geographx. Includes open data from l'Institut national de l'information géographique et forestière, 2013; the Government of Canada (Open Government Licence – Canada); The National Land Survey of Finland Topographic Database, 2013 (NLS ODL); © Norwegian Mapping Authority (CC-BY 3.0 NO); Ordnance Survey data © Crown copyright and database right 2013; INEGI; Geodatastyrelsen, DHM / Terrain (1.6 m grid), 2014; The National Dynamic Land Cover Dataset © Geoscience Australia (CC-BY 2.5 AU); United States Geological Survey; NASA/JPL.


## Surface Temperature
*pending*

## Heat Risk
*pending*

## Flood Risk
*pending*
