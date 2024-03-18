import {Command} from '@oclif/core'

export default class BillingAlarmMonitorsUpdate extends Command {
  static args = {}

  static description = 'update a monitor'

  static examples = [
    `$ heroku billing-alarm:monitors:update`,
  ]

  static flags = {}

  async run(): Promise<void> {
    this.log(`Monitor update: under construction!`)
  }
}
