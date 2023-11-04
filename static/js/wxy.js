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
//上面是想要检测一下输入的 part 号有没有被占，但是

//下面是设置一下 edit 页面点击按钮的激活样式
//以及 js 写 anchor 滚动
    var buttons = document.querySelectorAll(".pure-new-button.edit");
    var cards = document.querySelectorAll(".edit-card");
    var cards_container = document.getElementById("cards-container");
    var card_width = cards[0].clientWidth;
    var i = 0;
    for (i = 0; i < buttons.length; i++){
        buttons[i].onclick = function() { 
            var k = 0;
            for (k = 0; k < buttons.length; ++k){
                buttons[k].style.setProperty("border","3px transparent solid");
                buttons[k].style.setProperty("background","linear-gradient(to right, #222124, #222124), linear-gradient(45deg, #08c784 0%,#387be6 100%)");
                buttons[k].firstElementChild.style.setProperty("font-weight","400")
            }
            index = Number(this.getAttribute('id').charAt(this.getAttribute('id').length - 1));
            cards_container.scrollTo ({
                left: index * card_width,
                behavior:"smooth"
            })
            this.style.setProperty("border","3px #222124 solid");
            this.style.setProperty("background","linear-gradient(45deg, #08c784 0%,#387be6 100%), linear-gradient(45deg, #08c784 0%,#387be6 100%)")
            this.firstElementChild.style.setProperty("font-weight","600")
        }
    }

    


//背景高度适应 
    const array_1 = [document.getElementById("pure-page-1"), document.getElementById("create-2"), document.getElementById("edit-2")];
    var emmm = document.getElementById("emmmm");
    var title = document.querySelectorAll(".pure-new-title")[0];
    var container = document.querySelectorAll(".iwannasleep")[0];
    emmm.style.setProperty("height", array_1[0].clientHeight * 2 + title.clientHeight + "px");

    function adjustHeight() {
        setTimeout(() => {
            console.log(container.scrollLeft);
            var ratio = container.scrollLeft / window.innerWidth;
            var index = Math.round(ratio);
            var height = array_1[index].clientHeight;
            if (index != 0) {
                emmm.style.setProperty("height", height + title.clientHeight + "px");
            }
        }, 100);
    }

    // 监听点击事件
    window.addEventListener('click', adjustHeight);

    // 监听键盘输入事件
    window.addEventListener('keyup', adjustHeight);

//我不知道我在写什么，但是总之能跑
/* 我看懂啦--林凯 */

//打分的那个小圆圈
    var dots = document.querySelectorAll(".rate-dot");
    var k = 0;
    for (k=0; k<dots.length; k++) {
        dots[k].onclick = function() {
            var rate_number = this.getAttribute('id').charAt(this.getAttribute('id').length - 1);
            var q = 0;
            for (q=0;q < dots.length; q++) {
                if ( q < Number(rate_number)) {
                    dots[q].style.setProperty("background","#83ffd4");
                } else {
                    dots[q].style.setProperty("background","transparent");  
                }
            }
        }
    }
//反正这么一番操作之后 rate_number 是一个1-5数字字符串，但是我不是很清楚怎么把它从这一堆嵌套里整出来，你看看咋搞    


})
