//console.log(document.forms.textview.value)

function insert (symb){
    document.form.textview.value = document.form.textview.value + symb
    console.log('Нажата кнопка:',symb)
}

function clearAll (){
    document.form.textview.value = ""
    console.log('Очищенно')
}

function dellLastEl (){
    let startValue = document.form.textview.value
    let newValue = startValue.substring(0, startValue.length-1)
    document.form.textview.value = newValue
    console.log('Удалили последний эл')
}

function sInsert (symb){
    document.form.textview.value = document.form.textview.value + symb
    console.log('Нажата спец кнопка:',symb)
}

function equal (){
    document.form.textview.value = eval (document.form.textview.value)
    console.log('Вычисляем',document.form.textview.value)
    console.log('Вычисляем', eval ('2+2'))
}
