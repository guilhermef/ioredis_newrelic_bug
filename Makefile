run: redis
	@npm start

redis:
	@redis-server --daemonize yes
