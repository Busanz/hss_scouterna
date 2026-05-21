export type Category = "Allt" | "Policy" | "Allmänt" | "Övrigt";

export interface FaqItem {
  question: string;
  answer: string;
  category: Category;
}
