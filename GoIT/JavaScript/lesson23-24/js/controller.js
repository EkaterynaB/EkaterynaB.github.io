define(
  'controller',

  ['model', 'view', 'jquery'],

  function(model, view, $) {

    function Controller(model, view) {
      var self = this;
      view.elements.addBtn.on('click', addItem);

      view.elements.input.keyup(function(event){
        if(event.keyCode == 13) {
          if(view.elements.addBtn.css('display') == 'none') {
            view.elements.correctBtn.click();
          } else {
            view.elements.addBtn.click();
          }
        }
      });

      view.elements.correctBtn.on('click', correctItem);
      view.elements.correctBtn.on('click', function() {
        view.elements.inputBlock.removeClass('edition');
      });

      var link = view.elements.listContainer;
      link.on('click', '.item-delete', removeItem);
      view.elements.listContainer.on('click', '.item-correct', correctedItem);


      function addItem() {
        var newItem = view.elements.input.val();
        model.addItem(newItem);
        view.renderList(model.data);
        view.elements.input.val('');
      }

      function removeItem() {
        $(this).parent().addClass('todo__item-close');
        view.elements.input.val('');
        view.elements.inputBlock.removeClass('edition');
        var item = $(this).attr('data-value');
        setTimeout(function() {
          model.removeItem(item);
          view.renderList(model.data);
        }, 400);
      }

      function correctedItem() {
        var correctElem = $(this).attr('data-value');
        var corrElem = view.elements.input.val(correctElem);
        view.elements.input.attr('data-value', correctElem);
        view.elements.input.focus();
        model.index2 = model.data.indexOf(correctElem);
        view.elements.inputBlock.addClass('edition');
      }

      function correctItem() {
        var newElem = view.elements.input.val();
        model.changed(newElem);
        view.renderList(model.data);
        view.elements.input.val('');
      }

    }
    return Controller;
  }
);
