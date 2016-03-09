define (
  'view',
  ['model', 'jquery', 'tmpl'],
  function() {

    function View(model) {
      var self = this;

      function init() {
        var wrapperTodo = tmpl($("#todo__template").html());
       $(".todo").append(wrapperTodo);

        self.elements = {
          body: $("body"),
          delete: $('.item-delete'),
          content: $(".todo"),
          input: $(".todo__value"),
          addBtn: $(".todo__add"),
          correctBtn: $(".todo__change"),
          listContainer: $(".todo__list")
        };
        self.renderList(model.data);
      };

      self.renderList = function(data) {
        var list = tmpl($("#todo__list").html(), {data: data});
        self.elements.listContainer.html(list);
      };

      init();
    }

    return View;
  }
);
