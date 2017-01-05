/**
 * Created by Eric on 15/10/23.
 */
(function(win){
    (function() {
        if (!
                /*@cc_on!@*/
                0) return;
        var e = "abbr, article, aside, audio, canvas, datalist, details, dialog, eventsource, figure, footer, header, hgroup, mark, menu, meter, nav, output, progress, section, time, video".split(', ');
        var i= e.length;
        while (i--){
            document.createElement(e[i])
        }
    })();
    var Index = {
        city_id: 105,
        init : function(){
            var self = this;
            self.cityId = tsf.getParam('cityId');
            if(self.cityId == ""){
                self.cityId = 105;
            }
            self.imgplay({
                dom : "#banner", //对象
                height : "600px", //轮播高度
                stuff : true, //图片是否填充整个盒子
                speed : 5000, // 切换频率
                index : 0 //初始化显示第N张图片,从0开始
            });
            this.getHistoryList();
            this.bindChangeCourse();
            this.bindEvent();
            this.bindSignUp();
            this.bindGetPartner();
            setTimeout(function(){
                $('.gallery ul').append(self.gallery.join(''));
                self.bindGalleryEvent();
            }, 10);
            this.bindAprilEvent();
        },
        springDialog : null,
        successDialog : null,
        bindAprilEvent : function(){
            var self = this;
            var html = ['<div class="april_container">',
                            '<div class="close_dialog">',
                            '<img src="/images/website/site/activity/april_btn_close.png" class="close_april"/>',
                            '</div>',
                            '<div class="april_content">',
                                '<img src="/images/website/site/activity/april_dialog.png" />',
                                '<input type="text" id="april_cellphone" placeholder="请输入手机号码领取红包" maxlength="11" />',
                                '<div class="april_get_btn" id="s_index_get_price"></div>',
                            '</div>',
                        '</div>'];
            $('.banner_april .signup_btn').on('click', function(){
                self.springDialog = dialog({
                    content: html.join(''),
                    padding : 0
                });
                self.springDialog.showModal();
            });
            var successHtml = ['<div class="success_dialog">',
                                    '<div class="text_template">',
                                    '<div class="close_dialog">',
                                        '<img src="/images/website/site/activity/april_btn_close.png" class="close_result" />',
                                    '</div>',
                                    '<div class="result_wrap">',
                                    '<img src="/images/website/site/activity/april_result.png" />',
                                    '<div class="ok_btn april_success"></div>',
                                    '</div>',
                                    '</div>',
                                '</div>'];
            var gdt = tsf.getParam('qz_gdt');
            $(document).on('click', '.april_get_btn', function(){
                var cellphone = $.trim($('#april_cellphone').val());
                if(cellphone == ""){
                    alert('请输入手机号');
                    return false;
                }
                if(!/^1(3|4|5|8|7)\d{9}$/.test(cellphone)){
                    alert('请输入正确格式的手机号');
                    return false;
                }
                var from = 'april_pc';
                if(gdt){
                    from += '_gdt';
                }
                $.ajax({
                    url : '/site/orderApril',
                    data : {cellphone: cellphone, from : from},
                    success : function(res){
                        if(res.code == 0){
                            self.springDialog.close().remove();
                            self.successDialog = dialog({
                                content: successHtml.join('')
                            });
                            self.successDialog.showModal();
                        }else{
                            alert(res.msg);
                        }
                    }
                });
            });
            $(document).on('click', '.close_april', function(){
                self.springDialog && self.springDialog.close().remove();
            });
            $(document).on('click', '.close_result', function(){
                self.successDialog && self.successDialog.close().remove();
            });
            $(document).on('click', '.april_success', function(){
                self.successDialog && self.successDialog.close().remove();
                window.open('/site/download', '_blank');
            });
        },
        showService : function(city, type){
            var self = this;
            var cityLearn = self.serviceArray[city];
            if(city == 105){
                $('.class_list li[_type="3"]').html('<div>本地学异地考</div>').addClass('active');
                $('.class_list li[_type="1"]').html('<div>散学自考班</div>').addClass('active');
            }else{
                $('.class_list li[_type="3"],.class_list li[_type="1"]').html('').removeClass('active');
            }
            if(cityLearn){
                var item = cityLearn[type];
                if(item){
                    var html = template('tpl_service', {item : item, city: city, type: type});
                    $('.service_detail').html(html);
                }
            }
        },
        bindEvent : function(){
            var self = this;
            $(document).on("click",".registerBtn",function(){
               $(".position_box").css("display","table");
            });
            $(".position_box .close").on("click",function(){
                $(".position_box").fadeOut();
            });
            $('.service_tip li').on('click', function(){
                var city = $(this).attr('_city');
                if(city != 105){
                    tsf.alert('首批学员试考中~敬请期待！');
                    return false;
                }
                if(self.cityNow == city){
                    return false;
                }
                self.cityNow = city;
                $('.service_tip li').removeClass('on');
                $(this).addClass('on');
                self.showService(city, self.defaultType);
                $('.class_list li').removeClass('on');
                $('.class_list li[type="' + self.defaultType +'"]').addClass('on');
            });
            $('.class_list').on('click', 'li', function(){
                var content = $(this).html();
                if(content == ''){
                    return false;
                }
                var type = $(this).attr('_type');
                var city = $('.service_tip li.on').attr('_city');
                $('.class_list li').removeClass('on');
                $(this).addClass('on');
                self.showService(city, type);
            });
            $('.cooperate_container li').on('click', function(){
                var co = $(this).attr('_co');
                var links = self.coLinks[co];
                if(links){
                    window.open(links, '_blank');
                }
            });
            $(document).on('click','#banner .item',function(){
                var url = $(this).data('url');
                var objExp = new RegExp(/http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/);
                var objExp1 = new RegExp(/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/);
                if(objExp.test(url)) {
                    window.location.href = url;
                }else if(objExp1.test(url)){
                    window.location.href = 'http://'+url;
                }
            });
            self.bindEvent = null;
        },
        bindSignUp: function(){
            window.tsf && tsf.bindSignUp(function(){
                $(".register").fadeOut(0);
                $(".register_success").fadeIn();
            }, 'index');
            $('.ul_banner li').on('click', function(){
                var type = $(this).attr('_type');
                if(type){
                    if(type == 'bright'){
                        location.href = '/site/newsDetail?newsId=41';
                    }else if(type == 'free'){
                        location.href = '/site/newsDetail?newsId=39';
                    }else{
                        location.href = '/site/service?type=' + type;
                    }
                }
            });
        },
        coLinks : {
            'dadabashi': 'http://mp.weixin.qq.com/s?__biz=MzA4MTU1NTA4OQ==&mid=400002056&idx=1&sn=61c8b5cc44227a984868e3d6123e0073#rd',
            'dudubashi': 'http://mp.weixin.qq.com/s?__biz=MzA4MTU1NTA4OQ==&mid=210063002&idx=1&sn=fe53316346e3ba2cb665548b05c39ff8#rd',
            'cheshenghuo': 'http://mp.weixin.qq.com/s?__biz=MzA4MTU1NTA4OQ==&mid=400352098&idx=1&sn=a13c0b6b0a80622a5074ec150639f75e#rd',
            'huazhongdai': 'http://mp.weixin.qq.com/s?__biz=MzA4MTU1NTA4OQ==&mid=402273553&idx=1&sn=a939962e5133b25f0bc323dbdc76354d#rd',
            'pengtao': 'https://mp.weixin.qq.com/s?__biz=MzA4MTU1NTA4OQ==&mid=404072018&idx=1&sn=d1dce4170ae672c30b168a5e865532b3#rd',
            'zhaohang': 'http://mp.weixin.qq.com/s?__biz=MzA4MTU1NTA4OQ==&mid=505403718&idx=2&sn=3c33a543a2067305610ad224a5be3ae0#rd',
            'zhaopin': 'http://mp.weixin.qq.com/s?__biz=MzA4MTU1NTA4OQ==&mid=505403718&idx=1&sn=9da84d537c64b60d2674c483b3eabc8e#rd',
            'lagou': 'http://mp.weixin.qq.com/s?__biz=MzA4MTU1NTA4OQ==&mid=505403747&idx=1&sn=f7865cca9d9a51777f2533c8e76b5cb9#rd'
        },
        defaultType : '10',
        cityNow : 105,
        //服务介绍对象 已城市为key
        serviceArray : {
            '105' : {
                '1' : {'complete': 582, 'pass_rate': '74px', 'mock_rate': '227px', 'img': '/images/website/site/service_4.png', 'desc': '本地散学自考班' },
                '11' : {'complete': 304, 'pass_rate': '87.4%', 'mock_rate': '100%', 'img': '/images/website/site/service1.png?v=201512291424', 'desc': '独家周末考试！45天拿证！仅需请假3天！'},
                '10' : {'complete': 389, 'pass_rate': '92.3%', 'mock_rate': '100%', 'img': '/images/website/site/service_3.jpg', 'desc': '最快35天拿证，考场练考，通过率最高！'},
                '3' : {'complete': 258, 'pass_rate': '87.2%', 'mock_rate': '97.56%', 'img': '/images/website/site/service_2.jpg?v=201512291000', 'desc': '本地学车！异地考试！45天拿证！'},
                '9' : {'sign_up': 42, 'study': 23, 'subject_1_n': 50,'subject_1_t': '20-30天', 'subject_2_n': 90,'subject_2_t': '45-60天', 'subject_3_n': 130,'subject_3_t': '60-90天', 'img': '/images/website/site/service_9.jpg?v=201512291000', 'desc': '本地学本地考！服务全包！最快四个月拿证！'}
            }
        },
        setGalleryInterval : function(){
            var self =  this;
            if(self.galleryInterval){
                clearInterval(self.galleryInterval);
                self.galleryInterval = null;
            }
            self.galleryInterval = setInterval(function(){
                if(self.galleryPage == 14){
                    self.galleryPage = -1;
                }
                var page = ++self.galleryPage;
                $('.gallery ul').css('marginLeft', (-page * 960) + 'px');
            }, 10* 1000);
        },
        bindGalleryEvent : function(){
            var self = this;
            $('.gallery .left_btn').on('click', function(){
                if(self.galleryPage == 0){
                    self.galleryPage = 15;
                }
                var page = --self.galleryPage;
                $('.gallery ul').css('marginLeft', (-page * 960) + 'px');
                self.setGalleryInterval();
            });
            $('.gallery .right_btn').on('click', function(){
                if(self.galleryPage == 14){
                    self.galleryPage = -1;
                }
                var page = ++self.galleryPage;
                $('.gallery ul').css('marginLeft', (-page * 960) + 'px');
                self.setGalleryInterval();
            });
            self.setGalleryInterval();
        },
        getHistoryList: function(){
            var self = this;
            $.ajax({
                url: '/site/fengCaiList',
                data: {page: 1, pageSize: 9},
                success: function (data) {
                    if (data.code == 0) {
                        var result = data.data.traineeAlbum;
                        var html = '';
                        if (result.length > 0) {
                            $.each(result, function (k, v) {
                                html += '<div data-page="'+ v.album_id+'" class="item">'+
                                    '<img src="'+ v.url+'">'+
                                    '<h5>'+ v.course_name+'</h5>'+
                                    '<p>'+ v.title[0]+v.title[1]+'</p>'+
                                '</div>';
                            });
                        }
                        $('#history').empty().append(html);
                        // 轮播
                        self.colImg();
                        $("#history").on("click",".item img",function(){
                            var albumId = $(this).parents(".item").data("page");
                            $.post("/site/getFengCai",{albumId:albumId,via:'index'},function(data){
                                if(data.code == 0){
                                    self.skimImg(data.data);
                                }else{
                                    alert(data.msg);
                                }
                            });
                        })
                    } else {
                        alert(data.msg);
                    }
                },
                fail: function () {
                    alert('服务器繁忙');
                }
            });
        },
        bindChangeCourse: function(){
            var self = this;
            $('.class_nav li').on('click', function(){
                var id = $(this).data('id');
                $('.class_nav li').siblings().removeClass('on');
                $(this).addClass('on');
                $('.class_box .class_info').each(function(){$(this).hide();});
                $('#course_'+id).show();
                var courseId = $('.class_nav li.on').data('id');
                $("#class_type option[value='"+courseId+"']").attr("selected", true); 
            });
            
            $(".courseMore").on('click', function(){
                var id = $(this).data('id');
                window.location.href = '/site/course?cityId='+self.cityId+'&courseId='+id;
            });
            
            var courseId = $('.class_nav li.on').data('id');
            $("#class_type option[value='"+courseId+"']").attr("selected", true); 
        },
        galleryInterval : null,
        galleryPage : 0,
        gallery : [
            '<li><img src="/images/website/site/fengcai/t/21.jpg" /></li>',
            '<li><img src="/images/website/site/fengcai/t/22.jpg" /></li>',
            '<li><img src="/images/website/site/fengcai/t/23.jpg" /></li>',
            '<li><img src="/images/website/site/fengcai/t/10.jpg" /></li>',
            '<li><img src="/images/website/site/fengcai/t/11.jpg" /></li>',
            '<li><img src="/images/website/site/fengcai/t/12.jpg" /></li>',
            '<li><img src="/images/website/site/fengcai/t/13.jpg" /></li>',
            '<li><img src="/images/website/site/fengcai/t/14.jpg" /></li>',
            '<li><img src="/images/website/site/fengcai/t/15.jpg" /></li>',
            '<li><img src="/images/website/site/fengcai/t/16.jpg" /></li>',
            '<li><img src="/images/website/site/fengcai/t/17.jpg" /></li>',
            '<li><img src="/images/website/site/fengcai/t/18.jpg" /></li>',
            '<li><img src="/images/website/site/fengcai/t/19.jpg" /></li>',
            '<li><img src="/images/website/site/fengcai/t/20.jpg" /></li>',
            '<li><img src="/images/website/site/fengcai/t/1.jpg" /></li>',
            '<li><img src="/images/website/site/fengcai/t/2.jpg" /></li>',
            '<li><img src="/images/website/site/fengcai/t/3.jpg" /></li>',
            '<li><img src="/images/website/site/fengcai/t/4.jpg" /></li>',
            '<li><img src="/images/website/site/fengcai/t/5.jpg" /></li>',
            '<li><img src="/images/website/site/fengcai/t/6.jpg" /></li>',
            '<li><img src="/images/website/site/fengcai/t/7.jpg" /></li>',
            '<li><img src="/images/website/site/fengcai/t/8.jpg" /></li>',
            '<li><img src="/images/website/site/fengcai/t/9.jpg" /></li>',
            '<li><img src="/images/website/site/fengcai/ct/1.jpg" /></li>',
            '<li><img src="/images/website/site/fengcai/ct/3.jpg" /></li>',
            '<li><img src="/images/website/site/fengcai/ct/4.jpg" /></li>',
            '<li><img src="/images/website/site/fengcai/ct/5.jpg" /></li>',
            '<li><img src="/images/website/site/fengcai/ct/6.jpg" /></li>',
            '<li><img src="/images/website/site/fengcai/ct/22.jpg" /></li>',
            '<li><img src="/images/website/site/fengcai/exam/2.jpg" /></li>',
            '<li><img src="/images/website/site/fengcai/exam/3.jpg" /></li>',
            '<li><img src="/images/website/site/fengcai/exam/8.jpg" /></li>',
            '<li><img src="/images/website/site/fengcai/exam/9.jpg" /></li>',
            '<li><img src="/images/website/site/fengcai/c/1.jpg" /></li>',
            '<li><img src="/images/website/site/fengcai/c/2.jpg" /></li>',
            '<li><img src="/images/website/site/fengcai/c/3.jpg" /></li>',
            '<li><img src="/images/website/site/fengcai/c/4.jpg" /></li>',
            '<li><img src="/images/website/site/fengcai/c/6.jpg" /></li>',
            '<li><img src="/images/website/site/fengcai/c/8.jpg" /></li>',
            '<li><img src="/images/website/site/fengcai/trainee/1.jpg" /></li>',
            '<li><img src="/images/website/site/fengcai/trainee/2.jpg" /></li>',
            '<li><img src="/images/website/site/fengcai/trainee/3.jpg" /></li>'
        ],
        imgplay : function(parameter){
            var para = {
                dom : "", //对象
                height : "auto", //轮播高度
                stuff : false, //图片是否填充整个盒子
                speed : 5000, // 切换频率
                index : 0, //初始化显示第N张图片,从0开始
                autoplay : true,
                itemLength : 0
            };
            var timer = null;
            $.extend(para,parameter);
            function init(){
                $(para.dom).height(para.height);
                para.stuff?$(para.dom+" .item img").css({height:"100%",width:"100%"}):false;
                para.itemLength = $(para.dom+" .img_list .item").length;
                para.index>para.itemLength-1||para.index<0?para.index=0:true;
                if(para.itemLength>1){
                    btn();
                    timer = setInterval(next,para.speed);
                }
                show(para.index);

            }
            function show(i){
                $(para.dom+" .img_list .item:eq("+i+")").fadeIn(0).siblings().fadeOut(0);
                $(para.dom+" .btn_box span:eq("+i+")").addClass("on").siblings().removeClass("on");
                para.index = i;
            }
            function btn(){
                var btn_box = $('<div class="btn_box"></div>');
                    btn_box.appendTo($(para.dom));
                for(var i =0 ;i<para.itemLength; i++){
                    $('<span></span>').appendTo(btn_box);
                }
                $(para.dom).on("click",".btn_box span",function(){
                    var btn_eq = $(this).index();
                    clearInterval(timer);
                    show(btn_eq);
                    timer = setInterval(next,para.speed);
                });
            }
            function next(){
                para.index == para.itemLength -1 ? para.index = 0: para.index++;
                show(para.index);
            }
            function prev(){
                para.index == 0 ? para.index = para.itemLength -1: para.index--;
                show(para.index);
            }
            init();
        },
        colImg : function(){
            var itemLength = $(".history_list .item").length,
                itemWidth = 320;
            var index = 4;
            var timer = null;
            initClone();
            $(".history_img").on("click",".btn_prev",function(){
                clearInterval(timer);
                prev();
                timer = setInterval(next,10000);
            });
            $(".history_img").on("click",".btn_next",function(){
                clearInterval(timer);
                next();
                timer = setInterval(next,10000);
            });
            function initClone(){
                if(itemLength>=3){
                    var item_1 = $(".history_list .item:eq(0)").clone(),
                        item_2 = $(".history_list .item:eq(1)").clone(),
                        item_3 = $(".history_list .item:eq(2)").clone(),
                        item_4 = $(".history_list .item:eq("+(itemLength-3)+")").clone(),
                        item_5 = $(".history_list .item:eq("+(itemLength-2)+")").clone(),
                        item_6 = $(".history_list .item:eq("+(itemLength-1)+")").clone();
                    $(".history_list").append(item_1,item_2,item_3);
                    $(".history_list").prepend(item_4,item_5,item_6);
                    itemLength = $(".history_list .item").length;
                    $(".history_list").width(itemLength*itemWidth);
                    setCss();
                }
            }
            function next(){
                index++;
                if(index == itemLength -3){
                    animate(function(){
                        index = 3;
                        setCss();
                    });
                }else{
                    animate();
                }
            }
            function prev(){
                index--;
                if(index == 3){
                    animate(function(){
                        index = itemLength -3;
                        setCss();
                    });
                }else{
                    animate();
                }
            }
            function animate(fun){
                $(".btn_box").addClass("disabled");
                $(".history_list").animate({left:"-"+index*itemWidth+"px"},500,function(){
                    fun?fun():false;
                    $(".btn_box").removeClass("disabled");
                });
            }
            function setCss(){
                $(".history_list").css({left:"-"+index*itemWidth+"px"},500);
            }
            timer = setInterval(next,10000);
        },
        skimImg :function(data){
            console.log(data)
            var index = 1;
            $(".photo").css("top",($(window).height()-550)/2+"px");
            $("body").addClass("showPhoto");
            if(data){
                update();
                $(".photo").on("click",".btn_next",function(){
                    index == data.imgs.length ? index = 1: index++;
                    update();
                });
                $(".photo").on("click",".btn_prev",function(){
                    index == 1 ? index = data.imgs.length: index--;
                    update();
                });
                $(".photo").on("click",".close",function(){
                    $("body").removeClass("showPhoto");
                    $(".photo").unbind();
                });
            }
            function update(){
                var i = index-1;
                $(".photo .title span").text(data.album.course_name+data.album.title);
                $(".photo .title b").text("("+index+"/"+data.imgs.length+")");
                $(".photo .imgbox img").prop("src",data.imgs[i].url);
                $(".photo .tip").text(data.imgs[i].content);
            }
        },
        bindGetPartner: function () {
            var self = this;
            $.ajax({
                url:'/site/getPartner',
                data:"",
                success:function(data){
                    if(data.code == 0){
                        var result = data.data;
                        var html = '';
                        if(result.list.length > 0){
                            $.each(result.list,function(k,v){
                                if(/51taosf\.com/.test(v.url)){
                                    html +='<li><a href="'+ v.url+'" target="_blank"><img src="'+ v.img_url+'"></a></li>';
                                }else{
                                    html +='<li><a href="'+ v.url+'" target="_blank" rel="nofollow"><img src="'+ v.img_url+'"></a></li>';
                                }
                            });
                        }
                        $('.partner_list').empty().append(html)
                    }else{
                        alert(data.msg);
                    }
                },
                fail:function(){
                    alert('服务器繁忙');
                }
            });
        }
    };
    Index.init();
})(window);