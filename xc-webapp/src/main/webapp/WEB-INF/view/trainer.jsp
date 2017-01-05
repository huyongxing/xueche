<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<jsp:include page="common/top.jsp"/>
    <style type="text/css">
    .banner{
        width: 100%;
        height: 540px;
        background: url("../static/images/masterBanner.jpg") no-repeat center;
        background-size: auto 100%;
    }
    .banner .qrcode{
        float: left;
        margin-top: 200px;
        margin-left: 50px;
    }
    .banner .qrcode img{
        width: 150px;
        height: 150px;
        display: block;
    }
    .banner .qrcode p{
        height: 30px;
        line-height: 30px;
        background: rgba(0,0,0,.8);
        filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#c8000000,endColorstr=#c8000000);
        color: #e2e2e2;
        text-align: center;
        font-size: 14px;
    }
    .step .title{
        font-size: 30px;
        color: #666;
        text-align: center;
        margin: 50px 0;
    }
    .step li{
        text-align: center;
        float: left;
        width: 25%;
    }
    .step li .num{
        height: 14px;
        margin-bottom: 50px;
        border-bottom: 1px solid #d8d8d8;
    }
    .step li .num span{
        padding: 5px;
        width: 30px;
        height: 30px;
        display: inline-block;
        background-color: #fff;
        background-image: url("../static/images/websiteIcon.png");
        background-repeat: no-repeat;
    }
    .step .step_1 .num span{
        background-position: 0px -109px;
    }
    .step .step_2 .num span{
        background-position: -40px -109px;
    }
    .step .step_3 .num span{
        background-position: -82px -109px;
    }
    .step .step_4 .num span{
        background-position: -122px -109px;
    }
    .step li:first-child .num{
        margin-left: 100px;
        text-align: left;
    }
    .step li:last-child .num{
        margin-right: 100px;
        text-align: right;
    }
    .step li .step_icon{
        width: 136px;
        height: 136px;
        margin: 0 auto;
        margin-bottom: 50px;
        background-image: url("../static/images/websiteIcon.png");
        background-repeat: no-repeat;

    }
    .step .step_1 .step_icon{
        background-position: 0px -153px;
    }
    .step .step_2 .step_icon{
        background-position: -152px -153px;
    }
    .step .step_3 .step_icon{
        background-position: -306px -153px;
    }
    .step .step_4 .step_icon{
        background-position: -1px -302px;
    }
    .step li h5{
        font-size: 24px;
        font-weight:normal;
        color: #4e4e4e;
    }
    .step li p{
        font-size: 14px;
        color: #959595;
    }

    .coach_container{
        padding-top: 100px;
        padding-bottom: 100px;
    }
    .become_btn{
        color: #fff;
        padding: 10px 70px;
        border-radius: 50px;
        font-size: 30px;
        width: 128px;
        margin: 0 auto;
        margin-top: 80px;
        cursor: pointer;
        display: block;
        background: #00bc8e;
    }

</style>
<div class="banner">
    <div class="tsf_container clearfix">
        <input type="hidden" id="now-date" value="2016-07-28">
    </div>
</div>
<div class="step">
    <div class="tsf_container">
        <div class="title">
            成为教练仅需4步
        </div>
        <ul class="clearfix">
            <li class="step_1">
                <div class="num">
                    <span>
                    </span>
                </div>
                <div class="step_icon"></div>
                <h5>填写资料</h5>
                <p>填写注册资料</p>
            </li>
            <li class="step_2">
                <div class="num">
                    <span>
                    </span>
                </div>
                <div class="step_icon"></div>
                <h5>审核资料</h5>
                <p>淘师傅审核资料</p>
            </li>
            <li class="step_3">
                <div class="num">
                    <span>
                    </span>
                </div>
                <div class="step_icon"></div>
                <h5>进行培训</h5>
                <p>淘师傅对您进行培训</p>
            </li>
            <li class="step_4">
                <div class="num">
                    <span>
                    </span>
                </div>
                <div class="step_icon"></div>
                <h5>开通成功</h5>
                <p>开通账号,成为淘师傅教练</p>
            </li>
        </ul>
        <div class="coach_container">
            <a class="become_btn" href="#">
                立即申请
            </a>
        </div>
    </div>
</div>
<jsp:include page="common/foot.jsp"/>
</div>
</body></html>