let graph = {};
let allRoutes = [];
let rawGraphData = {};


const setGraphNodes = (nodesList) => {
    graph.nodes = nodesList.reduce((acc, node) => ({ ...acc, [node.name]: node }), {});
    graph.nodesNames = Object.keys(graph.nodes);
};

const setGraphEdges = (edgesList) => {
    graph.edges = edgesList.reduce((acc, { from, to }) => ({ ...acc, [from]: [...to] }), {});
};

const setGraphData = (graphData) => {
    const { nodes: nodesList, edges: edgesList } = graphData;
    rawGraphData = graphData;

    setGraphNodes(nodesList);
    setGraphEdges(edgesList);
};

const setAllRoutes = (routes) => {
    allRoutes = routes;
};

export { graph, allRoutes, rawGraphData, setGraphData, setAllRoutes }

