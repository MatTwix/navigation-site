<p>Создание записи учителя</p>
<form method="POST" action="{{ route('admin.teachers.store') }}" enctype="multipart/form-data">
    @csrf
    <label for="name">ФИО: </label>
    <input type="text" name="name" value="{{ old('name') }}" required>
    <br>
    <label for="class_leader">Классный руководитель класса: </label>
    <input type="text" name="class_leader" value="{{ old('class_leader') }}" required>
    <br>
    <label for="subjects">Предметы, преподаваемые данным учителем:</label>
    <select name="subjects[]" multiple required>
        @foreach ($subjects as $subject)
            <option value="{{ $subject->id }}">{{ $subject->name }}</option>
        @endforeach
    </select>
    <br>
    <label for="image">Фотографии:</label>
    <input type="file" name="image" id="image" value="{{ old('image') }}" required>
    <button type="submit">Готово</button>
</form>