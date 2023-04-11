<p>Создание кабинета</p>
<form method="POST" action="{{ route('admin.classrooms.store') }}" enctype="multipart/form-data">
    @csrf
    <label for="name">Название класса:</label>
    <input type="text" name="name" value="{{ old('name') }}" required>
    <br>
    <label for="destination">Назначение: </label>
    <select name="destination" id="destination" required>
        <option value="0" @if (old('destination') === '0') checked @endif>Служебное помещение</option>
        <option value="1" @if (old('destination') === '1') checked @endif>Учебный класс</option>
    </select>
    <br>
    <label for="number">Номер класса:</label>
    <input type="text" name="number" value="{{ old('number') }}" required>
    <br>
    <label for="way_to">Путь до класса:</label>
    <input type="text" name="way_to" value="{{ old('way_to') }}" required>
    <br>
    <label for="owner_id">За кем закреплен класс:</label>
    <select name="owner_id" id="owner_id" required>
        @foreach ($teachers as $teacher)
            <option value="{{ $teacher->id }}">{{ $teacher->name }}</option>
        @endforeach
    </select>
    <br>
    <label for="images">Фотографии класса:</label>
    <select name="images[]" id="images" multiple required>
        @foreach ([1,2,3] as $image)
            <option value="{{ $image }}">{{ $image }}</option>
        @endforeach
    </select>
    <br>
    <label for="subjects">Предметы, преподаваемые в этом классе:</label>
    <select name="subjects[]" id="subjects" multiple required>
        @foreach ($subjects as $subject)
            <option value="{{ $subject->id }}">{{ $subject->name }}</option>
        @endforeach
    </select>
    <br>
    <label for="images">Фотографии класса:</label>
    <input type="file" name="images[]" id="images" accept=".jpg, .jpeg, .png" multiple>
    <br>
    <button type="submit">Готово</button>
</form>