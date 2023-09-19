import { rawGraphData, graph, allRoutes } from '../Logics/memoryDatabase.js';
import { publicRoutesQuery, endSinkRouteQuery, hasVulnerabilitiesRoutesQuery } from '../Logics/routesService.js';
import { getRelevantRoutes } from '../Logics/utils.js';

export const routes = (server, _option, done) => {
    server.get('/', async (_request, reply) => {
        reply.send(allRoutes);
    });

    server.get('/publicRoutes', async (_request, reply) => {
        const puclicRoutes = getRelevantRoutes(graph.nodes, allRoutes, publicRoutesQuery)
        reply.send(puclicRoutes);
    });

    server.get('/endSinkRoutes', async (_request, reply) => {
        const endSinkRoutes = getRelevantRoutes(graph.nodes, allRoutes, endSinkRouteQuery)
        reply.send(endSinkRoutes);
    });

    server.get('/hasVulnerabilitiesRoutes', async (_request, reply) => {
        const hasVulnerabilitiesRoutes = getRelevantRoutes(graph.nodes, allRoutes, hasVulnerabilitiesRoutesQuery)
        reply.send(hasVulnerabilitiesRoutes);
    });

    done();
};

export default routes;
