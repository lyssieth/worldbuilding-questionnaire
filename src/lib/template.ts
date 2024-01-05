export interface TemplateAuthor {
  name: string;
  url: string;
}

export interface Template {
  name: string;
  author?: TemplateAuthor | string;
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

const CHARACTER_TEMPLATE: Template = {
  name: "Character",
  description:
    "A template for characters. Works best for humanoid/anthropomorphic, but theoretically works for others as well. It's meant to be extremely generalized, so it can't apply to everyone. The placeholders are designed to be describing a specific character `Vixie`, as an example to have an example response to most questions.",
  author: {
    name: "Lys",
    url: "https://lys.ee/contact"
  },
  sections: [
    {
      title: "Basic Personal Information",
      description:
        "For very basic information about the character. Stuff like their name, nicknames, broad origin, etc",
      questions: [
        {
          question: "What is their name?",
          placeholder: "Vixie",
          type: "text"
        },
        {
          question: "Does their name have a meaning/origin?",
          placeholder: "Vixie is just a mixup of Vixen and Pixie",
          type: "textarea"
        },
        {
          question: "Do they have any nicknames? What are their origins?",
          placeholder: "Vix, and it's just a shortening of her name",
          type: "textarea"
        },
        {
          question: "How old are they? What's their birthday?",
          placeholder: "23 years. Her birthday is on the 12th of May",
          type: "text",
          length: "long"
        },
        {
          question: "What do they identify as?",
          placeholder: "she/her",
          type: "text",
          length: "short"
        },
        {
          question: "Where were they born?",
          placeholder: "A forest, which was since destroyed",
          type: "textarea"
        },
        {
          question: "Where do they live? What's their home like?",
          placeholder:
            "In a small house on the edge of the city.\nHer home is pretty small, but it's cozy",
          type: "textarea"
        },
        {
          question: "What's their education? Do they have any degrees?",
          placeholder: "She has a degree in computer science",
          type: "textarea"
        },
        {
          question: "Are they wealthy or poor?",
          placeholder: "She's pretty poor",
          type: "textarea"
        },
        {
          question: "What's their occupation, or how do they make money?",
          placeholder: "She's a freelance software developer",
          type: "textarea"
        },
        {
          question: "How's their health?",
          placeholder: "She's pretty healthy",
          type: "textarea"
        }
      ]
    },
    {
      title: "Physical features",
      description:
        "The physical features of the character. Eyes, hair, general build, etc",
      questions: [
        {
          question: "What's their species?",
          placeholder: "Anthropomorphic Fox",
          type: "text"
        },
        {
          question: "What's their height?",
          placeholder: "180cm",
          type: "text"
        },
        {
          question: "What's their build?",
          placeholder: "Slim, but not skinny. Kinda athletic",
          type: "textarea",
          length: "short"
        },
        {
          question: "What's their hair like? (fur is a separate question)",
          placeholder: "Long, straight, and black",
          type: "textarea"
        },
        {
          question: "What's their face like?",
          placeholder:
            "Pretty average, but with a small nose. She has a small scar on her left cheek",
          type: "textarea",
          length: "long"
        },
        {
          question: "What are their eyes like? Do they need glasses/contacts?",
          placeholder: "She has green eyes, and doesn't need glasses",
          type: "textarea"
        },
        {
          question: "What's their fur like, if applicable?",
          placeholder: "Reddish-orange, with grey on her chest and belly",
          type: "textarea"
        },
        {
          question: "What are their mouth and teeth like?",
          placeholder: "Pretty average for a fox",
          type: "textarea"
        },
        {
          question: "What are their ears like?",
          placeholder: "She has large ears, with grey fur on the inside",
          type: "textarea"
        },
        {
          question: "Do they have any facial hair? What's it like?",
          placeholder: "No",
          type: "textarea"
        },
        {
          question: "Do they have any distinguishing features?",
          placeholder:
            "She has a small scar on her left cheek, and a small purple marking on her right ear",
          type: "textarea"
        },
        {
          question: "What's their neck like?",
          placeholder: "Pretty average",
          type: "textarea"
        },
        {
          question: "What are their arms like?",
          placeholder: "Athletic, but not too obviously muscular",
          type: "textarea"
        },
        {
          question:
            "What are their hands like? Are they left-handed or right-handed?",
          placeholder:
            "Pretty average, and she's left-handed, but can use both for most purposes other than handwriting",
          type: "textarea"
        },
        {
          question: "What's their chest like?",
          placeholder: "Pretty average",
          type: "textarea"
        },
        {
          question: "What are their waist and hips like?",
          placeholder:
            "They're pretty slim, with grey fur on her belly ending at the belt-line",
          type: "textarea"
        },
        {
          question: "What is their back like?",
          placeholder:
            "Rather average, but she has a large scar from her right shoulder to her waist by her left side",
          type: "textarea"
        },
        {
          question: "What are their legs like?",
          placeholder: "Pretty average",
          type: "textarea"
        },
        {
          question: "What are their feet like?",
          placeholder: "Pretty average, with grey fur on the bottom",
          type: "textarea"
        },
        {
          question: "Do they have wings? What are they like?",
          placeholder: "No",
          type: "textarea"
        },
        {
          question: "Do they have a tail? What's it like?",
          placeholder:
            "Her tail is long, and has grey fur at its tip. It's very fluffy.",
          type: "textarea"
        }
      ]
    },
    {
      title: "Behaviors / Attitudes",
      description: "How the character acts and behaves",
      questions: [
        {
          question: "What is their posture and demeanor?",
          placeholder:
            "She's pretty relaxed, but can be a bit shy. Doesn't like looking people in the eyes, or being the center of attention",
          type: "textarea"
        },
        {
          question: "How do they speak?",
          placeholder:
            "She speaks pretty softly, sometimes getting too mumbly to easily understand",
          type: "textarea"
        },
        {
          question: "How do they laugh?",
          placeholder: "She has a pretty quiet giggle, but it's quite cute",
          type: "textarea"
        },
        {
          question: "How do they cry?",
          placeholder:
            "She tries to bottle up her emotions and hide her tears, but in private she cries quite audibly",
          type: "textarea"
        },
        {
          question: "How do they walk?",
          placeholder:
            "She walks pretty normally. If she's listening to music, she'll try and walk to the beat",
          type: "textarea"
        },
        {
          question:
            "Are they well-mannered and refined, or ill-mannered and coarse? Why?",
          placeholder:
            "She's pretty well-mannered, but can be a bit crude at times. She's not very good at hiding her emotions.\nThe reason for this is that she's never been very social",
          type: "textarea"
        },
        {
          question: "Are they a clean person?",
          placeholder:
            "She's pretty clean, but gets distracted easily and often forgets to clean up her surroundings.",
          type: "textarea"
        },
        {
          question: "What is their personal aesthetic and fashion sense?",
          placeholder:
            "She likes to wear comfortable clothes, but she also tries to look good.\nShe's not very good at fashion, though, so she usually just wears jeans and a hoodie",
          type: "textarea"
        },
        {
          question: "Do they wear makeup? If so, what kind?",
          placeholder: "Only when she's going out, and it's very light",
          type: "textarea"
        },
        {
          question: "Do they wear cologne/perfume? What kind?",
          placeholder: "No",
          type: "textarea"
        },
        {
          question: "Do they wear jewelry or accessories? What kind?",
          placeholder: "She wears a simple necklace, and a watch",
          type: "textarea"
        },
        {
          question: "How do they eat and drink?",
          placeholder:
            "She eats pretty normally, and drinks a lot of water. She doesn't drink hot/fancy drinks very often, but when she does she drinks them very slowly",
          type: "textarea"
        }
      ]
    },
    {
      title: "Psychology",
      description:
        "The character's psychology, and how they think. Extremely long and perhaps not worth answering all of them. I stole this entire section from a document I found online.",
      questions: [
        {
          question: "Are they easy-going?",
          placeholder:
            "I couldn't be bothered writing placeholders so have this repeated placeholder.",
          type: "textarea"
        },
        {
          question: "Are they charming?",
          placeholder:
            "I couldn't be bothered writing placeholders so have this repeated placeholder.",
          type: "textarea"
        },
        {
          question: "How do they feel most frequently? Happy or sad?",
          placeholder:
            "I couldn't be bothered writing placeholders so have this repeated placeholder.",
          type: "textarea"
        },
        {
          question: "Are they generous or selfish? Are they self-centered?",
          placeholder:
            "I couldn't be bothered writing placeholders so have this repeated placeholder.",
          type: "textarea"
        },
        {
          question: "Are they ambitious?",
          placeholder:
            "I couldn't be bothered writing placeholders so have this repeated placeholder.",
          type: "textarea"
        },
        {
          question: "Are they anxious? Are they apprehensive?",
          placeholder:
            "I couldn't be bothered writing placeholders so have this repeated placeholder.",
          type: "textarea"
        },
        {
          question: "Are they nice or unpleasant? Are they funny or boring?",
          placeholder:
            "I couldn't be bothered writing placeholders so have this repeated placeholder.",
          type: "textarea"
        },
        {
          question: "Are they enthusiastic?",
          placeholder:
            "I couldn't be bothered writing placeholders so have this repeated placeholder.",
          type: "textarea"
        },
        {
          question: "Are they open-minded?",
          placeholder:
            "I couldn't be bothered writing placeholders so have this repeated placeholder.",
          type: "textarea"
        },
        {
          question: "Are they kind or arrogant?",
          placeholder:
            "I couldn't be bothered writing placeholders so have this repeated placeholder.",
          type: "textarea"
        },
        {
          question: "Are they a good listener?",
          placeholder:
            "I couldn't be bothered writing placeholders so have this repeated placeholder.",
          type: "textarea"
        },
        {
          question: "Do they tend to be passive?",
          placeholder:
            "I couldn't be bothered writing placeholders so have this repeated placeholder.",
          type: "textarea"
        },
        {
          question: "Are they cheap or generous?",
          placeholder:
            "I couldn't be bothered writing placeholders so have this repeated placeholder.",
          type: "textarea"
        },
        {
          question: "Are they adventurous?",
          placeholder:
            "I couldn't be bothered writing placeholders so have this repeated placeholder.",
          type: "textarea"
        },
        {
          question: "Do they tend to lie or are they sincere? Are they frank?",
          placeholder:
            "I couldn't be bothered writing placeholders so have this repeated placeholder.",
          type: "textarea"
        },
        {
          question:
            "Are they calm or bad-tempered? Nervous? Pugnacious? Violent?",
          placeholder:
            "I couldn't be bothered writing placeholders so have this repeated placeholder.",
          type: "textarea"
        },
        {
          question:
            "Are they goal-oriented with consistent goals, or are they fickle?",
          placeholder:
            "I couldn't be bothered writing placeholders so have this repeated placeholder.",
          type: "textarea"
        },
        {
          question: "Are they loose or chaste?",
          placeholder:
            "I couldn't be bothered writing placeholders so have this repeated placeholder.",
          type: "textarea"
        },
        {
          question:
            "Are they intellectual or do they tend to be more pragmatic?",
          placeholder:
            "I couldn't be bothered writing placeholders so have this repeated placeholder.",
          type: "textarea"
        },
        {
          question:
            "Are they cynical or idealistic? Are they down to earth or a dreamer?",
          placeholder:
            "I couldn't be bothered writing placeholders so have this repeated placeholder.",
          type: "textarea"
        },
        {
          question: "Are they consistent with their ideas?",
          placeholder:
            "I couldn't be bothered writing placeholders so have this repeated placeholder.",
          type: "textarea"
        },
        {
          question: "Are they understanding and indulgent or severe?",
          placeholder:
            "I couldn't be bothered writing placeholders so have this repeated placeholder.",
          type: "textarea"
        },
        {
          question: "Are they courageous?",
          placeholder:
            "I couldn't be bothered writing placeholders so have this repeated placeholder.",
          type: "textarea"
        },
        {
          question: "Are they curious or indifferent?",
          placeholder:
            "I couldn't be bothered writing placeholders so have this repeated placeholder.",
          type: "textarea"
        },
        {
          question: "Are they discreet or tends to gossip?",
          placeholder:
            "I couldn't be bothered writing placeholders so have this repeated placeholder.",
          type: "textarea"
        },
        {
          question: "Are they self-confident or clumsy?",
          placeholder:
            "I couldn't be bothered writing placeholders so have this repeated placeholder.",
          type: "textarea"
        },
        {
          question: "Are they obedient or disobedient?",
          placeholder:
            "I couldn't be bothered writing placeholders so have this repeated placeholder.",
          type: "textarea"
        },
        {
          question: "Are they honest?",
          placeholder:
            "I couldn't be bothered writing placeholders so have this repeated placeholder.",
          type: "textarea"
        },
        {
          question: "Are they tidy?",
          placeholder:
            "I couldn't be bothered writing placeholders so have this repeated placeholder.",
          type: "textarea"
        },
        {
          question: "Are they sweet and affectionate or harsh?",
          placeholder:
            "I couldn't be bothered writing placeholders so have this repeated placeholder.",
          type: "textarea"
        },
        {
          question: "Are they fussy and meticulous? Are they diligent?",
          placeholder:
            "I couldn't be bothered writing placeholders so have this repeated placeholder.",
          type: "textarea"
        },
        {
          question: "Are they biased or objective?",
          placeholder:
            "I couldn't be bothered writing placeholders so have this repeated placeholder.",
          type: "textarea"
        },
        {
          question: "Are they rational or passionate?",
          placeholder:
            "I couldn't be bothered writing placeholders so have this repeated placeholder.",
          type: "textarea"
        },
        {
          question: "Are they clever?",
          placeholder:
            "I couldn't be bothered writing placeholders so have this repeated placeholder.",
          type: "textarea"
        },
        {
          question: "Are they jealous? Are they possessive?",
          placeholder:
            "I couldn't be bothered writing placeholders so have this repeated placeholder.",
          type: "textarea"
        },
        {
          question: "Are they mature or immature?",
          placeholder:
            "I couldn't be bothered writing placeholders so have this repeated placeholder.",
          type: "textarea"
        },
        {
          question: "Are they patient?",
          placeholder:
            "I couldn't be bothered writing placeholders so have this repeated placeholder.",
          type: "textarea"
        },
        {
          question: "Are they impulsive or thoughtful? Are they cautious?",
          placeholder:
            "I couldn't be bothered writing placeholders so have this repeated placeholder.",
          type: "textarea"
        },
        {
          question: "Can they be easily influenced?",
          placeholder:
            "I couldn't be bothered writing placeholders so have this repeated placeholder.",
          type: "textarea"
        },
        {
          question: "Are they hospitable?",
          placeholder:
            "I couldn't be bothered writing placeholders so have this repeated placeholder.",
          type: "textarea"
        },
        {
          question:
            "Are they self-confident? Do they trust their own capacities?",
          placeholder:
            "I couldn't be bothered writing placeholders so have this repeated placeholder.",
          type: "textarea"
        },
        {
          question: "Are they tolerant?",
          placeholder:
            "I couldn't be bothered writing placeholders so have this repeated placeholder.",
          type: "textarea"
        },
        {
          question: "Are they invasive?",
          placeholder:
            "I couldn't be bothered writing placeholders so have this repeated placeholder.",
          type: "textarea"
        },
        {
          question: "Are they envious?",
          placeholder:
            "I couldn't be bothered writing placeholders so have this repeated placeholder.",
          type: "textarea"
        },
        {
          question: "Are they ironic?",
          placeholder:
            "I couldn't be bothered writing placeholders so have this repeated placeholder.",
          type: "textarea"
        },
        {
          question: "Are they reliable?",
          placeholder:
            "I couldn't be bothered writing placeholders so have this repeated placeholder.",
          type: "textarea"
        },
        {
          question: "Are they petty?",
          placeholder:
            "I couldn't be bothered writing placeholders so have this repeated placeholder.",
          type: "textarea"
        },
        {
          question: "Are they humble or presumptuous?",
          placeholder:
            "I couldn't be bothered writing placeholders so have this repeated placeholder.",
          type: "textarea"
        },
        {
          question: "Are they lazy or hard-working?",
          placeholder:
            "I couldn't be bothered writing placeholders so have this repeated placeholder.",
          type: "textarea"
        },
        {
          question: "Are they proud?",
          placeholder:
            "I couldn't be bothered writing placeholders so have this repeated placeholder.",
          type: "textarea"
        },
        {
          question: "Are they optimistic or pessimistic?",
          placeholder:
            "I couldn't be bothered writing placeholders so have this repeated placeholder.",
          type: "textarea"
        },
        {
          question: "Are they touchy?",
          placeholder:
            "I couldn't be bothered writing placeholders so have this repeated placeholder.",
          type: "textarea"
        },
        {
          question: "Are they deep or superficial?",
          placeholder:
            "I couldn't be bothered writing placeholders so have this repeated placeholder.",
          type: "textarea"
        },
        {
          question: "Are they a rebel?",
          placeholder:
            "I couldn't be bothered writing placeholders so have this repeated placeholder.",
          type: "textarea"
        },
        {
          question: "Are they romantic?",
          placeholder:
            "I couldn't be bothered writing placeholders so have this repeated placeholder.",
          type: "textarea"
        },
        {
          question: "Can they forgive or do they harbour resentment?",
          placeholder:
            "I couldn't be bothered writing placeholders so have this repeated placeholder.",
          type: "textarea"
        },
        {
          question: "Do they have a sense of justice?",
          placeholder:
            "I couldn't be bothered writing placeholders so have this repeated placeholder.",
          type: "textarea"
        },
        {
          question: "Are they friendly and extroverted or more introverted?",
          placeholder:
            "I couldn't be bothered writing placeholders so have this repeated placeholder.",
          type: "textarea"
        },
        {
          question: "Have they a free spirit?",
          placeholder:
            "I couldn't be bothered writing placeholders so have this repeated placeholder.",
          type: "textarea"
        },
        {
          question: "Are they hare-brained?",
          placeholder:
            "I couldn't be bothered writing placeholders so have this repeated placeholder.",
          type: "textarea"
        },
        {
          question: "Are they vain?",
          placeholder:
            "I couldn't be bothered writing placeholders so have this repeated placeholder.",
          type: "textarea"
        },
        {
          question: "Are they unstable and capricious? Are they moody?",
          placeholder:
            "I couldn't be bothered writing placeholders so have this repeated placeholder.",
          type: "textarea"
        }
      ]
    },
    {
      title: "Ideas and Passions",
      description:
        "Religion, politics, passions, hobbies, obsessions, and vices",
      questions: [
        {
          question: "What are their religious beliefs/ideas?",
          placeholder: "She's an atheist, but she's not very vocal about it",
          type: "textarea"
        },
        {
          question: "Are they superstitious?",
          placeholder:
            "Yes, but she doesn't like to admit it, due to embarrassment",
          type: "textarea"
        },
        {
          question: "What are their political views/ideas?",
          placeholder: "Placeholder. I'm not getting into this. :3",
          type: "textarea"
        },
        {
          question:
            "Do they like sports? Do they play any sports? Are they a fan?",
          placeholder: "She likes to watch esports, but doesn't play any",
          type: "textarea"
        },
        {
          question: "Do they appreciate art? How do they express it?",
          placeholder:
            "She can appreciate art, but she doesn't really express it much",
          type: "textarea"
        },
        {
          question: "Do they appreciate music? How do they express it?",
          placeholder:
            "She loves music, and she expresses it by listening to it a lot, and sometimes singing along",
          type: "textarea"
        },
        {
          question: "Do they have a passion for art?",
          placeholder:
            "She likes to draw, but she's not very good at it. She's not really trying to learn, more to just have fun",
          type: "textarea"
        },
        {
          question: "Do they like literature? Favorite book?",
          placeholder:
            "She likes to read, but she doesn't have a favorite book",
          type: "textarea"
        },
        {
          question: "Do they like movies? Any favorite movies?",
          placeholder:
            "She likes movies, but doesn't have a favorite. She prefers animated movies, though",
          type: "textarea"
        },
        {
          question:
            "Do they like photography? Do they take photos/have a camera?",
          placeholder:
            "She likes photography, and has a camera, but doesn't use it enough",
          type: "textarea"
        },
        {
          question: "Do they like animals? Do they have any pets?",
          placeholder: "She loves animals, and has a pet cat",
          type: "textarea"
        },
        {
          question: "Do they like traveling? Any favorite places or trips?",
          placeholder:
            "She likes traveling, but doesn't have a favorite place or trip. She likes to travel to places with a lot of nature, though",
          type: "textarea"
        },
        {
          question: "Do they like cooking? What's their favorite food?",
          placeholder:
            "She likes cooking, and her favorite food is probably pizza, though if you asked her she'd probably say something like \"I don't know, I like a lot of foods\"",
          type: "textarea"
        },
        {
          question: "Do they like technology?",
          placeholder:
            "She loves technology, and is a software developer. Hardware is a bit tougher for her, but she's very passionate",
          type: "textarea"
        },
        {
          question: "What are their usual means of transport?",
          placeholder:
            "She usually walks or takes her bicycle, but also uses public transit for longer trips. SHe doesn't own a car.",
          type: "textarea"
        },
        {
          question: "What's their favorite hobby?",
          placeholder:
            "She likes to play video games, and is very passionate about them. Her favorite genre is RPGs",
          type: "textarea"
        },
        {
          question: "Do they have any obsessions?",
          placeholder:
            "She's obsessed with trinkets, and has a lot of them. They are gathered from meaningful places and events, and she likes to look at them and remember the memories",
          type: "textarea"
        },
        {
          question: "Do they have any vices?",
          placeholder:
            "She's a bit of a workaholic, and tends to forget to take care of herself",
          type: "textarea"
        }
      ]
    },
    {
      title: "Social Life",
      description: "Family, loves, friendship. Their relationships with others",
      questions: [
        {
          question: "Do they have a partner? How is their relationship, if so?",
          placeholder:
            "She doesn't have a partner, but she's looking for one. She's not very good at flirting",
          type: "textarea"
        },
        {
          question: "How is their relationship with their father?",
          placeholder:
            "Her father died at a young age, before she could really get to know him",
          type: "textarea"
        },
        {
          question: "How is their relationship with their mother?",
          placeholder:
            "Her mother is still alive, and they have a very good relationship",
          type: "textarea"
        },
        {
          question: "Do they have siblings? How is their relationship?",
          placeholder:
            "She has a younger brother, and they have a good relationship",
          type: "textarea"
        },
        {
          question:
            "How is their relationship with their extended family? (grandparents, aunts, uncles, cousins, etc)",
          placeholder:
            "She doesn't have much of a relationship with her extended family",
          type: "textarea"
        },
        {
          question:
            "Do they have any close friends? How is their relationship?",
          placeholder:
            "She has a few close friends, and they have a good relationship. They mostly communicate online, though",
          type: "textarea"
        },
        {
          question:
            "How is their relationship with their connections at work? (bosses, colleagues, clients)",
          placeholder:
            "As a freelancer, she doesn't have any colleagues, but she has a good relationship with her common clients",
          type: "textarea"
        },
        {
          question: "Do they have children? How is their relationship?",
          placeholder: "No",
          type: "textarea"
        }
      ]
    }
  ]
};

const LOCATION_TEMPLATE: Template = {
  name: "Location",
  description: "A template for locations. Super basic at the moment.",
  author: {
    name: "Lys",
    url: "https://lys.ee/contact"
  },
  sections: [
    {
      title: "Basic Information",
      description:
        "This is the basic information about the location. Stuff like the name, the type of location, etc",
      questions: [
        {
          question: "Does this location have a name?",
          placeholder: "Vixie's Den",
          type: "textarea"
        },
        {
          question: "What type of location is it?",
          placeholder: "A house, in a city",
          type: "textarea"
        },
        {
          question: "Where is it located?",
          placeholder: "In a nameless city, on the edge of a forest",
          type: "textarea"
        },
        {
          question: "What's the climate like?",
          placeholder: "Temperate, with warm summers and cold winters",
          type: "textarea"
        },
        {
          question: "What's the terrain like?",
          placeholder: "Mostly flat, with a few hills",
          type: "textarea"
        }
      ]
    }
  ]
};

const COUNTRY_TEMPLATE: Template = {
  name: "Country",
  description:
    "A template for countries. Super basic at the moment. Placeholders are the USA because I'm lazy.",
  author: {
    name: "Lys",
    url: "https://lys.ee/contact"
  },
  sections: [
    {
      title: "Basic Details",
      description: "Basic details about the country. Name, location, etc",
      questions: [
        {
          question: "What is the name of the country?",
          placeholder: "The United States of America",
          type: "textarea"
        },
        {
          question: "What is the name's origin?",
          placeholder: "It's named after Amerigo Vespucci (allegedly)",
          type: "textarea"
        },
        {
          question: "What is the country's flag?",
          placeholder: "Placeholder. I can't be bothered to describe a flag",
          type: "textarea"
        },
        {
          question:
            "Is the country a member of any international organizations?",
          placeholder: "The United Nations, and NATO",
          type: "textarea"
        },
        {
          question: "What's the population of the country?",
          placeholder: "Placeholder (328.2 million as of <insert time>)",
          type: "textarea"
        }
      ]
    },
    {
      title: "Politics and Government",
      description:
        "The country's politics and government. Who's in charge, what's the political climate like, etc",
      questions: [
        {
          question: "What is the country's form of government?",
          placeholder: "Federal presidential constitutional republic",
          type: "textarea"
        },
        {
          question: "Who is the head of state?",
          placeholder: "<REDACTED> (this is timeless now)",
          type: "textarea"
        },
        {
          question: "What is the political climate like?",
          placeholder:
            "Very divided, with a lot of tension. It's not good for a country's health.",
          type: "textarea"
        },
        {
          question: "What is the country's stance on international relations?",
          placeholder: "Placeholder",
          type: "textarea"
        }
      ]
    },
    {
      title: "Geography",
      description:
        "The country's geography. Location, climate, terrain, size, etc",
      questions: [
        {
          question: "Where is the country located?",
          placeholder: "The continent of North America",
          type: "textarea"
        },
        {
          question: "What is the country's climate?",
          placeholder:
            "It varies a lot, but it's mostly temperate. The size of the country means that it has a lot of different climates",
          type: "textarea"
        },
        {
          question: "What is the country's terrain like?",
          placeholder: "It varies a lot, but it's mostly flat.",
          type: "textarea"
        },
        {
          question: "What is the country's size?",
          placeholder:
            "Basically the size of the continent of North America, give or take Canada and Mexico",
          type: "textarea"
        }
      ]
    }
  ]
};

const OBJECT_TEMPLATE: Template = {
  name: "Object",
  description: "A template for objects and items. Super basic at the moment.",
  author: {
    name: "Lys",
    url: "https://lys.ee/contact"
  },
  sections: [
    {
      title: "Basic Information",
      description: "Basic information about the object. Shape, size, name, etc",
      questions: [
        {
          question: "Does this object have a name, or is it just a thing?",
          placeholder: "Placeholder",
          type: "textarea"
        },
        {
          question: "What is the object's shape?",
          placeholder: "Placeholder",
          type: "textarea"
        },
        {
          question: "What is the object's size?",
          placeholder: "Placeholder",
          type: "textarea"
        },
        {
          question: "What is the object's color?",
          placeholder: "Placeholder",
          type: "textarea"
        }
      ]
    },
    {
      title: "Physical Details",
      description: "Physical details about the object. Material, weight, etc",
      questions: [
        {
          question: "What is the object made of?",
          placeholder: "Placeholder",
          type: "textarea"
        },
        {
          question: "What is the object's weight?",
          placeholder: "Placeholder",
          type: "textarea"
        },
        {
          question: "What is the object's texture?",
          placeholder: "Placeholder",
          type: "textarea"
        },
        {
          question: "What is the object's smell?",
          placeholder: "Placeholder",
          type: "textarea"
        },
        {
          question: "What is the object's taste?",
          placeholder: "Placeholder",
          type: "textarea"
        }
      ]
    }
  ]
};

export const DEFAULT_TEMPLATES: Template[] = [
  CHARACTER_TEMPLATE,
  LOCATION_TEMPLATE,
  COUNTRY_TEMPLATE,
  OBJECT_TEMPLATE
];

const ls = localStorage.getItem("savedTemplates") ?? "[]";
export const savedTemplates: Template[] = JSON.parse(ls) as Template[];

export function getTemplate(name: string): Template | null {
  return (
    [...DEFAULT_TEMPLATES, ...savedTemplates].find(
      (template) => template.name === name
    ) ?? null
  );
}
