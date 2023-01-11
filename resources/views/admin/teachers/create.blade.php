<p>Создание записи учителя</p>
<form method="POST" action="{{ route('admin.teachers.store') }}" enctype="multipart/form-data">
    @csrf
    <input type="text" name="name" value="{{ old('name') }}">
    <input type="text" name="class_leader" value="{{ old('class_leader') }}">
    <input type="text" name="photo_id" value="{{ old('photo_id') }}">
    <button type="submit">Готово</button>
</form>