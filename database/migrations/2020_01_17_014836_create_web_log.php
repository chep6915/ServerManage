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
//        stamp====1576757092
//        host====162.210.196.129
//        logname====-
//        user====-
//        time====2019-12-19 20:04:52
//        request====GET /robots.txt HTTP/1.1
//        status====200
//        responseBytes====24
//        HeaderReferer====-
//        HeaderUseragent====Mozilla/5.0 (compatible; MJ12bot/v1.4.8; http://mj12bot.com/)
        Schema::create('web_log', function (Blueprint $table) {
            $table->bigIncrements('idx')->unique();
            $table->integer('stamp')->unique();
            $table->string('host');
            $table->string('logname');
            $table->string('user');
            $table->timestamp('time');
            $table->string('request');
            $table->integer('status');
            $table->integer('responseBytes');
            $table->string('HeaderReferer');
            $table->string('HeaderUseragent');

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
