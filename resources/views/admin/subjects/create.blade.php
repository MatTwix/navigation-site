<p>Создание предмета</p>
<form method="POST" action="{{ route('admin.subjects.store') }}" enctype="multipart/form-data">
    @csrf
    <label for="name">Название предмета:</label>
    <input type="text" name="name" id="name" value="{{ old('name') }}">
    <br>
    <button type="submit">Готово</button>
</form>