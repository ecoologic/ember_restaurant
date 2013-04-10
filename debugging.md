## Debugging

 * Use ember.js not minified
 * `GET 500` reload the browser
 * `App.Router.router.recognizer.names` to list the routes
    * `handlers` ?sub-routes?
    * `segments` contains the params
    * `.index` blank template
 * `debugger` in js
 * `{{log controller}}` in handlebars
 * `{{model}}` in handlebars prints class and id
 * console (eg: `App.Table.find().objectAt(3).get('id');`)
    * `cannot call method 'x' on undefined`? try again, fetch is delayed in dev.

