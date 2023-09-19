import fastify from 'fastify';
import fastifyBlipp from 'fastify-blipp';
import fastifySensible from '@fastify/sensible';
import { initializeGraphData } from './Logics/graphLoader.js';
import config from './Config/index.js';
import { setGraphData } from './Logics/memoryDatabase.js';
import { extractRoutes } from './Logics/routesService.js';
import apiRoutes from './Routes/index.js';

const server = fastify();

server.register(fastifyBlipp);
server.register(fastifySensible);
server.register(apiRoutes);

server.setErrorHandler((error, _request, reply) => {
    fastify.log.error(error);
      reply.status(500).send({
      error: 'Internal Server Error',
      message: error.message,
    });
  });

const start = async () => {
    try {
        const data = await initializeGraphData();
        setGraphData(data);
        extractRoutes();
        await server.listen({ port: config.port, host: config.host });
        server.blipp();
    } catch (err) {
        server.log.error(err);
    }
};

start();
