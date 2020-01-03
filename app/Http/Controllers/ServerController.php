<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ServerController extends Controller
{
    private $svIdx;      //服务器序号

    public function __construct($ip='')
    {
//        $this->odb = new odb();
//        $this->odb->exec("set names utf8");
        $this->svIdx=0;

        //判断作业系统
        switch (PHP_OS) {
            case "Linux":
                $os="linux";
                $userName="";
                break;
            case "FreeBSD":
                $os="freebsd";
                $userName="";
                break;
            case "WINNT":
                $os="win";
                $userName=getenv('USERNAME');
                break;
            case "Darwin":
                $os="mac";
                $userName=getenv('USER');
                break;
            default:
                $os="win";
                $userName=getenv('USERNAME');
                break;
        }

        if(!($this->existServer($ip))){
            $data = array(
                "server_ip" => $ip,
                "add_user" => $userName,
                "add_ip" => $ip
            );
            echo json_encode($data);exit;
            $this->addServer($data);
        }else{
            $this->existServer($ip);
        }
    }

    function existServer($ip=""){

        //1.数据验证区
        if(empty($ip)){
            echo '请输入ip';
            exit;
        }
        $sql = "select server_idx from `server` where server_ip='$ip'";
        $rs=$this->odb->getOne($sql);
        // $this->$odb->getOne($sql);
        if(empty($rs)){
            return 0;
        }else{
            $this->svIdx=$rs;
            return 1;
        }
//        $users = DB::table('server')->where('server_ip', $ip);
//
//
//        //1.数据验证区
//        if(empty($ip)){
//            echo '请输入ip';
//            exit;
//        }
//
//        $sql = "select server_idx from `server` where server_ip='$ip'";
//        $rs=$this->odb->getOne($sql);
//        // $this->$odb->getOne($sql);
//        if(empty($rs)){
//            return 0;
//        }else{
//            $this->svIdx=$rs;
//            return 1;
//        }
    }

    function addServer($data=array()){
        //1.数据验证区
        if(empty($data)||!isset($data)){
            echo '请输入data';
            exit;
        }
        $this->svIdx=$this->odb->insert("server",$data);
    }

}
