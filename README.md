<p align="center">
  <img width="700" height="auto" src="public/images/construction-illustration_11345-1.jpg">
</p>

## Prerequisites

Install Latest PHP and its modules on your local computer  
Install NPM and Composer package manager   
Install and run Apache Web server and MySQL 

### Installation 

- git clone or download project file **Link - [vue-spa-app](https://github.com/kyawkyawhlaing/movie-library-demo.git)**
- install composer/npm dependencies```composer install && npm install```
- create Database
- define database credentials in .env file
- run migration and seed data into database ```php artisan migrate --seed```
- generate App key ```php artisan key:generate```

### Local Development
- php artisan serve / npm run dev or watch

### Production Enviroment
- npm run prod

### Feature and Technology
#### Frontend
- SPA/Axios/Vuetifyjs/VueRouter/Vuex/Vuejs@2.x.x
- implements server-side pagination in vuejs

#### Backend
- PHP/Laravel@7.x.x/Sanctum/RESTful API
- API Endpoints/ManyToMany Relationship(ORM)

### Plugins
- vuetify-loader