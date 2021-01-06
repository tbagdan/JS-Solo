'use strict'

// Generate random id
let guid = () => {
    let s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

// Fetch existing todos from localStorage
const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos')

    try{
        return todosJSON !== null ? JSON.parse(todosJSON) : []
    } catch(e){
        return []
    }
}

// Save todos to localStorage
const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Render application todos based on filter
const renderTodos = function(todos, filters){
    const filteredTodos = todos.filter(function(todo){
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        return searchTextMatch && hideCompletedMatch
        //return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    // filteredTodos = filteredTodos.filter(function(todo){
    //     return !filters.hideCompleted || !todo.completed //returns false for todos 

    //     if(filters.hideCompleted){ //if it's checked, return incompleted
    //         return !todo.completed
    //     } else{
    //         return true;
    //     }
    // })

    // Filter incomplete todos
    const incompleteTodos = filteredTodos.filter((todo) => !todo.completed)

    // Clean Div every time input is used
    document.querySelector('#my-todos').innerHTML = ' '
    
    // How many todos left
    const summary = generateSummaryDOM(incompleteTodos)
    document.querySelector('#my-todos').appendChild(summary)
    
    // Create paragraphs with text
    filteredTodos.forEach(function(todo) {
        const newParagraph = generateTodoDOM(todo)
        document.querySelector('#my-todos').appendChild(newParagraph)
    })
}

// Remove a todo by id
const removeTodo = (id) => {
    const removeIndex =  todos.findIndex((todo) => todo.id === id)
    
    if(removeIndex > -1){
        todos.splice(removeIndex, 1)
    }
}

// Toggle the completed value for a given todo
const toggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id)

    if(todo){
        todo.completed = !todo.completed
    }
}

// Get the DOM elements for an individual note
const generateTodoDOM = (todo) => {
    const newDiv = document.createElement('div')
    const newCheckBox = document.createElement('input')
    const newParagraph = document.createElement('span')
    const newDeleteButton = document.createElement('button')
    
    // Setup a checkbox
    newCheckBox.setAttribute('type', 'checkbox')
    newCheckBox.checked = todo.completed
    newDiv.appendChild(newCheckBox)
    newCheckBox.addEventListener('change', function() {
        toggleTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })
    
    // Setup a todo text
    newParagraph.textContent = todo.text
    newDiv.appendChild(newParagraph)

    // Setup a button
    newDeleteButton.textContent = 'x'
    newDiv.appendChild(newDeleteButton)
    newDeleteButton.addEventListener('click', () => {
        removeTodo(todo.id)
        getSavedTodos()
        saveTodos(todos)
        renderTodos(todos, filters)
    })


    return newDiv
}


const generateSummaryDOM = (incompleteTodos) => {
    const summary = document.createElement('h3')
    summary.textContent = `You have ${incompleteTodos.length} todos left.`
    return summary
}