# NxHello

This project was generated using [Nx](https://nx.dev).

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/nx-logo.png" width="450"></p>

🔎 **Nx is a set of Extensible Dev Tools for Monorepos.**

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are some plugins which you can add to your workspace:

- [React](https://reactjs.org)
  - `npm install --save-dev @nrwl/react`
- Web (no framework frontends)
  - `npm install --save-dev @nrwl/web`
- [Angular](https://angular.io)
  - `npm install --save-dev @nrwl/angular`
- [Nest](https://nestjs.com)
  - `npm install --save-dev @nrwl/nest`
- [Express](https://expressjs.com)
  - `npm install --save-dev @nrwl/express`
- [Node](https://nodejs.org)
  - `npm install --save-dev @nrwl/node`

## Generate an application

Run `nx g @nrwl/react:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `nx g @nrwl/react:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are sharable across libraries and applications. They can be imported from `@nx-hello/mylib`.

## Development server

Run `nx serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

- [[YouTube] Nx: Extensible Dev Tools for Monorepos (React)](https://www.youtube.com/watch?v=E188J7E_MDU)

- [[YouTube playlist] Nx Workspaces Course (Free version) - By Nrwl](https://www.youtube.com/watch?v=2mYLe9Kp9VM&list=PLakNactNC1dH38AfqmwabvOszDmKriGco)

- [Nx Workspaces (by Nrwl) | Nx Playbook](https://nxplaybook.com/p/nx-workspaces) - Introduction to Using an Nx Monorepo - free course

- Visit the [Nx Documentation](https://nx.dev) to learn more.

- Nx Console

  - [[GitHub] nrwl/nx-console](https://github.com/nrwl/nx-console)

  - [VSCode Plugin](https://marketplace.visualstudio.com/items?itemName=nrwl.angular-console)

## Steps

1. creation command:

`npx create-nx-workspace nx-hello`

2. add the react dev dependency to the nx workspace:

`npm i --save-dev @nrwl/react`

3. create the first application (react, named as my-site) inside of the nx workspace:

`nx generate @nrwl/react:app`

4. running the created (my-site) application:

`nx serve my-site`

5. creating a reusable ui-header components library:

`nx g @nrwl/react:lib ui-header`

6. creating a component inside of the ui_header components library:

`nx g @nrwl/react:component --project=ui-header page-title`

7. check the dependencies graph

`nx dep-graph`

8. add the nx express plugin

`npm i --save-dev @nrwl/express`

9. list the express plugin app creation options

`nx g @nrwl/express:app --help`

10. creating an api project that allows the access of frontend app my-site

`nx g @nrwl/express:app api --frontendProject=my-site`

11. create an api-interface library to share the typescript interfaces

`nx g @nrwl/workspace:lib api-interface`

12. check the dependencies graph

`nx dep-graph`

13. update the API_URL on the api-interface library and check

`nx affected:dep-graph`

14. run the unit tests against all the affected code

`nx affected:test`
