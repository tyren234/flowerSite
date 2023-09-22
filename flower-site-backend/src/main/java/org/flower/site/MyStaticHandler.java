package org.flower.site;

import io.vertx.ext.web.handler.FileSystemAccess;
import io.vertx.ext.web.handler.StaticHandler;
import org.apache.logging.log4j.Logger;

import static org.apache.logging.log4j.LogManager.getLogger;

public final class MyStaticHandler {
    private static final Logger LOGGER = getLogger(MyStaticHandler.class);

    private MyStaticHandler() {
        throw new UnsupportedOperationException(
                "This is a utility class and cannot be instantiated");
    }

    public static StaticHandler create(final String path) {
        LOGGER.info("Creating static handler for path: " + path);
        return StaticHandler.create(FileSystemAccess.ROOT, path)
                .setCachingEnabled(false);
    }
}
