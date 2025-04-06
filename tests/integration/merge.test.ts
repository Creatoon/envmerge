import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { writeFile, mkdir, rm, readFile } from 'fs/promises';
import path from 'path';
import os from 'os';

import findEnvFiles from '../../src/utils/findEnvFile.js';
import { mergeEnvFiles, stringifyEnv } from '../../src/utils/mergeEnvFiles.js';

const tmpBase = path.join(os.tmpdir(), `envmerge-test-${Date.now()}`);

beforeAll(async () => {
  await mkdir(tmpBase, { recursive: true });

  await mkdir(path.join(tmpBase, 'projectA'));
  await writeFile(
    path.join(tmpBase, 'projectA', '.env'),
    'PORT=3000\nAPI_KEY=abc123\n',
  );

  await mkdir(path.join(tmpBase, 'projectB'));
  await writeFile(
    path.join(tmpBase, 'projectB', '.env'),
    'PORT=5000\nDB_URL=postgres://user\n',
  );
});

afterAll(async () => {
  await rm(tmpBase, { recursive: true, force: true });
});

describe('envmerge integration', () => {
  it('should merge multiple .env files with origin comments', async () => {
    const envFiles = await findEnvFiles(tmpBase);
    expect(envFiles.length).toBe(2);

    const parsed = await mergeEnvFiles(envFiles);
    const output = stringifyEnv(parsed);

    // Check contents
    expect(output).toContain('# From:');
    expect(output).toContain('PORT=3000');
    expect(output).toContain('API_KEY=abc123');
    expect(output).toContain('PORT=5000');
    expect(output).toContain('DB_URL=postgres://user');
  });
});
