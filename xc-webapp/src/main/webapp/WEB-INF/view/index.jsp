<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<jsp:include page="common/top.jsp"/>    
<div id="banner" class="imgPlay" style="height: 600px;">
    <div class="img_list">
                    <div data-url="#" class="item" style="display: none;"> <img src="../static/images/20160701201359_22ed7b4b185aa432bf289ffd9f14d44e.jpg" style="height: 100%; width: 100%;"> </div>
                    <div data-url="#" class="item" style="display: none;"> <img src="../static/images/20160707205544_1e20b97aba0a89f039601fc0a06df575.jpg" style="height: 100%; width: 100%;"> </div>
                    <div data-url="#" class="item" style="display: none;"> <img src="../static/images/20160623123243_57f4a5f6d20e53aa50908ac4e0c35695.jpg" style="height: 100%; width: 100%;"> </div>
                    <div data-url="#" class="item" style="display: block;"> <img src="../static/images/20160714165020_9c352b05d428300c2390339c3b64ca8a.jpg" style="height: 100%; width: 100%;"> </div>
                    <div data-url="#" class="item" style="display: none;"> <img src="../static/images/20160711101434_da59caf77b3adc6a99113e7bd3cae8ed.jpg" style="height: 100%; width: 100%;"> </div>
            </div>
<div class="btn_box"><span class=""></span><span class=""></span><span class=""></span><span class="on"></span><span class=""></span></div></div>
<div class="class_intro">
    <div class="tsf_container">
        <div class="module_title"><span>班别介绍</span></div>
        <div class="class_box">
            <ul class="class_nav">
                                <li data-id="22" class="on">本地快速全包班</li>
                                <li data-id="23">集中学考班</li>
                                <li data-id="24">周末学考班</li>
                                <li data-id="25">本地学异地考班</li>
                            </ul>
                        <div class="class_info clearfix" id="course_22">
                <div class="intro_img">
                    <img src="../static/images/20160511160948_182abf7965c4f535945e3845552a4156.jpg">
                </div>
                <div class="intro_text">
                    <h5>本地快速全包班</h5>
                    <ul>
                                                <li>服务全包<i></i></li>
                                                <li>教学包过<i></i></li>
                                                <li>少学少付<i></i></li>
                                            </ul>
                    <p class="signup_num">报名人数：<span>271</span></p>
                    <p class="price">参考价格：<span>4680</span></p>
                    <div class="btn_box">
                        <span data-id="22" class="xx">了解更多</span>
                        <span class="btn_green registerBtn">立即报名</span>
                    </div>
                </div>
            </div>
                        <div class="class_info clearfix" style="display:none;" id="course_23">
                <div class="intro_img">
                    <img src="../static/images/20160511161222_83b095d4d6fe78532e2f5aada0c1a17d.jpg">
                </div>
                <div class="intro_text">
                    <h5>集中学考班</h5>
                    <ul>
                                                <li>集中学考<i></i></li>
                                                <li>35天拿证<i></i></li>
                                                <li>通过率高<i></i></li>
                                            </ul>
                    <p class="signup_num">报名人数：<span>748</span></p>
                    <p class="price">参考价格：<span>6680</span></p>
                    <div class="btn_box">
                        <span data-id="23" class="xx">了解更多</span>
                        <span class="btn_green registerBtn">立即报名</span>
                    </div>
                </div>
            </div>
                        <div class="class_info clearfix" style="display:none;" id="course_24">
                <div class="intro_img">
                    <img src="../static/images/20160511161255_35b5a003dfa046c7b68dcfdba0395b05.jpg">
                </div>
                <div class="intro_text">
                    <h5>周末学考班</h5>
                    <ul>
                                                <li>周末学考<i></i></li>
                                                <li>45天拿证<i></i></li>
                                                <li>仅请假3天<i></i></li>
                                            </ul>
                    <p class="signup_num">报名人数：<span>455</span></p>
                    <p class="price">参考价格：<span>6680</span></p>
                    <div class="btn_box">
                        <span data-id="24" class="xx">了解更多</span>
                        <span class="btn_green registerBtn">立即报名</span>
                    </div>
                </div>
            </div>
                        <div class="class_info clearfix" style="display:none;" id="course_25">
                <div class="intro_img">
                    <img src="../static/images/20160511161335_0dbbaa76cd7c02032827bfd369f9b29c.jpg">
                </div>
                <div class="intro_text">
                    <h5>本地学异地考班</h5>
                    <ul>
                                                <li>集中考试<i></i></li>
                                                <li>学车自由<i></i></li>
                                                <li>35天拿证<i></i></li>
                                            </ul>
                    <p class="signup_num">报名人数：<span>426</span></p>
                    <p class="price">参考价格：<span>7230</span></p>
                    <div class="btn_box">
                        <span data-id="25" class="xx">了解更多</span>
                        <span class="btn_green registerBtn">立即报名</span>
                    </div>
                </div>
            </div>
                    </div>
    </div>
