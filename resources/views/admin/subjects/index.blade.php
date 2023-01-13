<a href="{{ route('admin.subjects.create') }}">Создать</a>
@foreach($subjects as $subject)
    <hr>

    <p><b>ID:</b> {{ $subject->id }}</p>
    <p><b>Название:</b> {{ $subject->name }}</p>
    <div>
        <b>Учителя, которые ведут этот предмет:</b>
        @foreach ($subject->teachers as $teacher)
            <p>{{ $teacher->name }}</p>
        @endforeach
    </div>
    <div>
        <b>Кабинеты, предназначенные для ведения данного предмета:</b>
        @foreach ($subject->classrooms as $classroom)
            <p>{{ $classroom->number }}</p>
        @endforeach
    </div>
    <a href="{{ route('admin.subjects.edit', $subject) }}">Редактировать</a>

    <form method="POST" action="{{ route('admin.subjects.destroy', $subject) }}">
        @method('DELETE')
        @csrf
        <button type="submit">x</button>
    </form>
@endforeach