import { promises as fsPromises } from 'fs';
import { cwd } from 'process';
import { join as pathJoin } from 'path';

export class InputChecker {

    constructor() {}

    checkFolder = async (name) => {
        const checkRootFolderNameRes = await this.checkRootFolderName(name);
        const checkRootFolderPathRes = await this.checkRootFolderPath(pathJoin(cwd(), name));

        return checkRootFolderNameRes && checkRootFolderPathRes;
    }

    checkRootFolderName = async (name) => {
        if (typeof name !== 'string') {
            console.error("The name of the folders must be strings");
            return false;
        }
        return true;
    }

    checkRootFolderPath = async (folderPath) => {
        // Check if the folder exists
        let stats;
        try {
            stats = await fsPromises.lstat(folderPath);   
        } catch {
            console.error(`${folderPath} does not exist`);
            return false;
        }

        if (!stats.isDirectory()) {
            console.error(`${folderPath} is not a directory`);
            return false;
        } 

        // Check if the folder is accessible
        try {
            fsPromises.access(folderPath);
        } catch {
            console.error(`No rights to access to ${folderPath}`);
            return false;
        }
        return true;
    }
}
