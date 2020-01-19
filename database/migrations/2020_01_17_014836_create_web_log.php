<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWebLog extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

        Schema::create('web_log', function (Blueprint $table) {
            $table->bigIncrements('web_log_idx')->unique()->comment('索引值');
            $table->string('stamp')->nullable();
            $table->string('date')->nullable()->comment('发出请求时候的日期');
            $table->string('time')->nullable()->comment('发出请求时候的时间注意默认情况下这个时间是格林威治时间，比我们的北京时间晚8个小时，下面有说明');
            $table->string('s-sitename')->nullable()->comment('服务名，记录当记录事件运行于客户端上的Internet服务的名称和实例的编号');
            $table->string('s-computername')->nullable()->comment('服务器的名称');
            $table->string('s-ip')->nullable()->comment('服务器的IP地址');
            $table->string('cs-method')->nullable()->comment('请求中使用的HTTP方法，GET/POST');
            $table->longText('cs-uri-stem')->nullable()->comment('URI资源，记录做为操作目标的统一资源标识符（URI），即访问的页面文件');
            $table->string('cs-uri-query')->nullable()->comment('URI查询，记录客户尝试执行的查询，只有动态页面需要URI查询，如果有则记录，没有则以连接符-表示即访问网址的附带参数');
            $table->string('s-port')->nullable()->comment('为服务配置的服务器端口号');
            $table->string('cs-username')->nullable()->comment('用户名，访问服务器的已经过验证用户的名称，匿名用户用连接符-表示');
            $table->string('c-ip')->nullable()->comment('客户端IP地址');
            $table->string('cs-version')->nullable()->comment('记录客户端使用的协议版本，HTTP或者FTP');
            $table->longText('cs(User-Agent)')->nullable()->comment('用户代理，客户端浏览器、操作系统等情况');
            $table->string('cs(Cookie)')->nullable()->comment('记录发送或者接受的Cookies内容，没有的话则以连接符-表示');
            $table->longText('cs(Referer)')->nullable()->comment('引用站点，即访问来源');
            $table->string('cs-host')->nullable()->comment(':记录主机头名称，没有的话以连接符-表示注意为网站配置的主机名可能会以不同的方式出现在日志文件中，原因是HTTP.sys使用Punycode编码格式来记录主机名');
            $table->string('sc-status')->nullable()->comment('协议状态，记录HTTP状态代码，200表示成功，403表示没有权限，404表示找不到该页面，具体说明在下面');
            $table->string('sc-substatus')->nullable()->comment('协议子状态，记录HTTP子状态代码');
            $table->string('sc-win32-status')->nullable()->comment('Win32状态，记录Windows状态代码，参照chxwei博客上前几天发的日志“IIS中的sc-win32-status——Win32状态详细说明”的说明');
            $table->string('sc-bytes')->nullable()->comment('服务器发送的字节数');
            $table->string('cs-bytes')->nullable()->comment('服务器接受的字节数');
            $table->string('time-taken')->nullable()->comment('记录操作所花费的时间，单位是毫秒');
            $table->string('spider')->nullable()->comment('搜索引擎蜘蛛');
            $table->string('spider_type')->nullable()->comment('搜索引擎蜘蛛類型');
//            $table->unique(['stamp','sc-bytes']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('web_log');
    }
}
