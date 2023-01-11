<a href="{{ route('admin.teachers.create') }}">Создать</a>
@foreach($teachers as $teacher)
    <p>{{ $teacher->id }}</p>
    <p>{{ $teacher->name }}</p>
    <p>{{ $teacher->class_leader }}</p>
    <p>{{ $teacher->photo_id }}</p>
    <a href="{{ route('admin.teachers.edit', $teacher) }}">Редактировать</a>

    <form method="POST" action="{{ route('admin.teachers.destroy', $teacher) }}">
        @method('DELETE')
        @csrf
        <button type="submit">x</button>
    </form>

    <hr>
@endforeach