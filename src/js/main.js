const props = {};

if (window.location.pathname.includes('uz')) {
  props.lang = 'uz'
} else {
  props.lang = 'ru'
}

const pageId = window.location.pathname.split('/').reverse()[0].split('.')[0];
if (pageId == '') {
  props.pageId = 'home';
} else {
  props.pageId = pageId;
}

if (props.lang == 'ru') {
  document.querySelector('footer').innerHTML = `
  <footer class="bg-white dark:bg-gray-900">
  <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
    <div class="md:flex md:justify-between">
      <div class="mb-6 md:mb-0">
        <a href="./" class="flex items-center my-4">
          <img src="../img/logo.png" class="logo mr-3" alt="FlowBite Logo" />
        </a>
      </div>
      <div class="grid grid-cols-2 gap-8 sm:gap-6">
        <div>
          <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Общий</h2>
          <ul class="text-gray-600 dark:text-gray-400 font-medium">
            <li class="mb-4">
              <a href="./about.html" class="hover:underline">О нас</a>
            </li>
            <li class="mb-4">
              <a href="./services.html" class="hover:underline">Наши сервисы</a>
            </li>
            <li class="mb-4">
              <a href="./services.html" class="hover:underline">Наши работы</a>
            </li>
            <li class="mb-4">
              <a href="./faqs.html" class="hover:underline">Часто задаваемые вопросы</a>
            </li>
            <li>
              <a href="./contact.html" class="hover:underline">Связаться с нами</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Наши продукты</h2>
          <ul class="text-gray-600 dark:text-gray-400 font-medium">
            <li class="mb-4">
              <a href="./categories.html?id=1" class="hover:underline uppercase">Ламинаты SPC</a>
            </li>
            <li class="mb-4">
              <a href="./categories.html?id=2" class="hover:underline uppercase">Ламинаты SPC «Ёлка»</a>
            </li>
            <li class="mb-4">
              <a href="./categories.html?id=3" class="hover:underline uppercase">Плинтусы</a>
            </li>
            <li class="mb-4">
              <a href="./categories.html?id=4" class="hover:underline uppercase">Тяга</a>
            </li>
            <li>
              <a href="./categories.html?id=5" class="hover:underline uppercase">Декор линия</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <div class="sm:flex sm:items-center sm:justify-between">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a target="_blank"
          href="https://firsteam.uz/" class="hover:underline">firstTeam™</a> | Все права защищены
      </span>
      <div class="flex mt-4 space-x-2 sm:justify-center sm:mt-0">
      <a href="https://facebook.com/Compositefloor.rasmiy" target="_blank" class="bg-blue-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
      <svg class="w-5 h-5 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    </a>

    <a href="https://www.instagram.com/composite.floor/" target="_blank" class="bg-red-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-current" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
      </svg>
    </a>

    <a href="https://www.youtube.com/@Compositefloor.rasmiy" target="_blank" class="bg-red-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
      </svg>
    </a>

    <a href="https://t.me/compositefloor" target="_blank" class="bg-blue-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
      <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">
        <path id="telegram-1" d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z"></path>
      </svg>
    </a>
      </div>
    </div>
  </div>
</footer>
  `;
  document.querySelector('header').innerHTML = `
<header
class="bg-white dark:bg-gray-900 sticky w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">

<div class="hidden sm:flex max-w-screen-xl flex-wrap items-center justify-between mx-auto px-4 py-2"
  style="row-gap: 1rem; column-gap: 2rem">
  <ul class="items-center gap-x-4 hidden sm:flex">
    <li class="flex font-medium items-center">
      <p class="flex items-center mr-2">
        <svg class="w-6 h-6 mr-1 dark:text-white" fill="none" stroke="currentColor" stroke-width="1.5"
          viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z">
          </path>
        </svg>
        Номер телефона:
      </p>
      <a class="text-blue-500 dark:text-blue-500 hover:underline" href="tel:+998940251111">+998 (94) 025-11-11</a>
    </li>
    <li class="flex font-medium items-center">
      <p class="flex items-center mr-2">
        <svg class="w-6 h-6 mr-1 dark:text-white" fill="none" stroke="currentColor" stroke-width="1.5"
          viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75">
          </path>
        </svg>
        Электронная почта:
      </p>
      <a class="text-blue-500 dark:text-blue-500 hover:underline"
        href="mailto:compositefloor@gmail.com">compositefloor@gmail.com</a>
    </li>
  </ul>


  <div class="flex-wrap justify-center gap-2 hidden md:flex">
    <a href="https://facebook.com/Compositefloor.rasmiy" target="_blank" class="bg-blue-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
      <svg class="w-5 h-5 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    </a>

    <a href="https://www.instagram.com/composite.floor/" target="_blank" class="bg-red-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-current" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
      </svg>
    </a>

    <a href="https://www.youtube.com/@Compositefloor.rasmiy" target="_blank" class="bg-red-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
      </svg>
    </a>

    <a href="https://t.me/compositefloor" target="_blank" class="bg-blue-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
      <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">
        <path id="telegram-1" d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z"></path>
      </svg>
    </a>
  </div>


  <button type="button" data-dropdown-toggle="language-dropdown-menu"
    class="hidden md:inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
    <img class="h-3.5 w-3.5 rounded-full mr-2" src="../img/flag-ru.png" />
    Русский
  </button>
  <!-- Dropdown -->
  <div
    class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700"
    id="language-dropdown-menu">
    <ul class="py-2 font-medium" role="none">
      <li>
        <a href="../uz/${props.pageId == 'home' ? '' : props.pageId + '.html' + window.location.search}"
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
          role="menuitem">
          <div class="inline-flex items-center">
            <img class="h-3.5 w-3.5 rounded-full mr-2" src="../img/flag-uz.png" />
            O'zbekcha
          </div>
        </a>
      </li>
      <li>
        <a href="./${props.pageId == 'home' ? '' : props.pageId + '.html' + window.location.search}"
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
          role="menuitem">
          <div class="inline-flex items-center">
            <img class="h-3.5 w-3.5 rounded-full mr-2" src="../img/flag-ru.png" />
            Русский
          </div>
        </a>
      </li>
    </ul>
  </div>
</div>

<nav class="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 gap-4">
    <a href="./" class="flex items-center my-4">
      <img class="logo" src="../img/logo.png" class="mr-4" alt="Logo" />
    </a>
    <button data-collapse-toggle="navbar-dropdown" type="button"
      class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      aria-controls="navbar-dropdown" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clip-rule="evenodd"></path>
      </svg>
    </button>
    <div class="hidden w-full md:block" id="navbar-dropdown">
      <ul
        class="flex justify-between mb-4 flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row gap-x-8 gap-y-2 flex-wrap md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="./" data-id="home"
            class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            aria-current="page">Главная</a>
        </li>
        <li>
          <button id="dropdownNavbarLink" data-id="categories" data-dropdown-toggle="dropdownNavbar"
            class="flex items-center py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
            Наши продукты
            <svg class="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg></button>
          <!-- Dropdown menu -->
          <div id="dropdownNavbar"
            class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
              <li>
                <a href="./categories.html?id=1"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white uppercase">Ламинаты SPC</a>
              </li>
              <li>
                <a href="./categories.html?id=2"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white uppercase">Ламинаты SPC «Ёлка»</a>
              </li>
              <li>
                <a href="./categories.html?id=3"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white uppercase">Плинтусы</a>
              </li>
              <li>
                <a href="./categories.html?id=4"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white uppercase">Тяга</a>
              </li>
              <li>
                <a href="./categories.html?id=5"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white uppercase">Декор линия</a>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <a href="./about.html" data-id="about"
            class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
            О нас</a>
        </li>
        <li>
          <a href="./services.html" data-id="services"
            class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
            Наши сервисы</a>
        </li>
        <li>
          <a href="./works.html" data-id="works"
            class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
            Наши работы</a>
        </li>
        <li>
          <a href="./faqs.html" data-id="faqs"
            class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
            Часто задаваемые вопросы</a>
        </li>
        <li>
          <a href="./contact.html" data-id="contact"
            class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
            Связаться с нами</a>
        </li>
      </ul>
      <div class="flex items-center justify-between md:hidden mb-4">
        <button type="button" data-dropdown-toggle="language-dropdown-menu2"
          class="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
          <img class="h-3.5 w-3.5 rounded-full mr-2" src="../img/flag-ru.png" />
          Русский
        </button>
        <!-- Dropdown -->
        <div
          class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700"
          id="language-dropdown-menu2">
          <ul class="py-2 font-medium" role="none">
            <li>
              <a href="../uz/${props.pageId == 'home' ? '' : props.pageId + '.html' + window.location.search}"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                role="menuitem">
                <div class="inline-flex items-center">
                  <img class="h-3.5 w-3.5 rounded-full mr-2" src="../img/flag-uz.png" />
                  O'zbekcha
                </div>
              </a>
            </li>
            <li>
              <a href="./${props.pageId == 'home' ? '' : props.pageId + '.html' + window.location.search}"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                role="menuitem">
                <div class="inline-flex items-center">
                  <img class="h-3.5 w-3.5 rounded-full mr-2" src="../img/flag-ru.png" />
                  Русский
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div class="flex flex-wrap justify-center gap-2">
          <a href="https://facebook.com/Compositefloor.rasmiy" target="_blank" class="bg-blue-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
            <svg class="w-5 h-5 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
  
          <a href="https://www.instagram.com/composite.floor/" target="_blank" class="bg-red-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-current" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
            </svg>
          </a>
  
          <a href="https://www.youtube.com/@Compositefloor.rasmiy" target="_blank" class="bg-red-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
  
          <a href="https://t.me/compositefloor" target="_blank" class="bg-blue-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">
              <path id="telegram-1" d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z"></path>
            </svg>
          </a>
        </div>
      </div>
      <ul class="gap-x-4 flex flex-col sm:hidden ml-4">
        <li class="flex font-medium items-center justify-between mb-2">
          <p class="flex items-center mr-2">
            <svg class="w-6 h-6 mr-1 dark:text-white" fill="none" stroke="currentColor" stroke-width="1.5"
              viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z">
              </path>
            </svg>
            Номер телефона:
          </p>
          <a class="text-blue-500 dark:text-blue-500 hover:underline" href="tel:+998940251111">+998 (94) 025-11-11</a>
        </li>
        <li class="flex font-medium items-center justify-between">
          <p class="flex items-center mr-2">
            <svg class="w-6 h-6 mr-1 dark:text-white" fill="none" stroke="currentColor" stroke-width="1.5"
              viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75">
              </path>
            </svg>
            Электронная почта:
          </p>
          <a class="text-blue-500 dark:text-blue-500 hover:underline"
            href="mailto:compositefloor@gmail.com">compositefloor@gmail.com</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</header>
`;
} else {
  document.querySelector('footer').innerHTML = `
  <footer class="bg-white dark:bg-gray-900">
  <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
    <div class="md:flex md:justify-between">
      <div class="mb-6 md:mb-0">
        <a href="./" class="flex items-center">
          <img class="logo" src="../img/logo.png" class="mr-3" alt="FlowBite Logo" />
        </a>
      </div>
      <div class="grid grid-cols-2 gap-8 sm:gap-6">
        <div>
          <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Umumiy</h2>
          <ul class="text-gray-600 dark:text-gray-400 font-medium">
            <li class="mb-4">
              <a href="./about.html" class="hover:underline">Biz haqimizda</a>
            </li>
            <li class="mb-4">
              <a href="./services.html" class="hover:underline">Bizning xizmatlar</a>
            </li>
            <li class="mb-4">
              <a href="./services.html" class="hover:underline">Bizning ishlar</a>
            </li>
            <li class="mb-4">
              <a href="./faqs.html" class="hover:underline">Ko'p so'raladigan savollar</a>
            </li>
            <li>
              <a href="./contact.html" class="hover:underline">Biz bilan bog'laning</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Bizning mahsulotlar</h2>
          <ul class="text-gray-600 dark:text-gray-400 font-medium">
            <li class="mb-4">
              <a href="./categories.html?id=1" class="hover:underline uppercase">SPC laminatlari</a>
            </li>
            <li class="mb-4">
              <a href="./categories.html?id=2" class="hover:underline uppercase">«Archa» SPC laminatlari</a>
            </li>
            <li class="mb-4">
              <a href="./categories.html?id=3" class="hover:underline uppercase">Plinstuslar</a>
            </li>
            <li class="mb-4">
              <a href="./categories.html?id=4" class="hover:underline uppercase">Tyagalar</a>
            </li>
            <li>
              <a href="./categories.html?id=5" class="hover:underline uppercase">Dekor liniyalar</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <div class="sm:flex sm:items-center sm:justify-between">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a target="_blank"
          href="https://firsteam.uz/" class="hover:underline">firstTeam™</a> | Barcha huquqlar himoyalangan
      </span>
      <div class="flex mt-4 space-x-2 sm:justify-center sm:mt-0">
      <a href="https://facebook.com/Compositefloor.rasmiy" target="_blank" class="bg-blue-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
      <svg class="w-5 h-5 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    </a>

    <a href="https://www.instagram.com/composite.floor/" target="_blank" class="bg-red-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-current" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
      </svg>
    </a>

    <a href="https://www.youtube.com/@Compositefloor.rasmiy" target="_blank" class="bg-red-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
      </svg>
    </a>

    <a href="https://t.me/compositefloor" target="_blank" class="bg-blue-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
      <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">
        <path id="telegram-1" d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z"></path>
      </svg>
    </a>
      </div>
    </div>
  </div>
</footer>
  `;
  document.querySelector('header').innerHTML = `
  <header
  class="bg-white dark:bg-gray-900 sticky w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
  
  <div class="hidden sm:flex max-w-screen-xl flex-wrap items-center justify-between mx-auto px-4 py-2"
    style="row-gap: 1rem; column-gap: 2rem">
    <ul class="items-center gap-x-4 hidden sm:flex">
      <li class="flex font-medium items-center">
        <p class="flex items-center mr-2">
          <svg class="w-6 h-6 mr-1 dark:text-white" fill="none" stroke="currentColor" stroke-width="1.5"
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z">
            </path>
          </svg>
          Telefon raqam:
        </p>
        <a class="text-blue-500 dark:text-blue-500 hover:underline" href="tel:+998940251111">+998 (94) 025-11-11</a>
      </li>
      <li class="flex font-medium items-center">
        <p class="flex items-center mr-2">
          <svg class="w-6 h-6 mr-1 dark:text-white" fill="none" stroke="currentColor" stroke-width="1.5"
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75">
            </path>
          </svg>
          Elektron pochta:
        </p>
        <a class="text-blue-500 dark:text-blue-500 hover:underline"
          href="mailto:compositefloor@gmail.com">compositefloor@gmail.com</a>
      </li>
    </ul>
  
  
    <div class="flex-wrap justify-center gap-2 hidden md:flex">
      <a href="https://facebook.com/Compositefloor.rasmiy" target="_blank" class="bg-blue-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
        <svg class="w-5 h-5 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      </a>
  
      <a href="https://www.instagram.com/composite.floor/" target="_blank" class="bg-red-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-current" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
        </svg>
      </a>
  
      <a href="https://www.youtube.com/@Compositefloor.rasmiy" target="_blank" class="bg-red-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
        </svg>
      </a>
  
      <a href="https://t.me/compositefloor" target="_blank" class="bg-blue-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
        <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">
          <path id="telegram-1" d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z"></path>
        </svg>
      </a>
    </div>
  
  
    <button type="button" data-dropdown-toggle="language-dropdown-menu"
      class="hidden md:inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
      <img class="h-3.5 w-3.5 rounded-full mr-2" src="../img/flag-uz.png" />
      O'zbekcha
    </button>
    <!-- Dropdown -->
    <div
      class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700"
      id="language-dropdown-menu">
      <ul class="py-2 font-medium" role="none">
      <li>
          <a href="../ru/${props.pageId == 'home' ? '' : props.pageId + '.html' + window.location.search}"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
            role="menuitem">
            <div class="inline-flex items-center">
              <img class="h-3.5 w-3.5 rounded-full mr-2" src="../img/flag-ru.png" />
              Русский
            </div>
          </a>
        </li>
        <li>
          <a href="./${props.pageId == 'home' ? '' : props.pageId + '.html' + window.location.search}"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
            role="menuitem">
            <div class="inline-flex items-center">
              <img class="h-3.5 w-3.5 rounded-full mr-2" src="../img/flag-uz.png" />
              O'zbekcha
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
  
  <nav class="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 gap-4">
      <a href="./" class="flex items-center my-4">
        <img src="../img/logo.png" class="logo mr-6" alt="Logo" />
      </a>
      <button data-collapse-toggle="navbar-dropdown" type="button"
        class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-dropdown" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"></path>
        </svg>
      </button>
      <div class="hidden w-full md:block" id="navbar-dropdown">
        <ul
          class="flex mb-4 flex-col font-medium justify-between p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row gap-x-8 gap-y-2 flex-wrap md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <a href="./" data-id="home"
              class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              aria-current="page">Bosh sahifa</a>
          </li>
          <li>
            <button id="dropdownNavbarLink" data-id="categories" data-dropdown-toggle="dropdownNavbar"
              class="flex items-center py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
              Bizning mahsulotlar
              <svg class="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"></path>
              </svg></button>
            <!-- Dropdown menu -->
            <div id="dropdownNavbar"
              class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
              <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                <li>
                  <a href="./categories.html?id=1"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white uppercase">SPC laminatlari</a>
                </li>
                <li>
                  <a href="./categories.html?id=2"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white uppercase">«Archa» SPC laminatlari</a>
                </li>
                <li>
                  <a href="./categories.html?id=3"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white uppercase">Plinstuslar</a>
                </li>
                <li>
                  <a href="./categories.html?id=4"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white uppercase">Tyagalar</a>
                </li>
                <li>
                  <a href="./categories.html?id=5"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white uppercase">Dekor liniyalar</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="./about.html" data-id="about"
              class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
              Biz haqimizda</a>
          </li>
          <li>
            <a href="./services.html" data-id="services"
              class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
              Bizning xizmatlar</a>
          </li>
          <li>
            <a href="./works.html" data-id="works"
              class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
              Bizning ishlar</a>
          </li>
          <li>
            <a href="./faqs.html" data-id="faqs"
              class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
              Ko'p so'raladigan savollar</a>
          </li>
          <li>
            <a href="./contact.html" data-id="contact"
              class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
              Biz bilan bog'laning</a>
          </li>
        </ul>
        <div class="flex items-center justify-between md:hidden mb-4">
          <button type="button" data-dropdown-toggle="language-dropdown-menu2"
            class="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
            <img class="h-3.5 w-3.5 rounded-full mr-2" src="../img/flag-uz.png" />
            O'zbekcha
          </button>
          <!-- Dropdown -->
          <div
            class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700"
            id="language-dropdown-menu2">
            <ul class="py-2 font-medium" role="none">
            <li>
                <a href="../ru/${props.pageId == 'home' ? '' : props.pageId + '.html' + window.location.search}"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem">
                  <div class="inline-flex items-center">
                    <img class="h-3.5 w-3.5 rounded-full mr-2" src="../img/flag-ru.png" />
                    Русский
                  </div>
                </a>
              </li>
              <li>
                <a href="./${props.pageId == 'home' ? '' : props.pageId + '.html' + window.location.search}"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem">
                  <div class="inline-flex items-center">
                    <img class="h-3.5 w-3.5 rounded-full mr-2" src="../img/flag-uz.png" />
                    O'zbekcha
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div class="flex flex-wrap justify-center gap-2">
            <a href="https://facebook.com/Compositefloor.rasmiy" target="_blank" class="bg-blue-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
              <svg class="w-5 h-5 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
    
            <a href="https://www.instagram.com/composite.floor/" target="_blank" class="bg-red-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-current" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
              </svg>
            </a>
    
            <a href="https://www.youtube.com/@Compositefloor.rasmiy" target="_blank" class="bg-red-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
    
            <a href="https://t.me/compositefloor" target="_blank" class="bg-blue-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
              <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">
                <path id="telegram-1" d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z"></path>
              </svg>
            </a>
          </div>
        </div>
        <ul class="gap-x-4 flex flex-col sm:hidden ml-4">
          <li class="flex font-medium items-center justify-between mb-2">
            <p class="flex items-center mr-2">
              <svg class="w-6 h-6 mr-1 dark:text-white" fill="none" stroke="currentColor" stroke-width="1.5"
                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z">
                </path>
              </svg>
              Telefon raqam:
            </p>
            <a class="text-blue-500 dark:text-blue-500 hover:underline" href="tel:+998940251111">+998 (94) 025-11-11</a>
          </li>
          <li class="flex font-medium items-center justify-between">
            <p class="flex items-center mr-2">
              <svg class="w-6 h-6 mr-1 dark:text-white" fill="none" stroke="currentColor" stroke-width="1.5"
                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75">
                </path>
              </svg>
              Elektron pochta:
            </p>
            <a class="text-blue-500 dark:text-blue-500 hover:underline"
              href="mailto:compositefloor@gmail.com">compositefloor@gmail.com</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  </header>
  `;
};

