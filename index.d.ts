/// <reference types="geojson" />

export type BBox = number[]
export type Feature = GeoJSON.Feature<any> | GeoJSON.GeometryObject
export type Features = GeoJSON.FeatureCollection<any> | GeoJSON.GeometryCollection

export declare class RBush {
    insert(feature: Feature | BBox): RBush;
    load(features: Features | BBox[]): RBush;
    remove(feature: Feature | BBox, equals?: (a: Feature, b: Feature) => boolean): RBush;
    clear(): RBush;
    search(geojson: Feature | Features | BBox): Features;
    all(): Features;
    collides(geosjon: Feature | Features | BBox): boolean;
    toJSON(): any;
    fromJSON(data: any): RBush;
}

/**
 * https://github.com/mourner/rbush
 */
export default function rbush(maxEntries?: number): RBush;
