<p>Редактирование кабинета</p>
<form method="POST" action="{{ route('admin.classrooms.update', $classroom) }}" enctype="multipart/form-data">
    @method('PUT')
    @csrf
    <label for="name">Название класса:</label>
    <input type="text" name="name" id="name" value="{{ $classroom->name }}">
    <br>
    <label for="number">Номер класса:</label>
    <input type="text" name="number" id="number" value="{{ $classroom->number }}">
    <br>
    <label for="way_to">Путь до класса:</label>
    <input type="text" name="way_to" id="way_to" value="{{ $classroom->way_to }}">
    <br>
    <label for="owner_id">За кем закреплен класс:</label>
    <select name="owner_id" id="owner_id">
        @foreach ($teachers as $teacher)
            <option value="{{ $teacher->id }}" @if ($teacher->id == $classroom->teacher->id) selected @endif>{{ $teacher->name }}</option>
        @endforeach
    </select>
    <br>
    <label for="subjects">Предметы, преподаваемые в этом классе:</label>
    <select name="subjects[]" id="subjects" multiple>
        @foreach ($subjects as $subject)
            <option value="{{ $subject->id }}">{{ $subject->name }}</option>
        @endforeach
    </select>
    <br>
    <button type="submit">Готово</button>
</form>