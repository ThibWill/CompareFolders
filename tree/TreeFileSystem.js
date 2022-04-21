import { cwd } from 'process';
import { join as pathJoin } from 'path';
import { NodeFolder } from './NodeFolder.js'

export class TreeFileSystem {
    constructor(rootFolderName) {
        this.rootFolderName = rootFolderName;
        this.rootFolderpath = pathJoin(cwd(), this.rootFolderName);
        this.rootNode = new NodeFolder(this.rootFolderName, this.rootFolderpath);
        this.rootNode.buildNextNodes();
    }

    getPathsTree = (currentNode) => {
        const paths = [];
        currentNode.nextNodes.forEach((nextNode) => {
            paths.push(nextNode.folder.path);
        })
    }
}