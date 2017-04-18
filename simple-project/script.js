mapboxgl.accessToken = 'pk.eyJ1IjoidGltb25tIiwiYSI6ImNpeGdsM3J3czAwMmMyb3BxNDhpOWY2cDMifQ.fGcwulOfy5N9AtD05ehH_A'
var colors = ['#feebe2','#fcc5c0','#fa9fb5','#f768a1','#c51b8a','#7a0177']
var simple = {
	'version': 8,
	'sources': {
		'osm': {
			'type': 'vector',
			'tiles': ['http://localhost:8080/data/openmaptiles/{z}/{x}/{y}.pbf']
		}
	},
	'layers': [{
		'id': 'background',
		'type': 'background',
		'paint': {
			'background-color': '#444'
		}
	}, {
		'id': 'water',
		'type': 'fill',
		'source': 'osm',
		'source-layer': 'water',
		'filter': ['==', '$type', 'Polygon'],
		'paint': {
			'fill-color': '#222'
		}
	}]
}

var map = new mapboxgl.Map({
	container: 'map',
	style: simple,
	center: [-74.00, 40.7135],
	zoom: 14.5,
	minZoom: 14,
	maxZoom: 14.9,
	pitch: 45,
	bearing: -17.6
})

map.addControl(new mapboxgl.NavigationControl())
map.on('load', function() {
	map.addLayer({
		'id': '3d-buildings',
		'source': 'osm',
		'source-layer': 'building',
		'filter': ['has', 'render_height'],
		'type': 'fill-extrusion',
		'paint': {
			'fill-extrusion-color': {
				'property': 'render_height',
				'stops': [
					[5, colors[0]],
					[40, colors[1]],
					[60, colors[2]],
					[80, colors[3]],
					[100, colors[4]],
					[130, colors[5]]
				]
			},
			'fill-extrusion-height': {
				'type': 'identity',
				'property': 'render_height'
			},
			'fill-extrusion-base': {
				'type': 'identity',
				'property': 'render_min_height'
			},
			'fill-extrusion-opacity': 1
		}
	})
})

// map.addLayer({
// 	'id': 'building',
// 	'source': 'osm',
// 	'source-layer': 'building',
// 	'filter': ['has', 'height'],
// 	// 'filter': ['==', 'extrude', 'true'],
// 	'type': 'fill-extrusion',
// 	// 'layout': {
// 	// 	'visibility': 'none'
// 	// },
// 	'paint': {
// 		'fill-extrusion-color': {
// 			'property': 'height',
// 			'stops': [
// 				[10, 'green'],
// 				[50, 'yellow'],
// 				[100, 'red']
// 			]
// 		},
// 		'fill-extrusion-height': {
// 			'type': 'identity',
// 			'property': 'height'
// 		},
// 		'fill-extrusion-base': {
// 			'type': 'identity',
// 			'property': 'min_height'
// 		},
// 		'fill-extrusion-opacity': 1
// 	}
// })
