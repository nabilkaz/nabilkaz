# AI Design
Living document for capturing what I learn about AI Design.

## Key concepts

### Training a model
Concept  | Definition
:------------- | :-------------
[Supervised learning](https://www.youtube.com/watch?v=3sdUF4p1U7I&t=570s)  | Learn by example. Feed in a data set (i.e. 5000 pictures of a tiger) with a label (i.e. tiger) and it will pattern match the commonalities until it comes up with a model that allows it to successfully identify that label. The next datum that comes it will make a probabilistic guess if it matches a label. It essential attempts to separate groups of data and make probabilistic guesses.
[Reinforcement Learning](https://www.youtube.com/watch?v=3sdUF4p1U7I&t=760s)  | Differs from Supervised Learning in that it doesn't start with labels or ground truth for this example. You have an agent, or a program that does a thing, and it interacts with the environment. The environment will periodically give it feedback: positive or negative. By interacting with this environment that provides feedback it gradually seeks to maximize the longterm positive feedback and avoid the negative.


### Stages of user interaction
1. Before first interaction
  - Clarify what the system can do
  - Clarify how well the system can do what it promises to do
2. During course of interaction
  - Show contextually relevant insights
  - Match relevant social norms
  - Mitigate social bias (Google translate translates neutral pronoun to non-neutral languages by showing all options)
  - Time services based on context
3. When things go wrong
  - Allow efficient invocation
  - Scope services when in doubt
  - Allow efficient correction
  - Allow efficient dismissal
  - Clarify what the system did
4. Over continued repeated interaction
  - Learn from user behavior
  - Update and adapt cautiously
  - Remember recent interactions
  - Encourage granular feedback 
  - Convey consequences of user action
  - Provide global controls
  - Notify users about changes

### Design Process Framework
1. User needs and defining success
2. Data collection and evaluation
3. Mental models
4. Explainability and trust
5. Feedback and control (Fuel for AI)
6. Errors and graceful failure

## Ethical AI
- Privacy: AI models should be built iwthin guardrails to ensure users cannot be identified or their details inferred from model output
- Fairness: AI/ML models used for making decisions or predictions should not be biased with respect to protected attributes (latent bias) such as race, gender, sexuality. It should be aware and counter impacts of **interaction and selection bias**.

Voices in the field: [Joy Buolamwini](https://www.media.mit.edu/people/joyab/overview/)


## Todo list
- [ ] Learn about recommender systems
- [ ] Learn about AI Design patterns
- [ ] Learn about ML model training
- [ ] Learn more about the implications of getting AI wrong
- [ ] Learn about echo chambers
- [ ] Learn about interaction bias
- [ ] Learn about selection bias
- [ ] Learn about Fuzzy Cognitive Mapping

## Resources
- [ ] [People + Al Guidebook](https://pair.withgoogle.com/guidebook/) ✨ Currently Reading ✨ 
- [ ] [Tic-Tac-Toe the Hard Way](https://www.youtube.com/playlist?list=PL2s97uMS4gRI07tpTQ_fobKxN0tI2dPHa) ✨ Currently Listening ✨ 
  - [x]  Ep 0: Introducing Tic-Tac-Toe 
  - [x]  [Ep 1: Howdy, and the myth of "pouring in data"](https://www.youtube.com/watch?v=3sdUF4p1U7I&list=PL2s97uMS4gRI07tpTQ_fobKxN0tI2dPHa&index=3) | ⭐️⭐️⭐️⭐️ Teaching two training model concepts: Supervised and reinforcement learning 
  - [ ]  Ep 2: What does a tic-tac-tow board look like to machine learning?
  - [ ]  Ep 3: From tic-tac-toe moves to ML model
  - [ ]  Ep 4: Beating random: What it means to have trained a model
  - [ ]  Ep 5: Give that model a treat!: Reinforcement learning explained
  - [ ]  Ep 6: Head to head: the Big ML Smackdown!
  - [ ]  Ep 7: Enter tic-tac-two
  - [ ]  Ep 8: Head to head: The even bigger ML smackdown
  - [ ]  Ep 9: Lessons learned
- [ ] [Designing Human-Centered AI Products (Google I/O'19)](https://www.youtube.com/watch?v=rf83vRxLWFQ)
- [ ] [AI Research Is in Desperate Need of an Ethical Watchdog by Sophia Chen](https://www.wired.com/story/ai-research-is-in-desperate-need-of-an-ethical-watchdog/?utm_source=ISTV&utm_medium=Video&utm_campaign=ISTV2018_ISTV1808)
- [ ] [The ethics of artificial intelligence. In The Cambridge Handbook of Artificial Intelligence.](https://nickbostrom.com/ethics/artificial-intelligence.pdf?utm_source=ISTV&utm_medium=Video&utm_campaign=ISTV2018_ISTV1808)
- [ ] [Introduction to Fuzzy Cognitive Maps](https://www.youtube.com/watch?v=HNEfGppZptU)
- [x] [Webinar: How to Design UX for AI by Zillow Principal PM, Debapriya Basu](https://www.youtube.com/watch?v=8qDlbXHDm9Q) (49:30) | ⭐️⭐️⭐️⭐️ great framework and examples. Similar content to People + AI Playbook.
- [x] [Designing AI Experiences](https://www.youtube.com/watch?v=AAJ2vQXm5HQ) (26:28) by Adrian Zumbrunnen | ⭐️⭐️⭐️ interesting but not actionable
- [x] [Fuzzy Cognitive Mapping for UX Design in Human-centred AI](https://www.youtube.com/watch?v=bGPVKuKDNyA) | ⭐️⭐️⭐️⭐️ good framework for mapping out cognitive maps for data scientists
