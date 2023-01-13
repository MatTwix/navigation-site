<a href="{{ route('admin.classrooms.create') }}">Создать</a>
@foreach($classrooms as $classroom)
    <hr>
    <p><b>ID:</b> {{ $classroom->id }}</p>
    <p><b>Название:</b> {{ $classroom->name }}</p>
    <p><b>Номер:</b> {{ $classroom->number }}</p>
    <p><b>Путь до класса:</b> {{ $classroom->way_to }}</p>
    <p><b>Ответственный учитель:</b> {{ $classroom->teacher->name }}</p>
    <div>
        <b>Предметы, преподаваемые в этом классе:</b> 
        @foreach ($classroom->subjects as $subject)
            <p>{{ $subject->name }}</p>    
        @endforeach
    </div>
    <div>
        <b>Фотографии класса: </b>
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