import React from 'react'

function Carousel2() {

    const height = (elem) => {

        return elem.getBoundingClientRect().height
    
    }
    
    const distance = (elemA, elemB, prop) => {
    
        const sizeA = elemA.getBoundingClientRect()[prop]
        const sizeB = elemB.getBoundingClientRect()[prop]
    
        return sizeB - sizeA
    
    }
    
    const factor = (elemA, elemB, prop) => {
    
        const sizeA = elemA.getBoundingClientRect()[prop]
        const sizeB = elemB.getBoundingClientRect()[prop]
    
        return sizeB / sizeA
    
    }
    
    document.querySelectorAll('.card').forEach((elem) => {
    
        const head = elem.querySelector('.card__head')
        const image = elem.querySelector('.card__image')
        const author = elem.querySelector('.card__author')
        const body = elem.querySelector('.card__body')
        const foot = elem.querySelector('.card__foot')
    
        elem.onmouseenter = () => {
    
            elem.classList.add('hover')
    
            const imageScale = 1 + factor(head, body, 'height')
            image.style.transform = `scale(${ imageScale })`
    
            const bodyDistance = height(foot) * -1
            body.style.transform = `translateY(${ bodyDistance }px)`
    
            const authorDistance = distance(head, author, 'height')
            author.style.transform = `translateY(${ authorDistance }px)`
    
        }
    
        elem.onmouseleave = () => {
    
            elem.classList.remove('hover')
    
            image.style.transform = `none`
            body.style.transform = `none`
            author.style.transform = `none`
    
        }
    
    })
  return (
<div className="container conbg" id="conbg">
  <div className="bg2" id="bg2">
    <div className="bg1" id="bg1">
      <div className="bg" id="bg">
        <div className="bg-text text-light ps-3">
         
          <a className="text-light" href="#bg1"><svg viewBox="0 0 448 512" width="30" fill="#fff" title="angle-double-right">
              <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z" />
            </svg></a>
        </div>
      </div>
      <div className="bg-text text-light ps-3">
       
        <a className="text-light" href="#bg2"><svg viewBox="0 0 448 512" width="30" fill="#fff" title="angle-double-right">
            <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z" />
          </svg></a>
      </div>
    </div>
    <div className="bg-text text-light ps-3">
     
      <a className="text-light" href="#conbg"><svg viewBox="0 0 448 512" width="30" fill="#fff" title="angle-double-right">
          <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z" />
        </svg></a>
    </div>
  </div>
</div>  )
}

export default Carousel2