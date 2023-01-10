<p>Создание кабинета</p>
<form method="POST" action="{{ route('admin.classrooms.store') }}" enctype="multipart/form-data">
    @csrf
    <input type="text" name="name" value="{{ old('name') }}">
    <input type="text" name="number" value="{{ old('number') }}">
    <input type="text" name="way_to" value="{{ old('way_to') }}">
    <input type="text" name="owner_id" value="{{ old('owner_id') }}">
    <button type="submit">Готово</button>
</form>