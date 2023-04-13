<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Teacher;
use App\Models\Subject;
use App\Services\TeacherImageUploadService;
use Illuminate\Http\Request;

class TeachersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $teachers = Teacher::all();

        return view('admin.teachers.index', [
            'teachers' => $teachers
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $subjects = Subject::all();

        return view('admin.teachers.create', [
            'subjects' => $subjects
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, TeacherImageUploadService $upload)
    {
        $data = $request->only('name', 'class_leader', 'image_id');
        $new_teacher = Teacher::create($data);
        $new_teacher->subjects()->attach($request->input('subjects'));

        if ($request->hasFile('image')) {
            $upload->saveUploadedFile($request->file('image'), $new_teacher);
        }

        return $new_teacher 
            ? redirect()->route('admin.teachers.index')->with('success', 'Запись успешно добавлена')
            : back()->withErrors('Не удалось добавить запись')->withInput();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  Teacher $teacher
     * @return \Illuminate\Http\Response
     */
    public function edit(Teacher $teacher)
    {
        $subjects = Subject::all();

        return view('admin.teachers.edit', [
            'teacher' => $teacher,
            'subjects' => $subjects
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  Teacher $teacher
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Teacher $teacher)
    {
        $data = $request->only('name', 'class_leader');
        $updated_teacher = $teacher->fill($data)->save();
        $updated_subject = $teacher->subjects()->sync($request->input('subjects'));

        return $updated_teacher && $updated_subject
            ? redirect()->route('admin.teachers.index')->with('success', 'Запись успешно добавлена')
            : back()->withErrors('Не удалось добавить запись')->withInput();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Teacher  $teacher
     * @return \Illuminate\Http\Response
     */
    public function destroy(Teacher $teacher)
    {
        return $teacher->delete() 
            ? redirect()->route('admin.teachers.index')->with('success', 'Запись успешно удалена')
            : back()->withErrors('Не удалось удалить запись')->withInput();
    }
}
