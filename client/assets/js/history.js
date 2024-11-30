var prs = $(".prs")

for (let i = 0; i < 20; i++) {
    var el = `
        <div id="pr-${i}" class="pr">
            <div class="imgs-pr-history">
                <img class="pr-img"
                    src="./assets/media/pngtree-colorful-birthday-cake-decorated-with-melted-strawberries-png-image_10002519.png"
                    alt="">
                
                <img class="pr-img"
                src="./assets/media/pngtree-colorful-birthday-cake-decorated-with-melted-strawberries-png-image_10002519.png"
                alt="">

                <img class="pr-img"
                src="./assets/media/pngtree-colorful-birthday-cake-decorated-with-melted-strawberries-png-image_10002519.png"
                alt="">

                <img class="pr-img"
                src="./assets/media/pngtree-colorful-birthday-cake-decorated-with-melted-strawberries-png-image_10002519.png"
                alt="">

                <img class="pr-img"
                src="./assets/media/pngtree-colorful-birthday-cake-decorated-with-melted-strawberries-png-image_10002519.png"
                alt="">
            </div>

            <div>
                <ul>
                    <li>قهوه ( <span>2</span> عدد )</li>
                    <li>هات چاکلت ( <span>1</span> عدد )</li>
                    <li>بستنی قیفی ( <span>4</span> عدد )</li>
                </ul>
            </div>

            <button style="font-family: 'Vazir'" class="btn btn-warning d-block m-auto">خرید مجدد</button>
        </div> 
    `

    prs.append(el)
}

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

