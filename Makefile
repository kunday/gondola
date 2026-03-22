image_namespace=kunday
name=gondola

install:
	docker build -t ${image_namespace}/${name} .
tag:
	docker tag ${image_namespace}/${name}:latest ${image_namespace}/${name}:$(shell cat version.txt)
reset:
	git clean -fdx
	git reset HEAD --hard
pull:
	docker pull ${image_namespace}/${name}:latest
push:
	docker push ${image_namespace}/${name}:$(shell cat version.txt)
	docker push ${image_namespace}/${name}:latest
install-cli:
	install -m 755 bin/gondola /usr/local/bin/gondola
	@echo "Installed gondola to /usr/local/bin/gondola"
uninstall-cli:
	rm -f /usr/local/bin/gondola
