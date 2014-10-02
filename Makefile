image_namespace=kunday
name=gondola

install:
	docker build -t ${image_namespace}/${name} .
	docker tag ${image_namespace}/${name} ${image_namespace}/${name}:latest
tag:
	docker tag ${image_namespace}/${name} ${image_namespace}/${name}:latest
reset:
	git clean -fdx
	git reset HEAD --hard
pull:
	docker pull `grep FROM Dockerfile|cut -d' ' -f2`
	docker pull ${image_namespace}/${name}:latest
push:
	docker push ${image_namespace}/${name}:latest
clean:
	@echo Cleaning up exited containers...
	docker ps -a | grep ${image_namespace}/${name} | awk '{print $$1}' | xargs -I {} sh -c 'docker rm {}'
	@echo Cleaning up all but latest image...
	docker images -a | grep ${image_namespace}/${name} | awk '{print $2}' | sort -r | sed 1,2d | xargs -I {} sh -c 'docker rmi -f {}'
containers:
	docker ps -a | grep ${name} | awk '{print $$1,$$2}'
images:
	docker images | grep ${image_namespace}/${name} | awk '{print $$2}' | sort
