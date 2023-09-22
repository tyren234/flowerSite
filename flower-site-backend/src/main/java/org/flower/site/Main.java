package org.flower.site;

import io.vertx.core.Verticle;
import io.vertx.core.Vertx;
import org.apache.logging.log4j.Logger;

import static org.apache.logging.log4j.LogManager.getLogger;

public final class Main {
    private static final Logger LOGGER = getLogger(Main.class);

    private Main() {
        throw new UnsupportedOperationException(
                "This is a utility class and cannot be instantiated");
    }

    public static void main(final String[] args) {
        LOGGER.info("Starting server");
        Vertx vertx = Vertx.vertx();
        Verticle mainVerticle = new MainVerticle();
        vertx.deployVerticle(mainVerticle)
                .onComplete(res -> {
                    if (res.succeeded()) {
                        LOGGER.info("Deployment id is: " + res.result());
                    } else {
                        LOGGER.info("Deployment failed!" + res.cause());
                        vertx.close();
                    }
                });
    }
}
