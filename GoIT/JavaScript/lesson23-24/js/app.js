requirejs.config({
  paths: {
    "jquery" : "components/jquery",
    "tmpl" : "components/tmpl"
  }
});

require(
  [
    'model',
    'view',
    'controller',
    'jquery',
    'tmpl'
  ],
  function(Model, View, Controller, $, tmpl) {

    $(function() {

        var todoData =  ["do something", "do something else", "do more stuff", "do that again"];

        var model = new Model(todoData);
        var view = new View(model);
        var controller = new Controller(model, view)
    });

  }
);
