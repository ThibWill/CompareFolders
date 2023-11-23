import { readdir, stat } from 'node:fs/promises';
import { join } from 'path'

export const FileSystem = {
  async readChildren(directoryPath) {
    try {
      const items = await readdir(directoryPath);
  
      const results = await Promise.all(
        items.map(async (item) => {
          const itemPath = join(directoryPath, item);
          const stats = await stat(itemPath);
  
          return {
            name: item,
            path: itemPath,
            isFile: stats.isFile(),
            isDirectory: stats.isDirectory(),
          };
        })
      );
  
      return results;
    } catch (error) {
      console.error('FileSystem readChildren error')
    }
  }
}