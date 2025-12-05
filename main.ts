import { serveFile } from "jsr:@std/http/file-server";
import { Sandbox } from "@deno/sandbox";

await using sandbox = await Sandbox.create();

// await sandbox.writeTextFile("hello.ts", "console.log('Hello, Sandbox!');");
// const text = await sandbox.sh`pwd`.text();
const result = await sandbox.eval(`
  const a = 1;
  const b = 2;
  a + b;
`);

Deno.serve((req: Request) => {
    return serveFile(req, "./index.html");
});
