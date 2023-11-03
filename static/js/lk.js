    installMenu('part_menu_key', 'BBa_K4766009');
    e_installMenu('e_part_menu_key', 0, 'BBa_K4766009');

    ClassicEditor
    .create(document.querySelector('#editor'), {
        // 使用CSS单位来设置编辑器的宽度和高度
        // 例如 '100%' 或 '300px'
        width: '100%',
        height: '100%'
    })
    .then(editor => {
        console.log(editor);
    })
    .catch(error => {
        console.error(error);
    });
