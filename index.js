// Require the framework and instantiate it
const fastify = require('fastify')({
    logger: true,
});

fastify.register(require('fastify-static'), {
    root: __dirname + '/static',
    prefix: '/',
  });

// Declare a route
fastify.get('/api', function (request, reply) {
    reply.send({ hello: 'world' });
});

// Run the server!
fastify.listen(process.env.PORT || 3000, '0.0.0.0', function (err, address) {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
    fastify.log.info(`server listening on ${address}`);
});
