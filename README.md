

# Beethoven



## Setup
Run the following commands to install the dependencies:
`npm install`
`nx build core`

## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `nx e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Create Storybook Stories for components

Beethoven is using storybook to display the components in a kitchen sink.
To generate a storybook story for a component, run the following command:
`nx g @nrwl/react:stories core ```

# Icons

We use Bootstrap icons [Icons](https://icons.getbootstrap.com/)
To import an icon, use the following code:
`<i class="bi-{icon-name}"></i>`
