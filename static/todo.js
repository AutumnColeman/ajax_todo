$(function() {
  var queryData = $('#search-form').serialize();
  $.get('/tasks', queryData, function updateList(data) {
    $('#task-list').html('');
    data.forEach(function(result) {
      var html = '<li>' +
      result.description + '</li>';
      $('ul#task-list').append(html);
    });
  });

    $('#form').submit(function(event){
      event.preventDefault();
      $.post('/add_task', $('#new-task').serialize(), function(data){
        updateList(data);
      });

  });
});
