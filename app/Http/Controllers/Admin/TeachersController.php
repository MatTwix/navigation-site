<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Teacher;
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
        return view('admin.teachers.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->only('name', 'class_leader', 'photo_id');
        $new_teacher = Teacher::create($data);

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
        return view('admin.teachers.edit', [
            'teacher' => $teacher
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
        $data = $request->only('name', 'class_leader', 'photo_id');
        $updated_teacher = $teacher->fill($data)->save();

        return $updated_teacher 
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
