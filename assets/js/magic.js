$(function(){

    var body = $('body')

    $.fn.visible = function(partial) {

        var $t            = $(this),
        $w            = $(window),
        viewTop       = $w.scrollTop(),
        viewBottom    = viewTop + $w.height(),
        _top          = $t.offset().top,
        _bottom       = _top + $t.height(),
        compareTop    = partial === true ? _bottom : _top,
        compareBottom = partial === true ? _top : _bottom;

        return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

    };

    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            // $(document).on("scroll", onScroll);
        });
    });

    var layer = $('#layer'),
        modal = $('#modal'),
        video = modal.find("video")[0];

    function showModal(){
        layer.removeClass('close').addClass('open');
        modal.show();
        video.play();
    }

    function closeModal(){
        video.pause();
        layer.removeClass('open').addClass('close');
    }

    $('.play-btn').on('click', function(){
        showModal();
    });

    body.on('click', '#layer', function(){
        closeModal();
    });

    body.on('click', '#close', function(){
        closeModal();
    });

    $(document).keyup(function(e){
        if(e.keyCode == 27){
            closeModal();
        }
    });

    function onScroll(event){

        var sections = $('.content');

        sections.each(function(i, el){
            var el = $(el);
            if(el.visible(true)){
                el.addClass('reveal');
            }
        });
    }

    $(document).on('scroll', onScroll);

    var form = $('.form');

    form.submit(function(){
        var data = form.serialize(),
            url = form.attr('action'),
            ok_msg = $('<h3>', {
                class: "okay",
                text: "Gracias. En breve nos pondremos en contacto."
            });

        $.post(url, data, function(r){
            if(r == "ok"){
                form.html(ok_msg);
            }
        });

        return false;
    });

});
