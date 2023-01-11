<p>Редактирование учителя</p>
<form method="POST" action="{{ route('admin.teachers.update', $teacher) }}" enctype="multipart/form-data">
    @method('PUT')
    @csrf
    <input type="text" name="name" value="{{ $teacher->name }}">
    <input type="text" name="class_leader" value="{{ $teacher->class_leader }}">
    <input type="text" name="photo_id" value="{{ $teacher->photo_id }}">
    <button type="submit">Готово</button>
</form>