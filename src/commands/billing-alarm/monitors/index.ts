import {Command} from '@oclif/core'

export default class BillingAlarmMonitors extends Command {
  static args = {}

  static description = 'list overview of monitors'

  static examples = [
    `$ heroku billing-alarm:monitors`,
  ]

  static flags = {}

  async run(): Promise<void> {
    this.log(`Monitors: under construction!`)
  }
}
