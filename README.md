# ioredis and newrelic bug

to run:
```
  npm install
  make run
```

When using newrelic on a ioredis callback or promise,
it loses track of the transaction.

GET on /bluebird /bluebird_callback /event

doesn't show any logs from new relic meaning it's adding custom parameters
to the current transaction.

But on GET /redis or /redis_callback
it shows a log "msg":"No transaction found for custom parameters.",
so it lost track of the current transaction.
