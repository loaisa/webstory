import React, {useEffect, useState} from 'react';
import classes from "./Story.module.css";

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


function CreateStory(props) {
    // const [flag, setFlag] = useState(false)
    // const[history, setHistory] = useState()
    const [selectedFile, setSelectedFile] = useState()
    const [selectedFilePr, setSelectedFilePr] = useState()
    const [preview, setPreview] = useState()
    const [preview1, setPreview2] = useState()

    // create a preview as a side effect, whenever selected file is changed


    useEffect(() => {
        if (!selectedFile){
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)

    }, [selectedFile])
    useEffect(() => {
        if (!selectedFilePr){
            setPreview2(undefined)
            return
        }

        const objectUrl2 = URL.createObjectURL(selectedFilePr)
        setPreview2(objectUrl2)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl2)
    }, [selectedFilePr])


    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(e.target.files[0])
    }
    const onSelectFilePreview = e => {

        if (!e.target.files || e.target.files.length === 0) {
            selectedFilePr(undefined)
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        setSelectedFilePr(e.target.files[0])
        debugger
    }

    const AddHistory = (e)=>{
        e.preventDefault()
        console.log(123)
    }



    return (
        <div className={classes.form}>
            <form>

                <h1 className={classes.formItem}>Создание истории</h1>
                <div>
                    <p>Обложка рассказа</p>
                    <input type='file' className={classes.formItem} onChange={onSelectFile} />
                    {selectedFile &&  <img src={preview} alt='sd' /> }
                </div>
                <hr style={{border: '1px solid', margin: "10px 0"}}/>
                <div>
                    <p className={classes.formItem}>Наименовнии истории</p>
                    <input type="text" placeholder='Пташки'
                        // value={title} onChange={event=>setTitle(event.target.value)}
                    />
                </div>
                <hr style={{border: '1px solid', margin: "10px 0"}}/>
                <div>
                    <p className={classes.formItem}>Описание истории</p>
                    <textarea style={{outline: "none", width: "100%"}} placeholder='Жили были....'/>
                </div>
                <hr style={{border: '1px solid', margin: "10px 0"}}/>
                <p>Жанр</p>

                <select className={classes.formItem} name="" id="">
                    <option value="Ужасы">Ужасы</option>
                    <option value="Драма">Драма</option>
                    <option value="Комедия">Комедия</option>
                </select>
                <hr style={{border: '1px solid', margin: "10px 0"}}/>
                <div>
                    <button onClick={AddHistory} className="mdc-button foo-button">
                        <div className="mdc-button__ripple"></div>
                        <span className="mdc-button__label">Сохранить</span>
                    </button>
                </div>
            </form>

            <form action="">
                <input type='file' onChange={onSelectFilePreview}/>

            </form>
            <div className={classes.create_story}>
                {selectedFilePr &&  <img src={preview1} alt='sd' /> }
            </div>


            {/*<button onClick={(e)=>setFlag(true)} className={classes.open_Modal_Btn}>добавить сцену</button>*/}
            {/*<Modal flag={flag} setFlag={setFlag}>*/}
            {/*    <h1>asdasd</h1>*/}
            {/*</Modal>*/}


        </div>


    );
}

export default CreateStory;