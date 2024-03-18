import {expect, test} from '@oclif/test'

describe('billing-alarm:monitors:update', () => {
  test
  .stdout()
  .command(['billing-alarm:monitors:update'])
  .it('runs billing-alarm:monitors:update cmd', ctx => {
    expect(ctx.stdout).to.contain('Monitor update: under construction!')
  })
})
