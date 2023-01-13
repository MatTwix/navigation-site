<p>Создание кабинета</p>
<form method="POST" action="{{ route('admin.classrooms.store') }}" enctype="multipart/form-data">
    @csrf
    <label for="name">Название класса:</label>
    <input type="text" name="name" value="{{ old('name') }}">
    <br>
    <label for="number">Номер класса:</label>
    <input type="text" name="number" value="{{ old('number') }}">
    <br>
    <label for="way_to">Путь до класса:</label>
    <input type="text" name="way_to" value="{{ old('way_to') }}">
    <br>
    <label for="owner_id">За кем закреплен класс:</label>
    <select name="owner_id" id="owner_id">
        @foreach ($teachers as $teacher)
            <option value="{{ $teacher->id }}">{{ $teacher->name }}</option>
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