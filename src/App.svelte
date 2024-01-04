<script lang="ts">
  import Question from "./lib/Question.svelte";
  import QuestionList from "./lib/QuestionList.svelte";

  function exportQuestions() {
    const exportBlock = document.getElementById(
      "export"
    ) as HTMLTextAreaElement;
    const questionLists = document.querySelectorAll(".question-block");
    console.debug({ questionLists });
    const exportText = Array.from(questionLists)
      .map((questionList) => {
        const listTitle =
          questionList.querySelector(".list-title")?.textContent;
        const questions = questionList.querySelectorAll(".question");
        console.debug({ questions });

        const questionTexts = Array.from(questions)
          .map((question) => {
            const questionText =
              question.querySelector(".question-text")?.textContent;
            const answerEl: HTMLInputElement | HTMLTextAreaElement | null =
              question.querySelector(".answer");
            const answer = answerEl?.value;

            console.debug({ questionText, answer });
            return `## ${questionText}\n${answer}`;
          })
          .join("\n");

        return `# ${listTitle}\n${questionTexts}`;
      })
      .join("\n\n");
    exportBlock.value = exportText;
  }
</script>

<main>
  <h1>Worldbuilding Questionnaire</h1>

  <h2>What is this?</h2>
  <p>
    The purpose of this website is to act as a questionnaire for worldbuilding
    purposes. This is an experiment just for characters. If this experiment
    works, I intend to expand it to support more. This is currently just a proof
    of concept/prototype. As well as just more than characters, I want
    custom/editable questions and more.
  </p>

  <p>
    This is a work in progress. If you have any suggestions, please leave an
    issue on <a href="https://github.com/lyssieth/worldbuilding-questionnaire"
      >the github</a
    >, or contact me
    <a href="https://lys.ee/contact">on one of these places I exist on</a>.
  </p>
  <hr />
  <h2>The Questionnaire Itself</h2>
  <QuestionList title="Basic Personal Info">
    <Question
      question="What is their name? Does it have a meaning?"
      placeholder="Vixie, derived from 'Vixen' meaning 'fox'"
    />
    <Question
      question="Do they have a nickname, and if so, what is its origin?"
      placeholder="Vix; it's just a shortening with no meaningful origin."
    />
    <Question question="What is their age?" placeholder="18" type="number" />
    <Question question="Where were they born?" placeholder="The Forest" />
  </QuestionList>
  <QuestionList title="Physical Appearance">
    <Question
      question="What is their height?"
      placeholder="180cm"
      type="text"
    />
    <Question question="What is their weight?" placeholder="60kg" type="text" />
    <Question
      question="What is their build?"
      placeholder="Slim, but not skinny"
      length="short"
    />
    <Question
      question="What is their hair like?"
      placeholder="Long, red"
      length="short"
    />
    <Question
      question="What is their eye colour?"
      placeholder="Green"
      length="short"
    />
  </QuestionList>
  <QuestionList title="Personality / Beliefs">
    <Question question="What is their way of speaking?" />
    <Question
      question="What are their views/ideas on religion?"
      length="long"
    />
    <Question
      question="What are their views/ideas on politics?"
      length="long"
    />
  </QuestionList>

  <h2>Export Block</h2>
  <p>
    This textarea contains the above questionnaire as markdown formatted text.
    Click 'Refresh' to refresh it.
  </p>
  <!-- Shouldn't allow typing, but should allow selecting/etc -->
  <textarea rows="25" cols="150" id="export" readonly /><br />
  <button on:click={exportQuestions}>Refresh</button>

  <hr />
</main>
