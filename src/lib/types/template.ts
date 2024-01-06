export interface TemplateAuthor {
  name: string;
  url: string;
}

export interface Template {
  name: string;
  author?: TemplateAuthor | string;
  id?: string;
  description: string;
  sections: TemplateSection[];
}

export interface TemplateSection {
  title: string;
  description?: string;
  questions: TemplateQuestion[];
}

export interface TemplateQuestionBase {
  question: string;
  placeholder?: string;
}

export interface TemplateTextQuestion extends TemplateQuestionBase {
  type: "text";
  length?: "short" | "medium" | "long";
}

export interface TemplateTextareaQuestion extends TemplateQuestionBase {
  type: "textarea";
  length?: "short" | "medium" | "long";
}

export interface TemplateNumberQuestion extends TemplateQuestionBase {
  type: "number";
}

export type TemplateQuestion =
  | TemplateTextQuestion
  | TemplateTextareaQuestion
  | TemplateNumberQuestion;
