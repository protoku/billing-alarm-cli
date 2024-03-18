import {expect, test} from '@oclif/test'

describe('billing-alarm', () => {
  test
  .stdout()
  .command(['billing-alarm'])
  .it('runs billing-alarm cmd', ctx => {
    expect(ctx.stdout).to.contain('Overview: under construction!')
  })
})
