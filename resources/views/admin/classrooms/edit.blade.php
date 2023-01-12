<p>Редактирование кабинета</p>
<form method="POST" action="{{ route('admin.classrooms.update', $classroom) }}" enctype="multipart/form-data">
    @method('PUT')
    @csrf
    <input type="text" name="name" value="{{ $classroom->name }}">
    <input type="text" name="number" value="{{ $classroom->number }}">
    <input type="text" name="way_to" value="{{ $classroom->way_to }}">
    <select name="owner_id">
        @foreach ($teachers as $teacher)
            <option value="{{ $teacher->id }}">{{ $teacher->name }}</option>
        @endforeach
    </select>
    <select name="subjects[]" multiple>
        @foreach ($subjects as $subject)
            <option value="{{ $subject->id }}">{{ $subject->name }}</option>
        @endforeach
    </select>
    <button type="submit">Готово</button>
</form>