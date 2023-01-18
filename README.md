# cloudflare-pages-local-dev

Test local dev with KV in Cloudflare.

Here's how to make it work:

    pnpm exec wrangler pages dev --kv TEST -- pnpm dev

Then you can visit both `/`, the homepage which is served statically via the file server, and
`/helloworld`, a dynamically generated page that is able to access the TEST KV store.

**Note** that if using Node.js 17 or higher, `pnpm dev` must run an http server that listens on an
IPv6 port ::1 instead of an IPv4 port 127.0.0.1.
