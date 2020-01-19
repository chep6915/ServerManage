<?php

namespace App\Model\Data;

use Illuminate\Database\Eloquent\Model;

class web_log extends Model
{
    protected $primaryKey = 'web_log_idx';
    protected $table = 'web_log';
//    protected $fillable = ['stamp','date', 'time'];
    protected $guarded = [];

    public $timestamps = true;

}
