# Architecture Decision Record (ADR)

## Title
Choose the development framework for final project

## Status
Accepted

## Context
Our team needs a framework to develop a mobile app for Android devices, using Bootstrap as the CSS framework. Given the team's familiarity with JavaScript, a JavaScript-based framework would be ideal.

## Decision
- We decided to use **React Native** as the development framework.
- We also decided to use **Firebase** as the database.
- We do not need any hardware like speaker or GPS, because the main function is to record and manage the storage of produce in fridge. 


## Rationale
### React Native
- **Skill set**: The team possesses expertise in JavaScript and React, which makes React Native an appropriate option.
- **Performance**: React Native delivers performance that is close to native applications, particularly beneficial for Android devices.
- **Community**: The React Native community is robust and offers a wide range of libraries, facilitating quicker development.
- **Timeline**: The rapid development features of React Native are well-suited to our project schedule.

### Firebase
- **Skill set**: The team has learned how to use Firebase in CPRG304 web development, making it a suitable choice.
- **Performance**: Firebase offers efficient data storage and query performance, with built-in real-time data synchronization, ideal for applications needing live updates. 
- **Community**: As a Google product, it benefits from stability, official support, and a wealth of learning resources, aiding both development and future maintenance.
- **Timeline**: Firebase requires no server setup, saving time on backend configuration. 
  
## Consequences
- **Pros**: With the strong support and resources provided by well-established tech stacks, we are expected to finish the development efficiently and at a lower cost. Additionally, it is suitable for small-scale mobile applications.
- **Cons**: It may restrict us on limited Bootstrap UI components, leaving us to potentially create custom styles and components to meet our specific design requirements and user experience goals. Also, for future scalability, if data volume increases, relying on heavy data may not be ideal, as it could lead to performance issues, slower response times, and higher costs associated with data storage and retrieval.

## Attribution
- Decision by: Chenyi Lee, Dan Chen, Tianzi Cui and Zhenzhen Wu.
