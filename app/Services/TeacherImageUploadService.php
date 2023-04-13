<?php

namespace App\Services;

use App\Models\Image;
use Illuminate\Support\Arr;
use App\Contracts\UploadService;
use Illuminate\Database\Eloquent\Model;

class TeacherImageUploadService implements UploadService
{
    /**
     * @param \Illuminate\Http\UploadedFile $files
     * @param \Illuminate\Database\Eloquent\Model $model
     * @return void
     */
    public function saveUploadedFile($files, Model $model)
    {
        $path = implode('/', [
            'image',
            'teachers',
            $model->id,
        ]);

        $model->update([
            'image' => $files->store($path, 'public'),
        ]);
    }
}
