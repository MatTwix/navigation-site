<a href="{{ route('admin.subjects.create') }}">Создать</a>
@foreach($subjects as $subject)
    <p>{{ $subject->id }}</p>
    <p>{{ $subject->name }}</p>
    <a href="{{ route('admin.subjects.edit', $subject) }}">Редактировать</a>

    <form method="POST" action="{{ route('admin.subjects.destroy', $subject) }}">
        @method('DELETE')
        @csrf
        <button type="submit">x</button>
    </form>

    <hr>
@endforeach