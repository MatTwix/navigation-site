<p>Создание записи учителя</p>
<form method="POST" action="{{ route('admin.teachers.store') }}" enctype="multipart/form-data">
    @csrf
    <label for="name">ФИО: </label>
    <input type="text" name="name" value="{{ old('name') }}">
    <br>
    <label for="class_leader">Классный руководитель класса: </label>
    <input type="text" name="class_leader" value="{{ old('class_leader') }}">
    <br>
    <label for="subjects">Предметы, преподаваемые данным учителем:</label>
    <select name="subjects[]" multiple>
        @foreach ($subjects as $subject)
            <option value="{{ $subject->id }}">{{ $subject->name }}</option>
        @endforeach
    </select>
    <br>
    <label for="image_id">ID фотографии:</label>
    <input type="text" name="image_id" id="image_id" value="{{ old('image_id') }}">
    <button type="submit">Готово</button>
</form>