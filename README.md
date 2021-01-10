# SafetyJoggerApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.1.

## Docker

* Clone this replository:
```bash
git clone https://github.com/wald3/safety-jogger-app.git
```

* Build an Angular project:
```bash 
ng build --prod
```

* Create a Docker Image:
```bash
docker build -t ng-safety-jogger-image . 
```

* Run docker container (or find and run builded container in Docker Desktop)
```bash
docker run --name safety-jogger  -d -p 8080:80 ng-safety-jogger-image
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

