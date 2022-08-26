import React, {useState} from 'react';
import classes from "./Story.module.css";

function CreateStory(props) {

    const[history, setHistory] = useState()

    const AddHistory = ()=>{
        console.log(123)
    }

    return (
        <div className={classes.form}>
            <form>

                <h1 className={classes.formItem}>Создание истории</h1>
                <div>
                    <p>Обложка рассказа</p>
                    <input className={classes.formItem}  type="file"/>
                </div>

                <div>
                    <p className={classes.formItem}>Наименовнии истории</p>
                    <input  type="text" placeholder='Пташки'
                            // value={title} onChange={event=>setTitle(event.target.value)}
                    />
                </div>
                <div>
                    <p className={classes.formItem}>Описание истории</p>
                    <textarea/>
                </div>
                <p>Жанр</p>
                <select className={classes.formItem} name="" id="">
                    <option value="Ужасы">Ужасы</option>
                    <option value="Драма">Драма</option>
                    <option value="Комедия">Комедия</option>
                </select>
                <div>
                    <p className={classes.formItem}>Добавить сцену</p>

                </div>
                <div>
                    <button onClick={AddHistory} className="mdc-button foo-button">
                        <div className="mdc-button__ripple"></div>
                        <span className="mdc-button__label">Сохранить</span>
                    </button>
                </div>
            </form>
        </div>


    );
}

export default CreateStory;