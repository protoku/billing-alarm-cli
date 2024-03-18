import {Command, flags} from '@heroku-cli/command'
const cli: any = require('heroku-cli-util')
import ux from 'cli-ux'
import color from '@heroku-cli/color'


export default class BillingAlarmSubscribersCreate extends Command {
  static usage = 'billing-alarm'

  static description = 'Create Billing Alarm subscriber for an app'

  static args = [
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    app: flags.app({required: true}),
    force: flags.boolean({char: 'f'}),
  }

  async run() {

    ux.action.start(`Creating ${cli.color.hex('#af6eff')('Billing Alarm')} subscribers`)

    ux.action.stop(`${color.green('done')}`)
  }
}
