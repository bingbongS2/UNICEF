var sw = 0
        $('.wrap div').click(function () {
            sw = !sw
            if (sw) {
                $(this).animate({
                    'bottom': '140px'
                }, 500, 'easeOutBounce')
            } else {
                $(this).animate({
                    'bottom': '-119px'
                }, 500, 'easeOutBounce')
            }
        })



        $('.img1').mouseenter(function(){
            $(this).animate({'left':'12','bottom':'0'},1000,'easeOutQuint')
        })
        $('.img1').mouseleave(function(){
            $(this).animate({'left':'0','bottom':'11'},1000,'easeOutQuint')
        })

        $('.img2').mouseenter(function(){
            $(this).animate({'left':'362','bottom':'0'},1000,'easeOutQuint')
        })
        $('.img2').mouseleave(function(){
            $(this).animate({'left':'350','bottom':'11'},1000,'easeOutQuint')
        })

        $('.img3').mouseenter(function(){
            $(this).animate({'left':'712','bottom':'0'},1000,'easeOutQuint')
        })
        $('.img3').mouseleave(function(){
            $(this).animate({'left':'700','bottom':'11'},1000,'easeOutQuint')
        })

        $('.img4').mouseenter(function(){
            $(this).animate({'left':'1062','bottom':'0'},1000,'easeOutQuint')
        })
        $('.img4').mouseleave(function(){
            $(this).animate({'left':'1050','bottom':'11'},1000,'easeOutQuint')
        })
