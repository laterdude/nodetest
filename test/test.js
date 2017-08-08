const supertest = require('supertest')
const should = require('should')

// This agent refers to PORT where the program is running.
const server = supertest.agent('http://localhost:5678')

// UNIT test begin
describe('SAMPLE unit test', function() {
  // #1 should return home page
  it('should return home page', function(done) {
    // calling home page
    server
      .get('/dev')
      .expect('Content-type', /text/)
      .expect(200) // This is HTTP response
      .end(function(err, res) {
        // HTTP status should be 200
        res.status.should.equal(200)
        done()
      })
  })
})
