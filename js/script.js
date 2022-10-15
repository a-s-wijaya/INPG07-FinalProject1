var inputTodo = document.getElementById('todoInput');
inputTodo.addEventListener('keydown', function(e){
    if(e.code === 'Enter'){
        if(inputTodo.value == ''){
            alert('You need to input something');
        } else {
            document.getElementById('todo').innerHTML += `
            <div class='row align-items-center my-1 border-top py-2 px-3 mx-2 rounded'>
            <div class='col-1'>
            <input type='checkbox' class='form-check-input' id='checkTodo'>
            </div>
            <div class='col-10'>
            <p class='my-auto' id='whatToDo'>${inputTodo.value}</p>
            </div>
            <div class='col-1'>
            <button class='btn btn-warning' id="todoDelete"><i class="fa fa-trash"></i></button>
            </div>
            </div>
            `;
            
            inputTodo.value = '';
            
            var deleteBtn = document.querySelectorAll('#todoDelete');
            for(var i=0; i<deleteBtn.length; i++){
                deleteBtn[i].addEventListener('click', function(){
                    this.parentElement.parentElement.remove();
                });
            }
            
            
            var checkTodo = document.querySelectorAll('#checkTodo');
            for(var i=0; i<checkTodo.length; i++){
                checkTodo[i].addEventListener('click', function(){
                    if(this.checked){
                        this.parentElement.parentElement.classList.add('bg-warning');
                        this.parentElement.parentElement.classList.add('text-dark');
                        this.parentElement.parentElement.children[2].children[0].classList.add('bg-dark');
                        this.parentElement.parentElement.children[2].children[0].classList.add('text-warning');
                        this.parentElement.nextElementSibling.firstElementChild.style.textDecoration = 'line-through';
                    } else {
                        this.parentElement.parentElement.classList.remove('bg-warning');
                        this.parentElement.parentElement.classList.remove('text-dark');
                        this.parentElement.parentElement.children[2].children[0].classList.remove('bg-dark');
                        this.parentElement.parentElement.children[2].children[0].classList.remove('text-warning');
                        this.parentElement.nextElementSibling.firstElementChild.style.textDecoration = 'none';
                    }
                });
            }
        }
    }
})