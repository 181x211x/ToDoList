const task_todo = new Vue({
  el: '#todo_body',
  data: {
    items: [
    ],
    newItemTitle: '' //追加
  },
  methods: {  //methodsオプションをまるっと追加
    addTodo: function(newTitle){
      this.items.push({
        title: newTitle,
        isChecked: false
      });
      this.newItemTitle = '';
      this.saveTodo();
    },
    deleteTodo: function(){
      this.items = this.items.filter(function (item) {
        return item.isChecked === false; //
      });
    this.saveTodo();
    },
    MovetoWorking: function(){
      var move_item = [];
      move_item = this.items.filter(function (item) {
        return item.isChecked === true; //
      });
      for(let i=0;i<move_item.length;i++){
      task_working.items.push({
        title: move_item[i].title,
        isChecked: false
      }
    );
    }
    this.saveTodo();
  },
    saveTodo: function(){
      localStorage.setItem('items_todo', JSON.stringify(this.items));
    },
    loadTodo: function(){
      this.items = JSON.parse( localStorage.getItem('items_todo') );
      if( !this.items ){
        this.items = [];
      }
    },
  },
  mounted: function(){
    this.loadTodo();
  },

})

const task_working = new Vue({
  el: '#working_body',
  data: {
    items: [
    ],
    newItemTitle: '' //追加
  },
  methods: {  //methodsオプションをまるっと追加
    addTodo: function(newTitle){
      this.items.push({
        title: newTitle,
        isChecked: false
      });
      this.newItemTitle = '';
      this.saveTodo();
    },
    deleteTodo: function(){
      this.items = this.items.filter(function (item) {
        return item.isChecked === false; //
      });
      this.saveTodo();
    },
    MovetoDone: function(){
      var move_item = [];
      move_item = this.items.filter(function (item) {
        return item.isChecked === true; //
      });
      for(let i=0;i<move_item.length;i++){
      task_done.items.push({
        title: move_item[i].title,
        isChecked: false
      }
    );
    }
    this.saveTodo();
  },
    saveTodo: function(){
      localStorage.setItem('items_working', JSON.stringify(this.items));
      localStorage.setItem('items_done', JSON.stringify(task_done.items));
    },
    loadTodo: function(){
      this.items = JSON.parse( localStorage.getItem('items_working') );
      if( !this.items ){
        this.items = [];
      }
    },
  },
  mounted: function(){
    this.loadTodo();
  },

})

const task_done = new Vue({
  el: '#done_body',
  data: {
    items: [
    ],
    newItemTitle: '' //追加
  },
  methods: {  //methodsオプションをまるっと追加
    addTodo: function(newTitle){
      this.items.push({
        title: newTitle,
        isChecked: false
      });
      this.newItemTitle = '';
      this.saveTodo();
    },
    deleteTodo: function(){
      this.items = this.items.filter(function (item) {
        return item.isChecked === false; //
      });
    this.saveTodo();
    },
    saveTodo: function(){
      localStorage.setItem('items_done', JSON.stringify(this.items));
    },
    loadTodo: function(){
      this.items = JSON.parse( localStorage.getItem('items_done') );
      if( !this.items ){
        this.items = [];
      }
    },
  },
  mounted: function(){
    this.loadTodo();
  },

})
