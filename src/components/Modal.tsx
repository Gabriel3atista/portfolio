//Estilo
import '../styles/style.scss';

//Imagens
import luciana from '../assets/images/luciana.png';
import nikeApp from '../assets/images/nikeApp.png';
import poupee from '../assets/images/poupee.png';
import bankme from '../assets/images/bankme.png';
import { useEffect } from 'react';
import { useState } from 'react';

export function Modal() {

    useEffect(()=>{

        let imgs: any = document.querySelectorAll('.imgList > .img > img');
        let modalImg: any = document.querySelector('.modalImg');
        let modal: any = document.querySelector('.modal');

        imgs.forEach((img: any)=>{

            img.addEventListener('click', ()=>{

                modal.classList.add('open');

                let modalImgSrc = img.getAttribute('src');

                modalImg.src = modalImgSrc;

            })

        });

        modal.addEventListener('click', (e:any)=>{

            if(e.target.classList.contains('modal')){

                modal.classList.remove('open')

            }

        });

    }, [])

    return (
        <div className="modal">
            <img className="modalImg" src="" />
        </div>
    );
}