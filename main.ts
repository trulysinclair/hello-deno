import { Project, SyntaxKind } from "https://deno.land/x/ts_morph/mod.ts";

const project = new Project();

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  project.addSourceFilesAtPaths("test-file.ts");

  const sourceFile = project.getSourceFiles()[0];
  const result = sourceFile.getVariableDeclaration('helloDeno')?.getInitializerOrThrow()
  result?.replaceWithText('"Hello World!"');


  console.log(result);
}

await project.save();
