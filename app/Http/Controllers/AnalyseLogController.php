<?php

namespace App\Http\Controllers;

use App\Model\Common\ParamValidator;
use App\Model\Data\spider;
use App\Model\Data\web_log;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AnalyseLogController extends Controller
{

    public function analyseLog()
    {

        $request= Request();
        $rule = [
            'file' => 'required|file|mimes:txt,log|max:10240'
        ];

        $validator = ParamValidator::validateData($request->file(), $rule);
        if ($validator->fails()) {
            return('错误格式');
        }

        $file = $request->file('file');

        if ($file->isValid()) {
            //判断是否上传成功
            if (!$file->move(public_path() . DIRECTORY_SEPARATOR.'data'.DIRECTORY_SEPARATOR .'weblog', $file->getClientOriginalName())) {
                return ('上传失败');
            }
        }

        $files = public_path() . DIRECTORY_SEPARATOR.'data'.DIRECTORY_SEPARATOR .'weblog'.DIRECTORY_SEPARATOR.$file->getClientOriginalName();

        $parser = new \Kassner\LogParser\LogParser();
        //寶塔apache預設格式
        $parser->setFormat('%h %l %u %t \"%r\" %>s %b \"%{Referer}i\" \"%{User-agent}i\"');
        //線上模式
        $lines = file($files, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);

        //本地模式
//        $lines = file(public_path() . DIRECTORY_SEPARATOR . 'data' . DIRECTORY_SEPARATOR . 'weblog' . DIRECTORY_SEPARATOR . 'cmsmov.log', FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
        foreach ($lines as $line) {
            $entry[] = $parser->parse($line);
        }

        foreach ($entry as $key => $val) {
            $val = (array)$val;

            $data[$key]['date'] = date('Y-m-d',strtotime($val['time']));
            $data[$key]['time'] = date('H:i:s',strtotime($val['time']));
            $data[$key]['c-ip'] = $val['host'];
            $data[$key]['cs-username'] = $val['logname'];
            $request=explode(' ',$val['request']);
            $data[$key]['cs-method'] = $request[0];
            $data[$key]['cs-uri-stem'] = $request[1];
            $data[$key]['cs-version'] = $request[2];
            $data[$key]['sc-status'] = $val['status'];
            $data[$key]['sc-bytes'] = $val['responseBytes'];
            $data[$key]['cs(Referer)'] = $val['HeaderReferer'];
            $data[$key]['cs(User-Agent)'] = $val['HeaderUseragent'];
            $data[$key]['spider'] = '';
            $data[$key]['spider_type'] = '';
            $data[$key]['created_at'] = date('Y-m-d H:i:s');
            $data[$key]['updated_at'] = date('Y-m-d H:i:s');
            $data[$key]['stamp'] = $val['stamp'];
//            $data[$key]['stamp'] = base64_encode($val['stamp'].$data[$key]['cs-uri-stem']);

            if(strpos(strtolower($val['HeaderUseragent']),'baidu')){
                $data[$key]['spider'] = 'baidu';
                if(
                    strpos($val['HeaderUseragent'],'Baiduspider/2.0;')||
                    strpos($val['HeaderUseragent'],'Baiduspider-render/2.0;')
                ){
                    $data[$key]['spider_type'] = 'PC UA';
                }else if(
                    strpos($val['HeaderUseragent'],'Linux;u;Android 4.2.2;zh-cn;')||
                    strpos($val['HeaderUseragent'],'iPhone; CPU iPhone OS 9_1 like Mac OS X')
                ){
                    $data[$key]['spider_type'] = 'MB UA';
                }else if(strpos($val['HeaderUseragent'],'baiduboxapp')){
                    $data[$key]['spider_type'] = '手机百度';
                }else if(strpos($val['HeaderUseragent'],'Baiduspider-image')){
                    $data[$key]['spider_type'] = '图片搜索';
                }else if(strpos($val['HeaderUseragent'],'Baiduspider-video')){
                    $data[$key]['spider_type'] = '视频搜索';
                }else if(strpos($val['HeaderUseragent'],'Baiduspider-news')){
                    $data[$key]['spider_type'] = '新闻搜索';
                }else if(strpos($val['HeaderUseragent'],'Baiduspider-favo')){
                    $data[$key]['spider_type'] = '百度搜藏';
                }else if(strpos($val['HeaderUseragent'],'Baiduspider-cpro')){
                    $data[$key]['spider_type'] = '百度联盟';
                }else if(strpos($val['HeaderUseragent'],'Baiduspider-ads')){
                    $data[$key]['spider_type'] = '商务搜索';
                }

            }else if (strpos(strtolower($val['HeaderUseragent']),'google')){
                $data[$key]['spider'] = 'google';
                if(strpos($val['HeaderUseragent'],'Googlebot-Image')){
                    $data[$key]['spider_type'] = '谷歌图片';
                }else if(strpos($val['HeaderUseragent'],'AdsBot-Google')){
                    $data[$key]['spider_type'] = '谷歌广告';
                }
            }else if (strpos(strtolower($val['HeaderUseragent']),'sogo')){
                $data[$key]['spider'] = 'sogou';
                if(strpos($val['HeaderUseragent'],'Sogou wap spider')){
                    $data[$key]['spider_type'] = '搜狗无线端UA';
                }else if(strpos($val['HeaderUseragent'],'Sogou web spider')){
                    $data[$key]['spider_type'] = '搜狗网页蜘蛛';
                }else if(strpos($val['HeaderUseragent'],'Sogou blog')){
                    $data[$key]['spider_type'] = '搜狗博客';
                }
//                else if(strpos($val['HeaderUseragent'],'Sogou inst spider')){
//                    $data[$key]['spider_type'] = '搜狗';
//                }
            }else if (strpos(strtolower($val['HeaderUseragent']),'360')){
                $data[$key]['spider'] = '360';
            }else if (strpos(strtolower($val['HeaderUseragent']),'bing')){
                $data[$key]['spider'] = 'bing';
            }else if (strpos(strtolower($val['HeaderUseragent']),'yandex')){
                $data[$key]['spider'] = 'yandex';
            }else if (strpos(strtolower($val['HeaderUseragent']),'yisou')){
                $data[$key]['spider'] = 'yisou';
            }else if (strpos(strtolower($val['HeaderUseragent']),'soso')){
                $data[$key]['spider'] = 'soso';
            }else if (strpos(strtolower($val['HeaderUseragent']),'yahoo')){
                $data[$key]['spider'] = 'yahoo';
            }else if (strpos(strtolower($val['HeaderUseragent']),'twitter')){
                $data[$key]['spider'] = 'twitter';
            }else if (strpos(strtolower($val['HeaderUseragent']),'twitter')){
                $data[$key]['spider'] = 'twitter';
            }else if (strpos(strtolower($val['HeaderUseragent']),'haosou')){
                $data[$key]['spider'] = 'haosou';
            }

            if($data[$key]['spider']){
                $spider[$data[$key]['c-ip']]['spider'] = $data[$key]['spider'];
                $spider[$data[$key]['c-ip']]['spider_ip'] = $data[$key]['c-ip'];
                $spider[$data[$key]['c-ip']]['spider_type'] = $data[$key]['spider_type'];
                $spider[$data[$key]['c-ip']]['created_at'] = date('Y-m-d H:i:s');
                $spider[$data[$key]['c-ip']]['updated_at'] = date('Y-m-d H:i:s');
            }
            unset($val);
        }
        if(sizeof($data)>3000){
            $data = array_chunk($data,3000);
            foreach ($data as $key => $val){
                web_log::insertOrIgnore($val);
            }
        }else{
            web_log::insertOrIgnore($data);
        }

        if(sizeof($spider)>3000){
            $spider = array_chunk($spider,3000);
            foreach ($spider as $key => $val){
                spider::insertOrIgnore($val);
            }
        }else{
            spider::insertOrIgnore($spider);
        }
        return '成功上傳';
    }


    public function uploadApi()
    {
        // 获取文件
        $file = request()->file('image');
        if ($file) {
            // 校验数组
            $validateArr = ['ext' => 'jpg,jpeg,gif,png,bmp'];
            // 文件的本地存储路径
            $path = ROOT_PATH . 'public' . DS . 'upload';
            // 校验并移动
            $info = $file->validate($validateArr)->move($path);
            // 检查移动结果
            if ($info) {
                // 上传成功

                // 输出 jpg
                #echo $info->getExtension();

                // 输出 20160820/42a79759f284b767dfcb2a0197904287.jpg
                #echo $info->getSaveName();

                // 输出 42a79759f284b767dfcb2a0197904287.jpg
                #echo $info->getFilename();

                // 文件的原文件名
                $sourceInfo = $info->getInfo();
                $sourceName = $sourceInfo['name'];

                // 拼装url
                $url = '/upload/' . $info->getSaveName();
                $url = str_replace('\\', '/', $url); // Windows下替换路径分隔符

                // other some operations ...

                // 返回json，告知客户端上传结果
                $json = json_encode([
                    'errcode' => '10000',
                    'errmsg' => 'Upload success',
                    'data' => ['url' => $url]
                ]);
            } else {
                // 上传失败，返回json，告知客户端
                $json = json_encode([
                    'errcode' => '20002',
                    'errmsg' => 'Upload failed',
                ]);
            }
        } else {
            // 未上传文件
            $json = json_encode([
                'errcode' => '20001',
                'errmsg' => 'File not uploaded',
            ]);
        }
        return $json;
    }
}
