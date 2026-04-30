import{a as f,S as p,i as n}from"./assets/vendor-Do60_h77.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const m="55655169-5dca28bc7cc616be385f48ac4",y="https://pixabay.com/api/";async function g(o){const{data:t}=await f.get(y,{params:{key:m,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}});return t.hits}const l=document.querySelector(".gallery"),u=document.querySelector(".loader"),h=new p(".gallery a",{captionsData:"alt",captionDelay:250});function b(o){const t=q(o);l.insertAdjacentHTML("beforeend",t),h.refresh()}function L(){l.innerHTML=""}function w(){u.classList.remove("hidden")}function S(){u.classList.add("hidden")}function q(o){return o.map(({webformatURL:t,largeImageURL:a,tags:i,likes:e,views:r,comments:s,downloads:d})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${a}">
          <img
            class="gallery-image"
            src="${t}"
            alt="${i}"
          />
        </a>
        <div class="gallery-info">
          <p><b>Likes</b>${e}</p>
          <p><b>Views</b>${r}</p>
          <p><b>Comments</b>${s}</p>
          <p><b>Downloads</b>${d}</p>
        </div>
      </li>
    `).join("")}const c=document.querySelector(".form");c.addEventListener("submit",async o=>{o.preventDefault();const t=c.elements.searchQuery.value.trim();if(!t){n.error({message:"Please enter a search query",position:"topRight"});return}L(),w();try{const a=await g(t);if(a.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(a)}catch{n.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{S()}c.reset()});
//# sourceMappingURL=index.js.map
