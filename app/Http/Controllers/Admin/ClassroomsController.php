<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Classroom;
use App\Models\Teacher;
use App\Models\Subject;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

use function PHPSTORM_META\map;

class ClassroomsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public function index()
    {
        $classrooms = Classroom::all();

        return view('admin.classrooms.index', [
            'classrooms'=> $classrooms
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        $teachers = Teacher::all();
        $subjects = Subject::all();

        return view('admin.classrooms.create', [
            'teachers' => $teachers,
            'subjects' => $subjects
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->only('name', 'number', 'way_to', 'owner_id');
        $new_classroom = Classroom::create($data);
        $new_classroom->subjects()->attach($request->input('subjects'));

        return $new_classroom 
            ? redirect()->route('admin.classrooms.index')->with('success', 'Запись успешно добавлена')
            : back()->withErrors('Не удалось добавить запись')->withInput();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  Classroom $classroom
     * @return Response
     */
    public function edit(Classroom $classroom)
    {
        $teachers = Teacher::all();
        $subjects = Subject::all();

        return view('admin.classrooms.edit', [
            'classroom' => $classroom,
            'teachers' => $teachers,
            'subjects' => $subjects
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  Classroom  $classroom
     * @return Response
     */
    public function update(Request $request, Classroom $classroom)
    {
        $data = $request->only('name', 'number', 'way_to', 'owner_id');
        $updated_classroom = $classroom->fill($data)->save();
        $updated_subject = $classroom->subjects()->sync($request->input('subjects'));

        return $updated_classroom && $updated_subject
            ? redirect()->route('admin.classrooms.index')->with('success', 'Запись успешно изменена')
            : back()->withErrors('Не удалось изменить запись')->withInput();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Classroom  $classroom
     * @return Response
     */
    public function destroy(Classroom $classroom)
    {
        return $classroom->delete() 
            ? redirect()->route('admin.classrooms.index')->with('success', 'Запись успешно добавлена')
            : back()->withErrors('Не удалось добавить запись')->withInput();
    }
}
