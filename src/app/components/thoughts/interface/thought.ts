export interface RootThought {
  pensamentos: Thought[];
}

export interface Thought {
  id: number;
  conteudo: string;
  autoria: string;
  modelo: string;
}
