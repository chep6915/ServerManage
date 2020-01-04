<?php

namespace App\Model\Common;

use Illuminate\Database\Eloquent\Model;


class HttpHelper extends Model
{


    public static function ai_curl($url)
    {

        $ch = curl_init();
        foreach ($url as $key => $val) {
            // 设置URL和相应的选项
//    $options = array(CURLOPT_URL => 'https://www.runoob.com',
//        CURLOPT_HEADER => false
//    );
//
//    curl_setopt_array($ch, $options);


            //=================boolean
            curl_setopt($ch, CURLOPT_AUTOREFERER, 0);
//    curl_setopt($ch,CURLOPT_BINARYTRANSFER,1);
            curl_setopt($ch, CURLOPT_COOKIESESSION, 0);
            curl_setopt($ch, CURLOPT_CERTINFO, 0);
            curl_setopt($ch, CURLOPT_CONNECT_ONLY, 0);
            curl_setopt($ch, CURLOPT_CRLF, NULL);
            curl_setopt($ch, CURLOPT_DNS_USE_GLOBAL_CACHE, 0);
            curl_setopt($ch, CURLOPT_FAILONERROR, 0);
//    curl_setopt($ch,CURLOPT_SSL_,1);
            curl_setopt($ch, CURLOPT_FILETIME, 0);
            curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 0);
            curl_setopt($ch, CURLOPT_FORBID_REUSE, 0);
//    curl_setopt($ch,CURLOPT_FRESH_CONNECT,1);
//    curl_setopt($ch,CURLOPT_FTP_USE_EPRT,1);
//    curl_setopt($ch,CURLOPT_FTP_USE_EPSV,1);
//    curl_setopt($ch,CURLOPT_FTP_CREATE_MISSING_DIRS,1);
//    curl_setopt($ch,CURLOPT_FTPAPPEND,1);
//    curl_setopt($ch,CURLOPT_TCP_NODELAY,1);
//    curl_setopt($ch,CURLOPT_FTPASCII,1);
//    curl_setopt($ch,CURLOPT_FTPLISTONLY,1);
            curl_setopt($ch, CURLOPT_HEADER, 0);
//    curl_setopt($ch,CURLINFO_HEADER_OUT,1);
//    curl_setopt($ch,CURLOPT_HTTPGET,1);
//    curl_setopt($ch,CURLOPT_HTTPPROXYTUNNEL,1);
//    curl_setopt($ch,CURLOPT_MUTE,1);
//    curl_setopt($ch,CURLOPT_NETRC,1);
//    curl_setopt($ch,CURLOPT_NOBODY,1);
//    curl_setopt($ch,CURLOPT_NOPROGRESS,1);
            curl_setopt($ch, CURLOPT_NOSIGNAL, 0);
//    curl_setopt($ch,CURLOPT_PATH_AS_IS,1);
//    curl_setopt($ch,CURLOPT_PIPEWAIT,1);
            curl_setopt($ch, CURLOPT_POST, 0);        //是否為post請求
//    curl_setopt($ch,CURLOPT_PUT,1);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 0); //可能是0
//    curl_setopt($ch,CURLOPT_SAFE_UPLOAD,1);
//    curl_setopt($ch,CURLOPT_SASL_IR,1);
//    curl_setopt($ch,CURLOPT_SSL_ENABLE_ALPN,1);
//    curl_setopt($ch,CURLOPT_SSL_ENABLE_NPN,1);
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 1);  // 对认证证书来源的检查
//    curl_setopt($ch,CURLOPT_SSL_VERIFYSTATUS,1);
//    curl_setopt($ch,CURLOPT_TCP_FASTOPEN,1);
//    curl_setopt($ch,CURLOPT_TFTP_NO_OPTIONS,1);
//    curl_setopt($ch,CURLOPT_TRANSFERTEXT,1);
//    curl_setopt($ch,CURLOPT_UNRESTRICTED_AUTH,1);
//    curl_setopt($ch,CURLOPT_UPLOAD,1);
//    curl_setopt($ch,CURLOPT_VERBOSE,1);

