import React, { useRef, useState } from "react";
import classes from "./Storytest.module.css";
import { useDispatch } from "react-redux";

export const PrewImg = (props) => {
  const [fotos, setFotos] = useState([]);
  const target = useRef();

  const clickButt = (e) => {
    e.preventDefault();
    target.current.click();
  };

  const handeUpload = (e) => {
    const uploaded = e.target.files[0];
    props.AddImg(uploaded);
    setFotos(URL.createObjectURL(uploaded));
  };

  return (
    <>
      <div className={props.classNameDiv}>
        <button className={props.classNameBtn} onClick={clickButt}>
          {props.text}
        </button>
        <input ref={target} type="file" onChange={(e) => handeUpload(e)} />
      </div>
      {fotos.length === 0 ? (
        ""
      ) : (
        <img src={fotos} alt="" className={props.classNameImg} />
      )}
    </>
  );
};

function CreateScene(props) {
  const [scene, setScenes] = useState({ titleScene: "", textScene: "" });

  const AddScene = (e) => {
    e.preventDefault();
    const newScene = {
      ...scene,
    };
    props.create(newScene);
    setScenes({ titleScene: "", textScene: "" });
  };

  return (
    <>
      <label>Заголовок: </label>
      <input
        value={scene.titleScene}
        onChange={(e) => {
          setScenes({ ...scene, titleScene: e.target.value });
        }}
        type="text"
        placeholder="Пример имя персонажа"
      />
      <hr className={classes.hr} />
      <label htmlFor="text"></label>
      <textarea
        value={scene.textScene}
        style={{ resize: "none", width: "100%" }}
        onChange={(e) => setScenes({ ...scene, textScene: e.target.value })}
        id="text"
        placeholder="Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов,
                          но это не совсем так..."
      />

      <hr className={classes.hr} />

      <div className="option">
        <input placeholder="Можете добавить опцию" />
        <button onClick={null}>Добавить опцию</button>
      </div>

      <hr className={classes.hr} />

      <div className={classes.create_story}>
        <div className={classes.create_story__img}>
          <PrewImg
            text={"передний план"}
            classNameDiv={classes.create_story__div}
            classNameImg={classes.create_story__preview_front}
            classNameBtn={classes.create_story__btn}
            AddImg={props.AddImg}
          />
          <PrewImg
            text={"Задний план"}
            classNameImg={classes.create_story__preview_back}
            classNameDiv={classes.create_story__div}
            AddImg={props.AddImg}
          />
        </div>

        <div className={classes.create_story__text}>
          <div className={classes.create_story__h}>
            {scene.titleScene}
            <hr />
            {scene.textScene}
          </div>
        </div>
      </div>

      <button onClick={AddScene}>Сохранить сцену</button>
    </>
  );
}

export default CreateScene;
