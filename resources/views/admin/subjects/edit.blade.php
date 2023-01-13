<p>Редактирование предмета</p>
<form method="POST" action="{{ route('admin.subjects.update', $subject) }}" enctype="multipart/form-data">
    @method('PUT')
    @csrf
    <label for="name">Название предмета:</label>
    <input type="text" name="name" value="{{ $subject->name }}">
    <br>
    <button type="submit">Готово</button>
</form>