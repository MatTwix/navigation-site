<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Teacher extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'img_id',
        'leader_of_class'
    ];

    public function subjects() {
        return $this->belongsToMany(Subject::class);
    }

    public function classroom() {
        return $this->hasOne(Classroom::class);
    }
}
