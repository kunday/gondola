image_namespace=kunday
name=gondola

install:
	docker build -t ${image_namespace}/${name} .
reset:
	git clean -fdx
	git reset HEAD --hard
pull:
	docker pull ${image_namespace}/${name}:latest
push:
	docker push ${image_namespace}/${name}:latest
