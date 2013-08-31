// Sample TypeScript definition of OpenLayers
//
// **********   NOTICE   **************
// There are definition only which I need
// ************************************

declare module OpenLayers {
	class Bounds {
		constructor(left: number, bottom: number, right: number, top: number);
		clone(): Bounds;
	}
	class Control {
	}
	module Control {
		class Navigation extends Control {
			constructor(options: any);
		}
		class PanZoomBar extends Control {
		}
		class KeyboardDefaults extends Control {
		}
		class Attribution extends Control {
		}
		class ScaleLine extends Control {
			constructor(options: any);
		}
		class Button extends Control {
			constructor(options: any);
		}
	}
	class Events {
		register(type: string, obj: any, func: any);
		un(obj: any);
	}
	module Feature {
		class Vector {
			constructor(geometry: Geometry, opt?: any, style?: any);
		}
	}
	class Geometry {
		distanceTo(geometry: Geometry, options?: any);
	}
	module Geometry {
		class LineString extends Geometry {
			constructor(line: Point[]);
		}
		class MultiLineString extends Geometry {
			constructor(components: LineString[]);
		}
		class Point extends Geometry {
			constructor(lon: number, lat: number);
			transform(p1: Projection, p2: Projection): Point;
		}
	}
	class Icon {
		constructor(url: string, size: Size, offset: Pixel);
	}
	class Layer {
		addMarker(marker: Marker): void;
		removeMarker(marker: Marker): void;

	}
	module Layer {
		class Markers extends Layer {
			constructor(name: string);
			destroy();
		}
		class OSM extends Layer {
		}
		class Vector extends Layer {
			constructor(name: string, options?: any);
			addFeatures(vlist: Feature.Vector[]): void;
			destroy();
		}
	}
	class LonLat {
		constructor(lon: number, lat: number);
		transform(source: Projection, dest: Projection): LonLat;
	}
	class Map {
		constructor(div: string, options: _MapOptions);
		addControl(control: Control, px?: Pixel): void;
		addControls(controls: Control[], pixels?: Pixel[]): void;
		addLayer(layer: Layer): void;
		removeLayer(layer: Layer, setNewBaseLayer?: boolean): void;
		getLayersByName(match: string): Layer[];
		destroy();
		setCenter(lonlat: LonLat, level?: number);
		getCenter(): LonLat;
		getCurrentSize(): Size;
		panTo(lonlat: LonLat);
		getZoom(): number;
		events: Events;
	}
	interface _MapOptions {
		controls: Control[];
		projection: Projection;
		displayProjection: Projection;
		units?: string;
		maxResolution: number;
		maxExtent: Bounds;
		restrictedExtent: Bounds;
	}
	class Marker {
		constructor(lonlat: LonLat, icon: Icon);
		icon: Icon;
	}
	class Pixel {
		constructor(x: number, y: number);
	}
	class Projection {
		constructor(projCode: string);
	}
	class Size {
		constructor(width: number, height: number);
		w: number;
		h: number;
	}
	class StyleMap {
		constructor(style?: any, options?: any);
	}
}

/*
declare module webtis.Layer {
	class BaseMap {
		constructor(name: string);
	}
}
*/
