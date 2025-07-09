TS_SCRIPT=./scripts/generate-json.ts
GO_DIR=./db

generate:
	pnpm --dir frontend exec tsx $(TS_SCRIPT)

migrate:
	cd $(GO_DIR) && go run . migrate collections

server:
	cd $(GO_DIR) && go run . serve