</div>
<div class="why">
    <div class="tsf_container">
        <div class="module_title">为什<span>么选择淘</span>师傅</div>
        <ul class="clearfix">
            <li>
                <div class="icon_box icon_1">
                    <span></span>
                </div>
                <h5>服务城市多,班别多样</h5>
                <p>集中班、周末班、散学自考班等班别，满足您拿证快、价格低、请假少等各种需求。</p>
            </li>
            <li>
                <div class="icon_box icon_2">
                    <span></span>
                </div>
                <h5>学车进程随时看</h5>
                <p>选班别、选教练，做练习，联系教练，查看考试进度，淘师傅帮你管理所有学车事务。</p>
            </li>
            <li>
                <div class="icon_box icon_3">
                    <span></span>
                </div>
                <h5>五星教练,平台监管</h5>
                <p>平台所有教练都经过严格的筛选和监管，绝不吃、拿、卡、要。</p>
            </li>
            <li>
                <div class="icon_box icon_4">
                    <span></span>
                </div>
                <h5>分段付费,降低风险</h5>
                <p>散学自考班首付只需1350元，课后一节一付；快速班首付只需3000元。</p>
            </li>
            <li>
                <div class="icon_box icon_5">
                    <span></span>
                </div>
                <h5>自主约课,定点接送</h5>
                <p>各定点车接车送，快速班地陪全程带领；直接联系教练，随时预约上课。</p>
            </li>
            <li>
                <div class="icon_box icon_6">
                    <span></span>
                </div>
                <h5>在线协议,售后服务</h5>
                <p>下单即签订淘师傅学车协议，不满意随时投诉、更换教练、退款。</p>
            </li>
        </ul>
    </div>
