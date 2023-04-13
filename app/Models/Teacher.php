<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Teacher extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'image',
        'class_leader'
    ];

    public function subjects() {
        return $this->belongsToMany(Subject::class);
    }
    
    public function image()
    {
        return $this->belongsTo(Image::class);
    }
}
