DC = docker-compose
EXEC = exec echo-ws
RUN = run --rm echo-ws

.PHONY: init
init: stop start install

.PHONY: start
start:
	${DC} up -d

.PHONY: stop
stop:
	${DC} stop

.PHONY: shell
shell:
	${DC} ${EXEC} sh

.PHONY: logs
logs:
	${DC} logs -f echo-ws

.PHONY: install
install:
	${DC} ${RUN} npm install

.PHONY: test
test:
	${DC} ${RUN} npm run test:watch

wipe:
	docker-compose down -v
	rm -rf node_modules/ dist/ coverage/ || true
