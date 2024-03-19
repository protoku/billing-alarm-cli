import {Command} from '@heroku-cli/command'
import ux from 'cli-ux'

export default class BillingAlarm extends Command {
  static usage = 'triggers...'

  static description = 'List the Billing Alarm for an app'

  static examples = []

  static flags = {}

  async run() {
    ux.action.start(`Billing Alarm`)
    ux.action.stop(`done`)
  }
}
