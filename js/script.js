// DATA TABLE
$(document).ready(function () {
  var table = $('#example')
    .DataTable({
      responsive: true,
      language: {
        url: 'https://cdn.datatables.net/plug-ins/1.11.5/i18n/pt-BR.json'
      }
    })
    .columns.adjust()
    .responsive.recalc()
})

// EVENTO DE REMOVER A CLASSE ATIVA
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
  const sidebar = document.getElementById('sidebar')
  const toggleButton = document.getElementById('toggle-sidebar')
  const toggleIcon = document.getElementById('toggle-icon')

  toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed')

    if (sidebar.classList.contains('collapsed')) {
      toggleIcon.classList.remove('fa-chevron-left')
      toggleIcon.classList.add('fa-chevron-right')
    } else {
      toggleIcon.classList.remove('fa-chevron-right')
      toggleIcon.classList.add('fa-chevron-left')
    }
  })
})
const links = document.querySelectorAll('.menu-list li a')
