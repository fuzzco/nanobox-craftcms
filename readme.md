# Readme

## ToDo

- [x] Sass tooling
- [x] Js tooling
- [ ] Post-HTML & Post-CSS
- [x] Image minification
- [ ] Init scripts to tie in prompt to configation file ... .env maybe?
- [ ] Write deploy scripts
- [ ] Add url to dns on start from prompt

## Overview

A baseline project for CraftCMS for local, staging, and production environments using Nanobox.io

## Getting Started

This workflow depends on:

- [Git](git)
- [Node](nodejs.org)
- [npm](npmjs.org)
- [Nanobox](nanobox.io)

### Prep the Servers

0. Prepare the servers for the project by logging in to nanobox.io and spinning 2 new projects: `project-name` and `project-name-staging`. Back both of these with a 5 dollar Digital Ocean droplet unless something heavier is called for.
1. Note the application details for the next step.

### Prep the Project

0. Clone this repo into a directory for the new project.
1. `$ git remote remove origin`
2. `$ git remote add origin <new-upstream>`
3. Run the init script; `$ npm run init`
4. Walk through the CLI to configure the project.
5. Commit and push the changes. You're ready to go!

##  Development

0. Clone the repo and cd into the project directory.
1. `$ npm install`
2. `$ npm start`

## Staging Deployment

> Note: this process will be replaced with a git-based Continuous Integration / Delivery system that deploys code automatically from the upstream branch.

0. `$ npm run deploy:staging`

## Production Deployment

0. `$ npm run deploy:production`