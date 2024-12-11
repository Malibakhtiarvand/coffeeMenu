var prs = $(".prs")

for (let i = 0; i < 20; i++) {
    var el = `
        <div id="pr-${i}" class="pr d-flex align-items-center">
            <div>
                    <img id="pr-img-${i}" class="pr-img"
                        src="./assets/media/pngtree-colorful-birthday-cake-decorated-with-melted-strawberries-png-image_10002519.png"
                        alt="">
                    <p>کیک توت فرنگی</p>
            </div>

            <hr class="h-100 bg-primary" style="width: 2px;">

            <div>
                <p>خوش بو...</p>
                <p>قیمت: <span>2000</span> تومان</p>
                <div class="d-flex align-items-center" style="gap: 5px;">
                    <button id="pr-${i}-plus" class="btn btn-success fa fa-plus plus-btn"></button>
                    <input id="pr-input-${i}" value="0" type="text" style="height: 35px;width: 38px;text-align: center;color: #38220f;">
                    <button id="pr-${i}-minus" class="btn btn-danger fa fa-minus minus-btn"></button>
                </div>
            </div>
        </div> 
    `

    prs.append(el)
}

$(".plus-btn").on(
    "click", (ev) => {
        var id = ev.target.id.split("-")[1]
        var input = $("#pr-input-" + id)
        var val = input.val()
        var newVal = ++val

        input.val(newVal)
        var img = document.getElementById("pr-img-" + id)

        var interval = setInterval(
            () => {
                img.classList.add("rotate")
            }, 300
        )

        clearInterval(interval)
        img.classList.toggle("rotate")
    }
)

$(".minus-btn").on(
    "click", (ev) => {
        var id = ev.target.id.split("-")[1]
        var input = $("#pr-input-" + id)
        var val = input.val()
        var newVal = --val
        if (newVal == -1) {
            return;
        }

        input.val(newVal)
        var img = document.getElementById("pr-img-" + id)

        img.classList.add("shaking")
        var interval = setTimeout(
            () => {
                img.classList.remove("shaking")
                clearTimeout(interval)
            }, 400
        )

    }
)

$(".open-ul-options").on(
    "mouseover", () => {
        $(".options-bar-ul").css("height", "75px")
    }
)

$(".open-ul-options").on(
    "mouseout", () => {
        $(".options-bar-ul").css("height", "0px")
    }
)

$("#Totalprice").html(Intl.NumberFormat().format(100000) + " تومان") 

