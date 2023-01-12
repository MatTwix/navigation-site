<a href="{{ route('admin.subjects.create') }}">Создать</a>
@foreach($subjects as $subject)
    <hr>

    <p>ID: {{ $subject->id }}</p>
    <p>Название: {{ $subject->name }}</p>
    <div>
        <p>Учителя, которые ведут этот предмет:</p>
        @foreach ($subject->teachers as $teacher)
            <p>{{ $teacher->name }}</p>
        @endforeach
    </div>
    <div>
        <p>Кабинеты, предназначенные для ведения данного предмета:</p>
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