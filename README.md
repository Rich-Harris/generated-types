# Generated types

This is a demo of how you can use TypeScript's `rootDirs` option to create 'virtual modules' with types based on the code that you've written.

In this example, [`src/server.ts`](src/server.ts) is typed so that you can only return data that can be serialized as JSON in order to be sent to the client. Normally, this would mean that you can't tell anything about the return value other than that it's a valid `JSONObject`, but it would be very helpful if [`src/client.ts`](src/client.ts) had access to a `Data` type that reflected what's _actually_ being returned.

We can do this! All we need to do is create a 'proxy' file — [`types/proxy-server.ts`](types/proxy-server.ts) that mirrors the source code, but removes the type from the function and just types the parameter instead — along with a [`types/generated-types.ts`](types/generated-types.ts) that exports a `Data` type based on the `ReturnType` of the function in our `server.ts` file.

The next version of SvelteKit has a more sophisticated version of this process that is triggered by a file watcher. The one caveat is that you need to save the `server.ts` file in order for the proxy to be generated — until you do, there'll be a type mismatch.