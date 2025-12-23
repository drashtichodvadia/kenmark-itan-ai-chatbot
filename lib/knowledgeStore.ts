// lib/knowledgeStore.ts

export type KnowledgeItem = {
  question: string;
  answer: string;
};

let knowledge: KnowledgeItem[] = [];

export function setKnowledge(data: KnowledgeItem[]) {
  knowledge = data;
}

export function getAllKnowledge(): KnowledgeItem[] {
  return knowledge;
}

export function hasKnowledge(): boolean {
  return knowledge.length > 0;
}
