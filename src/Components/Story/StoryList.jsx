import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import classes from "./Story.module.css";



const StoryPreview = ({story}) => {

    return (
        <div className={classes.story__item}>
            <h1>Наименование рассказа: {story.title}</h1>
            <p>{story.body}</p>
            <h1>Автор: {story.author}</h1>
            <img className={classes.imgPreview} src={story.img} alt=""/>
            {/*<p>Краткое описание рассказа: {story.bmpmody.slice(0, 400)}...</p>*/}
            <p>Жанр: {story.genre}</p>

            <NavLink to={`/story/${story.id}`}>Подробнее</NavLink>

        </div>
    );
}




export const StoryList = (props) => {

    const [stories, SetStory] = useState(        [
        {
            id: 1,
            img: 'https://wonder-day.com/wp-content/uploads/2020/05/wonder-day-romance-club-32.jpg',
            author: 'Дарья',
            title: 'Пташки',
            body: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.' +
                ' Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.',
            genre: 'Ужасы'
        },
        {
            id: 2,
            img: 'https://wonder-day.com/wp-content/uploads/2020/05/wonder-day-romance-club-32.jpg',
            author: 'Виктория',
            title: 'Падший Ангел',
            body: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.' +
                ' Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.',
            genre: 'Ужасы'
        },
    ])




    // useEffect(()=>{
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //         .then((response) => response.json())
    //         .then((data) => SetStory(data));
    // }, [])

    return (
        <div>
            <h1>Список историй</h1>
            {stories.map(
                data =>
                    <StoryPreview story={data} key={data.id} />
            )}

            <div>
                <NavLink to='/create-story' className>Создать</NavLink>
            </div>
        </div>

    )
}
