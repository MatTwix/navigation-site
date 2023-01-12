<p>Редактирование учителя</p>
<form method="POST" action="{{ route('admin.teachers.update', $teacher) }}" enctype="multipart/form-data">
    @method('PUT')
    @csrf
    <input type="text" name="name" value="{{ $teacher->name }}">
    <input type="text" name="class_leader" value="{{ $teacher->class_leader }}">
    <select name="subjects[]" multiple>
        @foreach ($subjects as $subject)
            <option value="{{ $subject->id }}">{{ $subject->name }}</option>
        @endforeach
    </select>
    <input type="text" name="image_id" value="{{ $teacher->image_id }}">
    <button type="submit">Готово</button>
</form>