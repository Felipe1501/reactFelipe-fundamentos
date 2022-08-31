import React from "react";
import DiretaFilho from "./DiretaFilho";

export default props =>{
    return(
        <div>
            <DiretaFilho nome="Bianca" idade={29} nerd={false} />
            <DiretaFilho nome="Felipe" idade={17} nerd={true} />
        </div>
    );
}