// This file maps Ultraviolet to public CDNs so Vercel doesn't throw 404s
self.__uv$config = {
    prefix: '/uv/service/',
    bare: 'https://uv.student-portal.workers.dev/bare/', // Free public backend network link
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    
    // Point these to the public bundle instead of local static files
    handler: 'https://cdn.jsdelivr.net/npm/@titaniumnetwork-dev/ultraviolet@latest/dist/uv.handler.js',
    client: 'https://cdn.jsdelivr.net/npm/@titaniumnetwork-dev/ultraviolet@latest/dist/uv.client.js',
    bundle: 'https://cdn.jsdelivr.net/npm/@titaniumnetwork-dev/ultraviolet@latest/dist/uv.bundle.js',
    config: '/uv/uv.config.js',
    sw: 'https://cdn.jsdelivr.net/npm/@titaniumnetwork-dev/ultraviolet@latest/dist/uv.sw.js',
};
