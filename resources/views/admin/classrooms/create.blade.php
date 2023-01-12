<p>Создание кабинета</p>
<form method="POST" action="{{ route('admin.classrooms.store') }}" enctype="multipart/form-data">
    @csrf
    <input type="text" name="name" value="{{ old('name') }}">
    <input type="text" name="number" value="{{ old('number') }}">
    <input type="text" name="way_to" value="{{ old('way_to') }}">
    <select name="owner_id" id="owner_id">
        @foreach ($teachers as $teacher)
            <option value="{{ $teacher->id }}">{{ $teacher->name }}</option>
        @endforeach
    </select>
    <select name="subjects[]" id="subjects" multiple>
        @foreach ($subjects as $subject)
            <option value="{{ $subject->id }}">{{ $subject->name }}</option>
        @endforeach
    </select>
    <button type="submit">Готово</button>
</form>