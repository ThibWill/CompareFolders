import { Save, File, Folder } from "./Save.ts"

export type Node = {
  value: Save;
  next: Array<Save> | undefined;
}

export interface NodeFile extends Node {
  value: File;
  next: undefined;
}

export interface NodeFolder extends Node {
  value: Folder;
  next: Array<Save>;
}