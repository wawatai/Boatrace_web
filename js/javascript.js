//ad
$(document).on('ready', function() {
	$(".single-item").slick({
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3500,
		arrows: true,
	})
})

//.vipWrap .detailCardBox內選單滑動
$(function(){
    var vipCard = document.querySelector('.detailCardBox ul');

    var n = 0;
    var nt = $('.detailCardBox .next');
    var pv = $('.detailCardBox .prev');
    $(nt).click(function(){
        n ++;
        vipCard.style.transform = "translateX(" + (-290 * n) + "px)";

        if(n == 3){
            n --;
        }
    })
    $(pv).click(function(){
        n --;
        vipCard.style.transform = "translateX(" + (-290 * n) + "px)";

        if(n == -1){
            vipCard.style.transform = "translateX(" + (0) + "px)";
            n ++;
        }
    })
})

//header loginBtn click
$(function(){
    $('.loginBtn').click(function(){
        $('header .user').removeClass('login');
        $('header .user').addClass('userInfo');

        $("header .gameNav .vipBtn").attr("onclick","window.location.href='./html/vip.html'")
        $("header .gameNav .gameBtn").attr("onclick","window.open('http://race-web.race99.net/events/bet3t')")
    })
})

//.transferInfo display
$(function(){
    $('.moneyTotal').click(function(){
        $('.transferInfo').toggleClass('display');
    })
})

//filter open + close
$(function(){
    $('.jumpWindow .close_ic,.jumpWindow .close_ic_gray,.jumpWindow .close').click(function(){
        $('.filter').removeClass('display');
    })

    $('.loginForm .forget-password').click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.forgetPassword').addClass('display');
    })

    $('.loginBtn,.openNews').click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.news').addClass('display');
    })

    $('.vipWrap .check').click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.score').addClass('display');
    })

    $('.fakeTable .modify-phone').click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.changeBTNWindow').addClass('display');
    })

    $('.changePassword button').click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.passwordWindow').addClass('display');
    })

    $('.walletDetail .record').click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.walletRecord').addClass('display');
    })

    $('.eventBox .check').click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.checkEvent').addClass('display');
    })
    $('.eventBox .apply').click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.plsGo').addClass('display');
    })
})
function unlogin(){
    $('.jumpWindow').removeClass('display');
    $('.filter,.loginWIndow').addClass('display');
}

//jumpWindow .new .content
$(function(){
    $('.news .nav .hot').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.forHot').addClass('display');
        $('.forHot').siblings().removeClass('display');
    })
    $('.news .nav .normal').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.forNormal').addClass('display');
        $('.forNormal').siblings().removeClass('display');
    })
    $('.news .nav .deposit').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.forDeposit').addClass('display');
        $('.forDeposit').siblings().removeClass('display');
    })
})

//.gameList .love
$(function(){
    $('.gameList .love').click(function(){
        $(this).toggleClass('active');
    })
})

//slotBody li 切換
$(function(){
    $('.slotBody .nav li').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    })
})

//入金 切換
$(function(){
    $(".depositMiddle .box li").click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    })

    $('.depositMiddle .box li:nth-of-type(1)').click(function(){
        // $('.depositMiddle .bottom').removeClass('display');
        // $(".depositMiddle .bottom.bank").addClass("display");
        $(".depositMiddle .bottom.bank").addClass("display");
        $(".depositMiddle .bottom.bank").siblings().removeClass("display");
    })
    $('.depositMiddle .box li:nth-of-type(2)').click(function(){
        $(".depositMiddle .bottom.atm").addClass("display");
        $(".depositMiddle .bottom.atm").siblings().removeClass("display");
    })
    $('.depositMiddle .box li:nth-of-type(3)').click(function(){
        $(".depositMiddle .bottom.usdt").addClass("display");
        $(".depositMiddle .bottom.usdt").siblings().removeClass("display");
    })
    $('.depositMiddle .box li:nth-of-type(4)').click(function(){
        $(".depositMiddle .bottom.purple").addClass("display");
        $(".depositMiddle .bottom.purple").siblings().removeClass("display");
    })
    $('.depositMiddle .box li:nth-of-type(5)').click(function(){
        $(".depositMiddle .bottom.shop").addClass("display");
        $(".depositMiddle .bottom.shop").siblings().removeClass("display");
    })

    $(".depositMiddle .bottom.bank button").click(function(){
        $(".depositMiddle .bottom.confirm").addClass("display");
        $(".depositMiddle .bottom.confirm").siblings().removeClass("display");
    })
})

