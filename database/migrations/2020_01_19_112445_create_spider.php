<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSpider extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('spider', function (Blueprint $table) {
            $table->bigIncrements('spider_idx');
            $table->string('spider')->comment('搜索引擎蜘蛛');
            $table->string('spider_ip')->unique()->comment('蜘蛛ip');
            $table->string('spider_type')->nullable()->comment('搜索引擎蜘蛛類型');
            $table->string('isreal')->default(0)->comment('是否為真實蜘蛛');
            $table->string('check_isreal_time')->nullable()->comment('確認為真實蜘蛛時間');
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
        Schema::dropIfExists('spider');
    }
}
