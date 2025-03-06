
import "CSS.css"
  function CharacterComponent(props) {

    return (
        <div id="main" className="main_div_style">

            //Картинка с персонажем
            <div>
                <img src ="/Resources/Necromancer.JPG" className={"image-radius"}></img>;
            </div>

            //Основные данные персонажа
            <div>"Имя: " + props.name</div>
    
        </div>
    )
  }