package org.flower.site;

import io.vertx.core.AbstractVerticle;
import io.vertx.core.Promise;
import io.vertx.core.http.HttpServer;
import io.vertx.ext.web.Router;
import io.vertx.ext.web.impl.RouterImpl;
public final class MainVerticle extends AbstractVerticle {

    public void start(final Promise<Void> startPromise) {
        HttpServer server = vertx.createHttpServer();
        Router router = new RouterImpl(vertx);
        router.route()
                .handler(MyStaticHandler.create("D:\\gits\\flowerSite\\flower-site-ui\\build"));

        final int listenPort = 8080;
        server.requestHandler(router)
                .listen(listenPort, res -> {
                    if (res.succeeded()) {
                        startPromise.complete();
                    } else {
                        startPromise.fail(res.cause());
                    }
                });
    }
}
