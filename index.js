import{a as m,S as d,i as n}from"./assets/vendor-QphqWX9g.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const f="55655169-5dca28bc7cc616be385f48ac4",y="https://pixabay.com/api/";async function g(o){const{data:r}=await m.get(y,{params:{key:f,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}});return r.hits}function h(o){return o.map(({webformatURL:r,largeImageURL:s,tags:i,likes:e,views:t,comments:a,downloads:p})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${s}">
          <img class="gallery-image" src="${r}" alt="${i}" />
        </a>
        <div class="gallery-info">
          <p><b>Likes</b>${e}</p>
          <p><b>Views</b>${t}</p>
          <p><b>Comments</b>${a}</p>
          <p><b>Downloads</b>${p}</p>
        </div>
      </li>
    `).join("")}const c=document.querySelector(".form"),l=document.querySelector(".gallery"),u=document.querySelector(".loader"),b=new d(".gallery a",{captionsData:"alt",captionDelay:250});c.addEventListener("submit",async o=>{o.preventDefault();const r=c.elements.searchQuery.value.trim();if(!r){n.error({message:"Please enter a search query",position:"topRight"});return}l.innerHTML="",u.classList.remove("hidden");try{const s=await g(r);if(s.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}l.innerHTML=h(s),b.refresh()}catch{n.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{u.classList.add("hidden")}c.reset()});
//# sourceMappingURL=index.js.map
