import { Node, NodeFolder, NodeFile } from '../model/Node';
import { File } from '../model/File'
import { Folder } from '../model/Folder'

export class NodeFactory {
  public getNode (type: string, value, next: File | Node): Node {
    if (type === 'file') {
      const file: File = {
        name: "FileName",
        path: "path",
        content: "content",
      }
      const nodeFile: NodeFile = {
        value: file,
        next: undefined
      }
      return nodeFile
    } else {
      const file: Folder = {
        name: "FileName",
        path: "path",
      }
      const nodeFile: NodeFolder = {
        value: file,
        next: nextNode
      }
      return nodeFile
    }
  }
}