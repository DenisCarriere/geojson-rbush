import { BBox, Feature, FeatureCollection, Geometry, GeoJsonProperties } from 'geojson'

declare class RBush<G extends Geometry, P extends GeoJsonProperties> {
    insert(feature: Feature<G, P>): RBush<G, P>;
    load(features: FeatureCollection<G, P> | Feature<G, P>[]): RBush<G, P>;
    remove(feature: Feature<G, P>, equals?: (a: Feature<G, P>, b: Feature<G, P>) => boolean): RBush<G, P>;
    clear(): RBush<G, P>;
    search(geojson: Feature<G, P> | FeatureCollection<G, P> | BBox): FeatureCollection<G, P>;
    all(): FeatureCollection<any>;
    collides(geosjon: Feature<G, P> | FeatureCollection<G, P> | BBox): boolean;
    toJSON(): any;
    fromJSON(data: any): RBush<G, P>;
}

/**
 * https://github.com/mourner/rbush
 */
export default function rbush<G extends Geometry = Geometry, P = GeoJsonProperties>(maxEntries?: number): RBush<G, P>;

