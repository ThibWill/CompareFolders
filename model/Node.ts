import { File } from "./File.ts"
import { Folder } from "./Folder.ts"

export type Node = {
  value: Folder | File;
  next: Folder | File | undefined;
}

export interface NodeFile extends Node {
  value: File;
  next: undefined;
}

export interface NodeFolder extends Node {
  value: Folder;
  next: Folder | File;
}