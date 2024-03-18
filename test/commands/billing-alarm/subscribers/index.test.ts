import {expect, test} from '@oclif/test'

describe('billing-alarm:subscribers', () => {
  test
  .stdout()
  .command(['billing-alarm:subscribers'])
  .it('runs billing-alarm:subscribers cmd', ctx => {
    expect(ctx.stdout).to.contain('Subscribers: under construction!')
  })
})
