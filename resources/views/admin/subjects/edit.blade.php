<p>Редактирование предмета</p>
<form method="POST" action="{{ route('admin.subjects.update', $subject) }}" enctype="multipart/form-data">
    @method('PUT')
    @csrf
    <input type="text" name="name" value="{{ $subject->name }}">
    <button type="submit">Готово</button>
</form>