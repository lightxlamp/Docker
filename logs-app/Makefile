run: 
	docker run -d -p 80:4200 -v logs:/app/data --rm --name volume_container logsapp_image_volume
run-dev: 
	docker run -d -p 80:4200 -v /Users/lightxlamp/Documents/VisualStudioProjects/Docker/logs-app:/app -v logs:/app/data --rm --name volume_container logsapp_image_volume
stop: 
	docker stop volume_container