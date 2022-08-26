import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import classes from "./Story.module.css";
import Story from "./Story";

function StoryList(props) {

    const [story, SetStory] = useState([
        {
            id: 1,
            img:'https://wonder-day.com/wp-content/uploads/2020/05/wonder-day-romance-club-32.jpg',
            title: 'Пташки',
            body: 'это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для\n' +
                '                    текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию\n' +
                '                    ',
            genre:'Ужасы'
        },
    ])

    return (
        <div>

            {story.map(
                data =>
                    <Story story={data} />
            )}

            <div>
                <NavLink to='/create-story' className>Создать</NavLink>
            </div>
        </div>

    )
}

export default StoryList;