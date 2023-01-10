<a href="{{ route('admin.classrooms.create') }}">Создать</a>
@foreach($classrooms as $classroom)
    <p>{{ $classroom->id }}</p>
    <p>{{ $classroom->name }}</p>
    <p>{{ $classroom->number }}</p>
    <p>{{ $classroom->way_to }}</p>
    <p>{{ $classroom->owner_id }}</p>
    <a href="{{ route('admin.classrooms.edit', $classroom) }}">Редактировать</a>

    <form method="POST" action="{{ route('admin.classrooms.destroy', $classroom) }}">
        @method('DELETE')
        @csrf
        <button type="submit">x</button>
    </form>

    <hr>
@endforeach