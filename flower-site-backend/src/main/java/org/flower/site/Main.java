package org.flower.site;

import org.apache.logging.log4j.Logger;
import static org.apache.logging.log4j.LogManager.getLogger;

public final class Main {
    private static Logger logger = getLogger(Main.class);

    private Main() {
        throw new UnsupportedOperationException(
                "This is a utility class and cannot be instantiated");
    }
    public static void main(final String[] args) {
        logger.info("Starting server");
    }
}
