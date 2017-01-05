/**
 * Created by Eric on 15/10/23.
 */
(function (win){

    var tsf = {
        init : function(){
            this.bindShareUrl();
            this.bindEvent();
            this.bindBackTop();
            var path = location.pathname;
            if(path && path != '/'){
                var nav = path.substr(path.lastIndexOf('/')+1);
                if(nav == 'master'){
                    nav = 'coach';
                }else if(/^((student)|(course)|(place))$/.test(nav)){
                    nav = 'service';
                }
                $('.nav_ul li').removeClass('on');
                $('#nav_' + nav).addClass('on');
            }else{
                $('.nav_ul li').removeClass('on');
                $('#nav_index').addClass('on');
            }
            path = path.split('/');
            path = path[2] == undefined ? path[1]:path[2];
            $(".city li").on('click',function(){
                var cityId = $(this).data('id');
                if(path == 'newsDetail' || path == 'fengcai'){
                    path = 'news';
                }
                window.location.href = '/site/'+path+'?cityId='+cityId;
            });
        },
        bindBackTop : function () {
            window.onscroll=function(){
                if($(document).scrollTop()>=$(window).height()){
                    $(".tools .backtop").fadeIn();
                }else{
                    $(".tools .backtop").fadeOut();
                }
            }
            $(".tools .backtop span").on("click",function(){
                $("html,body").animate({scrollTop:"0"},300);
            });
        },
        bindEvent : function(){
            $('.icon_trainee').hover(function(){
                $('.trainee_code').show();
            }, function(){
                $('.trainee_code').hide();
            });
            $('.icon_master').hover(function(){
                $('.master_code').show();
            }, function(){
                $('.master_code').hide();
            });
        },
        signUp : function(data, success){
            var self = this;
            $.ajax({
                url : '/site/order',
                data : data,
                success : function(res){
                    if(res.code == 0){
                        success && success.call(null, res);
                    }else{
                        self.alert(res.msg);
                    }
                }
            })
        },
        alert : function(msg, callback){
            if(window.dialog){
                var d = dialog({
                    content: msg,
                    width : '300px',
                    ok: function () {
                        callback && callback.call(null);
                    }
                });
                d.showModal();
            }else{
                alert(msg);
            }
        },
        bindSignUp : function(success, from){
            var self = this;
            var gdt = self.getParam('qz_gdt');
            $(document).on('click', '.sign_up_btn', function(){
                var name = $.trim($('#name').val());
                var cellphone = $.trim($('#cellphone').val());
                var city = $('#city_list').val();
                var type = $('#class_type').val();
                if(name == ''){
                    self.alert('请填写姓名');
                    return false;
                }
                if(name.length > 20 || name.length < 2){
                    self.alert('姓名长度必须在2-20位之间');
                    return false;
                }
                if(cellphone == ""){
                    self.alert('请输入手机号');
                    return false;
                }
                if(!/^1(3|4|5|8|7)\d{9}$/.test(cellphone)){
                    self.alert('请输入正确格式的手机号');
                    return false;
                }
                if(type == '0'){
                    self.alert('请选择报考类型');
                    return false;
                }
                var data = {name : name, cellphone : cellphone, city : city, type : type};
                var tmp = '';
                if(from){
                    tmp = from;
                    if(gdt){
                        tmp += '_gdt';
                    }
                }else{
                    tmp = 'gdt';
                }
                data['from'] = tmp;
                self.signUp(data, success);
            });
            $(document).on('change', '#city_list', function(){
                var city = $('#city_list').val();
                var html = '<option value="0">请选择班别</option>';
                var courseList = eval(courseAll);
                if(courseList[city]){
                    for(var i=0; i<courseList[city].length; i++){
                        html += '<option value="'+courseList[city][i]['course_id']+'">'+courseList[city][i]['course_name']+'</option>';
                    }
                }
                $('#class_type').html(html);
            });
        },
        getParam : function(name, href){
            var regex = "(?:^|[?&#])"+encodeURIComponent(name)+"(?:=([^&#?]*))?";
            var value = (href||location.href).match(new RegExp(regex,"")) || ["", ""];
            if(!value[1]){
                return "";
            }
            return decodeURIComponent(value[1]);
        },
        bindShareUrl : function(){
            var via = this.getParam("via");
            if(via){
                $("a").each(function(i,v){
                    var url = $(v).attr("href");
                    if(/^\/\w+(\/\w+)?/.test(url)){
                        if(url.indexOf("via=")<0){
                            url.indexOf("?")<0?url+="?via="+via:url+="&via="+via;
                            $(v).prop("href",url);
                        }
                    }
                });
            }
        }
    };
    win.tsf = tsf;
    $(document).ready(function(){
        win.tsf.init();
    });
        //创建h5元素
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
})(window);
