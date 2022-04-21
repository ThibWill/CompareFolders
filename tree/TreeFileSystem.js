import { lstatSync, accessSync } from 'fs';
import { cwd } from 'process';
import { join as pathJoin } from 'path';
import { NodeFolder } from './NodeFolder.js'

export class TreeFileSystem {
    constructor(rootFolderName) {
        this.rootFolderName = rootFolderName;
        this.rootFolderpath = '';
        this.rootNode = null;
        this.init();
    }

    init() {
        this.checkRootFolderName(this.rootFolderName);
        const folderPath = pathJoin(cwd(), this.rootFolderName);
        this.checkRootFolderPath(folderPath);
        this.rootFolderpath = folderPath;
        this.buildRootNode();
    }

    // To move in inputHandler
    checkRootFolderName = (name) => {
        if (typeof name !== 'string') {
            throw TypeError("The name of the folder must be a string");
        }
    }

    checkRootFolderPath = (folderPath) => {
        // Check if the folder exists
        let stats;
        try {
            stats = lstatSync(folderPath);   
        } catch {
            throw Error(`${folderPath} does not exist`);
        }

        if (!stats.isDirectory()) {
            throw Error(`${folderPath} is not a directory`);
        } 

        // Check if the folder is accessible
        try {
            accessSync(folderPath);
        } catch {
            throw Error(`No rights to access to ${folderPath}`);
        }
    }

    buildRootNode() {
        this.rootNode = new NodeFolder(this.rootFolderName, this.rootFolderpath);
        this.rootNode.buildNextNodes();
    }
}