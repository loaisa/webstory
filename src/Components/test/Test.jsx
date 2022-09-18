import React, { useState } from "react";
import classes from "./Storytest.module.css";
import CreateScene, { PrewImg } from "./CreateScene";

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

function PreviewScene(props) {
  return (
    <>
      <h2>{props.item.titleScene}</h2>
      <h2>{props.item.textScene}</h2>
    </>
  );
}

function Test(props) {
  // const [flag, setFlag] = useState(false)

  const [img, setImg] = useState([]);
  const [prevScene, setPrevScene] = useState([
    {
      titleScene: "",
      textScene: "",
    },
  ]);
  const [story, setStory] = useState({
    title: "",
    shortDescription: "",
    img: "",
  });

  const AddImg = (newImg) => {
    setImg();
  };

  // const AddStory = (e) => {
  //   e.preventDefault();
  //
  //   const newStory = {};
  //   setStory({
  //     title,
  //     shortDescription,
  //     img: { img },
  //     scene: { titleScene: "", textScene: "", option: "" },
  //   });
  // };

  // const onClickModal = (e) =>{
  //     e.preventDefault()
  //     setFlag(true)
  // }
  const AddScene = (newScene) => {
    // setStory({ ...story, ...newScene, newScene });
    setPrevScene([...prevScene, { ...newScene }]);
    console.log(prevScene);
  };

  return (
    <div className={classes.form}>
      <form>
        <h1 className={classes.formItem}>Создание истории</h1>
        <PrewImg AddImg={AddImg} text={"Обложка"} />
        <hr className={classes.hr} />
        <div>
          <p className={classes.formItem}>Наименовнии истории</p>
          <input
            type="text"
            placeholder="Пташки"
            value={story.title}
            onChange={(event) =>
              setStory({ ...story, title: event.target.value })
            }
          />
        </div>
        <hr className={classes.hr} />
        <div>
          <p className={classes.formItem}>Описание истории</p>
          <textarea
            style={{ outline: "none", width: "100%" }}
            placeholder="Жили были...."
            value={story.shortDescription}
            onChange={(event) =>
              setStory({ ...story, shortDescription: event.target.value })
            }
          />
        </div>
        <hr className={classes.hr} />
        <p>Жанр</p>

        <select className={classes.formItem} name="" id="">
          <option value="Ужасы">Ужасы</option>
          <option value="Драма">Драма</option>
          <option value="Комедия">Комедия</option>
        </select>
        <hr className={classes.hr} />

        <CreateScene AddImg={AddImg} create={AddScene} />

        <hr />

        {/*<button onClick={onClickModal} className={classes.open_Modal_Btn}>Сцены</button>*/}
        {/*<Modal flag={flag} setFlag={setFlag}>*/}
        {/*    <h1>Выбор{}</h1>*/}
        {/*</Modal>*/}
      </form>
      {prevScene.map((item, i) => (
        <PreviewScene item={item} key={i} />
      ))}
    </div>
  );
}

export default Test;
