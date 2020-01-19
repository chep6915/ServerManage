<?php

namespace App\Http\Controllers;

use App\Model\Common\HttpHelper;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Model\Common\ParamValidator;
use Illuminate\Http\Request;


class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function __construct()
    {
        return 1;

        //182.18.206.160
        $ip = getRealIp();//130.105.248.52
//        $server = new server($ip);
//        $svidx = $server->$svidx;
        ///Users/Rex/Documents/private_project/servermanage/servermanage/app/Http/Controllers/applicationHost.config

        //iis配置文檔服務器1Mac
        $iisconfig = implode(" ", (getTxtContent(__DIR__ . "/applicationHost.config")));

//iis配置文檔Windows2008
// $iisconfig = implode(" ",(getTxtcontent("D:/applicationHost.config")));

//iis配置文檔服務器3Mac
// $iisconfig = implode(" ",(getTxtcontent(__DIR__."/applicationHost3.config")));

// $website = new website($svidx,$iisconfig);
// exit;
//        $odb = new odb();

//预设log位置
// preg_match("/<centralBinaryLogFile (.*) \/>/i", $iisconfig,$dflogdir);
// preg_match("/directory=\"(.*)\"/i", $iisconfig,$dflogdir);
// $dflogdir =  str_replace("%SystemDrive%",GetEnv("SystemDrive"),$dflogdir[1]);

//取得每个site设定
        preg_match_all("/\<site na([\s\S]*?)<\/site\>/is", $iisconfig, $tempmatch);

        foreach ($tempmatch[0] as $key => $val) {
            // $sitedomain=(strpos(getinstring($val,"site name=\"","\""),"www")!==false)? getinstring($val,"site name=\"","\""):"www.".getinstring($val,"site name=\"","\"");
            $sitedomain = (getinstring($val, "site name=\"", "\""));
            $site_ip = gethostbyname($sitedomain);
            if ($sitedomain == "Default Web Site") {
                continue;
            }
            $siteid = getinstring($val, "id=\"", "\"");
            $logfile = (getinstring($val, "logFile directory=\"", "\"")) ? getinstring($val, "logFile directory=\"", "\"") : "";
            echo "site_id=" . $siteid . PHP_EOL;
            echo "site_name=" . $sitedomain . PHP_EOL;
            echo "site_logfile=" . $logfile . PHP_EOL;


            exit;

//            $webarray = $arrayName = array(
//                'server_idx' => $svidx,
//                'site_ip' => $site_ip,
//                'site_domain' => $sitedomain,
//                'add_user' => getenv('USER'),
//                "add_ip" => $ip,
//                'add_time' => strtotime("now")
//            );
//            $rs = $odb->insert('website', $webarray);


            // if($key==514){
            //     $sitedomain=getinstring($val,"site name=\"","\"");
            //     $sitedomain=(strpos($sitedomain,"www")!==false)? $sitedomain:"www.".$sitedomain;
            //     $siteid=getinstring($val,"id=\"","\"");
            //     $logfile= (getinstring($val,"logFile directory=\"","\""))? getinstring($val,"logFile directory=\"","\""):"";
            //     echo "sitename=".$sitedomain.PHP_EOL;
            //     echo "siteid=".$siteid.PHP_EOL;
            //     echo "logfile=".$logfile.PHP_EOL;
            //     exit;
            // }
            // continue;
        }
        exit;
// <logFile directory="%SystemDrive%\inetpub\123" />
        preg_match("/\<logFile directory=(.*)\/>/", $tempmatch[0][515], $tempmatch);
        echo $tempmatch[1];
        exit;
        // $logdir=
        echo $tempmatch[0][515] . PHP_EOL;
        exit;

        foreach ($tempmatch[1] as $key2 => $value2) {
            echo $value2 . PHP_EOL;
            exit;
        }

// echo json_encode($iisconfig);
        exit;
    }

    function checkAlive()
    {
        //baidu
        //123.125.71.70
        echo gethostbyaddr('123.125.71.70');
//        echo gethostbyname('61.146.178.32');
//        echo json_encode(dns_get_record('123.125.71.70'));
        exit;
//        return csrf_token();

        $request = Request();

        if ($request->post('mode') == 'remote') {
            //網頁模式
            $rule = [
                'url' => [
                    'required|active_url',
                ]

            ];
            $data = $request->post();
        }else{
            //本地模式
            $rule = [
                'url' => 'required',
                'url.*' =>
                    'required|active_url'
                ,
            ];
            $data['url'] = getTxtContent(public_path() . DIRECTORY_SEPARATOR.'data'.DIRECTORY_SEPARATOR.'url.txt');
        }

        $validator = ParamValidator::validateData($data, $rule);
        if ($validator->fails()) {
            $errors = $validator->errors();
            echo $errors->first();
            exit;
        }else{
            HttpHelper::ai_curl($data['url']);
        }


//        echo Lang::get('auth.failed');
//        echo Lang::get('auth.failed');
//        echo trans('auth.failed');

//        $file = __ROOT__."/Public/Home/xxx.md";
    }

    public function index(){
//        return csrf_token();
    }

    public function test(){
        $test[0]['id'] = 1;
        $test[0]['name'] = 'john';
        $test[1]['id'] = 2;
        $test[1]['name'] = 'tom';
        $test[2]['id'] = 3;
        $test[2]['name'] = 'marry';
        $test[3]['id'] = 4;
        $test[3]['name'] = 'jay';
        $test[4]['id'] = 5;
        $test[4]['name'] = 'john';

        $tempArr = array_unique(array_column($test, 'name'));
        $spider2 = array_intersect_key($test, $tempArr);

        echo json_encode($spider2);exit;

    }
}
