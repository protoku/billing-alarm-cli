Billing Alarm CLI
=================

Heroku CLI plugin to interact with the [Billing Alarm Heroku Add-on](https://elements.heroku.com/addons/billing-alarm). The Billing Alarm Command Line Interface (CLI) makes it easy for you to create and manage your monitors and subscriber notification directly from the terminal. 

Create a billing alarm that monitors your estimated Heroku charges in real time.

**Monitor your Costs**

Billing Alarm allows you to set a total cost threshold for all Heroku apps that it is attached to. You will receive an email notification when your estimated spending exceeds this threshold.

**Purpose-built for Heroku**

Billing Alarm provides the estimated total of your Heroku charges, in addition to an estimate for each Heroku service you use, including formation dynos, one-off dynos, add-ons, and more.

Learn more [here](https://devcenter.heroku.com/articles/billing-alarm).

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g billing-alarm
$ billing-alarm COMMAND
running command...
$ billing-alarm (--version)
billing-alarm/0.0.3 linux-x64 node-v20.11.0
$ billing-alarm --help [COMMAND]
USAGE
  $ billing-alarm COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`billing-alarm billing-alarm`](#billing-alarm-billing-alarm)
* [`billing-alarm billing-alarm monitors`](#billing-alarm-billing-alarm-monitors)
* [`billing-alarm billing-alarm monitors update`](#billing-alarm-billing-alarm-monitors-update)
* [`billing-alarm billing-alarm subscribers`](#billing-alarm-billing-alarm-subscribers)
* [`billing-alarm help [COMMAND]`](#billing-alarm-help-command)
* [`billing-alarm plugins`](#billing-alarm-plugins)
* [`billing-alarm plugins:install PLUGIN...`](#billing-alarm-pluginsinstall-plugin)
* [`billing-alarm plugins:inspect PLUGIN...`](#billing-alarm-pluginsinspect-plugin)
* [`billing-alarm plugins:install PLUGIN...`](#billing-alarm-pluginsinstall-plugin-1)
* [`billing-alarm plugins:link PLUGIN`](#billing-alarm-pluginslink-plugin)
* [`billing-alarm plugins:uninstall PLUGIN...`](#billing-alarm-pluginsuninstall-plugin)
* [`billing-alarm plugins reset`](#billing-alarm-plugins-reset)
* [`billing-alarm plugins:uninstall PLUGIN...`](#billing-alarm-pluginsuninstall-plugin-1)
* [`billing-alarm plugins:uninstall PLUGIN...`](#billing-alarm-pluginsuninstall-plugin-2)
* [`billing-alarm plugins update`](#billing-alarm-plugins-update)

## `billing-alarm billing-alarm`

list overview of billing alarm

```
USAGE
  $ billing-alarm billing-alarm

DESCRIPTION
  list overview of billing alarm

EXAMPLES
  $ heroku billing-alarm
```

_See code: [src/commands/billing-alarm/index.ts](https://github.com/protoku/billing-alarm-cli/blob/v0.0.3/src/commands/billing-alarm/index.ts)_

## `billing-alarm billing-alarm monitors`

list overview of monitors

```
USAGE
  $ billing-alarm billing-alarm monitors

DESCRIPTION
  list overview of monitors

EXAMPLES
  $ heroku billing-alarm:monitors
```

_See code: [src/commands/billing-alarm/monitors/index.ts](https://github.com/protoku/billing-alarm-cli/blob/v0.0.3/src/commands/billing-alarm/monitors/index.ts)_

## `billing-alarm billing-alarm monitors update`

update a monitor

```
USAGE
  $ billing-alarm billing-alarm monitors update

DESCRIPTION
  update a monitor

EXAMPLES
  $ heroku billing-alarm:monitors:update
```

_See code: [src/commands/billing-alarm/monitors/update.ts](https://github.com/protoku/billing-alarm-cli/blob/v0.0.3/src/commands/billing-alarm/monitors/update.ts)_

## `billing-alarm billing-alarm subscribers`

list overview of subscribers

```
USAGE
  $ billing-alarm billing-alarm subscribers

DESCRIPTION
  list overview of subscribers

EXAMPLES
  $ heroku billing-alarm:subscribers
```

_See code: [src/commands/billing-alarm/subscribers/index.ts](https://github.com/protoku/billing-alarm-cli/blob/v0.0.3/src/commands/billing-alarm/subscribers/index.ts)_

## `billing-alarm help [COMMAND]`

Display help for billing-alarm.

```
USAGE
  $ billing-alarm help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for billing-alarm.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.0.17/src/commands/help.ts)_

## `billing-alarm plugins`

List installed plugins.

```
USAGE
  $ billing-alarm plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ billing-alarm plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.3.6/src/commands/plugins/index.ts)_

## `billing-alarm plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ billing-alarm plugins add plugins:install PLUGIN...

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -s, --silent   Silences yarn output.
  -v, --verbose  Show verbose yarn output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ billing-alarm plugins add

EXAMPLES
  $ billing-alarm plugins add myplugin 

  $ billing-alarm plugins add https://github.com/someuser/someplugin

  $ billing-alarm plugins add someuser/someplugin
```

## `billing-alarm plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ billing-alarm plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ billing-alarm plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.3.6/src/commands/plugins/inspect.ts)_

## `billing-alarm plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ billing-alarm plugins install PLUGIN...

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -s, --silent   Silences yarn output.
  -v, --verbose  Show verbose yarn output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ billing-alarm plugins add

EXAMPLES
  $ billing-alarm plugins install myplugin 

  $ billing-alarm plugins install https://github.com/someuser/someplugin

  $ billing-alarm plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.3.6/src/commands/plugins/install.ts)_

## `billing-alarm plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ billing-alarm plugins link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ billing-alarm plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.3.6/src/commands/plugins/link.ts)_

## `billing-alarm plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ billing-alarm plugins remove plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ billing-alarm plugins unlink
  $ billing-alarm plugins remove

EXAMPLES
  $ billing-alarm plugins remove myplugin
```

## `billing-alarm plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ billing-alarm plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.3.6/src/commands/plugins/reset.ts)_

## `billing-alarm plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ billing-alarm plugins uninstall PLUGIN...

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ billing-alarm plugins unlink
  $ billing-alarm plugins remove

EXAMPLES
  $ billing-alarm plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.3.6/src/commands/plugins/uninstall.ts)_

## `billing-alarm plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ billing-alarm plugins unlink plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ billing-alarm plugins unlink
  $ billing-alarm plugins remove

EXAMPLES
  $ billing-alarm plugins unlink myplugin
```

## `billing-alarm plugins update`

Update installed plugins.

```
USAGE
  $ billing-alarm plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.3.6/src/commands/plugins/update.ts)_
<!-- commandsstop -->
