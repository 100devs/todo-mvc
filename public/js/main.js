const deleteBtn = document.querySelectorAll('.del')
const todoItem = document.querySelectorAll('span.not')
const todoComplete = document.querySelectorAll('span.completed')
const markPublic = document.querySelectorAll('button.public')


Array.from(deleteBtn).forEach((el) => {
    el.addEventListener('click', deleteTodo)
})

Array.from(todoItem).forEach((el) => {
    el.addEventListener('click', markComplete)
})

Array.from(todoComplete).forEach((el) => {
    el.addEventListener('click', markIncomplete)
})

Array.from(markPublic).forEach((el) => {
    el.addEventListener('click', makePublicTodo)
})

async function deleteTodo() {
    const todoId = this.parentNode.dataset.id
    try {
        const response = await fetch('todos/deleteTodo', {
            method: 'delete',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    } catch (err) {
        console.log(err)
    }
}

async function markComplete() {
    const todoId = this.parentNode.dataset.id
    try {
        const response = await fetch('todos/markComplete', {
            method: 'put',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    } catch (err) {
        console.log(err)
    }
}

async function markIncomplete() {
    const todoId = this.parentNode.dataset.id
    try {
        const response = await fetch('todos/markIncomplete', {
            method: 'put',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    } catch (err) {
        console.log(err)
    }
}

async function makePublicTodo() {
    const todoId = this.parentNode.dataset.id
    fetch('todos/public', {
        method: 'put',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
            'todoIdFromJSFile': todoId
        })
    }).then(res => res.json()).then(alert(res))
}