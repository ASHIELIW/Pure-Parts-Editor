window.addEventListener('DOMContentLoaded', () => {
    const number_input = document.getElementById("part_short_name");
    const number_check_result = document.getElementById("number-check-result")
    let reg_1 = /^BBa_{1}[a-zA-Z]{0,1}[0-9]+$/; 
    number_input.addEventListener('input',()=>{
        if (reg_1.test(number_input.value)) {
            var url = "http://parts.igem.org/cgi/xml/part.cgi?part="+ number_input.value;
            var hr = new XMLHttpRequest();
            hr.open('GET',url, true);
            hr.onreadystatechange = function () {
                if (hr.readyState == 4 && hr.status == "200") {
                    console.log(hr.responseText);
                    return hr.responseText;
                }
          };
          hr.send(null);  
            let xmlDoc = new DOMParser().parseFromString(url,"application/xml");
            console.log(xmlDoc);

        }
    })
//上面是想要检测一下输入的 part 号有没有被占
//下面是设置一下 edit 页面点击按钮的激活样式
    var buttons = document.querySelectorAll(".pure-new-button.edit");
    var i = 0;
    for (i = 0; i < buttons.length; i++){
        buttons[i].onclick = function() { 
            var k = 0;
            for (k = 0; k < buttons.length; ++k){
                buttons[k].style.setProperty("border","3px transparent solid");
                buttons[k].style.setProperty("background","linear-gradient(to right, #222124, #222124), linear-gradient(45deg, #08c784 0%,#387be6 100%)");
                buttons[k].firstElementChild.style.setProperty("font-weight","400")
            }
            this.style.setProperty("border","3px #222124 solid");
            this.style.setProperty("background","linear-gradient(45deg, #08c784 0%,#387be6 100%), linear-gradient(45deg, #08c784 0%,#387be6 100%)")
            this.firstElementChild.style.setProperty("font-weight","600")
        }
    }

})