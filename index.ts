const server = Bun.serve({
    port: 3000,
    fetch(req) {
        const url = new URL(req.url);

        if (url.pathname === "/about.html") {
            return Response.redirect("/home/adabral/codebase/bun_project/about.html", 302);
        }

        if (url.pathname === "/contact") {
            return new Response("This is our Contact Page")
        }

        //handling error
        if (url.pathname === '/error') {
            throw new Error("Page missing :")
        }

        if (url.pathname === '/') {
            return new Response("Welcome to Homepage")
        }
        throw new Error("Page missing :")
    }
})


console.log(`Currently listening on port http://localhost:${server.port}`);
