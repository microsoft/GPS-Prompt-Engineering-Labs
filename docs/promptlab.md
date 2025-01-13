---
layout: custom
title: "Prompt Engineering Hands-on Lab"
subtitle: "HSG Alumni"
authors: ["Florian Follonier & Juan Manuel Servera - Microsoft"]
permalink: /prompt-engineering
---

<div class="section" markdown="1">
By Florian Follonier - Cloud Solution Architect Data & AI - Microsoft

& Juan Manuel Servera - Cloud Solution Architect App Innovation - Microsoft

## Introduction

<div class="step" markdown="1">
Welcome to the Prompt Engineering Hands-on Lab!

We designed this guide to assist you in understanding and utilizing Microsoft's AI companion, Copilot, in a practical and engaging manner.
  
Throughout this lab, we will delve into the world of AI-powered chat, explore diverse types of prompts, and learn how to guide an AI language model to generate the desired content. The exercises are designed to be hands-on, allowing you to learn by doing and applying your newfound skills in real-time.
  
Our goal is to equip you with the skills and understanding to effectively use AI tools like Copilot in your own projects, whether they are for business, education, or personal use.  

In the first exercise, you'll get to know how Copilot works by using simple prompts. In the second exercise, you will use Copilot to create different things for a made-up space startup. This will involve generating a company name, mission statement, logo, and even a business plan, all using different prompting techniques.
  
By the end of this lab, you will have a comprehensive understanding of how to interact with and guide AI language models, and how to use them as a powerful tool in your own projects.
  
Now, let's dive in and get started with our first exercise!
</div>
</div>

<div class="section" markdown="1">

## Exercise 1 – Warmup with Basic prompts

<div class="step" markdown="1">
For this exercise we are going to use Microsoft Copilot, your everyday AI companion, providing AI-powered chat for the web. Open it at <https://www.bing.com/chat> and, if available, configure the conversation style to “**More creative**”, because today we are going to have an ideation session and, as Linus Pauling said once:

> The best way to have a good idea is to have lots of ideas.

![Screenshot showing Copilot on the web.](./img/Copilot%20in%20desktop.png)

*If you follow this exercise from the mobile browser, you may see a different interface and Copilot may ask you for login credentials. You can use your Microsoft account to log in and continue with the exercise.*

