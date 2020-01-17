<?php
/**
 * Created by PhpStorm.
 * User: Rex
 * Date: 2019/12/15
 * Time: 9:19 PM
 */


/**
 * 取得外部真實ip
 * @return mixed
 * Date            2019/12/15 21:26:51
 * Author          Rex
 */
function getRealIp()
{
//    $curl = curl_init('http://tool.huixiang360.com/zhanzhang/ipaddress.php');
//    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
//    $rs = curl_exec($curl);
//    preg_match('/\[(.*)\]/', $rs, $tm);
//    $ip = $tm[1];
//    if (empty($ip)) {
//        $curl = curl_init('ident.me');
//        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
//        $rs = curl_exec($curl);
//        $ip = $rs;
//    }
//    curl_close($curl);
//    return $ip;

    if (isset($_SERVER['SERVER_NAME'])) {
        return gethostbyname($_SERVER['SERVER_NAME']);
    } else {
        if (isset($_SERVER)) {
            if (isset($_SERVER['SERVER_ADDR'])) {
                $server_ip = $_SERVER['SERVER_ADDR'];
            } elseif (isset($_SERVER['LOCAL_ADDR'])) {
                $server_ip = $_SERVER['LOCAL_ADDR'];
            }
        } else {
            $server_ip = getenv('SERVER_ADDR');
        }
        return $server_ip ? $server_ip : '获取不到服务器IP';
    }
}


/**
 * 逐行读取TXT文件并回传array
 * @param $txtfile
 * @return array|string
 * Date            2019/12/19 01:11:20
 * Author          Rex
 */
function getTxtContent($txtfile)
{
    if (!file_exists($txtfile)) return 'file not exist';
    $file = @fopen($txtfile, 'r');
    $content = array();
    if (!$file) {
        return 'file open fail';
    } else {
        $i = 0;
        while (!feof($file)) {
            $content[$i] = mb_convert_encoding(fgets($file), "UTF-8", "GBK,ASCII,ANSI,UTF-8");
            $qian=array("\t","\n","\r");$hou=array("","","");
            $content[$i] = str_replace($qian,$hou,$content[$i]);
            $i++;
        }
        fclose($file);
        $content = array_filter($content); //数组去空
    }
    return $content;
}

/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------
* 在字串中撷取某个字串取代正则表示法
* @ param  string $string           字串
* @ param  string $beforestring     前字串
* @ param  string $afterstring      后字串
* @ return string $content  文件夹内容
----------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
function getinstring($string = "", $beforestring = "", $afterstring = "")
{
    //debug
//     echo strpos($string,$beforestring)+strlen($beforestring).PHP_EOL;        //firstcut
//     echo strpos(substr($string,strpos($string,$beforestring)+strlen($beforestring)),$afterstring).PHP_EOL;       //lastcut
    $firstcut = strpos($string, $beforestring) === FALSE ? "" : strpos($string, $beforestring) + strlen($beforestring);
    if (empty($firstcut)) {
        return;
    } else {
        return substr($string, strpos($string, $beforestring) + strlen($beforestring), strpos(substr($string, strpos($string, $beforestring) + strlen($beforestring)), $afterstring));
    }
}

/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------
* 分析apache日誌
* @ param  string $string           字串
* @ param  string $beforestring     前字串
* @ param  string $afterstring      后字串
* @ return string $content  文件夹内容
----------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
function splitApacheLog($string = "")
{

}

