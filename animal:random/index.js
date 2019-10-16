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
    // let Animaldiv = document.querySelector('#animal')
      
        let para = document.createElement('p')
        let paragraph = document.createElement('p')
        paragraph.id = "paraTwo"

        para.innerText = "message: " + response.data.message
        paragraph.innerText = "status: " + response.data.status

        document.body.appendChild(para)
        document.body.appendChild(paragraph)
    }else{
        let paragraph = document.querySelector('#paraTwo')

        p.innerText = "message: " + response.data.message
        paragraph.innerText = "status: " + response.data.status

    }

    
}

const randomNumber = async() =>{
    let input1 = document.querySelector("#firstInput").value
    let input2 = document.querySelector('#secondInput').value

    let url = `http://localhost:3000/random?floor=${input1}&ceil=${input2}`

    try{
        let response = await axios.get(url)
        console.log(response)
        randomNumberPicker(response)
    }
    catch(err){
        console.log(err)
    }
}

const randomNumberPicker = (response) => {
    // console.log(response)
    // let input1 = document.querySelector("#firstInput").value
    // let input2 = document.querySelector('#secondInput').value
    let checkPTag = document.querySelector('p')

    if (!checkPTag){
    // let randomDiv = document.querySelector('#randomNum')

        let paraOne = document.createElement('p')
         paraOne.id = "paragraph"
        let paraTwo = document.createElement('p')
         paraTwo.id = "paragraphTwo"

        paraOne.innerText = response.data.message
        paraTwo.innerText = response.data.status

        document.body.appendChild(paraOne)
        document.body.appendChild(paraTwo)
    }else{
        let paraTwo = document.querySelector('#paragraphTwo')

        checkPTag.innerText = "message: " + response.data.message
        paraTwo.innerText = "status: " + response.data.status
    }
}