> During this lab you need to ask more than the basic 4 questions that you get with an unauthenticated account, and more than the 10 you get if you are not using the Edge browser. In order to get the best experience with this lab, please follow these instructions:
>
> * If you still don't have one, create a Microsoft account; any Outlook, Hotmail or Live account will work, and it’s free to create one: [Microsoft account \| Sign In or Create Your Account Today – Microsoft](https://account.microsoft.com/account/CreateAccount). Notice that work accounts with Microsoft 365 enabled will also work.
> * Install the latest [Edge browser](https://www.microsoft.com/edge/download) and log in with your Microsoft account.

</div>
<div class="step" markdown="1">

### Seed Text Prompt

Write the following prompt in the “Ask me anything…” textbox:

```prompt
The space is...
```

This is the most basic prompt and is called a **seed text prompt**. A seed text prompt is a simple, open-ended statement or question that serves as a starting point for AI-generated content.

What was the output that Copilot generated? Depending on the day, it can generate a long dissertation about the vastness and complexity of space. It is just filling the emptiness…

If we want a specific answer, we need to ask a specific question. The more detailed our question, the better the answer.

Before starting with the new prompt, click on "**New topic**" button, this will clear the context to start from scratch.

![New Topic button in Copilot](img/new%20topic.png)

If you write this more explicit prompt:

```prompt
Complete this sentence:

The space is
```

You will get a shorter, more concise answer.
</div>
<div class="step" markdown="1">

### Conditional Prompt

Next, we have **conditional prompts**. You use these to tell the AI to create content based on certain rules or conditions. Try this one:

```prompt
Draft a story about a new company building a spaceship to fly to Mars, founded by an astronaut, a few former NASA and ESA engineers, and an awarded cook.
```

</div>
<div class="step" markdown="1">

### Multiple Choice Prompt

In **multiple choice prompts** you present the AI with several options from which it must choose or recommend the most appropriate one based on the context or criteria provided.

```prompt
What do we need to fly to Mars?

A) a giant Mars chocolate bar
B) a DeLorean
C) a spaceship
D) a private jet
```

</div>
<div class="step" markdown="1">

### Zero-Shot Prompt: classification example

The previous examples are simple **Zero-Shot prompts**. In these prompts we do not provide any example, we directly instruct the model to answer a question and we rely on the training data to obtain the answer. (Keep in mind that nowadays Bing chat has access to the internet, and it is also using some other techniques like meta-prompting, function calling, content filtering and RAG, so this is not completely true, but for this exercise we will just ignore this).

```prompt
Classify the text into neutral, negative, or positive.

Text: I think the space is cool.

Sentiment:
```

The LLM should tell you that this represents a positive sentiment, but maybe you want to use this value inside another software, so you can ask Copilot to give you the answer in a more structured way:

```prompt
Provide the result in json format.
```

 Or you can challenge the LLM to fix its answer if you feel it is not the right one:

```prompt
Are you sure? What if the word cool was factual in this sentence?
```

Now Copilot must have given this a second thought and understood the nuances.

</div>
<div class="step" markdown="1">

### Exercise 1 Conclusion

Excellent job on completing the first exercise!

In this exercise you learnt some basic prompting terms and techniques, such as seed text prompts, conditional prompts, multiple choice prompts, and zero-shot prompts. You also got a feel for how Copilot generates content based on different types of prompts and how you can guide the AI to produce the desired output.

> Remember, there is no 'one-size-fits-all' approach to using AI. Feel free to experiment with different types of prompts to see what results you get. The more you experiment, the more you will understand how to guide Copilot effectively. If you need some more examples for each type of prompt, check the [example guide](#some-more-example-prompts) at the end of this document.

Now, let's move on to the second exercise, where you will create your own space startup using Copilot. This exercise will allow you to experiment with different prompting techniques and generate a variety of content for your startup. Let's get started!
</div>

</div>
<div class="section" markdown="1">

## Exercise 2 – Create your own space startup

<div class="step" markdown="1">

> As we dive into the second exercise, keep in mind that this is your opportunity to get creative and experiment. Try different prompt techniques, adjust your instructions, and see how Copilot responds. Remember, there is no right or wrong way to do this – the goal is to learn and have fun!

### Copilot details

You may have noticed by now that Copilot can give you up to thirty answers in a session:

![The Copilot detail showing a max of 30 responses.](./img/30%20answers.png)

This means that after iterating 30 times you will need to start again from scratch. So, before starting this second exercise, click on the "**New topic**" button to start a new session.

In this exercise, you will use Copilot to generate various elements of your own space startup, such as the name, the mission statement, the logo, and the business plan. You will also learn how to use different prompting techniques, such as few-shot prompts, chain-of-thought prompts, and tree-of thought-prompts, to guide the generation process and produce high-quality results.
</div>
<div class="step" markdown="1">

### Step 1: Set up the context and create your Assistant's persona

Usually, Large Language Model (LLM) chat apps use a **System Message** and templates to set the rules of the generation. These are usually hidden to the user. We cannot change the system message for Copilot, but we can provide a message to define our own context for the session and assign a persona to our assistant. This is a good practice to keep the conversation focused and coherent, and lets your assistant use the right jargon and tone for the context.

In this exercise, we want you to be the CEO of a new spaceship startup, and Copilot will be your executive assistant, which will help you shape your ideas. Write a prompt like this to set the context, but remember to **tailor it to your own preferences** (i.e.: you do not need to be an awarded cook 😉):

```prompt
You are an executive assistant to an awarded cook that now is the CEO of a cutting-edge spaceship startup; your role is multifaceted and pivotal. You possess a deep understanding of aerospace engineering, which allows you to contribute significantly to the design and logistics of human spaceships bound for Mars. Your strategic planning skills enable you to assist in setting long-term goals, allocating resources effectively, and ensuring that every project milestone aligns with the company’s ambitious vision.

Your creative input is crucial in ideating innovative solutions and designing a corporate image that encapsulates the startup’s spirit. You’re adept at translating complex engineering concepts into comprehensive strategies, facilitating effective communication across departments. Your project management expertise ensures that all initiatives are executed flawlessly, reflecting the company’s commitment to pioneering space exploration.

Your personal traits are what make you extraordinary. Your passion for space, visionary outlook, and proactive nature equips you to anticipate challenges and address them with resilience. Detail-oriented and adaptable, you maintain composure under pressure, making you an indispensable asset to the CEO and the entire organization as you collectively strive to achieve the monumental task of shipping a human spaceship to Mars.
```

This was again a **Zero-Shot prompt**, but we are just establishing the context.

</div>
<div class="step" markdown="1">

### Step 2: Generate a name for your space startup

To generate a name for your space startup, you can use a **few-shot prompt**, which is a type of prompt that provides some examples of the desired output, followed by an empty line where Bing Chat will fill in a new output based on the examples. For example, you can write:

```prompt
I am looking on naming ideas for our startup that builds and sends human spaceships to Mars. 
I want the names to reflect the special background of our CEO and contain a number.

My favorite startup names:
Virgin Galactic, SpaceX, SpaceExplorers

Generate four names for our space startup:
 
```

You can try different examples or add more details to the prompt, such as the type of service or product your startup offers, to get different results.

When you have a name you like, tell it to Copilot so it remembers it for later:

```prompt
I choose [WRITE YOUR PREFERRED NAME HERE], I love it!
```

</div>
<div class="step" markdown="1">

### Step 3: Assess the costs

Sending a spaceship with humans is tough. But as a startup, we must show investors that we've done our math. You can use **chain-of-thought prompting** to enforce the model to think about all the details. It involves guiding the AI to think through the problem step-by-step, leading it to the desired output. It as simple as asking a question and then telling the AI to think step by step. For example, you can write:

```prompt
Calculate the costs of shipping a spaceship to Mars with a crew of 6, this first mission is a one-way trip, so we need to consider the travel time and how to send all the materials needed to survive on Mars. Let’s think step by step.

This part of the project is called Budget.
```

Now that you have calculated the costs of the mission, you might want to experiment with different scenarios. What if the crew size changed? Or the distance to Mars varied? Feel free to play around with these variables and see how the costs change.

You can also ask Copilot to generate a table that can be edited in Excel:

```prompt
Can you generate a table with the costs of the mission to Mars for different crew sizes?
```

</div>
<div class="step" markdown="1">

### Step 4: Generate a business plan

As you will be challenged by the investors when you present your plan, you can use a [**tree-of-thought**](https://www.promptingguide.ai/techniques/tot) prompting technique. This technique helps the model generate different ideas and choose the best one from them.

```prompt
Imagine our top three engineers are discussing three different ideas for our startup's business plan. Generate them and pick the best one.
```

**Prompt refinement and iteration**: ask for additional improvements to the content generated. For example, generate the full plan based on that idea:

```prompt
Now, based on the executive summary and budget, please complete the business plan with the following sections: the executive summary, the market analysis, the service description, the sales strategy, and the operations plan.

This part of the project work is called Business Plan.
```

</div>
<div class="step" markdown="1">

### Step 5: Generate a mission statement for your space startup

Now that we have extensive content, we can generate a mission statement for your space startup. For example, you can write:

```prompt
This part of the project work is called Mission Statement.

Write a mission statement that reflects our objectives and the values of the company.
```

</div>
<div class="step" markdown="1">

### Step 6: Create a logo for your company

Microsoft Copilot in Bing is a **multimodal** model, this means that it can also generate and understand pictures and audio. In this case the LLM already has a lot of information to work with, so we don’t need to provide lots of details, just indicate what we want in a clear statement. Let’s ask Copilot to generate a logo for our company:

```prompt
This part of the project is called Company Branding

Create a monochromatic logo in red for our company that reflects the mission and values of our company.
```

> Did you notice that Copilot crafted the prompt for DALL·E? You did not need to explain again that it was a spaceship company going to Mars, because it used the **chains** it already had. You can also go directly to <https://www.bing.com/images/create> to generate images with your own prompts.

</div>
<div class="step" markdown="1">

### Step 7: pulling it all together

In this step, you will use the AI to review and summarize all the content generated during the previous exercises. This step is crucial in ensuring that all the elements of your project are coherent and aligned with your objectives.  

Here's how to proceed:  

1. **Review:** Start by asking the AI to review the text generated during the previous exercises. This will allow you to see all the content in one place and assess its overall quality and coherence.  
2. **Summarize:** Next, instruct the AI to generate a summary of all the content. The summary should highlight the key points from each part of the project, such as the business plan, budget, and company branding.
3. **Format:** Finally, ask the AI to format the content in a specific way. For instance, you might want each part of the project to be presented as a separate section with its own title and description. This will make the content easier to read and understand.  

Remember, as with all AI interactions, you may need to refine your prompts or ask for additional improvements to get the desired output. Don't be afraid to experiment and iterate until you get the results you are looking for.

Here's the suggested prompt:

```prompt
Let's review all the text we wrote for the project. Can you give me the last edited copy for these parts of the project:

* Business Plan
* Budget
* Company Branding

And add a summary at the beginning.

Can you format it like this:

## Title ##

Description
```

And now you can start calling your investors to present your project!

Think about what you would want to show them, and ask Copilot to generate it for you. Remember, you are the CEO of a spaceship startup, and you need to show them that you are ready to take off!
</div>

</div>
<div class="section" markdown="1">

## Conclusion  

<div class="step" markdown="1">

Congratulations on completing this lab! You can download your Prompt Hero Badge below.

Remember, the key to mastering AI is practice and experimentation. Don't be afraid to try new things, make mistakes and learn from them. Keep experimenting with different prompts and techniques and see where your creativity takes you with AI!

Throughout this lab, you have gained hands-on experience in crafting and refining prompts, guiding AI language models to generate the desired content, and using AI tools for practical applications.  

You have learned about various types of prompts, including seed text prompts, conditional prompts, multiple choice prompts, zero-shot prompts, and few-shot prompts. You have seen how these prompts can guide the AI model in diverse ways, from generating creative ideas to making detailed calculations.  

By creating elements for a fictional space startup, you have also seen how these techniques can be applied to real-world scenarios. Whether you are generating a company name, mission statement, business plan, or logo, you now have the skills to use AI tools effectively in your own projects.  

We hope you find this lab engaging and insightful. We encourage you to continue exploring and experimenting with AI tools like Copilot in your future projects. Remember, the possibilities are as vast as space itself.

Happy prompting!
![You are the Prompt Hero](./img/prompt%20hero%20badge.png)

### Additional Resources

If you want to learn more, here you have a few interesting resources to extend your knowledge on prompt engineering and AI language models:

* [Prompting Guide](https://www.promptingguide.ai): A comprehensive guide to prompting techniques for AI language models.
* [OpenAI Prompt Engineering](https://platform.openai.com/docs/guides/prompt-engineering/prompt-engineering): A guide to prompt engineering by the GPT-4 creators.
* [Prompt Engineering Techniques](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/advanced-prompt-engineering): Tips and tricks for prompting with Azure OpenAI Service.

</div>
</div>
<div class="section" markdown="1">

## Glossary  

<div class="step" markdown="1">
1. **AI Companion**: An artificial intelligence system designed to assist users in various tasks.
2. **Prompt**: A command or statement that guides the AI in generating content.  
3. **Seed Text Prompt**: A simple, open-ended statement or question that serves as a starting point for AI-generated content.  
4. **Conditional Prompt**: A type of prompt where you guide the AI to generate content based on certain conditions or criteria.  
5. **Multiple Choice Prompts**: Prompts where the AI is presented with several options from which it must choose or recommend the most appropriate one.  
6. **Zero-shot Prompts**: These prompts do not provide any example; they directly instruct the model to answer a question and rely on the training data to obtain the answer.  
7. **Few-shot Prompt**: A type of prompt that provides some examples of the desired output, followed by an empty line where the AI will fill in a new output based on the examples.  
8. **Chain-of-thought Prompting**: A technique that involves guiding the AI to think through the problem step-by-step, leading it to the desired output.  
9. **Tree-of-thought Prompting**: A technique that helps the AI generate different ideas and choose the best one from them.  
10. **Multimodal Model**: An AI model capable of understanding and generating several types of data, such as text, images, and audio.  
11. **System Message**: A message that sets the rules for the generation process in AI chat apps.  
12. **Templates**: Predefined formats or structures that guide the generation process in AI chat apps.  
13. **Context**: The information that precedes the prompt and influences the AI's response.
14. **Session**: A sequence of interactions with the AI model.  

*These definitions are specific to this lab guide and the usage of Microsoft's AI companion, Copilot. The definitions might vary slightly in different contexts or with different AI systems.*
</div>
</div>
<div class="section" markdown="1">

## Some more example prompts

<div class="step" markdown="1">
Here are a few more examples for each type of prompt mentioned in the guide:  

1. **Seed Text Prompt**:  
   * "Artificial Intelligence is"  
   * "The future of space exploration lies in"  
2. **Conditional Prompt**:  
   * "Describe a day in the life of an astronaut training for a mission to Mars."  
   * "Imagine a scenario where an AI becomes the president of a country. Write a short story based on this."  
3. **Multiple Choice Prompts**:  
   * "Which of the following programming languages is most suitable for data science?  
     A) JavaScript  
     B) Python  
     C) C++  
     D) Swift"  
   * "What's the best way to travel to work?  
     A) Walking  
     B) Cycling  
     C) Driving  
     D) Public transport"  
