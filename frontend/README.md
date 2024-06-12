# Book Assignment View

Where teachers can assign books to students.

- Utilized [Atomic Design Pattern](https://bradfrost.com/) for organizing and structuring the application.

Advantages of Atomic Design

- Promotes usability - By breaking down interfaces into the smallest parts, it becomes easier to reuse components and leverage modular composition across different parts of an application or even across different projects.
- Ensure consistency - Atomic Design helps maintain UI consistency, which is crucial for user experience and brand identity.
- Facilitates Maintenance - When components are well-organized, it becomes much simpler to update and maintain them over time.
- Improve Collaboration - A shared design language based on Atomic Design principles can enhance communication, usage and contributions since it’s easier to understand the codebase.
- Promotes Code Quality - As we create a sub-ecosystem for each component feature, each component or service has its isolated environment, including styles, actions, and tests. This isolation makes testing more effective and ensures consistent code quality.

## Acknowledgements

- [Atomic Design](https://bradfrost.com/)
- [James Mwangi - Initial setup of the project](https://github.com/jamesmwangi55)

## Documentation

Utilzed [Storybook](https://storybook.js.org/) for documentation of the components.

## Run Locally

Clone the project

```bash
  git clone https://github.com/jmwakz99/book-assignment-view.git

```

Go to the project directory

```bash
  cd book-assignment-view
```

Install frontend dependencies

```bash
cd frontend
npm install  - if you are using npm
yarn install - if you are using yarn


```

Incase of dependency issues, when installing with npm, run the following command

```bash
npm install --legacy-peer-deps
```

Install backend dependencies

```bash
cd backend
npm install  - if you are using npm
yarn install - if you are using yarn



```

Start frontend project

```bash
npm start  - if using npm
yarn start - if using yarn

```

Start backend server

```bash
npm start  -  if using npm
yarn start -  if using yarn

```

Run unit tests - frontend

```bash
npm test  - if using npm
yarn test - if using yarn

```

Start storybook - frontend

```bash
npm run storybook  - if using npm
yarn storybook - if using yarn

```

## Tech Stack

**Client:** React, MUI, Storybook, Jest and React testing library, Graphql, Apollo client and Codegen

**Server:** Node, Express
