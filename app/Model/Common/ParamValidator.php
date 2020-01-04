<?php

namespace App\Model\Common;

use Validator;
use Illuminate\Database\Eloquent\Model;

class ParamValidator extends Model
{
    public static function validateData($params=array(),$rule=array())
    {

        $validator = Validator::make($params, $rule);
        return $validator;
    }
}
