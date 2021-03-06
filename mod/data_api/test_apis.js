/**
 * @author Pedro Sanders
 * @since v1
 *
 * Unit Test for the "Data APIS"
 */
const assert = require('assert')
const DSUtils = require('@routr/data_api/utils')
const TestUtils = require('@routr/data_api/test_utils')

describe('Data APIS', () => {
  it('Deep search', function (done) {
    const agents = []
    agents.push(TestUtils.buildAgent('John Doe', ['sip.local'], '1001'))
    agents.push(TestUtils.buildAgent('Jane Doe', ['sip.local'], '1002'))
    agents.push(TestUtils.buildAgent('Jake Doe', ['sip.local'], '1003'))

    let response = {
      status: 200,
      data: agents
    }

    response = DSUtils.deepSearch(response, 'spec.credentials.username', '1001')
    const agent = response.data
    assert.ok(agent.metadata.name === 'John Doe')
    done()
  })
})
