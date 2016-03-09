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
        $(this).css('display', 'none');
        view.elements.addBtn.css('display', 'inline-block');
      });

      var link = view.elements.listContainer;
      link.on('click', '.item-delete', removeItem);
      view.elements.listContainer.on('click', '.item-correct', correctedItem);


      function addItem() {
        var newItem = view.elements.input.val();
        view.elements.addBtn.css('display', 'inline-block');
        model.addItem(newItem);
        view.renderList(model.data);
        view.elements.input.val('');
      }

      function removeItem() {
        $(this).parent().addClass('todo__item-close');
        view.elements.input.val('');
        view.elements.addBtn.css('display', 'inline-block');
        view.elements.correctBtn.css('display', 'none');
        var item = $(this).attr('data-value');
        setTimeout(function() {
          model.removeItem(item);
          view.renderList(model.data);
        }, 400);
      }

      function denayRemove() {
        console.log(this);
        var item = $(this).attr('data-value');
        model.removeItem(item);
        view.renderList(model.data);
      }

      function correctedItem() {
        var correctElem = $(this).attr('data-value');
        var corrElem = view.elements.input.val(correctElem);
        view.elements.input.attr('data-value', correctElem);
        view.elements.input.focus();
        model.index2 = model.data.indexOf(correctElem);
        view.elements.addBtn.css('display', 'none');
        view.elements.correctBtn.css('display', 'inline-block');
      }

      function correctItem() {
        var newElem = view.elements.input.val();
        model.changed(newElem);
        view.renderList(model.data);
        view.elements.input.val('');
      }

      function faultClick() {
        var newElem = view.elements.input.val();
        view.renderList(model.data);
        view.elements.input.val('');
        view.elements.addBtn.css('display', 'inline-block');
        view.elements.correctBtn.css('display', 'none');
      }
    }
    return Controller;
  }
);
