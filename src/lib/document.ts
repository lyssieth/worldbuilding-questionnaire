import { Document, Paragraph } from "docx";

export function exportToDoc(markdown: string): Document {
  const children = [];

  for (const line of markdown.split(/\n+/)) {
    if (line.startsWith("#")) {
      const [level, ...rest] = line.split(" ");
      children.push(
        new Paragraph({
          text: rest.join(" "),
          heading: `Heading${level.length}` as
            | "Heading1"
            | "Heading2"
            | "Heading3"
            | "Heading4"
            | "Heading5"
            | "Heading6"
        })
      );
    } else {
      children.push(new Paragraph({ text: line }));
    }
  }

  const doc = new Document({
    description:
      "A document exported from markdown, created using https://lyssieth.github.io/worldbuilding-questionnaire/",
    sections: [
      {
        children: children
      }
    ]
  });

  return doc;
}
