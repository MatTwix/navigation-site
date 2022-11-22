<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Classroom extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'number',
        'way_to'
    ];

    public function images() {
        return $this->belongsToMany(Image::class);
    }

    public function subjects() {
        return $this->belongsToMany(Subject::class);
    }
}
