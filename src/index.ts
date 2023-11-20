import { TreeFileSystem } from './tree/TreeFileSystem.js';
import { InputChecker } from './InputChecker.js';
import { argv } from 'process';

(async function() {
    const argc = argv.length;
    if (argc < 4) {
      console.log("Too few arguments, please provide two folder names");
      return;
    }

    const [ folderName1, folderName2 ] = [argv[2], argv[3]];

    const inputChecker = new InputChecker();
    const checkFolder1 = await inputChecker.checkFolder(folderName1);
    const checkFolder2 = await inputChecker.checkFolder(folderName2);

    if (!checkFolder1 || !checkFolder2) {
      return;
    }

    if (folderName1 === folderName2) {
      console.log("You provided the same directory twice");
      return;
    }

    try {
      const tree1 = new TreeFileSystem(folderName1);
      const tree2 = new TreeFileSystem(folderName2);
    } catch (err) {
      console.log(err);
    }
})();
