var fileOfImg = document.getElementById('file_of_img')

var card_img_top = document.querySelector(".card-img-top")
card_img_top.onclick = () => {
    fileOfImg.click()
}

fileOfImg.addEventListener("change", (ev) => {
    var file = ev.target.files[0]
    var read = new FileReader()
    read.onload = () => {
        card_img_top.src = read.result
    }

    read.readAsDataURL(file)
})
