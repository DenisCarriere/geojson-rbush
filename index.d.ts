import { BBox, Feature, FeatureCollection, Geometry } from '@turf/helpers'

declare class RBush {
    insert(feature: Feature<any> | Geometry | BBox): RBush;
    load(features: FeatureCollection<any> | BBox[]): RBush;
    remove<T extends Feature<any> | Geometry | BBox>(feature: T, equals?: (a: T, b: T) => boolean): RBush;
    clear(): RBush;
    search<G extends Geometry>(geojson: Feature<G> | FeatureCollection<G> | BBox): FeatureCollection<G>;
    all(): FeatureCollection<any>;
    collides(geosjon: Feature<any> | FeatureCollection<any> | BBox): boolean;
    toJSON(): any;
    fromJSON(data: any): RBush;
}

/**
 * https://github.com/mourner/rbush
 */
export default function rbush(maxEntries?: number): RBush;

