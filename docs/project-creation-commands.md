# Project creation commands

[⬅️ README](../README.md)

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
