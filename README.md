<!-- Instructions for the project launch:
Start local JSON server for the db.json

I needed to add a proxy.conf.json file specifying the JSON server address and then add that to the angular.json. Otherwise, I got a CORS error.
-->

 <!--
Requirements 
ALL of the following requirements must be present in your application with no exceptions: 

1.+(+) Components: Utilize multiple Angular components for different sections of the application.
* app.component.ts uses multiple components

2.-(-) Routing: Implement Angular routing with child routes, route guards and parameterized routes.

3.+(+) Services: Use services for handling business logic, particularly data management (CRUD operations).
* data.service.ts functions defined here are used in the other components

4.+(+) Dependency Injection: Apply dependency injection to inject services into components or other services.
* list-restaurants.component.ts uses dependency injectio for DataService 
constructor(private dataService: DataService) {}

5.+(+) State Management: Implement state management using RxJS (observables) or integrate NgRx to handle complex state and ensure scalability.
* Signal
in app.component.ts signal stored in currentUser variable is used as a state.
* Observable
data.service.ts emits the list of restaurants
* Subscribe
list-restaurants.component.ts listens (subscribes) to getRestaurantList()

6.-(-) Forms: Utilize Angular Forms for handing user input and implement form validation.

7.-(Directives) Data Bindings, Directives & Pipes: Implement them to work and display data on the screen.
* Data Bindings:
list-restaurants.component.html uses interpolation data binding to display restaurant names from the mock data.
* Pipes:
data.service.ts uses pipe for processing the combined results.

8.+(+) API Integration: Consume an external or mock RESTful API to obtain, display, create and update data
* data.service.ts interacts with local mock data file db.json (you will need local JSON server)

 -->


