import { promises as fs } from 'fs';
import path from 'path';

import { shouldIgnore } from '../utils/index.js';
import { logSuccess, logWarn } from '../utils/logger.js';

export default async (basePath: string): Promise<string[]> => {
  const results: string[] = [];

  const walk = async (dir: string) => {
    const entries = await fs.readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        if (shouldIgnore(entry.name)) {
          logWarn(`Skipping ignored folder: ${fullPath}`);
        } else {
          await walk(fullPath);
        }
      } else if (entry.isFile() && entry.name.endsWith('.env')) {
        logSuccess(`Found .env file: ${fullPath}`);
        results.push(fullPath);
      }
    }
  };

  await walk(basePath);
  return results;
};
