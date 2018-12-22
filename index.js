'use strict'

let api = require('restify-clients')

module.exports = function(API_KEY, HOST) {
  let client = api.createJsonClient({
    url: HOST || "https://liquidcarrot.io",
    headers: {
      "Authorization": "Bearer " + API_KEY
    }
  })
  
  let carrot = {}
  
  carrot.agents = {}
  carrot.agents.create = function(agent, callback) {
    client.post('/api/v0/agents', agent, function(error, request, response, object) {
      callback(error, object)
    })
  }
  carrot.agents.get = function(id, callback) {
    client.get('/api/v0/agents/' + id, function(error, request, response, object) {
      callback(error, object)
    })
  }
  carrot.agents.update = function(id, changes, callback) {
    client.put('/api/v0/agents/' + id, changes, function(error, request, response, object) {
      callback(error, object)
    })
  }
  carrot.agents.delete = function(id, callback) {
    client.delete('/api/v0/agents/' + id, function(error, request, response, object) {
      callback(error, object)
    })
  }
  carrot.agents.all = function(callback) {
    client.get('/api/v0/agents', function(error, request, response, object) {
      callback(error, object)
    })
  }
  carrot.agents.activate = function(id, inputs, callback) {
    client.post('/api/v0/agents/' + id + '/activate', inputs, function(error, request, response, object) {
      callback(error, object)
    })
  }
  carrot.agents.teach = function(id, critiques, callback) {
    client.post('/api/v0/agents/' + id + '/teach', critiques, function(error, request, response, object) {
      callback(error, object)
    })
  }
  
  return carrot
}