import {Command} from '@oclif/core'

export default class BillingAlarm extends Command {
  static args = {}

  static description = 'list overview of billing alarm'

  static examples = [
    `$ heroku billing-alarm`,
  ]

  static flags = {}

  async run(): Promise<void> {
    this.log(`Overview: under construction!`)
  }
}
