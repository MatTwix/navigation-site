<p>Создание записи учителя</p>
<form method="POST" action="{{ route('admin.teachers.store') }}" enctype="multipart/form-data">
    @csrf
    <input type="text" name="name" value="{{ old('name') }}">
    <input type="text" name="class_leader" value="{{ old('class_leader') }}">
    <select name="subjects[]" multiple>
        @foreach ($subjects as $subject)
            <option value="{{ $subject->id }}">{{ $subject->name }}</option>
        @endforeach
    </select>
    <input type="text" name="image_id" value="{{ old('image_id') }}">
    <button type="submit">Готово</button>
</form>