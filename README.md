Angular Setup:
==============
1) install nodes 
	download and install

	Check: node -v
               npm -v

2) Installl angular

	npm i -g @angular/cli@15

3) Create new project

	ng new my-app

4) Start the server 

	=> PowerShell permission to use it in VSCode

		1) open powershell as administator
		2) run command:  set-executionPolicy unresticted

	ng serve
	

5) check output in browser

	localhost:4200



Directives: Useful to alter the DOM
===========
1) Structural Directives: *ngFor, *ngIf
2) Attribute Directives: ngClass, ngStyle

Pipes: transform data to another format
======


RXJS:
=====
promise, observable, subject


Steps:
======
1) Create VehicleComponent, Create VehicleService

2) Import HttpClientModule

3) Inject HttpClient service in VehicleService

4) Request api with get method
   it will return observable of data

5) 
    5.1) Inject VehicleService in VehicleComponent
    5.2) Subscribe to observable to listen the data in component
	5.3) Store the data in vatiable

6) Display the data in html using *ngFor


<!-- 
All API calls:
==============

1) all         get     url  

2) one         get     url/id

3) filter      get     url?filter=red

4) sorting     get     url?sortBy=color&order=asc/desc

5) pagination  get     url?page=1&limit=10

6) create      post    url,data

6) delete      delete  url/id





 Forms:
 ======
1) FormGorup
2) Nested FormGroup
3) FormArray
4) Dynamic Forms
5) FormValidations
6) Custom Validators


-->


components  - Done
services  - Done
directives - Done
pipes - Done
data types - Done
guards - Done (some other)
validators - Done
APIs - Done

middleware - Done
Authorization/Role Guard - Done
modules - Partial

apps
libraries
projects
 

cli:
=====
1) create app
	new new my-app
2) create boiler plate code
3) lint and test
4) bundling


www.facebook.com   192.3.4.22:8080


1) minification

<div>
	<input>
</div>

<div><input></div>

2) uglification

getPagedVehicles(){}

a1(){}

3) Tree shaking
-> service
-> function
-> compoent

4) AOT vs JIT
	AOT; ahead of time 
	JIT: just in time

