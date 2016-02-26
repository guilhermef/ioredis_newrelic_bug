var nr = require('newrelic');
var express = require('express');
var router = express.Router();
var Promise = require('bluebird');
var Redis = require('ioredis');
var redis = new Redis();

var events = require('events');
var eventEmitter = new events.EventEmitter();

var myPromise = function() {
  return new Promise(function(resolve){
    process.nextTick(function(){
      resolve('OK');
    });
  });
};

eventEmitter.on('respond', function(res){
  nr.addCustomParameter('test', {much_test: 'such object'});
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/bluebird', function(req, res, next) {
  myPromise().then(function(){
    nr.addCustomParameter('test', {much_test: 'such object'});
    res.render('index', { title: 'Express' });
  });
});

router.get('/bluebird_callback', function(req, res, next) {
  myPromise().nodeify(function(){
    nr.addCustomParameter('test', {much_test: 'such object'});
    res.render('index', { title: 'Express' });
  });
});

router.get('/redis', function(req, res, next) {
  redis.get('foo').then(function(){
    nr.addCustomParameter('test', {much_test: 'such object'});
    res.render('index', { title: 'Express' });
  });
});

router.get('/redis_callback', function(req, res, next) {
  redis.get('foo',function(){
    nr.addCustomParameter('test', {much_test: 'such object'});
    res.render('index', { title: 'Express' });
  });
});

router.get('/event', function(req, res, next) {
  process.nextTick(function(){
    eventEmitter.emit('respond', res);
  });
});

router.get('/', function(req, res, next) {
  nr.addCustomParameter('test', {much_test: 'such object'});
  res.render('index', { title: 'Express' });
});

module.exports = router;
