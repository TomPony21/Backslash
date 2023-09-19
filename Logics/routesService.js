import { graph, setAllRoutes } from "./memoryDatabase.js";

const extractBranchRoutes = (nodeName, visited, path) => {
  const routes = [];

  visited[nodeName] = true;
  path.push(nodeName);

  if (!graph.edges[nodeName]) {
    routes.push([...path]);
  } else {
    graph.edges[nodeName].forEach((neighbor) => {
      if (!visited[neighbor]) {
        routes.push(...extractBranchRoutes(neighbor, { ...visited }, [...path]));
      }
    });
  }

  return routes;
};

const extractRoutes = () => {
  const allRoutes = graph.nodesNames.reduce((acc, node) => [...acc, ...extractBranchRoutes(node, {}, [])], []);
  setAllRoutes(allRoutes);
};

const publicRoutesQuery = {
  index: 0,
  condition: {
    publicExposed: true,
  },
};

const endSinkRouteQuery = {
  index: -1,
  condition: {
    kind: ["rds", "sql"],
  },
};

const hasVulnerabilitiesRoutesQuery = {
  index: "some",
  condition: {
    vulnerabilities: (value) => !!value,
  },
};

export {
  extractRoutes,
  publicRoutesQuery,
  endSinkRouteQuery,
  hasVulnerabilitiesRoutesQuery,
};
