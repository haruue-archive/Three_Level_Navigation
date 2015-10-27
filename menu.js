$(document).ready(function() {
    //消失函数，清除所有二、三级菜单，以及一级菜单的选定状态
    function disappear() {
        $(".menu").removeClass("current");
        $(".first_menu_title").css({
            "background-color": "transparent",
            "border-width": "0px"
        });
        $(".second_menu, .third_menu").fadeOut("fast");
    }
    //消失函数，清除所有三级菜单
    function disappearThird() {
        $(".third_menu").removeClass("current");
        $(".third_menu").fadeOut("fast");
    }
    //消失函数，清除一级菜单选定状态
    function disappearFirstChosen() {
        $(".third_menu").removeClass("current");
        $(".first_menu_title").css({
            "background-color": "transparent",
            "border-width": "0px"
        });
    }

    //#second_menu 渐变出现/消失
    //二级菜单出现
    $(".first_menu_title").click(function () {
        disappear();
        $(this).addClass("current");
        $(this).css({
            "color":"#000000",
            "background-color":"#ffffff",
            "border-top":"#e7e7e7 solid 1px",
            "border-left":"#e7e7e7 solid 1px",
            "border-right":"#e7e7e7 solid 1px"
        });
        $(this).parent().children(".second_menu").fadeIn("fast");
    });

    ////点击非可展开二级菜单/三级菜单时，菜单消失（方便添加实际功能）
    //$(".second_menu:not(.expandable), .third_menu:not(.expandable)").click(function() {
    //    disappear();
    //});

    //点击空白处或者点击非可展开二级菜单/三级菜单时，菜单消失（方便添加实际功能）
    $(document).click(function(event) {
        var menu_area = $(".first_menu_title, .second_menu.expandable");
        if (!menu_area.is(event.target) && menu_area.has(event.target).length === 0) {
            disappear();
        }
    });

    //一级菜单反色
    $(".first_menu_title").mouseover(function() {
        $(this).css({
            "border-top": "#e7e7e7 solid 1px",
            "border-left": "#e7e7e7 solid 1px",
            "border-right": "#e7e7e7 solid 1px",
            "cursor": "pointer",
            "background-color": "#dc4935",
            "color": "#ffffff"
        });
    });
    $(".first_menu_title").mouseleave(function() {
        if(!$(this).hasClass("current")) {
            $(this).css({
                "border-top": "0px",
                "border-left": "0px",
                "border-right": "0px",
                "cursor": "auto",
                "background-color": "transparent",
                "color": "#000000"
            });
        }
        else {
            $(this).css({
                "border-top":"#e7e7e7 solid 1px",
                "border-left":"#e7e7e7 solid 1px",
                "border-right":"#e7e7e7 solid 1px",
                "cursor": "auto",
                "background-color": "#ffffff",
                "color": "#000000"
            });
        }
    });

    //二级菜单与图标反色
    $(".second_menu_term").mouseover(function() {
        var bgPositionY = $(this).children(".second_menu_icon").css("background-position").split(" ")[1];
        $(this).children(".second_menu_icon").css("background-position","16px "+bgPositionY);
        $(this).css({
            "cursor": "pointer",
            "background-color": "#dc4935",
            "color": "#ffffff"
        });
    });
    $(".second_menu_term").mouseleave(function() {
        var bgPositionY = $(this).children(".second_menu_icon").css("background-position").split(" ")[1];
        $(this).children(".second_menu_icon").css("background-position","0px "+bgPositionY);
        $(this).css({
            "cursor": "auto",
            "background-color": "transparent",
            "color": "#000000"
        });
    });
});