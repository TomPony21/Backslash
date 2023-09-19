import config from "../Config/index.js";
import graphRoutes from "./graph.js";
import routes from "./routes.js";

const apiRoutes = (server, _option, done) => {
    server.register(routes, { prefix: config.routesPrefix });
    server.register(graphRoutes, { prefix: config.graphPrefix });
    done();
};

export default apiRoutes;