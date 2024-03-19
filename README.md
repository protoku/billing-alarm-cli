Billing Alarm CLI
=================

Heroku CLI plugin to interact with the [Billing Alarm Heroku Add-on](https://elements.heroku.com/addons/billing-alarm). The Billing Alarm Command Line Interface (CLI) makes it easy for you to create and manage your monitors and subscriber notification directly from the terminal. 

Create a billing alarm that monitors your estimated Heroku charges in real time.

**Monitor your Costs**

Billing Alarm allows you to set a total cost threshold for all Heroku apps that it is attached to. You will receive an email notification when your estimated spending exceeds this threshold.

**Purpose-built for Heroku**

Billing Alarm provides the estimated total of your Heroku charges, in addition to an estimate for each Heroku service you use, including formation dynos, one-off dynos, add-ons, and more.

Learn more [here](https://devcenter.heroku.com/articles/billing-alarm).

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/billing-alarm.svg)](https://npmjs.org/package/billing-alarm)
[![Downloads/week](https://img.shields.io/npm/dw/billing-alarm.svg)](https://npmjs.org/package/billing-alarm)
[![License](https://img.shields.io/npm/l/billing-alarm.svg)](https://github.com/protoku/billing-alarm/blob/master/package.json)

<!-- toc -->
- [Billing Alarm CLI](#billing-alarm-cli)
- [Installation](#installation)
- [Usage](#usage)
- [Commands](#commands)
  - [`heroku billing-alarm`](#heroku-billing-alarm)
<!-- tocstop -->
# Installation
<!-- installation -->
```sh-session
$ heroku plugins:install billing-alarm
```
<!-- installationstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g billing-alarm
$ heroku COMMAND
running command...
$ heroku (-v|--version|version)
billing-alarm/2.2.13 darwin-arm64 node-v14.21.1
$ heroku --help [COMMAND]
USAGE
  $ heroku COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
- [Billing Alarm CLI](#billing-alarm-cli)
- [Installation](#installation)
- [Usage](#usage)
- [Commands](#commands)
  - [`heroku billing-alarm`](#heroku-billing-alarm)

## `heroku billing-alarm`

List the Billing Alarm for an app

```
USAGE
  $ heroku billing-alarm

OPTIONS
  -a, --app=app  (required) app to run command against
  -h, --help     show CLI help
  -j, --json     output triggers in json format

EXAMPLE
  $ heroku billing-alarm -a example
```

_See code: [src/commands/billing-alarm.ts](https://github.com/protoku/billing-alarm-cli/blob/master/src/commands/billing-alarm.ts)_

<!-- commandsstop -->
