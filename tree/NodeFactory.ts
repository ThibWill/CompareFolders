import { Node, NodeFolder, NodeFile } from '../model/Node';
import { Save } from '../model/Save'

export class NodeFactory {
  public getNode (type: string, value, next: Array<Save>): Node {
    if (type === 'file') {
      const nodeFile: NodeFile = {
        value:  {
          name: "FileName",
          path: "path",
          content: "content",
        },
        next: undefined
      }
      return nodeFile
    } else {
      const nodeFolder: NodeFolder = {
        value: {
          name: "FileName",
          path: "path",
        },
        next
      }
      return nodeFolder
    }
  }
}