</div>
<div class="history">
    <div class="tsf_container">
        <div class="module_title">每期学车故事</div>
        <div class="history_img">
            <div class="img_box">
                <div id="history" class="history_list clearfix" style="width: 4800px; left: -3200px;">
					<div data-page="71" class="item"><img src="../static/images/20160513112717_9014af58ce35f656b8259a6c4796c1e8.jpg"><h5>集中学考班</h5><p>2016年5月第3期学员</p></div>
					<div data-page="70" class="item"><img src="../static/images/20160512124422_06267a8fbbe1b45abced87454739469b.jpg"><h5>本地学异地考班</h5><p>2015年11月第1期学员</p></div>
					<div data-page="68" class="item"><img src="../static/images/20160511182233_3a0267e6f596fb455b19357864867f3d.jpg"><h5>集中学考班</h5><p>2016年5月第2期学员</p></div>
					<div data-page="77" class="item"><img src="../static/images/20160725172108_b892645dcbe6c6d7afb7ab848f42c39a.jpg"><h5>集中学考班</h5><p>2016年7月第4期学员</p></div>
					<div data-page="76" class="item"><img src="../static/images/20160718093551_fcb2b87a3889bebda914967e12a918cf.jpg"><h5>集中学考班</h5><p>2016年7月第3期学员</p></div>
					<div data-page="75" class="item"><img src="../static/images/20160711160650_2c61db562dc4fba369e1b921f474d2ac.jpg"><h5>集中学考班</h5><p>2016年7月第2期学员</p></div>
					<div data-page="74" class="item"><img src="../static/images/20160708155357_d76f33f4efbd2e81cd98d4ceb802e463.jpg"><h5>集中学考班</h5><p>2016年7月第1期学员</p></div>
					<div data-page="73" class="item"><img src="../static/images/20160612094631_bf50037ace023e5d31866a33aa842931.jpg"><h5>集中学考班</h5><p>2016年6月第2期学员</p></div>
					<div data-page="72" class="item"><img src="../static/images/20160612094109_509831da8285828dec7c48121a3ef6d2.jpg"><h5>集中学考班</h5><p>2016年6月第1期学员</p></div>
					<div data-page="71" class="item"><img src="../static/images/20160513112717_9014af58ce35f656b8259a6c4796c1e8.jpg"><h5>集中学考班</h5><p>2016年5月第3期学员</p></div>
					<div data-page="70" class="item"><img src="../static/images/20160512124422_06267a8fbbe1b45abced87454739469b.jpg"><h5>本地学异地考班</h5><p>2015年11月第1期学员</p></div>
					<div data-page="68" class="item"><img src="../static/images/20160511182233_3a0267e6f596fb455b19357864867f3d.jpg"><h5>集中学考班</h5><p>2016年5月第2期学员</p></div>
					<div data-page="77" class="item"><img src="../static/images/20160725172108_b892645dcbe6c6d7afb7ab848f42c39a.jpg"><h5>集中学考班</h5><p>2016年7月第4期学员</p></div>
					<div data-page="76" class="item"><img src="../static/images/20160718093551_fcb2b87a3889bebda914967e12a918cf.jpg"><h5>集中学考班</h5><p>2016年7月第3期学员</p></div>
					<div data-page="75" class="item"><img src="../static/images/20160711160650_2c61db562dc4fba369e1b921f474d2ac.jpg"><h5>集中学考班</h5><p>2016年7月第2期学员</p></div></div>
            </div>
            <div class="btn_box">
                <span class="btn_prev"></span>
                <span class="btn_next"></span>
            </div>
        </div>
    </div>
</div>
<div class="photo">
    <div class="bg">
        <div class="content">
            <div class="close">×</div>
            <p class="title"><span>学员风采</span><b>(?/?)</b></p>
            <div class="table">
                <div class="tablecell">
                    <div class="imgbox"><img src="http://www.51taosf.com/"></div>
                    <div class="btn_box">
                        <span class="btn_prev"></span>
                        <span class="btn_next"></span>
                    </div>
                </div>
            </div>
            <p class="tip">文字描述</p>
        </div>
    </div>
</div>
<div class="position_box">
    <div class="register_bg">
        <div class="register">
            <p class="sign_tip">学车报名</p>
            <div>
                <span class="sign_label">姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：</span>
                <input type="text" id="name" maxlength="20">
            </div>
            <div>
                <span class="sign_label">电&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;话：</span>
                <input type="text" id="cellphone" maxlength="11">
            </div>
            <div>
                <span class="sign_label">所在城市：</span>
                <select id="city_list">
                                        <option value="105" selected="">深圳</option>
                                        <option value="274">南昌</option>
                                        <option value="103">广州</option>
                                    </select>
            </div>
            <div>
                <span class="sign_label">报考班次：</span>
                <select id="class_type">
                    <option value="0">请选择班别</option>
                                        <option value="22" selected="selected">本地快速全包班</option>
                                        <option value="23">集中学考班</option>
                                        <option value="24">周末学考班</option>
                                        <option value="25">本地学异地考班</option>
                                    </select>
            </div>
            <div class="sign_up_btn" id="s_index_sign">
                提交
            </div>
            <span class="close">×</span>
        </div>
        <div class="register_success">
            <p>恭喜您,报名成功!工作人员将在3个工作日内联系您!</p>
            <img src="../static/images/apprqcode.png">
            <p class="tip">扫我下载APP直接下单</p>
            <span class="close">×</span>
        </div>
    </div>
</div>

<script type="text/javascript" src="../static/js/index.js"></script>
<jsp:include page="common/foot.jsp"/>
</div>

</body></html>