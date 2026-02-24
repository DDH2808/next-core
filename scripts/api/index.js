const fs = require('fs');
const { codegen } = require('./bundle');

if (!process.env.SWAGGER_URL) {
  throw new Error('No swagger url found!');
}

if (!process.env.GENERATED_API_PATH) {
  throw new Error('Please specific generated path');
}

if (!process.env.FETCHER_IMPORT_PATH) {
  throw new Error('Please specific fetch import path');
}

if (fs.existsSync(process.env.GENERATED_API_PATH)) {
  fs.rmSync(process.env.GENERATED_API_PATH, { recursive: true });
}

codegen({
  methodNameMode: 'operationId',
  remoteUrl: process.env.SWAGGER_URL,
  outputDir: process.env.GENERATED_API_PATH,
  multipleFileMode: true,
  fetcherImportPath: process.env.FETCHER_IMPORT_PATH,
  modelMode: 'interface',
});