//eventList+eventDetail 切換
$(function(){
    $('.eventBox .btnBox button').click(function(){
        $('.eventList').removeClass('display');
        $('.eventDetail').addClass('display');
    })

    $('.eventDetail .back').click(function(){
        $('.eventList').addClass('display');
        $('.eventDetail').removeClass('display');
    })
})

//vipWrap切換
$(function(){
    $('.levelEnjoy .more').click(function(){
        $('.outMode').removeClass('display');
        $('.innerMode').addClass('display');
    })

    $('.detailTitle .back').click(function(){
        $('.outMode').addClass('display');
        $('.innerMode').removeClass('display');
    })
})

//.memberWrap 切換
$(function(){
    $('.memberWrap .tabs li:nth-of-type(1)').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.dataWrap').addClass('display');
        $('.dataWrap').siblings().removeClass('display');
    })

    $('.memberWrap .tabs li:nth-of-type(2)').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.platformWrap').addClass('display');
        $('.platformWrap').siblings().removeClass('display');
    })
})

//walletWrap 切換
$(function(){
    $('.walletMiddle .tabs li:nth-of-type(1)').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.walletMiddle .activeWallet').addClass('display');
        $('.walletMiddle .activeWallet').siblings().removeClass('display');
    })

    $('.walletMiddle .tabs li:nth-of-type(2)').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.walletMiddle .historyWallet').addClass('display');
        $('.walletMiddle .historyWallet').siblings().removeClass('display');
    })

    $('.walletMiddle .tabs li:nth-of-type(3)').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.walletMiddle .platformWallet').addClass('display');
        $('.walletMiddle .platformWallet').siblings().removeClass('display');
    })
})

//mailWrap 切換
$(function(){
    $('.mailWrap .top a:nth-of-type(1)').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.mailWrap .bottom.active').addClass('display');
        $('.mailWrap .bottom.ann').removeClass('display');
    })
    $('.mailWrap .top a:nth-of-type(2)').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.mailWrap .bottom.active').removeClass('display');
        $('.mailWrap .bottom.ann').addClass('display');
    })

    $('.mailWrap .tabs li').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    })

    $('.mailWrap .btnBox .edit').click(function(){
        $('.mailWrap .btnBox.nor').removeClass('display');
        $('.mailWrap .btnBox.edit').addClass('display');
    })
    $('.mailWrap .btnBox .finish').click(function(){
        $('.mailWrap .btnBox.nor').addClass('display');
        $('.mailWrap .btnBox.edit').removeClass('display');
    })

    $('.mailWrap.outMode .list li').click(function(){
        $('.mailWrap.outMode').removeClass('display');
        $('.mailWrap.innerMode').addClass('display');
    })
    $('.mailWrap.innerMode .title button').click(function(){
        $('.mailWrap.outMode').addClass('display');
        $('.mailWrap.innerMode').removeClass('display');
    })
})

//eventWrap 切換
$(function(){
    $('.eventWrap .tabs li:nth-of-type(1)').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.eventMiddle .eventBox').addClass('display');
        $('.eventMiddle .eventBox2').removeClass('display');
        $('.eventMiddle .eventRecord').removeClass('display');
    })

    $('.eventWrap .tabs li:nth-of-type(2)').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.eventMiddle .eventBox').removeClass('display');
        $('.eventMiddle .eventBox2').addClass('display');
        $('.eventMiddle .eventRecord').removeClass('display');
    })

    $('.eventWrap .tabs li:nth-of-type(3)').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.eventMiddle .eventBox').removeClass('display');
        $('.eventMiddle .eventBox2').removeClass('display');
        $('.eventMiddle .eventRecord').addClass('display');
    })
})

//交易紀錄切換
$(function(){
    $('.bottom .tabs li:nth-of-type(1)').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.bottom .dealBox').addClass('display');
        $('.bottom .dealBox2').removeClass('display');
    })

    $('.bottom .tabs li:nth-of-type(2)').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.bottom .dealBox').removeClass('display');
        $('.bottom .dealBox2').addClass('display');
    })
})

