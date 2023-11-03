    installMenu('part_menu_key', 'BBa_K4766009');
    e_installMenu('e_part_menu_key', 0, 'BBa_K4766009');

    ClassicEditor
      .create(document.querySelector('#editor'))
      .then(editor => {
        console.log(editor);
      })
      .catch(error => {
        console.error(error);
      });
