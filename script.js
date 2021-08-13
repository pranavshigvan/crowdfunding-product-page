
var backedAmount = 89914;
var backers = 5007;
$("#open").on("click",() => {
    $("#header").addClass("collapsed");
    $(".overlay").css("display","block")
    $("nav").css("z-index","100")
});
$("#close").on("click",() => {
    $("#header").removeClass("collapsed");
    $(".overlay").css("display","none")
});


$(".select").on("click",()=>{
    $(".back-project").css("display","block");
    $(".overlay").css("display","block")
    $(window).scrollTop(0);
});
$(".back").on("click",()=>{
    $(".back-project").css("display","block");
    $(".overlay").css("display","block")
    $(window).scrollTop(0);
});
$(".back-close").on("click",()=>{
    $(".back-project").css("display","none");
    $(".overlay").css("display","none")
});



$(".radio").on("click", () => {
    var radiobtns = document.querySelectorAll(".radiobtn")
    radiobtns.forEach( radio => {
        if (radio.checked) {
            var parent = (radio.parentNode).parentNode;
            parent.classList.add("checked")
        } else {
            var parent = (radio.parentNode).parentNode;
            parent.classList.remove("checked")
        }
    });
});

document.querySelectorAll(".continue").forEach(btn => {
    btn.addEventListener("click",()=> {
        var container = btn.parentNode;
        var fund = 0;
        var input = parseInt($(btn).parent().children("input").val());
        $(".back-project").css("display","none");
        $(".thanks-card").css("display","block");
        $('input[name=fund]').prop('checked',false);
        $('input[name=fund]').parent().parent().removeClass('checked');
        $(window).scrollTop(0);
        $(".amount").text((backedAmount+= input).toLocaleString());
        $(".backers").text((backers+= 1).toLocaleString());
    }); 
});

$(".got-it").on("click", ()=> {
    $(".thanks-card").css("display","none");
    $(".overlay").css("display","none")
});

$("a").click(()=>{
    $(".overlay").css("display","none")
    $("#header").removeClass("collapsed");
})


