import { createRouteHandler } from "uploadthing/server";

import { ourFileRouter } from "./core";

// Export routes for Next app Router
export const { GET, POST } = createRouteHandler({
	router: ourFileRouter,
})