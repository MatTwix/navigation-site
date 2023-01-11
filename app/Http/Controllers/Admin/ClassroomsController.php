<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Classroom;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

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
        return view('admin.classrooms.create');
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
        return view('admin.classrooms.edit', [
            'classroom' => $classroom
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

        return $updated_classroom
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
