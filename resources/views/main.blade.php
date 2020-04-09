<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="UTF-8">

    <style>
        * {
            padding: 0;
            margin: 0;
        }

        html, body {
            height: 100%;
            margin: 0;
        }

        /*common*/
        a {
            text-decoration: none;
            color: #fff;
        }

        /*top area*/
        .top-menus {
            width: 100%;
            /*height: 13%;*/
            height: 50px;
            background-color: #3b9adc;
            overflow: hidden;
        }

        .logo {
            max-width: 10%;
            height: 100%;
            /*background-color: black;*/
        }

        /*left area*/
        .left-menus {
            float: left;
            width: 15%;
            height: 100%;
            background-color: #3c444d;
            overflow: hidden;
        }

        .left-menu {
            float: left;
            width: 100%;
            height: 10%;
            /*background-color: black;*/
        }

        .left-menu:hover {
            opacity: 1
        }

        #left-menu-inside {
            width: 100%;
            height: 100%;
            padding: 10px;
        }

        /*#left-menu-pic {*/
        /*float: left;*/
        /*height: 65%;*/
        /*width: 15%;*/
        /*padding-left: 15px;*/
        /*padding-top: 9px;*/
        /*padding-right: 5px;*/
        /*padding:9px 5px 0px 15px*/
        /*!*background-color: green;*!*/
        /*}*/

        /*#left-menu-pic img {*/
        /*width: 100%;*/
        /*height: 100%;*/
        /*}*/

        #left-menu-name {
            float: left;
            height: 100%;
            width: 65%;
            color: #fff;
            font-size: 15px;
            line-height: 45px;
            /*background-color: blue;*/
        }

        #left-menu-link img {
            float: left;
            height: 65%;
            width: 20%;
            min-width: 20%;
            /*padding-left: 15px;*/
            /*padding-top: 9px;*/
            /*padding-right: 5px;*/
            padding: 9px 5px 0px 15px
        }

        #left-menu-link {
            float: left;
            height: 100%;
            /*width: 65%;*/
            width: auto;
            color: #fff;
            font-size: 15px;
            line-height: 45px;
            /*background-color: blue;*/
        }

        /*right area*/
        .right-main {
            float: left;
            width: 85%;
            height: 100%;
            background-color: gray;
            overflow: scroll;
        }

        .right-menu {
            text-align: center;
            background-color: #b2e2fa;
            margin-top: 0px;
        }

        #right-menu-name {
            line-height: 35px;
            margin: 0px;
        }

        #right-items-box {
            background-color: #b1c2c8;
            width: 100%;
            height: 200px;
            overflow: hidden;
            border-color: black;
            border-bottom-style: solid;
            border-bottom-width: 1px;
        }

        #right-item {
            /*background-color: red;*/
            /*margin-top:10px;*/
            float: left;
            margin-top: 20px;
            margin-bottom: 20px;
            margin-left: 45px;
            width: 20%;
            height: 160px;
            font-size: 25px;
            /*line-height:75px;*/
            line-height: 160px;
            border-style: solid;
            border-color: black;
            text-align: center;
            border-radius: 45px;
        }


    </style>
</head>
<body>
<div class="top-menus">
    <div class="logo">

    </div>
</div>
<div class="left-menus">
    <div class="left-menu">
        <div id="left-menu-inside">
            <a href="/" id="left-menu-link">
                {{--<img src="{{ URL::to('/') }}/view/main/images/main.png">--}}
                後台首頁
            </a>
        </div>
    </div>
    <div class="left-menu">
        <div id="left-menu-inside">
            <a href="/" id="left-menu-link">
                <div id="left-menu-pic">
                    {{--<img src="{{ URL::to('/') }}/view/main/images/tools.png">--}}
                </div>
                SEO工具
            </a>
        </div>
    </div>
    <div class="left-menu">
        <div id="left-menu-inside">
            <a href="/" id="left-menu-link">
                <div id="left-menu-pic">
                    {{--<img src="{{ URL::to('/') }}/view/main/images/tools.png">--}}
                </div>
                駭客SQL練習
            </a>
        </div>
    </div>
    {{--<div class="left-menu">--}}
    {{--<div id="left-menu-pic">--}}

    {{--</div>--}}
    {{--</div>--}}
    {{--<div class="left-menu">--}}
    {{--<div id="left-menu-pic">--}}

    {{--</div>--}}
    {{--</div>--}}
</div>
<div class="right-main">
    <div class="right-menu">
        <p id="right-menu-name">綜合工具區</p>
        <div id="right-items-box">
            <a href="https://www.5118.com/">
                <div id="right-item">
                    5118關鍵詞工具
                </div>
            </a>
        </div>
    </div>
    <div class="right-menu">
        <p id="right-menu-name">日誌分析</p>
        <div id="right-items-box">
            <a href="/analyselog_new">
                <div id="right-item">
                    loghao拉格好改版
                </div>
            </a>
            <a href="http://www.loghao.com/">
                <div id="right-item">
                    loghao拉格好
                </div>
            </a>
        </div>
    </div>
    <div class="right-menu">
        <p id="right-menu-name">收錄.域名狀態查詢</p>
        <div id="right-items-box">
            <a href="http://www.link114.cn/">
                <div id="right-item">
                    link114
                </div>
            </a>
            <a href="http://www.iis7.com/b/plc/?iis7dh">
                <div id="right-item">
                    iis7站長之家
                </div>
            </a>
        </div>
    </div>
</div>
</body>

</html>

