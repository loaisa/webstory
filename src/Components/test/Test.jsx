import React, {useRef, useState} from 'react';
import classes from "./Storytest.module.css";
import Scene from "./Scene";


// const Modal = ({flag, setFlag, children})=>(
//     <div className={`${classes.overlay} + ${classes.animated} ${flag ? classes.show : ''}`}>
//         <div className={classes.modal}>
//             <svg onClick={()=>setFlag(false)} height="200" viewBox="0 0 200 200" width="200">
//                 <title />
//                 <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
//             </svg>
//             {children}
//         </div>
//     </div>
// )

const PrewImg = (props) => {

    const [fotos, setFotos] = useState([])
    const target = useRef()

    const clickButt = (e) => {
        e.preventDefault()
        target.current.click()
    }


    const handeUpload = (e) => {
        const uploaded = e.target.files[0]
        props.AddImg(uploaded)
        setFotos(URL.createObjectURL(uploaded))
    }

    return (

        <>
            <div className={props.classNameDiv}>
                <button className={props.classNameBtn} onClick={clickButt}>{props.text}</button>
                <input ref={target} type='file' onChange={(e) => handeUpload(e)}/>

            </div>
            {fotos.length === 0 ? '' : <img src={fotos} alt="" className={props.classNameImg}/>}

        </>

    )
}


function Test(props) {
    // const [flag, setFlag] = useState(false)

    const [text, setText] = useState('')
    const [h, setH] = useState('')
    const [img, setImg] = useState('')


    const [scenes, setScenes] = useState([{h: '3', text: 'text', option: '2', img:''}])
    const [scene, setScene] = useState({h: '', text: '', option: ''})

    const AddImg = (newImg) => {
        setImg(newImg.name)
        console.log(img)
        debugger
    }

    const AddScene = (e) => {
        e.preventDefault()

        const newScene = {
            text,
            h,
            img


        }
        setScenes([...scenes, newScene])
    }

    // const onClickModal = (e) =>{
    //     e.preventDefault()
    //     setFlag(true)
    // }


    return (
        <div className={classes.form}>
            <form>
                <h1 className={classes.formItem}>Создание истории</h1>
                <PrewImg AddImg={AddImg} text={'Обложка'}/>
                <hr className={classes.hr}/>
                <div>
                    <p className={classes.formItem}>Наименовнии истории</p>
                    <input type="text" placeholder='Пташки'
                        // value={title} onChange={event=>setTitle(event.target.value)}
                    />
                </div>
                <hr className={classes.hr}/>
                <div>
                    <p className={classes.formItem}>Описание истории</p>
                    <textarea style={{outline: "none", width: "100%"}} placeholder='Жили были....'/>
                </div>
                <hr className={classes.hr}/>
                <p>Жанр</p>

                <select className={classes.formItem} name="" id="">
                    <option value="Ужасы">Ужасы</option>
                    <option value="Драма">Драма</option>
                    <option value="Комедия">Комедия</option>
                </select>
                <hr className={classes.hr}/>
                <label>Заголовок: </label>
                <input value={h} onChange={(event) => setH(event.target.value)} type='text'
                       placeholder='Пример имя персонажа'/>
                <hr className={classes.hr}/>
                <label htmlFor='text'></label>
                <textarea style={{resize: 'none', width: '100%'}} onChange={e => setText(e.target.value)}
                          value={text} id='text'
                          placeholder='Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов,
                          но это не совсем так...'/>

                <hr className={classes.hr}/>

                <div className='option'>
                    <input placeholder='Можете добавить опцию'/>
                    <button onClick={null}>Добавить опцию</button>
                </div>

                <hr className={classes.hr}/>

                <div className={classes.create_story}>

                    <div className={classes.create_story__img}>
                        <PrewImg text={'передний план'} classNameDiv={classes.create_story__div}
                                 classNameImg={classes.create_story__preview_front}
                                 classNameBtn={classes.create_story__btn}/>
                        <PrewImg text={'Задний план'} classNameImg={classes.create_story__preview_back}
                                 classNameDiv={classes.create_story__div}/>
                    </div>


                    <div className={classes.create_story__text}>

                        <div className={classes.create_story__h}>
                            {h}
                            <hr/>
                            {text}
                        </div>
                    </div>

                </div>
                <button onClick={AddScene}>Сохранить сцену</button>

                <hr/>

                {/*<button onClick={onClickModal} className={classes.open_Modal_Btn}>Сцены</button>*/}
                {/*<Modal flag={flag} setFlag={setFlag}>*/}
                {/*    <h1>Выбор{}</h1>*/}
                {/*</Modal>*/}

            </form>

            <div>
                {scenes.map((sce, index) =>
                    <Scene key={index} sce={sce}/>
                )}
            </div>


        </div>


    );
}

export default Test;