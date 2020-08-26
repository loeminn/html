$(document).ready(function () {
    var wdh = parseInt($("#b6").css("width"));
    var hgt = parseInt($("#b6").css("height"));
    $("#vd").css("width", wdh * 3 + 100 + "px");
    $(".vid").css("width", wdh + "px");
    $(".vid").css("height", hgt + "px");
    $("#b7").css("top", hgt + "px");
    $("#btm").css("top", hgt + 50 + "px");
    $(".bb").mouseover(function () {
        $(this).animate({
            color: '#ff0000',
        })
    })
    $(".bb").mouseout(function () {
        $(this).animate({
            color: '#ffffff',
        })
    })
    $("#yb1").mouseover(function () {
        $(this).animate({
            backgroundColor: '#ff0000',
        })
        $(".yb[id!='yb1']").animate({
            backgroundColor: '#ffffff',
        })
        $("#vd").animate({
            left: '0px',
        })
        $("#vid1t").animate({
            opacity: "1",
        })
        $(".vidt[id!='vid1t']").animate({
            opacity: "0",
        })
    })
    $("#yb2").mouseover(function () {
        $(this).animate({
            backgroundColor: '#ff0000',
        })
        $(".yb[id!='yb2']").animate({
            backgroundColor: '#ffffff',
        })
        $("#vd").animate({
            left: -wdh + "px",
        })
        $(".vidt[id!='vid2t']").animate({
            opacity: "0",
        })
        $("#vid2t").animate({
            opacity: "1",
        })
    })
    $("#yb3").mouseover(function () {
        $(".yb[id!='yb3']").animate({
            backgroundColor: '#ffffff',
        })
        $(this).animate({
            backgroundColor: '#ff0000',
        })
        $("#vd").animate({
            left: -wdh * 2 + "px",
        })
        $(".vidt[id!='vid3t']").animate({
            opacity: "0",
        })
        $("#vid3t").animate({
            opacity: "1",
        })
    })
    $(window).scroll(function () {
        if ($(window).scrollTop() > 120) {
            $("#menu").css('background-color', "rgba(0,0,0,1)")
        } else {
            $("#menu").css('background-color', "rgba(0,0,0,0)")
        }
    })
    var lr = 1;
    $("#lb").click(function () {
        --lr;
        if (lr < 1) {
            lr = 3;
        }
        var lrt = "#t" + lr + ",#p" + lr
        $(lrt).animate({
            opacity: "1",
        })
        var lrt1 = ".te[id!=t" + lr + "],.pp[id!=p" + lr + "]";
        $(lrt1).animate({
            opacity: "0",
        })
    })
    $("#rb").click(function () {
        ++lr;
        if (lr > 3) {
            lr = 1;
        }
        var lrt = "#t" + lr + ",#p" + lr;
        $(lrt).animate({
            opacity: "1",
        })
        var lrt1 = ".te[id!=t" + lr + "],.pp[id!=p" + lr + "]";
        $(lrt1).animate({
            opacity: "0",
        })
    })
    var udlt = $("#udl").css("left");
    $(".yyst").mouseenter(function () {
        var a = parseInt($(this).css("left"));
        $("#udl").animate({
            left: a - 12 + "px",
        })
    })
    $("#yys").mouseleave(function () {
        $("#udl").animate({
            left: udlt,
        })
    })
    var lr1 = 1;
    $("#lb1").click(function () {
        --lr1;
        if (lr1 < 1) {
            lr1 = 10;
        }
        $("#dep").animate({
            left: "+=900px",
        })
        console.log(parseInt($("#dep").css("left")))
        if (parseInt($("#dep").css("left")) == 0) {
            $("#dep").animate({
                left: "-8100px",
            })
        }
        var lrt = "#ldt" + lr1 + ",#rdt" + lr1;
        var lrt1 = ".ldt[id!=ldt" + lr1 + "],.rdt[id!=rdt" + lr1 + "]";
        $(lrt).animate({
            opacity: "1",
        })
        $(lrt1).animate({
            opacity: "0",
        })
    })
    $("#rb1").click(function () {
        ++lr1;
        if (lr1 > 10) {
            lr1 = 1;
        }
        $("#dep").animate({
            left: "-=900px",
        })
        if (parseInt($("#dep").css("left")) == -8100) {
            $("#dep").animate({
                left: "0px",
            })
        }
        var lrt = "#ldt" + lr1 + ",#rdt" + lr1;
        var lrt1 = ".ldt[id!=ldt" + lr1 + "],.rdt[id!=rdt" + lr1 + "]";
        $(lrt1).animate({
            opacity: "0",
        })
        $(lrt).animate({
            opacity: "1",
        })
    })
    $("#lpa").click(function () {
        $("#lpa").animate({
            width: "75%",
            left: "260px",
        })
        $("#lp").animate({
            width: "200px",
        })
        $("#lpp2").css("filter", "brightness(100%)")
        $("#lpp1").css("filter", "brightness(30%)")
        $("#lpta").animate({
            opacity: 0,
        })
        $("#lpt").animate({
            opacity: 1,
        })
    })
    $("#lp").click(function () {
        $("#lp").animate({
            width: "75%",
        })
        $("#lpa").animate({
            width: "200px",
            left: "79%",
        })
        $("#lpp1").css("filter", "brightness(100%)")
        $("#lpp2").css("filter", "brightness(30%)")
        $("#lpt").animate({
            opacity: 0,
        })
        $("#lpta").animate({
            opacity: 1,
        })
    })
    console.log($("#gm1p").children())
})