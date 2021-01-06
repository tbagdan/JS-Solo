const todos = [{
    text: 'Meet Aya for lunch',
    completed: false
}, {
    text: 'Look over the Aqila contract',
    completed: true
}, {
    text: 'Pick up the suit from the tailor',
    completed: false
}, {
    text: 'Call parents about the weekend',
    completed: false
}, {
    text: 'Order cat food online',
    completed: true
}]

const sortedTodo = function(todos){
    return todos.sort(function(a, b){
        if(!a.completed && b.completed){
            return -1
        } else if(!b.completed && a.completed){
            return 1
        } else{
            return 0
        }
    })
}
