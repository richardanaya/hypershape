build:
	npm run build
	rm dist/demo.html
	git checkout dist/cc0_assets/*
	git checkout dist/index.html
setup:
	npm install
