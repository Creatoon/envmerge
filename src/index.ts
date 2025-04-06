#!/usr/bin/env node

import path from 'path';
import { writeFile } from 'fs/promises';

import args from './cli/args';
import { ensureDirExists } from './utils/index.js';
import findEnvFiles from './utils/findEnvFile.js';
import { mergeEnvFiles, stringifyEnv } from './utils/mergeEnvFiles.js';
import { logSuccess, logError } from './utils/logger.js';

const run = async () => {
  try {
    const envPaths = await findEnvFiles(args.path);

    if (args.verbose) {
      logSuccess(`Found ${envPaths.length} .env file(s)`);
      envPaths.forEach((f) => logSuccess(`→ ${f}`));
    }

    const merged = await mergeEnvFiles(envPaths);
    const finalOutput = stringifyEnv(merged);

    const outputDir = args.output?.trim() || '.';
    await ensureDirExists(outputDir);

    const outputFile = path.join(outputDir, 'merged.txt');
    await writeFile(outputFile, finalOutput);

    logSuccess(`Merged .env written to: ${outputFile}`);
  } catch (error: any) {
    logError('Something went wrong during the merge process.');
    logError(error.message);
    process.exit(1);
  }
};

run();
