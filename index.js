import { TreeFileSystem } from './tree/TreeFileSystem.js';

(async function() {
    /*try {
        const folderTree = new RootFolder("testss");
        console.log(folderTree.folderName);
    } catch (err) {
        console.log(err);
    }*/


    try {
        new TreeFileSystem("test");
    } catch (err) {
        console.log(err);
    }
})()

