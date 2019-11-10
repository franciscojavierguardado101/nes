<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    //
    public function creator() {
        return $this->belongsTo('App\User', 'user_id', 'id');

    }

    public function comments() {
        return $this->hasMany('App\Comment', 'post_id', 'id');
    }
}