            //==================integer

//    curl_setopt($ch,CURLOPT_BUFFERSIZE,1);
//    curl_setopt($ch,CURLOPT_CLOSEPOLICY,1);
//    curl_setopt($ch,CURLOPT_CONNECTTIMEOUT,1);
//    curl_setopt($ch,CURLOPT_CONNECTTIMEOUT_MS,1);
//    curl_setopt($ch,CURLOPT_DNS_CACHE_TIMEOUT,1);
//    curl_setopt($ch,CURLOPT_EXPECT_100_TIMEOUT_MS,1);
//    curl_setopt($ch,CURLOPT_FTPSSLAUTH,1);
//    curl_setopt($ch,CURLOPT_HEADEROPT,1);
//    curl_setopt($ch,CURLOPT_HTTP_VERSION,1);
//    curl_setopt($ch,CURLOPT_HTTPAUTH,1);
//    curl_setopt($ch,CURLOPT_INFILESIZE,1);
//    curl_setopt($ch,CURLOPT_LOW_SPEED_LIMIT,1);
//    curl_setopt($ch,CURLOPT_LOW_SPEED_TIME,1);
//    curl_setopt($ch,CURLOPT_MAXCONNECTS,1);
//    curl_setopt($ch,CURLOPT_MAXREDIRS,1);
//    curl_setopt($ch,CURLOPT_PORT,1);
//    curl_setopt($ch,CURLOPT_POSTREDIR,1);
//    curl_setopt($ch,CURLOPT_PROTOCOLS,1);
//    curl_setopt($ch,CURLOPT_PROXYAUTH,1);
//    curl_setopt($ch,CURLOPT_PROXYPORT,1);
//    curl_setopt($ch,CURLOPT_PROXYTYPE,1);
//    curl_setopt($ch,CURLOPT_REDIR_PROTOCOLS,1);
//    curl_setopt($ch,CURLOPT_RESUME_FROM,1);
//    curl_setopt($ch,CURLOPT_SSL_OPTIONS,1);
            curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 2);      // 从证书中检查SSL加密算法是否存在
//    curl_setopt($ch,CURLOPT_SSLVERSION,1);
//    curl_setopt($ch,CURLOPT_STREAM_WEIGHT,1);
//    curl_setopt($ch,CURLOPT_TIMECONDITION,1);
            curl_setopt($ch, CURLOPT_TIMEOUT, 0);     //设置超时限制防止死循环
            curl_setopt($ch, CURLOPT_TIMEOUT_MS, 0);
//    curl_setopt($ch,CURLOPT_TIMEVALUE,1);
//    curl_setopt($ch,CURLOPT_MAX_RECV_SPEED_LARGE,1);
//    curl_setopt($ch,CURLOPT_MAX_SEND_SPEED_LARGE,1);
//    curl_setopt($ch,CURLOPT_SSH_AUTH_TYPES,1);
//    curl_setopt($ch,CURLOPT_IPRESOLVE,1);
//    curl_setopt($ch,CURLOPT_FTP_FILEMETHOD,1);

            //===============string
//    curl_setopt($ch,CURLOPT_CAINFO,1);
//    curl_setopt($ch,CURLOPT_CAPATH,1);
//    curl_setopt($ch,CURLOPT_COOKIE,1);
            curl_setopt($ch, CURLOPT_COOKIEFILE, Null);   //读取上面所储存的Cookie信息
            curl_setopt($ch, CURLOPT_COOKIEJAR, Null);    //存放Cookie信息的文件名称
//    curl_setopt($ch,CURLOPT_CUSTOMREQUEST,1);
//    curl_setopt($ch,CURLOPT_DEFAULT_PROTOCOL,1);
//    curl_setopt($ch,CURLOPT_DNS_INTERFACE,1);
//    curl_setopt($ch,CURLOPT_DNS_LOCAL_IP4,1);
//    curl_setopt($ch,CURLOPT_DNS_LOCAL_IP6,1);
//    curl_setopt($ch,CURLOPT_EGDSOCKET,1);
//    curl_setopt($ch,CURLOPT_ENCODING,1);
//    curl_setopt($ch,CURLOPT_FTPPORT,1);
//    curl_setopt($ch,CURLOPT_INTERFACE,1);
//    curl_setopt($ch,CURLOPT_KEYPASSWD,1);
//    curl_setopt($ch,CURLOPT_KRB4LEVEL,1);
//    curl_setopt($ch,CURLOPT_LOGIN_OPTIONS,1);
//    curl_setopt($ch,CURLOPT_PINNEDPUBLICKEY,1);
            curl_setopt($ch, CURLOPT_POSTFIELDS, Null);
