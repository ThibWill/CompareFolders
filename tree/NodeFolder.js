import { promises as fsPromises} from 'fs';
// import { join as joinPath } from 'path';
import { Folder } from '../model/Folder.js';
import { NodeFactory } from './NodeFactory.js';

export class NodeFolder {
    constructor(name, path) {
        this.folder = new Folder(name, path);
        this.nextNodes = [];
    }

    buildNextNodes = async () => {
        const nodeFactory = new NodeFactory(this.folder.path);
        const subs = await fsPromises.opendir(this.folder.path);
        for await (const sub of subs) {
            this.nextNodes.push(await nodeFactory.makeNode(sub));
        }
        console.log(this.nextNodes);
    }
} 