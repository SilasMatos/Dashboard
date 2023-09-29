$(document).ready(function () {
  $('#data-table').DataTable({
    language: {
      url: 'https://cdn.datatables.net/plug-ins/1.11.5/i18n/pt-BR.json'
    },
    pageLength: 10,
    lengthMenu: [10, 25, 50, 100]
  })
})

const menuItems = document.querySelectorAll('.menu-list li')

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    menuItems.forEach(menuItem => {
      menuItem.classList.remove('ativo')
    })

    item.classList.add('ativo')
  })
})
document.addEventListener('DOMContentLoaded', function () {
  // Seu código JavaScript aqui
  const sidebar = document.getElementById('sidebar')
  const toggleButton = document.getElementById('toggle-sidebar')

  toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed')
  })

  // Resto do seu código aqui...
})
