import { lstatSync, accessSync } from 'fs';
import { join as pathJoin, dirname } from 'path';
import { fileURLToPath } from 'url';

export class RootFolder {
    
    constructor(folderName) {
        this.folderName = folderName
    }

    set folderName(value) {
        if (typeof value !== 'string') {
            throw TypeError("The name of the folder must be a string");
        }
    
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = dirname(__filename);
        const folderCheck = pathJoin(__dirname, value);

        // Check if the folder exists
        let stats;
        try {
            stats = lstatSync(folderCheck);   
        } catch {
            throw Error(`${folderCheck} does not exist`);
        }

        if (!stats.isDirectory()) {
            throw Error(`${folderCheck} is not a directory`);
        } 

        try {
            accessSync(folderCheck);
        } catch {
            throw Error(`No rights to access to ${folderCheck}`);
        }

        // Check if the folder is accessible
        this._folderName = value;
    }

    get folderName() {
        return this._folderName;
    }
}
