const { fetch } = require("../dist/graphqlx.node");

let query = `{
  getLocation(ip: "189.59.228.170") {
    country {
      names {
        en
      }
      geoname_id
      iso_code
    }
    location {
      latitude
      longitude
    }
  }
}`;

test('Graphloc: The request should be resolved', () => {
  return expect(fetch("https://api.graphloc.com/graphql", query)).resolves.toBeObject();
});