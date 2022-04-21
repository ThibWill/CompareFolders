import { NodeFolder } from './NodeFolder.js';
import { File } from '../model/File.js';
import { join as pathJoin } from 'path';

export class NodeFactory {

    constructor(parentNodePath) {
        this.parentNodePath = parentNodePath;
    }

    makeNode = async (nodeDirent) => {
        let childNode = null;
        if (nodeDirent.isFile()) {
            childNode = new File(nodeDirent.name, pathJoin(this.parentNodePath, nodeDirent.name), "");
        } else {
            childNode = new NodeFolder(nodeDirent.name, pathJoin(this.parentNodePath, nodeDirent.name));
            await childNode.buildNextNodes();
        }
        return childNode;
    }
}