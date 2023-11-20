export type Save = {
  name: string
  path: string
}

export interface File extends Save {
  content: string;
}

export interface Folder extends Save {}