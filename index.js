const qrImg=document.getElementById("qrImg")
const qrBox=document.getElementById("qrImgPalce")
const btn=document.getElementById("btn")
const input=document.getElementById("input-field")
const download=document.getElementById("download")

input.addEventListener
btn.addEventListener("click", () => {

   if(input.value.length>0){
       qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input.value
       qrBox.classList.add("show-image")
       download.style.display=""
       download.href="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input.value

   }else{
        input.classList.add("error")
        setTimeout(() => {
            input.classList.remove("error")
        }, 1000);
   }
})