//    curl_setopt($ch,CURLOPT_PRIVATE,1);
//    curl_setopt($ch,CURLOPT_PROXY,1);
//    curl_setopt($ch,CURLOPT_PROXY_SERVICE_NAME,1);
//    curl_setopt($ch,CURLOPT_PROXYUSERPWD,1);
//    curl_setopt($ch,CURLOPT_RANDOM_FILE,1);
//    curl_setopt($ch,CURLOPT_RANGE,1);
//    curl_setopt($ch,CURLOPT_REFERER,1);
//    curl_setopt($ch,CURLOPT_SERVICE_NAME,1);
//    curl_setopt($ch,CURLOPT_SSH_HOST_PUBLIC_KEY_MD5,1);
//    curl_setopt($ch,CURLOPT_SSH_PUBLIC_KEYFILE,1);
//    curl_setopt($ch,CURLOPT_SSH_PRIVATE_KEYFILE,1);
//    curl_setopt($ch,CURLOPT_SSL_CIPHER_LIST,1);
//    curl_setopt($ch,CURLOPT_SSLCERT,1);
//    curl_setopt($ch,CURLOPT_SSLCERTPASSWD,1);
//    curl_setopt($ch,CURLOPT_SSLCERTTYPE,1);
//    curl_setopt($ch,CURLOPT_SSLENGINE,1);
//    curl_setopt($ch,CURLOPT_SSLENGINE_DEFAULT,1);
//    curl_setopt($ch,CURLOPT_SSLKEY,1);
//    curl_setopt($ch,CURLOPT_SSLKEYPASSWD,1);
//    curl_setopt($ch,CURLOPT_SSLKEYTYPE,1);
//    curl_setopt($ch,CURLOPT_UNIX_SOCKET_PATH,1);
            curl_setopt($ch, CURLOPT_URL, $val);
            curl_setopt($ch, CURLOPT_USERAGENT, Null);
//    curl_setopt($ch,CURLOPT_USERNAME,1);
//    curl_setopt($ch,CURLOPT_USERPWD,1);
//    curl_setopt($ch,CURLOPT_XOAUTH2_BEARER,1);


            //=====array
//    curl_setopt($ch,CURLOPT_CONNECT_TO,1);
//    curl_setopt($ch,CURLOPT_HTTP200ALIASES,1);
            curl_setopt($ch, CURLOPT_HTTPHEADER, array());
//    curl_setopt($ch,CURLOPT_POSTQUOTE,1);
//    curl_setopt($ch,CURLOPT_PROXYHEADER,1);
//    curl_setopt($ch,CURLOPT_QUOTE,1);
//    curl_setopt($ch,CURLOPT_RESOLVE,1);


            //====流资源 （例如使用fopen()）：
//    curl_setopt($ch,CURLOPT_FILE,1);
//    curl_setopt($ch,CURLOPT_INFILE,1);
//    curl_setopt($ch,CURLOPT_STDERR,1);
//    curl_setopt($ch,CURLOPT_WRITEHEADER,1);


            //===应该是有效的函数或者闭包：
//    curl_setopt($ch,CURLOPT_HEADERFUNCTION,1);
//    curl_setopt($ch,CURLOPT_PASSWDFUNCTION,1);
//    curl_setopt($ch,CURLOPT_PROGRESSFUNCTION,1);
//    curl_setopt($ch,CURLOPT_READFUNCTION,1);
//    curl_setopt($ch,CURLOPT_WRITEFUNCTION,1);


            //====其他值
//    curl_setopt($ch,CURLOPT_SHARE,1);


            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);     //获取的信息以文件流的形式返回
            //https需要使用
//    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);    // 对认证证书来源的检查
//    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);        // 从证书中检查SSL加密算法是否存在
//    curl_setopt($ch, CURLOPT_TIMEOUT_MS, 200);
//    curl_setopt($ch, CURLOPT_TIMEOUT, 30); // 设置超时限制防止死循环
//    curl_setopt($ch, CURLOPT_USERAGENT, $_SERVER['HTTP_USER_AGENT']); // 模拟用户使用的浏览器
//    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1); // 使用自动跳转
//    curl_setopt($ch, CURLOPT_AUTOREFERER, 1); // 自动设置Referer
//    curl_setopt($ch, CURLOPT_POSTFIELDS, $data); // Post提交的数据包
//    curl_setopt($ch, CURLOPT_COOKIEJAR, $this->cookie_file); // 存放Cookie信息的文件名称
//    curl_setopt($ch, CURLOPT_COOKIEFILE, $this->cookie_file); // 读取上面所储存的Cookie信息
//    curl_setopt($ch, CURLOPT_HEADER, 0); // 显示返回的Header区域内容
//    curl_setopt($ch, CURLOPT_HTTPHEADER, array(
//        "Accept: application/json"
//    ));
//    $_headerParams = array('Content-type: application/x-www-form-urlencoded');
//    curl_setopt($ch, CURLOPT_HTTPHEADER, $_headerParams);

//            curl_setopt($ch, CURLOPT_HTTPHEADER, array('X-FORWARDED-FOR:8.8.8.8', 'CLIENT-IP:8.8.8.8'));//IP

            curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 40);
            curl_setopt($ch, CURLOPT_TIMEOUT, 400); //timeout in seconds
            curl_setopt($ch, CURLOPT_NOSIGNAL, 0);