document.querySelector(`*[data-id*="${props.pageId == 'product' ? 'categories' : props.pageId}"]`)?.classList.add('itemd--active');


window.data = [
  {
    "id": 1,
    "code": 1090,
    "class": 34,
    "size": "1220х182х4",
    "categoryId": 1
  },
  {
    "id": 2,
    "code": 1112,
    "class": 34,
    "size": "1220х182х4",
    "categoryId": 1
  },
  {
    "id": 3,
    "code": 20102,
    "class": 34,
    "size": "1220х182х4",
    "categoryId": 1
  },
  {
    "id": 4,
    "code": 2011,
    "class": 34,
    "size": "1220х182х4",
    "categoryId": 1
  },
  {
    "id": 5,
    "code": 20113,
    "class": 34,
    "size": "1220х182х4",
    "categoryId": 1
  },
  {
    "id": 6,
    "code": 3013,
    "class": 34,
    "size": "300х900х4",
    "categoryId": 1
  },
  {
    "id": 7,
    "code": 88034,
    "class": 34,
    "size": "1220х182х4",
    "categoryId": 1
  },
  {
    "id": 8,
    "code": 88119,
    "class": 34,
    "size": "1220х182х4",
    "categoryId": 1
  },
  {
    "id": 9,
    "code": 88103,
    "class": 34,
    "size": "1220х182х4",
    "categoryId": 1
  },
  {
    "id": 10,
    "code": 88042,
    "class": 34,
    "size": "1220х182х4",
    "categoryId": 1
  },
  {
    "id": 11,
    "code": 88118,
    "class": 34,
    "size": "1220х182х4",
    "categoryId": 1
  },
  {
    "id": 12,
    "code": 880410,
    "class": 34,
    "size": "1220х182х4",
    "categoryId": 1
  },
  {
    "id": 13,
    "code": 88038,
    "class": 34,
    "size": "1220х182х4",
    "categoryId": 1
  },
  {
    "id": 14,
    "code": 88056,
    "class": 34,
    "size": "1220х182х4",
    "categoryId": 1
  },
  {
    "id": 15,
    "code": 88047,
    "class": 34,
    "size": "1220х182х4",
    "categoryId": 1
  },
  {
    "id": 16,
    "code": 88036,
    "class": 34,
    "size": "1220х182х4",
    "categoryId": 1
  },
  {
    "id": 17,
    "code": 11211,
    "class": 34,
    "size": "1220х182х4",
    "categoryId": 1
  },
  {
    "id": 18,
    "code": 88051,
    "class": 34,
    "size": "1220х182х4",
    "categoryId": 1
  },
  {
    "id": 19,
    "code": 2005,
    "class": 34,
    "size": "1220х182х4",
    "categoryId": 1
  },
  {
    "id": 20,
    "code": 88024,
    "class": 34,
    "size": "1220х182х4",
    "categoryId": 1
  },
  {
    "id": 21,
    "code": 10023,
    "class": 34,
    "size": "1220х182х4",
    "categoryId": 1
  },
  {
    "id": 22,
    "code": 20064,
    "class": 34,
    "size": "1220х182х4",
    "categoryId": 1
  },
  {
    "id": 23,
    "code": 20063,
    "class": 34,
    "size": "1220х182х4",
    "categoryId": 1
  },
  {
    "id": 24,
    "code": 1020,
    "class": 34,
    "size": "1220х182х4",
    "categoryId": 1
  },

  {
    "id": 25,
    "code": 88025,
    "class": 43,
    "size": "750×150×4",
    "categoryId": 2
  },
  {
    "id": 26,
    "code": 20102,
    "class": 43,
    "size": "750×150×4",
    "categoryId": 2
  },
  {
    "id": 27,
    "code": 1092,
    "class": 43,
    "size": "750×150×4",
    "categoryId": 2
  },
  {
    "id": 28,
    "code": 1082,
    "class": 43,
    "size": "750×150×4",
    "categoryId": 2
  },
  {
    "id": 29,
    "code": 2005,
    "class": 43,
    "size": "750×150×4",
    "categoryId": 2
  },
  {
    "id": 30,
    "code": 88051,
    "class": 43,
    "size": "750×150×4",
    "image": "../img/product-41.png",
    "categoryId": 2
  },
  {
    "id": 31,
    "code": 88293,
    "class": 43,
    "size": "750×150×4",
    "categoryId": 2
  },
  {
    "id": 32,
    "code": 11211,
    "class": 43,
    "size": "750×150×4",
    "categoryId": 2
  },

  {
    "id": 33,
    "code": 61008,
    "size": "80x3000",
    "categoryId": 3
  },
  {
    "id": 34,
    "code": 61009,
    "size": "80x3000",
    "categoryId": 3
  },
  {
    "id": 35,
    "code": 61026,
    "size": "80x3000",
    "categoryId": 3
  },
  {
    "id": 36,
    "code": 61033,
    "size": "80x3000",
    "categoryId": 3
  },
  // {
  //   "id": 38,
  //   "code": 72067,
  //   "size": "80x3000",
  //   "categoryId": 3
  // },
  {
    "id": 39,
    "code": 75008,
    "size": "80x3000",
    "categoryId": 3
  },
  {
    "id": 40,
    "code": 80121,
    "size": "80x3000",
    "categoryId": 3
  },
  {
    "id": 41,
    "code": 81008,
    "size": "80x3000",
    "categoryId": 3
  },
  // {
  //   "id": 42,
  //   "code": 82142,
  //   "size": "80x3000",
  //   "categoryId": 3
  // },
  {
    "id": 43,
    "code": 86006,
    "size": "80x3000",
    "categoryId": 3
  },
  {
    "id": 44,
    "code": 86009,
    "size": "80x3000",
    "categoryId": 3
  },
  {
    "id": 45,
    "code": 86056,
    "size": "80x3000",
    "categoryId": 3
  },
  {
    "id": 46,
    "code": 87002,
    "size": "80x3000",
    "categoryId": 3
  },
  {
    "id": 47,
    "code": 88024,
    "size": "80x3000",
    "categoryId": 3
  },
  {
    "id": 48,
    "code": 88056,
    "size": "80x3000",
    "categoryId": 3
  },
  {
    "id": 49,
    "code": 91022,
    "size": "80x3000",
    "categoryId": 3
  },
  {
    "id": 50,
    "code": 888001,
    "size": "80x3000",
    "categoryId": 3
  },
  {
    "id": 51,
    "code": '61008-2',
    "size": "100x3000",
    "categoryId": 3
  },
  {
    "id": 52,
    "code": '61009-2',
    "size": "100x3000",
    "categoryId": 3
  },
  {
    "id": 53,
    "code": '61026-2',
    "size": "100x3000",
    "categoryId": 3
  },
  {
    "id": 37,
    "code": 72002,
    "size": "100x3000",
    "categoryId": 3
  },
  {
    "id": 54,
    "code": '61033-2',
    "size": "100x3000",
    "categoryId": 3
  },
  // {
  //   "id": 55,
  //   "code": '72002-2',
  //   "size": "100x3000",
  //   "categoryId": 3
  // },
  {
    "id": 56,
    "code": '72067-2',
    "size": "100x3000",
    "categoryId": 3
  },
  {
    "id": 57,
    "code": '75008-2',
    "size": "100x3000",
    "categoryId": 3
  },
  {
    "id": 58,
    "code": '80121-2',
    "size": "100x3000",
    "categoryId": 3
  },
  {
    "id": 59,
    "code": '81008-2',
    "size": "100x3000",
    "categoryId": 3
  },
  {
    "id": 60,
    "code": '82142-2',
    "size": "100x3000",
    "categoryId": 3
  },
  {
    "id": 61,
    "code": '86006-2',
    "size": "100x3000",
    "categoryId": 3
  },
  // {
  //   "id": 62,
  //   "code": '86009-2',
  //   "size": "100x3000",
  //   "categoryId": 3
  // },
  {
    "id": 63,
    "code": '86056-2',
    "size": "100x3000",
    "categoryId": 3
  },
  {
    "id": 64,
    "code": '87002-2',
    "size": "100x3000",
    "categoryId": 3
  },
  {
    "id": 65,
    "code": '88024-2',
    "size": "100x3000",
    "categoryId": 3
  },
  {
    "id": 66,
    "code": '88056-2',
    "size": "100x3000",
    "categoryId": 3
  },
  {
    "id": 67,
    "code": '91022-2',
    "size": "100x3000",
    "categoryId": 3
  },
  {
    "id": 68,
    "code": '888001-2',
    "size": "100x3000",
    "categoryId": 3
  },

  {
    "id": 69,
    "code": 61008,
    "size": "60x3000×17",
    "categoryId": 4
  },
  {
    "id": 70,
    "code": 61026,
    "size": "60x3000×17",
    "categoryId": 4
  },
  {
    "id": 71,
    "code": 61033,
    "size": "60x3000×17",
    "categoryId": 4
  },
  {
    "id": 72,
    "code": 62014,
    "size": "60x3000×17",
    "categoryId": 4
  },
  {
    "id": 73,
    "code": 62033,
    "size": "60x3000×17",
    "categoryId": 4
  },
  {
    "id": 74,
    "code": 80121,
    "size": "60x3000×17",
    "categoryId": 4
  },
  {
    "id": 75,
    "code": 81008,
    "size": "60x3000×17",
    "categoryId": 4
  },
  {
    "id": 76,
    "code": 82142,
    "size": "60x3000×17",
    "categoryId": 4
  },
  {
    "id": 77,
    "code": 82154,
    "size": "60x3000×17",
    "categoryId": 4
  },
  {
    "id": 78,
    "code": 86057,
    "size": "60x3000×17",
    "categoryId": 4
  },

  {
    "id": 79,
    "code": 8013,
    "size": "3000×125",
    "categoryId": 5
  },
  {
    "id": 80,
    "code": 61008,
    "size": "3000×125",
    "categoryId": 5
  },
  {
    "id": 81,
    "code": 61026,
    "size": "3000×125",
    "categoryId": 5
  },
  {
    "id": 82,
    "code": 80073,
    "size": "3000×125",
    "categoryId": 5
  },
  {
    "id": 83,
    "code": 86056,
    "size": "3000×125",
    "categoryId": 5
  },
  {
    "id": 84,
    "code": 88024,
    "size": "3000×125",
    "categoryId": 5
  },
  {
    "id": 85,
    "code": 88034,
    "size": "3000×125",
    "categoryId": 5
  },
  {
    "id": 86,
    "code": 88056,
    "size": "3000×125",
    "categoryId": 5
  },
  {
    "id": 87,
    "code": 92017,
    "size": "3000×125",
    "categoryId": 5
  },
  {
    "id": 88,
    "code": 92079,
    "size": "3000×125",
    "categoryId": 5
  },

  {
    "id": 89,
    "code": 3013,
    "size": "3000×400",
    "categoryId": 6
  },
  {
    "id": 90,
    "code": 3018,
    "size": "3000×400",
    "categoryId": 6
  },
  {
    "id": 91,
    "code": 8018,
    "size": "3000×400",
    "categoryId": 6
  },
  {
    "id": 92,
    "code": 8513,
    "size": "3000×400",
    "categoryId": 6
  },
  {
    "id": 93,
    "code": 9217,
    "size": "3000×400",
    "categoryId": 6
  },
  {
    "id": 94,
    "code": 61008,
    "size": "3000×400",
    "categoryId": 6
  },
  {
    "id": 95,
    "code": 61009,
    "size": "3000×400",
    "categoryId": 6
  },
  {
    "id": 96,
    "code": 61026,
    "size": "3000×400",
    "categoryId": 6
  },
  {
    "id": 97,
    "code": 80073,
    "size": "3000×400",
    "categoryId": 6
  },
  {
    "id": 98,
    "code": 82142,
    "size": "3000×400",
    "categoryId": 6
  },
  {
    "id": 99,
    "code": 82154,
    "size": "3000×400",
    "categoryId": 6
  },
  {
    "id": 100,
    "code": 83008,
    "size": "3000×400",
    "categoryId": 6
  },
  {
    "id": 101,
    "code": 85013,
    "size": "3000×400",
    "categoryId": 6
  },
  {
    "id": 102,
    "code": 86056,
    "size": "3000×400",
    "categoryId": 6
  },
  {
    "id": 103,
    "code": 92079,
    "size": "3000×400",
    "categoryId": 6
  },

  {
    "id": 104,
    "code": 8214,
    "size": "3000×125",
    "categoryId": 7
  },
  {
    "id": 105,
    "code": 61008,
    "size": "3000×125",
    "categoryId": 7
  },
  {
    "id": 106,
    "code": 61026,
    "size": "3000×125",
    "categoryId": 7
  },
  {
    "id": 107,
    "code": 80073,
    "size": "3000×125",
    "categoryId": 7
  },
  {
    "id": 108,
    "code": 80121,
    "size": "3000×125",
    "categoryId": 7
  },
  {
    "id": 109,
    "code": 82142,
    "size": "3000×125",
    "categoryId": 7
  },
  {
    "id": 110,
    "code": 82154,
    "size": "3000×125",
    "categoryId": 7
  },
  // {
  //   "id": 111,
  //   "code": 86006,
  //   "size": "3000×125",
  //   "categoryId": 7
  // },
  {
    "id": 112,
    "code": 86057,
    "size": "3000×125",
    "categoryId": 7
  },
  // {
  //   "id": 113,
  //   "code": 92017,
  //   "size": "3000×125",
  //   "categoryId": 7
  // },
  // {
  //   "id": 114,
  //   "code": 92079,
  //   "size": "3000×125",
  //   "categoryId": 7
  // },
];

if (window.location.pathname.includes('contact')) {
  const elModal = document.querySelector('#modal');
  const elForm = document.querySelector('#form');
  const elBtn = document.querySelector('#modal-btn');

  elForm.addEventListener('submit', (e) => {
    debugger
    e.preventDefault();
    elModal.classList.remove('hidden');
    elModal.classList.add('flex');
  });

  elBtn.addEventListener('click', (e) => {
    elModal.classList.add('hidden');
    elModal.classList.remove('flex');
  });
}

