const sum = require('../sum')
var should = require('chai').should
var expect = require('chai').expect

describe('tests for blobber', function () {
  it('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).to.equal(3)
  })

  it('adds 2 and 2 to be greater than 3', () => {
    expect(sum(2, 2)).to.be.above(3)
  })
})
