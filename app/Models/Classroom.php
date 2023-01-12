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
        'way_to',
        'owner_id'
    ];

    public function images() {
        return $this->belongsToMany(Image::class);
    }

    public function subjects() {
        return $this->belongsToMany(Subject::class, 'subject_classroom');
    }

    public function teacher() {
        return $this->belongsTo(Teacher::class, 'owner_id');
    }
}