//betWrap 搜尋開關
$(function(){
    $('.betWrap .fakeTable .arrow_ic').click(function(){
        $($(this).closest('li')).toggleClass('active');
    })
})

//withdrawal+transfer 展開
$(function(){
    $('.withdrawalWrap  .platformBox .open button').click(function(){
        $($(this).closest('div').prev('ul')).toggleClass('active');
    })
    $('.transferWrap  .platform .open button').click(function(){
        $($(this).closest('div').prev('ul')).toggleClass('active');
    })
})

//helpPage .nav列切換
$(function(){
    $('.nav .title').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.nav .box').removeClass('display');
        $($(this).next('.box')).addClass('display');
    })

    $('.nav .box li').click(function(){
        $('.nav .box li').removeClass('active');
        $(this).addClass('active');
    })
})
//helpPage teachList列表
$(function(){
    $('.helpPage .teachList li').click(function(){
        $(this).toggleClass('active');
        $(this).siblings().removeClass('active');
    })
})
//helpPage .nav 連動切換
$(function(){
    $('.forNew_1').click(function(){
        $('.newHelp_1').addClass('display');
        $('.newHelp_1').siblings().removeClass('display');
    })
    $('.forNew_2').click(function(){
        $('.newHelp_2').addClass('display');
        $('.newHelp_2').siblings().removeClass('display');
    })
    $('.forNew_3').click(function(){
        $('.newHelp_3').addClass('display');
        $('.newHelp_3').siblings().removeClass('display');
    })
    $('.forNew_4').click(function(){
        $('.newHelp_4').addClass('display');
        $('.newHelp_4').siblings().removeClass('display');
    })
    $('.forNew_5').click(function(){
        $('.newHelp_5').addClass('display');
        $('.newHelp_5').siblings().removeClass('display');
    })

    $('.forQues_1').click(function(){
        $('.question_1').addClass('display');
        $('.question_1').siblings().removeClass('display');
    })
    $('.forQues_2').click(function(){
        $('.question_2').addClass('display');
        $('.question_2').siblings().removeClass('display');
    })
    $('.forQues_3').click(function(){
        $('.question_3').addClass('display');
        $('.question_3').siblings().removeClass('display');
    })

    $('.forUs_1').click(function(){
        $('.aboutUs_1').addClass('display');
        $('.aboutUs_1').siblings().removeClass('display');
    })
    $('.forUs_2').click(function(){
        $('.aboutUs_2').addClass('display');
        $('.aboutUs_2').siblings().removeClass('display');
    })
    $('.forUs_3').click(function(){
        $('.aboutUs_3').addClass('display');
        $('.aboutUs_3').siblings().removeClass('display');
    })
    $('.forUs_4').click(function(){
        $('.aboutUs_4').addClass('display');
        $('.aboutUs_4').siblings().removeClass('display');
    })
    $('.forUs_5').click(function(){
        $('.aboutUs_5').addClass('display');
        $('.aboutUs_5').siblings().removeClass('display');
    })
    $('.forUs_6').click(function(){
        $('.aboutUs_6').addClass('display');
        $('.aboutUs_6').siblings().removeClass('display');
    })
})


$(function(){
    $('.goTop').click(function(){
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body'); //各瀏覽器相容性
        $body.delay('0').animate({
                scrollTop: 0
        },300);
    })
})

function openSportGame(){
    $('.jumpWindow').removeClass('display');
    $('.filter,.betWindow.sportGame01').addClass('display');
}
function openLiveGame(){
    $('.jumpWindow').removeClass('display');
    $('.filter,.betWindow.liveGame01').addClass('display');
}
function openSlotGame(){
    $('.jumpWindow').removeClass('display');
    $('.filter,.betWindow.slotGame01').addClass('display');
}
function openLotteryGame(){
    $('.jumpWindow').removeClass('display');
    $('.filter,.betWindow.lotteryGame01').addClass('display');
}
function openFishGame(){
    $('.jumpWindow').removeClass('display');
    $('.filter,.betWindow.fishGame01').addClass('display');
}
function openBoardGame(){
    $('.jumpWindow').removeClass('display');
    $('.filter,.betWindow.boardGame01').addClass('display');
}