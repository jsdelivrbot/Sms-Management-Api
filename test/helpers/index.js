const sandbox = require('sinon').createSandbox()
const { expect } = require('chai')
const supertest = require('supertest')
const { server, onError } = require('../../app')
const { flattenArray } = require('../../utils/array.util')
const { logger } = require('../../logs')
const stubs = require('./stubs')

module.exports = {
  sandbox,
  expect,
  server,
  app: supertest(server),
  onError,
  logger,
  flattenArray,
  ...stubs
}
