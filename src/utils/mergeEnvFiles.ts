import { readFile } from 'fs/promises';
import { parse } from 'dotenv';
import { logWarn, logSuccess } from '../utils/logger.js';

type FileEnvBlock = {
  sourcePath: string;
  data: Record<string, string>;
};

export const mergeEnvFiles = async (
  filePaths: string[],
): Promise<FileEnvBlock[]> => {
  const result: FileEnvBlock[] = [];

  for (const filePath of filePaths) {
    try {
      const content = await readFile(filePath, 'utf-8');
      const parsed = parse(content);

      logSuccess(`Parsed ${Object.keys(parsed).length} keys from: ${filePath}`);

      result.push({
        sourcePath: filePath,
        data: parsed,
      });
    } catch (err) {
      console.log(err);
      logWarn(`Skipping file due to read/parse error: ${filePath}`);
    }
  }

  return result;
};

export const stringifyEnv = (envBlocks: FileEnvBlock[]): string => {
  let output = '';

  for (const block of envBlocks) {
    output += `\n# From: ${block.sourcePath}\n`;

    for (const [key, value] of Object.entries(block.data)) {
      output += `${key}=${value}\n`;
    }
  }

  return output.trim();
};
