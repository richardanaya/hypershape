build:
	npm run build
	rm dist/demo.html
	git checkout dist/assets/*
	git checkout dist/index.html
	git checkout dist/processor.html
setup:
	npm install
