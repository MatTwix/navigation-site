<p>Редактирование кабинета</p>
<form method="POST" action="{{ route('admin.classrooms.update', $classroom) }}" enctype="multipart/form-data">
    @method('PUT')
    @csrf
    <input type="text" name="name" value="{{ $classroom->name }}">
    <input type="text" name="number" value="{{ $classroom->number }}">
    <input type="text" name="way_to" value="{{ $classroom->way_to }}">
    <input type="text" name="owner_id" value="{{ $classroom->owner_id }}">
    <button type="submit">Готово</button>
</form>