//            curl_setopt($ch, CURLOPT_HTTPHEADER, array('Expect:'));
//            set_time_limit(0);
//    $test = curl_getinfo($ch, CURLOPT_POST);
            // 抓取URL并把它传递给浏览器
            $rs = curl_exec($ch);
            $httpInfo = array();
            $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
            $httpInfo = array_merge($httpInfo, curl_getinfo($ch));
sleep(1);
//            socket_set_timeout(10);
            echo $httpCode.'====='.$val.curl_error($ch).PHP_EOL;
        }
        //关闭cURL资源，并且释放系统资源
        curl_close($ch);

        exit;
//    $rs = getinstring($rs, "class=\"nroffsh\">DEFAULT</h2>
//<p class=\"level0\">", "<a name=\"PROTOCOLS\">");

        sleep(1);

        exit;

//    curl_setopt($ch, CURLOPT_HEADERFUNCTION, 'curlHeaderCallback');
//    curl_setopt($ch, CURLOPT_FAILONERROR, 1);

    }


    function get_cookie($url_, $params_, $referer_)
    {

        if ($url_ == null) {
            echo "get_cookie_url_null";
            exit;
        }
        if ($params_ == null) {
            echo "get_params_null";
            exit;
        }
        if ($referer_ == null) {
            echo "get_referer-null";
            exit;
        }
        $this_header = array("content-type: application/x-www-form-urlencoded; charset=UTF-8");//访问链接时要发送的头信息

        $ch = curl_init($url_);//这里是初始化一个访问对话，并且传入url，这要个必须有

        //curl_setopt就是设置一些选项为以后发起请求服务的

        curl_setopt($ch, CURLOPT_HTTPHEADER, $this_header);//一个用来设置HTTP头字段的数组。使用如下的形式的数组进行设置： array('Content-type: text/plain', 'Content-length: 100')
        curl_setopt($ch, CURLOPT_HEADER, 1);//如果你想把一个头包含在输出中，设置这个选项为一个非零值，我这里是要输出，所以为 1

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);//将 curl_exec()获取的信息以文件流的形式返回，而不是直接输出。设置为0是直接输出

        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);//设置跟踪页面的跳转，有时候你打开一个链接，在它内部又会跳到另外一个，就是这样理解

        curl_setopt($ch, CURLOPT_POST, 1);//开启post数据的功能，这个是为了在访问链接的同时向网页发送数据，一般数urlencode码

        curl_setopt($ch, CURLOPT_POSTFIELDS, $params_); //把你要提交的数据放这

        curl_setopt($ch, CURLOPT_COOKIEJAR, 'cookie.txt');//获取的cookie 保存到指定的 文件路径，我这里是相对路径，可以是$变量

        //curl_setopt($ch, CURLOPT_COOKIEFILE, 'cookie.txt');//要发送的cookie文件，注意这里是文件，还一个是变量形式发送

        //curl_setopt($curl, CURLOPT_COOKIE, $this->cookies);//例如这句就是设置以变量的形式发送cookie，注意，这里的cookie变量是要先获取的，见下面获取方式

        curl_setopt($ch, CURLOPT_REFERER, $referer_); //在HTTP请求中包含一个'referer'头的字符串。告诉服务器我是从哪个页面链接过来的，服务器籍此可以获得一些信息用于处理。

        $content = curl_exec($ch);     //重点来了，上面的众多设置都是为了这个，进行url访问，带着上面的所有设置

        if (curl_errno($ch)) {
            echo 'Curl error: ' . curl_error($ch);
            exit(); //这里是设置个错误信息的反馈
        }

        if ($content == false) {
            echo "get_content_null";
            exit();
        }
        preg_match('/Set-Cookie:(.*);/iU', $content, $str); //这里采用正则匹配来获取cookie并且保存它到变量$str里，这就是为什么上面可以发送cookie变量的原因

        $cookie = $str[1]; //获得COOKIE（SESSIONID）

        curl_close($ch);//关闭会话

        return $cookie;//返回cookie
    }

    /**
     * 接口回传值
     * @param $sError //错误代码
     * @param $sMsg //错误信息
     * @param array $data
     * date            2019/5/3 09:50:39
     * author          Rex
     */
    public static function json_out($sError, $sMsg, $data = array())
    {
        $json['code'] = $sError;
        $json['msg'] = ($json['code'] == 0) ? '操作成功' : $sMsg;
        $json['data'] = $data;
        return $json;
    }

    public static function trimhh($str){
        $qian=array("\t","\n","\r");$hou=array("","","");
        return str_replace($qian,$hou,$str);
    }
}
