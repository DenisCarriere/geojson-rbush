const fs = require('fs');
const test = require('tap').test;
const path = require('path');
const load = require('load-json-file');
const write = require('write-json-file');
const rbush = require('./').default;

const directories = {
    in: path.join(__dirname, 'test', 'in') + path.sep,
    out: path.join(__dirname, 'test', 'out') + path.sep
};

const fixtures = fs.readdirSync(directories.in).map(filename => {
    return {
        filename,
        name: path.parse(filename).name,
        geojson: load.sync(directories.in + filename)
    };
});

test('geojson-rbush', t => {
    for (const fixture of fixtures) {
        const name = fixture.name;
        const filename = fixture.filename;
        const geojson = fixture.geojson;
        const tree = rbush();
        tree.load(geojson);

        // Retrive all features inside the RBush index
        const all = tree.all();

        // Search using the first item in the FeatureCollection
        const search = tree.search(geojson.features[0]);

        if (process.env.REGEN) {
            write.sync(directories.out + 'all.' + filename, all);
            write.sync(directories.out + 'search.' + filename, search);
        }

        t.deepEqual(all, load.sync(directories.out + 'all.' + filename), 'all.' + name);
        t.deepEqual(search, load.sync(directories.out + 'search.' + filename), 'search.' + name);
    }
    t.end();
});

test('geojson-rbush -- bbox', t => {
    const tree = rbush();
    tree.insert([-150, -60, 150, 60]);
    t.equal(tree.collides([-140, -50, 140, 50]), true);
    t.equal(tree.collides([-180, -80, -170, -60]), false);
    t.end();
});