4. **Zero-Shot Prompts**:  
   * "Translate the following sentence into French: 'The sky is clear today.'"  
   * "Solve the following equation: 2x + 3 = 9."  
5. **Few-Shot Prompts**:  
   * "Some possible names for a fitness app are:  
     * FitBuddy  
     * HealthTrack  
     * WorkoutPal  
     Generate three names for our fitness app that focuses on home workouts:"  
   * "Here are some slogans for a bakery:  
     * 'Freshness you can taste'  
     * 'Baked with love'  
     * 'Your daily bread'  
     Generate three slogans for our bakery that specializes in gluten-free products:"  
6. **Chain-Of-Thought Prompting**:
   * "Let's plan a 3-day trip to New York. Start with choosing the places to visit, then decide the best order to visit them to save travel time."
   * "We need to plan a surprise birthday party for our friend. Start by listing out what we need, then decide the order in which we should arrange everything."
7. **Tree-Of-Thought Prompting**:  
   * "Three of our best chefs are creating a new menu for our restaurant. They are discussing the main dish and have three different ideas. Generate them and select the best one based on your expertise."  
   * "Our marketing team is brainstorming ideas for our next ad campaign. They have three different concepts. Generate them and choose the best one."

Remember to tailor the prompts to your specific needs and goals, and do not be afraid to experiment with different formats and styles to get the best results.
</div>
</div>
