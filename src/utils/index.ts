import { mkdir } from 'fs/promises';

import IGNORED_FOLDERS from '../constants/ignore';

/**
 * Ensures the given directory path exists.
 * If it doesn't, it creates it (including parent folders).
 *
 * @param dirPath - Path to the directory to ensure
 */
export const ensureDirExists = async (dirPath: string): Promise<void> => {
  await mkdir(dirPath, { recursive: true });
};

export const shouldIgnore = (folderName: string): boolean => {
  const name = folderName.toLowerCase();
  return IGNORED_FOLDERS.some((ignored) => {
    if (ignored.includes('*')) {
      const pattern = new RegExp('^' + ignored.replace('*', '.*') + '$');
      return pattern.test(name);
    }
    return name === ignored;
  });
};
