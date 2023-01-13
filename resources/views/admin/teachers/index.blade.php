<a href="{{ route('admin.teachers.create') }}">Создать</a>
@foreach($teachers as $teacher)
    <hr>

    <p><b>ID:</b> {{ $teacher->id }}</p>
    <p><b>Имя учителя:</b> {{ $teacher->name }}</p>
    <p><b>Классный руководитель класса:</b> {{ $teacher->class_leader }}</p>
    <p><b>Фотография учителя:</b> {{ $teacher->image->path }}</p>
    <div>
        <b>Предметы, преподаваемые данным учителем:</b>
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