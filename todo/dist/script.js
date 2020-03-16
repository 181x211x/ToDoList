
var item = '<div id="item"><input type="text" id="task_name" value="新規タスク"></input><button id="dlt">削除</button></div>'

$("#addToDo").on("click", function(){
  $('#todo_body').append(item);
});


$(function () {
    $(document).on("click", "#dlt",function(e) {
    $(this).siblings().remove();
    $(this).unwrap();
    $(this).remove();

  });
});
