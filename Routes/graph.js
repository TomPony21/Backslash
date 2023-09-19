import { rawGraphData } from '../Logics/memoryDatabase.js';

export const graphRoutes = (server, _option, done) => {
    server.get('/graphData', async (_request, reply) => {
        reply.send(rawGraphData);
    });
    done();
};

export default graphRoutes;
