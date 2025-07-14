TS_SCRIPT=./scripts/generate-json.ts
GO_DIR=./db

migrate:
	cd $(GO_DIR) && go run . migrate collections

server:
	cd $(GO_DIR) && go run . serve
