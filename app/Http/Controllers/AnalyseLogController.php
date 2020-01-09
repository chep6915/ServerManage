<?php

namespace App\Http\Controllers;

use App\Model\Common\ParamValidator;
use Illuminate\Http\Request;

class AnalyseLogController extends Controller
{

    public function  analyseLog(){

//        $request= Request();
//        $rule = [
//            'file' => 'required|file|mimes:txt,log'
//        ];
//
//        $validator = ParamValidator::validateData($request->file(), $rule);
//        if ($validator->fails()) {
//            return('错误格式');
//        }
//
//        $file = $request->file('file');
//
//        if ($file->isValid()) {
//            //判断是否上传成功
//            if (!$file->move(public_path().'\data\weblog',$file->getClientOriginalName())) {
//                return('上传失败');
//            }else{
//
//                $file = getTxtContent($file["tmp_name"]);
//
                $file = getTxtContent(public_path() . DIRECTORY_SEPARATOR.'data'.DIRECTORY_SEPARATOR.'weblog'.DIRECTORY_SEPARATOR.'cmsmov.log');
                foreach ($file as $key => $val){
                    $pattern = '/^([^ ]+) ([^ ]+) ([^ ]+) \[([^\]]+)\] "(.*) (.*) (.*)" ([0-9\-]+) ([0-9\-]+) "(.*)" "(.*)" \*\*([0-9]*)\/([0-9]*)\*\*$/';
                    preg_match($pattern,$val,$matches);
                    echo json_encode($matches);exit;
                    $data = explode(' ',$val);
                    $rs[$key]['ip'] = $val[0];
                    foreach ($data as $key1 => $val){
                        echo $key1.'===='.$val.'<br>';
                    }exit;
                }



                foreach ($data as $key =>$val){
                    $rs[$key]['ip'] = $val[0];
                }
                echo $data[0];exit;
                var_dump($file);exit;
//            }
//        }
//        exit;

    }

    public function uploadApi(){
        // 获取文件
        $file = request()->file('image');
        if($file){
            // 校验数组
            $validateArr = [ 'ext' => 'jpg,jpeg,gif,png,bmp' ];
            // 文件的本地存储路径
            $path = ROOT_PATH . 'public' . DS . 'upload';
            // 校验并移动
            $info = $file->validate($validateArr)->move($path);
            // 检查移动结果
            if($info){
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
                $url = '/upload/'.$info->getSaveName();
                $url = str_replace('\\', '/', $url); // Windows下替换路径分隔符

                // other some operations ...

                // 返回json，告知客户端上传结果
                $json = json_encode([
                    'errcode'   => '10000',
                    'errmsg'    => 'Upload success',
                    'data'      => [ 'url' => $url ]
                ]);
            }else{
                // 上传失败，返回json，告知客户端
                $json = json_encode([
                    'errcode'   => '20002',
                    'errmsg'    => 'Upload failed',
                ]);
            }
        }else{
            // 未上传文件
            $json = json_encode([
                'errcode'   => '20001',
                'errmsg'    => 'File not uploaded',
            ]);
        }
        return $json;
    }
}
