<?php

namespace App\Model\Data;

use Illuminate\Database\Eloquent\Model;

class spider extends Model
{
    protected $primaryKey = 'spider_idx';
    protected $table = 'spider';
    protected $guarded = [];

    public $timestamps = true;
}
