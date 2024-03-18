import {Command} from '@oclif/core'

export default class BillingAlarmSubscribers extends Command {
  static args = {}

  static description = 'list overview of subscribers'

  static examples = [
    `$ heroku billing-alarm:subscribers`,
  ]

  static flags = {}

  async run(): Promise<void> {
    this.log(`Subscribers: under construction!`)
  }
}
