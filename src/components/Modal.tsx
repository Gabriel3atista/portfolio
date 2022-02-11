//Estilo
import '../styles/style.scss';

import { useEffect } from 'react';

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