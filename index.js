document.addEventListener('DOMContentLoaded', () =>{
})

const checkAnimal = async () => {
    let input = document.querySelector("#textInput").value
    // console.log(input)

    let url = `http://localhost:3000/animal/${input}`

    try{
        let response = await axios.get(url)
        console.log(response)
        postArrayInfo(response)
    }
    catch(err){
        console.log(err)
    }
}

const postArrayInfo = (response) => {
    let p = document.querySelector('p')

    if(!p){
        let para = document.createElement('p')
        let paraTwo = document.createElement('p')
        paraTwo.id = "paraTwo"

        para.innerText = "message: " + response.data.status
        paraTwo.innerText = "status: " + response.data.message

        document.body.appendChild(para)
        document.body.appendChild(paraTwo)
    }else{
        let paraTwo = document.querySelector('#paraTwo')

        p.innerText = "message: " + response.data.status
        paraTwo.innerText = "status: " + response.data.message

    }

    
}