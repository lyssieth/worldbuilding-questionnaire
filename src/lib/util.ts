export function exportQuestions(exportBlock: HTMLTextAreaElement) {
  const sections = document.querySelectorAll(".section");
  // console.debug({ sections });
  const exportText = Array.from(sections)
    .map((section) => {
      const sectionTitle = section.getAttribute("data-section");
      const sectionDescription = section.querySelector(".section-description")
        ?.textContent;
      const questions = section.querySelectorAll(".question");
      // console.debug({ questions });

      const questionTexts = Array.from(questions)
        .map((question) => {
          const questionText = question.getAttribute("data-question");
          const answerEl: HTMLInputElement | HTMLTextAreaElement | null =
            question.querySelector(".answer");
          const answer = answerEl?.value;

          // console.debug({ questionText, answer });
          if (answer) {
            return `## ${questionText}\n${answer}`;
          } else {
            return null;
          }
        })
        .join("\n");

      // console.debug({ questionTexts });

      if (questionTexts.trim().length > 0) {
        return `# ${sectionTitle}\n${sectionDescription}\n${questionTexts}`;
      } else {
        return null;
      }
    })
    .join("\n\n");

  if (exportText.trim().length > 0) {
    exportBlock.value = exportText;
  } else {
    exportBlock.value = "";
  }
}
