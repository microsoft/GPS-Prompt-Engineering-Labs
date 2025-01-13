---
layout: custom
title: "Prompt Engineering Hands-on Lab"
subtitle: "Microsoft Partner Consultant Training"
authors: ["Juan Manuel Servera - Microsoft"]
permalink: /prompt-engineering-partners
draft: true
---

<!-- The text I shared is a hands-on lab for learning prompt engineering. I want to transform it to adapt the use case to resolve a business problem. The user profile would be a consultant working at a Microsoft Partner, what we call a System Integrator. These people work with customers to build software solutions to their problems, and they typically have to do architecture design sessions, assess the complexity and effort of a customer project. I want that this lab teaches them how to use Microsoft Copilot to improve their daily work, like getting a summary of a customer before a meeting, or preparing a plan after talking with the customer about their project. We are going to do this in multiple steps. The first step is thinking on a fake customer and business case.

Customer Profile:
Our fake customer could be a mid-sized manufacturing company, let's call them "Acme Manufacturing". They have been in business for over 50 years, producing high-quality industrial equipment.

Business Case:
Recently, Acme Manufacturing has been facing challenges with their inventory management and supply chain processes. They are looking to digitally transform these areas to increase efficiency, reduce costs, and improve customer satisfaction. This involves implementing a new inventory management system, integrating it with their existing systems, and training their staff on the new processes.

The Consultant's Role:
As a consultant, the task would be to work closely with Acme Manufacturing to understand their specific needs and goals, design an appropriate solution, estimate the complexity and effort required, and prepare a detailed plan for implementing the solution. This would involve multiple meetings with the customer, assessments of their current systems and processes, and possibly some research on the latest technologies and best practices in inventory management and supply chain optimization.

The consultant could use Microsoft Copilot in several ways to assist with this process. For example, they could use it to quickly gather information about the customer and their industry before a meeting, generate a list of potential questions to ask during the meeting, or draft a high-level plan for the project after the meeting. They could also use it to assist with the technical aspects of the project, such as generating code snippets, troubleshooting issues, or researching new technologies. -->

## Introduction  

Welcome to the Prompt Engineering Hands-on Lab!  

We've designed this guide to assist you in understanding and utilizing Microsoft's AI companion, Copilot, in a practical and engaging manner.  

Throughout this lab, we'll delve into the world of AI-powered chat, explore diverse types of prompts, and learn how to guide an AI language model to generate the desired content. The exercises are designed to be hands-on, allowing you to learn by doing and applying your newfound skills in real-time.  

Our goal is to equip you with the skills and understanding to effectively use AI tools like Copilot in your own projects.
  
In the first exercise, you'll learn how to use Copilot to quickly gather information about a client and their industry before a meeting. In the second exercise, you will use Copilot to generate a list of potential questions to ask during the meeting, draft a high-level plan for the project after the meeting, and assist with the technical aspects of the project.  

By the end of this lab, you'll have a comprehensive understanding of how to interact with and guide AI language models, and how to use them as a powerful tool in your own projects.  

Now, let's dive in and get started with our first exercise!

## Exercise 1 – Preparing for a Customer Meeting  

For this exercise we're going to use Microsoft Copilot, your everyday AI companion.  

### Seed Text Prompt  

Write the following prompt in the “Ask me anything…” textbox:  

```prompt  
Acme Manufacturing is...  
```  

This is the most basic prompt and is called a **seed text prompt**. A seed text prompt is a simple, open-ended statement or question that serves as a starting point for AI-generated content.  

What was the output that Copilot generated? Depending on the day, it can generate a brief overview about Acme Manufacturing.  

If we want a specific answer, we need to ask a specific question. The more detailed our question, the better the answer.  

Before starting with the new prompt, click on "**New topic**" button, this will clear the context to start from scratch.  

If you write this more explicit prompt:  

```prompt  
Research about Acme Manufacturing  
```  

You will get a more detailed and focused answer.  

### Conditional Prompt  

Next, we have **conditional prompts**. You use these to tell the AI to create content based on certain rules or conditions. Try this one:  

```prompt  
Draft a brief overview of the manufacturing industry trends in 2022.  
```  

### Multiple Choice Prompt  

In **multiple choice prompts** you present the AI with several options from which it must choose or recommend the most appropriate one based on the context or criteria provided.  

```prompt  
What are the key areas that Acme Manufacturing should focus on to improve their supply chain processes?  
   
A) Improve data visibility  
B) Optimize inventory management  
C) Automate processes  
D) Improve supplier relationships  
```  

### Zero-Shot Prompt: classification example  

The previous examples are simple **Zero-Shot prompts**. In these prompts we do not provide any example, we directly instruct the model to answer a question and we rely on the training data to obtain the answer.  

```prompt  
Classify the following text into neutral, negative, or positive.  
   
Text: Acme Manufacturing has been seeing a steady increase in sales.  
   
Sentiment:  
```  

Or you can challenge the LLM to fix its answer if you feel it is not the right one:  

```prompt  
Are you sure? What if the sales increase was less than the industry average?  
```  

Now Copilot must have given this a second thought.

### Exercise 1 Conclusion

Excellent job on completing the first exercise!

In this exercise you learnt some basic prompting terms and techniques, such as seed text prompts, conditional prompts, multiple choice prompts, and zero-shot prompts. You also got a feel for how Copilot generates content based on different types of prompts and how you can guide the AI to produce the desired output.

> Remember, there is no 'one-size-fits-all' approach to using AI. Feel free to experiment with different types of prompts to see what results you get. The more you experiment, the more you will understand how to guide Copilot effectively. If you need some more examples for each type of prompt, check the [example guide](#some-more-example-prompts) at the end of this document.

Now, let's move on to the second exercise, where you will create your own space startup using Copilot. This exercise will allow you to experiment with different prompting techniques and generate a variety of content for your startup. Let's get started!
