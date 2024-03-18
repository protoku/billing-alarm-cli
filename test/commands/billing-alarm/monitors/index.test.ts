import {expect, test} from '@oclif/test'

describe('billing-alarm:monitors', () => {
  test
  .stdout()
  .command(['billing-alarm:monitors'])
  .it('runs billing-alarm:monitors cmd', ctx => {
    expect(ctx.stdout).to.contain('Monitors: under construction!')
  })
})
