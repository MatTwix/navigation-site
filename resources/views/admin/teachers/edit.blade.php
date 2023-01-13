<p>Редактирование учителя</p>
<form method="POST" action="{{ route('admin.teachers.update', $teacher) }}" enctype="multipart/form-data">
    @method('PUT')
    @csrf
    <label for="name">ФИО: </label>
    <input type="text" name="name" id="image_id" value="{{ $teacher->name }}">
    <br>
    <label for="class_leader">Классный руководитель класса: </label>
    <input type="text" name="class_leader" id="class_leader" value="{{ $teacher->class_leader }}">
    <br>
    <label for="subjects">Предметы, преподаваемые данным учителем:</label>
    <select name="subjects[]" id="subjects" multiple>
        @foreach ($subjects as $subject)
            <option value="{{ $subject->id }}">{{ $subject->name }}</option>
        @endforeach
    </select>
    <br>
    <label for="image_id">ID фотографии:</label>
    <input type="text" name="image_id" id="image_id" value="{{ $teacher->image_id }}">
    <br>
    <button type="submit">Готово</button>
</form>