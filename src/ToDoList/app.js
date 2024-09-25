(function(app) {
   'use strict';
   const pageItems = {};

   app.execute = function() {
      const frm = document.getElementById('taskForm');
      pageItems.taskList = document.getElementById('taskList');
      pageItems.taskInput = frm.querySelector('#taskInput');
      pageItems.hideButton = frm.querySelector('#hide');
      pageItems.showAllButton = frm.querySelector('#showAll');
      pageItems.deleteAllButton = frm.querySelector('#deleteAll');

      frm.addEventListener('submit', addTask);
      pageItems.taskList.addEventListener('click', completeTask);
      pageItems.hideButton.addEventListener('click', hideCompletedTasks);
      pageItems.showAllButton.addEventListener('click', showAll);
      pageItems.deleteAllButton.addEventListener('click', deleteAll);

      loadFromStorage();
   };

   /**
    * Load from storage.
    */
   function loadFromStorage() {
      const itemsString = localStorage.getItem('taskList');

      if (itemsString !== null) {
         const items = JSON.parse(itemsString);
         items.forEach(item => {
            const li = document.createElement('li');
            li.innerText = item.task;
            if (item.isComplete) {
               li.classList.add('completed-task');
            }
            pageItems.taskList.appendChild(li);
         });
      }
   }

   /**
    * Save to storage.
    */
   function saveToStorage() {
      const items = Array.from(pageItems.taskList.children);
      const itemsToSave = items.map(item => {
         return {
            task: item.innerText,
            isComplete: item.classList.contains('completed-task')
         };
      });

      localStorage.setItem('taskList', JSON.stringify(itemsToSave));
   }

   /**
    * Remove completed tasks.
    * @param {*} e 
    */
   function hideCompletedTasks(e) {
      e.preventDefault();
      const items = Array.from(pageItems.taskList.children);

      items.forEach(el => {
         if (el.classList.contains('completed-task')){
            el.style.display = 'none';
         }
      });
      saveToStorage();
   }

   /**
    * Complete a task
    * @param {*} e 
    */
   function completeTask(e) {
      if (e.target.classList.contains('completed-task')) {
         e.target.classList.remove('completed-task');
      } else {
         e.target.classList.add('completed-task');
      }
      saveToStorage();
   }

   /**
    * Add a task.
    * @param {*} e 
    */
   function addTask(e) {
      e.preventDefault();

      const li = document.createElement('li');
      li.innerText = pageItems.taskInput.value;
      pageItems.taskList.appendChild(li);
      pageItems.taskInput.value = '';
      saveToStorage();
   }
   
   /**
    * Delete all tasks.
    * @param {*} e 
    */
   function deleteAll(e){
      e.preventDefault();
      const items = Array.from(pageItems.taskList.children);

      items.forEach(el => {
         pageItems.taskList.removeChild(el);
      });
      saveToStorage();
   }

   /**
    * Show all hidden tasks.
    * @param {*} e 
    */
   function showAll(e){
      e.preventDefault();
      const items = Array.from(pageItems.taskList.children);

      items.forEach(el => {
         if (el.style.display === 'none'){
            el.style.display = '';
         }
      });
      saveToStorage();
   }

})(window.app = window.app || {});