var App = Ember.Application.create();

App.Router.map(function(){                       // /#/tables
  this.resource('tables', function(){
    this.resource('table', {path: ':table_id'}); // /#/tables/1
  });
});

App.TablesRoute = Ember.Route.extend({
  model: function() {
    return App.Table.find();
  }
});

App.TablesController = Ember.ArrayController.extend({});

App.Store = DS.Store.extend({
  revision: 11,
  adapter: 'DS.FixtureAdapter'
});

App.Table = DS.Model.extend({});
App.Table.FIXTURES = [
  {id: 1},
  {id: 2},
  {id: 3},
  {id: 4},
  {id: 5},
  {id: 6}
];



