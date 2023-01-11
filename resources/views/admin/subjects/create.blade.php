<p>Создание предмета</p>
<form method="POST" action="{{ route('admin.subjects.store') }}" enctype="multipart/form-data">
    @csrf
    <input type="text" name="name" value="{{ old('name') }}">
    <button type="submit">Готово</button>
</form>