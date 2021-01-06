const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating  a bit better'
}, {
    title: 'Office modifications',
    body: 'Get a new seat'
}]

const findNotes = function(notes, query){
    return notes.filter(function(note, index){
        const isTitleMatch = note.title.toLowerCase().includes(query)
        const isBodyMatch = note.body.toLowerCase().includes(query)
        return isTitleMatch || isBodyMatch
    })
}

const sortNotes = function(notes){
    notes.sort(function(a, b){
        if(a.title.toLowerCase() < b.title.toLowerCase()){
            return -1
        } else if(b.title.toLowerCase() < a.title.toLowerCase()){
            return 1
        } else{
            return 0
        }
    })
}



