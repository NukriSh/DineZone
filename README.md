<!-- Instructions for the project launch:
Start local JSON server for the db.json

I needed to add a proxy.conf.json file specifying the JSON server address and then add that to the angular.json. Otherwise, I got a CORS error.
-->

 <!--
Requirements:

1.+(+) Components: Utilize multiple Angular components for different sections of the application.
* displayed <app-list-restaurants /> in the app.component.html

2.++- Routing: Implement Angular routing with child routes, route guards and parameterized routes.
*+ child routes
contact.component.html has childs Georgia and Bulgaria defined in app.routes.ts
*+ route guards
auth-guard.service.ts redirects to home, when not logged in and trying to navigate to /customers or /owner
*-parameterized routes

3.+ Services: Use services for handling business logic, particularly data management (CRUD operations).
* data.service.ts functions defined here are used in the other components (customer-view.component.ts, owner-view.component.html)

4.+ Dependency Injection: Apply dependency injection to inject services into components or other services.
* customer-view.component.ts uses dependency injection for DataService 
constructor(private dataService: DataService) {}

5.+/- State Management: Implement state management using RxJS (observables) or integrate NgRx to handle complex state and ensure scalability.
* Observable
data.service.ts emits the list of restaurants
* Subscribe
customer-view.component.ts listens (subscribes) to getRestaurantList()
(didn't use NgRx)

6.- Forms: Utilize Angular Forms for handing user input and implement form validation.

7.+++ Data Bindings, Directives & Pipes: Implement them to work and display data on the screen.
* Data Bindings:
list-restaurants.component.html uses interpolation data binding to display restaurant names from the mock data.
* Pipes:
data.service.ts uses pipe for processing the combined results.
* Directives:
customer-view.component.html uses highlight.directive.ts for button background color
* Data Bindings:
customer-view.component.html and owner-view.component.html use interpolation to display data.


8.+(+) API Integration: Consume an external or mock RESTful API to obtain, display, create and update data
* data.service.ts interacts with local mock data file db.json (you will need local JSON server)

 -->


