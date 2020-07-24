---
date: '4'
title: 'Tweet Sentiment Extraction'
cover: './halcyon.png'
github: 'https://github.com/sajalgoyal113/nlp_tse'
tech:
  - Data Preprocessing
  - Text Embedding
  - RNN
showInProjects: true
---

- Built NLP model which takes Tweet and Sentiment as input and outputs Part of Tweet which represents that Sentiment
- Performed Exploratory Data Analysis to discover patterns and gain insight about the data
- Stacked dropout and 1D Convolution layer on top of RoBERTa to increase robustness of the model while used pre-trained Tokenizer for the embedding of the Tweet
- Used StratifiedKFold cross validation to reduce overfitting and post-processed the output to increase accuracy
