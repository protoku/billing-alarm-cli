import {Command, flags} from '@heroku-cli/command'
const cli: any = require('heroku-cli-util')
import ux from 'cli-ux'
import color from '@heroku-cli/color'


export default class BillingAlarmSubscribers extends Command {
  static usage = 'billing-alarm'

  static description = 'List of Billing Alarm subscribers for an app'

  static args = [
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    app: flags.app({required: true}),
    force: flags.boolean({char: 'f'}),
  }

  async run() {

    ux.action.start(`Getting ${cli.color.hex('#af6eff')('Billing Alarm')} subscribers`)

    ux.action.stop(`${color.green('done')}`)
  }
}
