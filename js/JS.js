var slide=0;
var $show =$('#newspicture>ul li');
var $next =$('.next');
var $pre = $('.pre');
var $container =$('#newspicture');
var stop ;
var $dot =$('.dot ol li');

$(function () {
    $show.eq(0).show();
    // setTimeout(Autoshow,2000);
    $container.on('mouseenter',function () {
        clearInterval(stop);
        next();
        pre();
        Shwodot();
    });

    $container.on('mouseleave',function () {
        stop=setInterval(Autoshow,4000);
    })
});

// 向后轮播
function next() {
    $next.off('click').on('click',function () {
        $show.stop(true,true);
        $show.eq(slide).hide();
        $dot.removeClass('Changecolor');
        if (slide === 4) {
            slide = 0;
        } else {
            slide += 1;
        }
        $show.eq(slide).fadeIn(400);
        $dot.eq(slide).addClass('Changecolor');
        // console.log(slide);

    })
}


// 向前轮播
function pre(){
    $(function () {
        $pre.off('click').on('click',function () {
            $show.stop(true,true);
            $show.eq(slide).hide();
            $dot.removeClass('Changecolor');
            if(slide===0){

                slide=4

            }
            else {
                slide-=1;
            }

            $show.eq(slide).fadeIn(400);
            $dot.eq(slide).addClass('Changecolor');
            // console.log(slide);
        })

    })
}

// 自动轮播
function Autoshow() {
    $show.eq(slide).hide();
    $dot.eq(slide).removeClass('Changecolor');
    if(slide===4){
        slide=0;
    }
    else {
        slide+=1;
    }
    $show.eq(slide).fadeIn(400);
    $dot.eq(slide).addClass('Changecolor');
    console.log(slide);
}

function Shwodot() {
    $dot.off('click').on('click',function () {
        var num =$(this).index();
        $show.hide();
        console.log( $show.eq(num).index());
        $dot.removeClass('Changecolor');
        $(this).addClass('Changecolor').siblings('li').removeClass('Changecolor');
        $show.eq(num).fadeIn(400);
        slide=num;

    })
}
