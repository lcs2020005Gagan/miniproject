import React from 'react'
import './card5.scss'
function Card5() {
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
    
    document.getElementsByClassName('.card5').forEach((elem) => {
    
        const head = elem.getElementsByClassName('.card5__head')
        const image = elem.getElementsByClassName('.card5__image')
        const author = elem.getElementsByClassName('.card5__author')
        const body = elem.getElementsByClassName('.card5__body')
        const foot = elem.getElementsByClassName('.card5__foot')
    
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
    <div>
    <a href="#" className="card5">
	<div className="card5__head">
		<div className="card5__image"></div>
		<div className="card5__author">
			<div className="author">
				<img src="https://s.gravatar.com/avatar/7ff9e93ff25e002bc49f4d69c0c3eac7?s=80" alt="Author of Tobias Reich" className="author__image"/>
				<div className="author__content">
					<p className="author__header">Tobias Reich</p>
					<p className="author__subheader">Web developer and designer</p>
				</div>
			</div>
		</div>
	</div>
	<div className="card5__body">
		<h2 className="card5__headline">Hover me</h2>
		<p className="card5__text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.</p>
	</div>
	<div className="card5__foot">
		<span className="card5__link">Read more</span>
	</div>
	<div className="card5__border"></div>
</a>
    </div>
  )
}

export default Card5