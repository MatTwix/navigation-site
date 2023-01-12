<a href="{{ route('admin.teachers.create') }}">Создать</a>
@foreach($teachers as $teacher)
    <hr>

    <p>ID: {{ $teacher->id }}</p>
    <p>Имя учителя: {{ $teacher->name }}</p>
    <p>Классный руководитель класса: {{ $teacher->class_leader }}</p>
    <p>Фотография учителя: {{ $teacher->image->path }}</p>
    <div>
        <p>Предметы, преподаваемые данным учителем: </p>
        @foreach ($teacher->subjects as $subject)
            <p>{{ $subject->name }}</p>
        @endforeach
    </div>
    <a href="{{ route('admin.teachers.edit', $teacher) }}">Редактировать</a>

    <form method="POST" action="{{ route('admin.teachers.destroy', $teacher) }}">
        @method('DELETE')
        @csrf
        <button type="submit">x</button>
    </form>
@endforeach