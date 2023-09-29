$(document).ready(function () {
  $('#data-table').DataTable({
    language: {
      url: 'https://cdn.datatables.net/plug-ins/1.11.5/i18n/pt-BR.json'
    },
    pageLength: 10,
    lengthMenu: [10, 25, 50, 100]
  })
})
