<a href="{{ route('admin.classrooms.create') }}">Создать</a>
@foreach($classrooms as $classroom)
    <hr>
    <p>ID: {{ $classroom->id }}</p>
    <p>Название: {{ $classroom->name }}</p>
    <p>Номер: {{ $classroom->number }}</p>
    <p>Путь до класса:{{ $classroom->way_to }}</p>
    <p>Ответственный учитель: {{ $classroom->teacher->name }}</p>
    <div>
        <p>Предметы, преподаваемые в этом классе:</p> 
        @foreach ($classroom->subjects as $subject)
            <p>{{ $subject->name }}</p>    
        @endforeach
    </div>
    <div>
        <p>Фотографии класса: </p>
        @foreach ($classroom->images as $image)
            <p>{{ $image->path }}</p>
        @endforeach
    </div>

    <a href="{{ route('admin.classrooms.edit', $classroom) }}">Редактировать</a>

    <form method="POST" action="{{ route('admin.classrooms.destroy', $classroom) }}">
        @method('DELETE')
        @csrf
        <button type="submit">x</button>
    </form>
@endforeach