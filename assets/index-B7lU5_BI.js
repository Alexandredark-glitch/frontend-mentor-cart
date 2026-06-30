(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{id:1,category:`Waffle`,name:`Waffle with Berries`,price:6.5,image:{thumbnail:`./assets/images/image-waffle-thumbnail.jpg`,mobile:`./assets/images/image-waffle-mobile.jpg`,tablet:`./assets/images/image-waffle-tablet.jpg`,desktop:`./assets/images/image-waffle-desktop.jpg`}},{id:2,category:`Crème Brûlée`,name:`Vanilla Bean Crème Brûlée`,price:7,image:{thumbnail:`./assets/images/image-creme-brulee-thumbnail.jpg`,mobile:`./assets/images/image-creme-brulee-mobile.jpg`,tablet:`./assets/images/image-creme-brulee-tablet.jpg`,desktop:`./assets/images/image-creme-brulee-desktop.jpg`}},{id:3,category:`Macaron`,name:`Macaron Mix of Five`,price:8,image:{thumbnail:`./assets/images/image-macaron-thumbnail.jpg`,mobile:`./assets/images/image-macaron-mobile.jpg`,tablet:`./assets/images/image-macaron-tablet.jpg`,desktop:`./assets/images/image-macaron-desktop.jpg`}},{id:4,category:`Tiramisu`,name:`Classic Tiramisu`,price:5.5,image:{thumbnail:`./assets/images/image-tiramisu-thumbnail.jpg`,mobile:`./assets/images/image-tiramisu-mobile.jpg`,tablet:`./assets/images/image-tiramisu-tablet.jpg`,desktop:`./assets/images/image-tiramisu-desktop.jpg`}},{id:5,category:`Baklava`,name:`Pistachio Baklava`,price:4,image:{thumbnail:`./assets/images/image-baklava-thumbnail.jpg`,mobile:`./assets/images/image-baklava-mobile.jpg`,tablet:`./assets/images/image-baklava-tablet.jpg`,desktop:`./assets/images/image-baklava-desktop.jpg`}},{id:6,category:`Pie`,name:`Lemon Meringue Pie`,price:5,image:{thumbnail:`./assets/images/image-meringue-thumbnail.jpg`,mobile:`./assets/images/image-meringue-mobile.jpg`,tablet:`./assets/images/image-meringue-tablet.jpg`,desktop:`./assets/images/image-meringue-desktop.jpg`}},{id:7,category:`Cake`,name:`Red Velvet Cake`,price:4.5,image:{thumbnail:`./assets/images/image-cake-thumbnail.jpg`,mobile:`./assets/images/image-cake-mobile.jpg`,tablet:`./assets/images/image-cake-tablet.jpg`,desktop:`./assets/images/image-cake-desktop.jpg`}},{id:8,category:`Brownie`,name:`Salted Caramel Brownie`,price:4.5,image:{thumbnail:`./assets/images/image-brownie-thumbnail.jpg`,mobile:`./assets/images/image-brownie-mobile.jpg`,tablet:`./assets/images/image-brownie-tablet.jpg`,desktop:`./assets/images/image-brownie-desktop.jpg`}},{id:9,category:`Panna Cotta`,name:`Vanilla Panna Cotta`,price:6.5,image:{thumbnail:`./assets/images/image-panna-cotta-thumbnail.jpg`,mobile:`./assets/images/image-panna-cotta-mobile.jpg`,tablet:`./assets/images/image-panna-cotta-tablet.jpg`,desktop:`./assets/images/image-panna-cotta-desktop.jpg`}}],t=[],n=document.getElementById(`product-list`),r=document.querySelector(`div[id=cart]`),i=document.querySelector(`div[id='hidden']`),a=document.querySelector(`dialog`),o=document.getElementById(`inside-dialog`),s=document.querySelector(`form`),c=document.getElementById(`new-order`),l=window.matchMedia(`(min-width: 1024px)`),u=window.matchMedia(`(min-width: 768px)`),d=()=>l.matches?`desktop`:u.matches?`tablet`:`mobile`,f=e=>e.image[d()],p=`<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" fill="none" viewBox="0 0 128 128"><path fill="#260F08" d="M8.436 110.406c0 1.061 4.636 2.079 12.887 2.829 8.252.75 19.444 1.171 31.113 1.171 11.67 0 22.861-.421 31.113-1.171 8.251-.75 12.887-1.768 12.887-2.829 0-1.061-4.636-2.078-12.887-2.828-8.252-.75-19.443-1.172-31.113-1.172-11.67 0-22.861.422-31.113 1.172-8.251.75-12.887 1.767-12.887 2.828Z" opacity=".15"/><path fill="#87635A" d="m119.983 24.22-47.147 5.76 4.32 35.36 44.773-5.467a2.377 2.377 0 0 0 2.017-1.734c.083-.304.104-.62.063-.933l-4.026-32.986Z"/><path fill="#AD8A85" d="m74.561 44.142 47.147-5.754 1.435 11.778-47.142 5.758-1.44-11.782Z"/><path fill="#CAAFA7" d="M85.636 36.78a2.4 2.4 0 0 0-2.667-2.054 2.375 2.375 0 0 0-2.053 2.667l.293 2.347a3.574 3.574 0 0 1-7.066.88l-1.307-10.667 14.48-16.88c19.253-.693 34.133 3.6 35.013 10.8l1.28 10.533a1.172 1.172 0 0 1-1.333 1.307 4.696 4.696 0 0 1-3.787-4.08 2.378 2.378 0 1 0-4.72.587l.294 2.346a2.389 2.389 0 0 1-.484 1.755 2.387 2.387 0 0 1-1.583.899 2.383 2.383 0 0 1-1.755-.484 2.378 2.378 0 0 1-.898-1.583 2.371 2.371 0 0 0-1.716-2.008 2.374 2.374 0 0 0-2.511.817 2.374 2.374 0 0 0-.493 1.751l.293 2.373a4.753 4.753 0 0 1-7.652 4.317 4.755 4.755 0 0 1-1.788-3.17l-.427-3.547a2.346 2.346 0 0 0-2.666-2.053 2.4 2.4 0 0 0-2.08 2.667l.16 1.173a2.378 2.378 0 1 1-4.72.587l-.107-1.28Z"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width=".974" d="m81.076 28.966 34.187-4.16"/><path fill="#87635A" d="M7.45 51.793c-.96 8.48 16.746 17.44 39.466 19.947 22.72 2.506 42.08-2.16 43.04-10.667l-3.947 35.493c-.96 8.48-20.24 13.334-43.04 10.667S2.463 95.74 3.423 87.18l4.026-35.387Z"/><path fill="#AD8A85" d="M5.823 65.953c-.96 8.453 16.746 17.44 39.573 20.027 22.827 2.586 42.053-2.187 43.013-10.667L87.076 87.1c-.96 8.48-20.24 13.333-43.04 10.666C21.236 95.1 3.53 86.22 4.49 77.74l1.334-11.787Z"/><path fill="#CAAFA7" d="M60.836 42.78a119.963 119.963 0 0 0-10.347-1.627c-24-2.667-44.453 1.893-45.333 10.373l-2.133 18.88a3.556 3.556 0 1 0 7.066.8 3.574 3.574 0 1 1 7.094.8l-.8 7.094a5.93 5.93 0 1 0 11.786 1.333 3.556 3.556 0 0 1 7.067.8l-.267 2.347a3.573 3.573 0 0 0 7.094.826l.133-1.2a5.932 5.932 0 1 1 11.787 1.36l-.4 3.52a3.573 3.573 0 0 0 7.093.827l.933-8.267a1.174 1.174 0 0 1 1.307-.906 1.146 1.146 0 0 1 1.04 1.306 5.947 5.947 0 0 0 11.813 1.334l.534-4.72a3.556 3.556 0 0 1 7.066.8 3.573 3.573 0 0 0 7.094.826l1.786-15.546a2.373 2.373 0 0 0-2.08-2.667L44.143 55.74l16.693-12.96Z"/><path fill="#87635A" d="m59.156 57.66 1.68-14.88-16.827 13.173 15.147 1.707Z"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width=".974" d="M9.796 52.06c-.667 5.866 16.24 12.586 37.733 15.04 14.774 1.68 27.867.906 34.854-1.654"/></svg>`,m=()=>`
  <div class="flex flex-col items-center justify-center">
  ${p}
    <p class="text-brand-rose-500 my-6">Your added items will appear here</p>
  </div>`,h=e=>`
  <button id="${e}" class="group hover:border-brand-red transition-colors cursor-pointer bg-brand-rose border-brand-rose-500 border flex gap-2 items-center justify-center py-3 px-7 rounded-full -mb-8">
    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20">
      <g fill="#C73B0F" clip-path="url(#a)">
        <path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z"/>
        <path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z"/>
      </g>
      <defs><clipPath id="a"><path fill="#fff" d="M.333 0h20v20h-20z"/></clipPath></defs>
    </svg>
    <span class="group-hover:text-brand-red transition-colors ease-in-out duration-500 font-bold">Add To Cart</span>
  </button>`,g=(e,t=1)=>`
  <div class="bg-brand-red flex gap-10 items-center justify-center py-3 px-7 rounded-full -mb-8">
    <button class="negative group hover:bg-brand-rose transition-colors cursor-pointer w-6 h-6 bg-transparent rounded-full border-white border-2 inline-flex justify-center items-center">
      <svg xmlns="http://w3.org" width="10" height="2" fill="none" viewBox="0 0 10 2">
        <path class="fill-white group-hover:fill-brand-red" d="M0 .375h10v1.25H0V.375Z"/>
      </svg>
    </button>
    <span class="text-brand-rose" id="quantity-${e}">${t}</span>
    <button class="positive group hover:bg-brand-rose cursor-pointer w-6 h-6 bg-transparent rounded-full border-white border-2 inline-flex justify-center items-center">
      <svg xmlns="http://w3.org" width="10" height="10" fill="none" viewBox="0 0 10 10">
        <path class="group-hover:fill-brand-red" fill="#fff" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/>
      </svg>
    </button>
  </div>`,_=e=>`
  <article>
    <div class="relative">
      <img id="product-${e.id}" data-product-id="${e.id}" src="${f(e)}" alt="${e.name}" class="rounded"/>
      <div class="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 text-nowrap">
        <div id="btn-${e.id}">${h(e.id)}</div>
      </div>
    </div>
    <p class="mt-12 text-sm text-brand-rose-500">${e.category}</p>
    <h2 class="font-bold text-nowrap">${e.name}</h2>
    <p class="text-brand-red font-bold mb-2">$${e.price.toFixed(2)}</p>
  </article>`,v=({name:e,price:t,quantity:n,id:r})=>`
  <div class="flex justify-between items-center border-b border-brand-red pb-4 mb-4">
    <div class="space-y-1">
      <h2 class="font-bold text-brand-rose-900">${e}</h2>
      <p class="flex items-center gap-2 text-sm">
        <span class="font-bold text-brand-red mr-2">${n}x</span>
        <span class="text-brand-rose-400">@ $${t.toFixed(2)}</span>
        <span class="font-semibold text-brand-rose-500">$${(t*n).toFixed(2)}</span>
      </p>
    </div>
    <button id="remove-${r}" class="w-5 h-5 bg-transparent rounded-full border border-brand-rose-500 flex justify-center items-center hover:border-brand-rose-900 transition-colors group">
      <svg class="group-hover:stroke-brand-rose-900" xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#CAAFA7" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/></svg>
    </button>
  </div>`,y=()=>{n.innerHTML=e.map(_).join(``)},b=()=>{r.innerHTML=t.map(v).join(``),i.classList.remove(`hidden`)},x=()=>{document.querySelector(`span[id=number-of-item]`).textContent=`(${t.reduce((e,t)=>e+t.quantity,0)})`},S=()=>{let e=t.reduce((e,{price:t,quantity:n})=>e+t*n,0);document.querySelectorAll(`h2.total-text`).forEach(t=>t.textContent=`$${e.toFixed(2)}`)},C=()=>{x(),b(),S()},w=()=>{r.innerHTML=m(),i.classList.add(`hidden`)},T=e=>{let t=document.querySelector(`div[id=btn-${e}]`);t&&(t.innerHTML=h(e));let n=document.getElementById(`product-${e}`);n&&(n.style.border=``)},E=(e,t=1)=>{document.querySelector(`div[id=btn-${e}]`).innerHTML=g(e,t);let n=document.getElementById(`product-${e}`);n&&(n.style.border=`2px solid hsl(14, 86%, 42%)`)},D=n=>{let r=e.find(e=>e.id===n),i=t.find(e=>e.id===n);i?i.quantity+=1:t.push({...r,quantity:1})},O=e=>{t=t.filter(t=>t.id!==e),t.length===0?w():b(),T(e),x(),S()},k=(e,n)=>{if(n<=0){O(e);return}let r=t.find(t=>t.id===e);r&&(r.quantity=n),C()};n.addEventListener(`click`,e=>{let t=e.target.closest(`button.positive`),n=e.target.closest(`button.negative`),r=e.target.closest(`button[id]`);if(t){let e=t.previousElementSibling,n=Number(e.id.split(`-`)[1]),r=Number(e.textContent)+1;e.textContent=r,k(n,r);return}if(n){let e=n.nextElementSibling,t=Number(e.id.split(`-`)[1]),r=Number(e.textContent)-1;e.textContent=Math.max(r,0),k(t,r);return}if(r){let e=Number(r.id);if(!e)return;D(e),E(e,1),C()}}),r.addEventListener(`click`,e=>{let t=e.target.closest(`button[id^='remove-']`);t&&O(Number(t.id.split(`-`)[1]))});var A=()=>{o.innerHTML=t.map(({name:e,price:t,quantity:n,image:r})=>`
      <div class="flex justify-between items-center border-b border-brand-red pb-4 mb-4">
        <div class="space-y-1">
          <div class="flex items-center justify-center gap-4">
            <img class="rounded-2xl shrink p-2" src="${r.thumbnail}" alt="${e}">
            <div class="flex flex-col">
              <h2 class="font-semibold text-brand-rose-900 mb-2">${e}</h2>
              <p class="flex items-center gap-2 text-sm">
                <span class="font-bold text-brand-red text-xl mr-2">${n}x</span>
                <span class="text-brand-rose-400">@ $${t.toFixed(2)}</span>
              </p>
            </div>
          </div>
        </div>
        <h2 class="font-semibold text-brand-rose-900">$${(t*n).toFixed(2)}</h2>
      </div>`).join(``)+`<div class="flex justify-between items-center pt-2">
       <p class="text-brand-rose-900">Order Total</p>
       <h2 class="total-text font-bold text-2xl text-brand-rose-900 text-nowrap">$0.00</h2>
     </div>`,S(),a.showModal()};s.addEventListener(`submit`,e=>{e.preventDefault(),setTimeout(A,400)}),c.addEventListener(`click`,()=>{t=[],y(),x(),S(),w(),a.close()});var j=()=>{e.forEach(e=>{let t=document.getElementById(`product-${e.id}`);t&&(t.src=f(e))})};l.addEventListener(`change`,j),u.addEventListener(`change`,j),y();