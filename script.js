const button = document.querySelector(".input-container button");
const input = document.querySelector(".input-container input");
const list = document.querySelector(".todo-list");


button.addEventListener('click', clickBtn)

function clickBtn() {
        if(input.value) {
            const li = document.createElement('li')
            li.className = 'todo-list-item'
            li.innerHTML = input.value
            const deleteBtn = document.createElement('button')
            deleteBtn.innerText = "Delete"
            list.appendChild(li)
            li.appendChild(deleteBtn)
            input.value = ""
        
            deleteBtn.addEventListener("click", () => {
                list.removeChild(li)
            })
        }
}


