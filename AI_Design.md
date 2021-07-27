# AI Design
Living document for capturing what resources for AI interaction design.

### Industry Best Practices
Resource  | Description
:------------- | :-------------
**[Google: People + AI Guidebook](https://pair.withgoogle.com/guidebook)** | A set of methods, best practices and examples for designing with AI. There's also presentation from I/O '19 called [Designing Human-Centered AI Products](https://www.youtube.com/watch?v=rf83vRxLWFQ&t=456s). This guidebook has areas to explore [patterns](https://pair.withgoogle.com/guidebook/case-studies), [case studies](https://pair.withgoogle.com/guidebook/case-studies) and running [workshops](https://pair.withgoogle.com/guidebook/workshop).
**[IBM: Design for AI](https://www.ibm.com/design/ai/)** | A collection of ethics, guidelines, and resources ensuring a unified foundation.
**[Microsoft: Guidelines for Human-AI Interaction](https://www.microsoft.com/en-us/research/publication/guidelines-for-human-ai-interaction/)** | Background on 18 recommended guidelines for human-AI interaction design and how to apply them.
**[Apple: Designing the UI and User Experience of a Machine Learning App](https://developer.apple.com/design/human-interface-guidelines/machine-learning/overview/introduction/)** | Recommendations for Learn how to incorporate ML experiences into your apps, and gain practical approaches to designing user interfaces that feel effortlessly helpful. There is also a WWDC19 presentation called Designing [Great ML Experiences](https://developer.apple.com/videos/play/wwdc2019/803/)

### Training a model
Concept  | Definition
:------------- | :-------------
Input | The thing models will look at to make a prediction
Labels | Only occur when training a model. The label is the ground truth of what you want the model to do at prediction time in the future. 
Ground truth | An ideal expected result. Truth with a lower case "t"
[Supervised learning](https://www.youtube.com/watch?v=3sdUF4p1U7I&t=570s)  | Learn by example. Feed in a data set (i.e. 5000 pictures of a tiger) with a label (i.e. tiger) and it will pattern match the commonalities until it comes up with a model that allows it to successfully identify that label. The next datum that comes it will make a probabilistic guess if it matches a label. It essential attempts to separate groups of data and make probabilistic guesses.
[Reinforcement Learning](https://www.youtube.com/watch?v=3sdUF4p1U7I&t=760s)  | Differs from Supervised Learning in that it doesn't start with labels or ground truth for this example. You have an agent, or a program that does a thing, and it interacts with the environment. The environment will periodically give it feedback: positive or negative. By interacting with this environment that provides feedback it gradually seeks to maximize the longterm positive feedback and avoid the negative.

## Ethical AI
- Privacy: AI models should be built iwthin guardrails to ensure users cannot be identified or their details inferred from model output
- Fairness: AI/ML models used for making decisions or predictions should not be biased with respect to protected attributes (latent bias) such as race, gender, sexuality. It should be aware and counter impacts of **interaction and selection bias**.

Voices in the field: [Joy Buolamwini](https://www.media.mit.edu/people/joyab/overview/)


## Todo list
- [ ] Learn about recommender systems
- [ ] Learn about GDPR
- [ ] Learn about AI Design patterns
- [ ] Learn about ML model training
- [ ] Learn more about the implications of getting AI wrong
- [ ] Learn about echo chambers
- [ ] Learn about interaction bias
- [ ] Learn about selection bias
- [ ] Learn about Fuzzy Cognitive Mapping
- [ ] Learn about KNN search
- [ ] Learn about BERT
- [ ] Learn about NLP

## Courses
- [ ] [DeepLearning.AI](https://www.deeplearning.ai/)
- [ ] [UXAI](https://www.uxai.design/)

