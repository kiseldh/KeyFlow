"use client"
import {useState} from "react"

export default function Keyboard() {
    const [actKeyy, setKeyy] = useState('')
    return(
        <div className="keyboard">
            <div className="keyboardd">
                <div className={`key ${actKeyy === "Й" ? "active" : ""}`}
                onClick={() => setKeyy("Й")}>Й</div>
                <div className={`key ${actKeyy === "Ц" ? "active" : ""}`}
                onClick={() => setKeyy("Ц")}>Ц</div>
                <div className={`key ${actKeyy === "У" ? "active" : ""}`}
                onClick={() => setKeyy("У")}>У</div>
                <div className={`key ${actKeyy === "К" ? "active" : ""}`}
                onClick={() => setKeyy("К")}>К</div>
                <div className={`key ${actKeyy === "Е" ? "active" : ""}`}
                onClick={() => setKeyy("Е")}>Е</div>
                <div className={`key ${actKeyy === "Н" ? "active" : ""}`}
                onClick={() => setKeyy("Н")}>Н</div>
                <div className={`key ${actKeyy === "Г" ? "active" : ""}`}
                onClick={() => setKeyy("Г")}>Г</div>
                <div className={`key ${actKeyy === "Ш" ? "active" : ""}`}
                onClick={() => setKeyy("Ш")}>Ш</div>
                <div className={`key ${actKeyy === "Щ" ? "active" : ""}`}
                onClick={() => setKeyy("Щ")}>Щ</div>
                <div className={`key ${actKeyy === "З" ? "active" : ""}`}
                onClick={() => setKeyy("З")}>З</div>
                <div className={`key ${actKeyy === "Х" ? "active" : ""}`}
                onClick={() => setKeyy("Х")}>Х</div>
                <div className={`key ${actKeyy === "Ъ" ? "active" : ""}`}
                onClick={() => setKeyy("Ъ")}>Ъ</div>
            </div>

            <div className="keyboardd" id="keyboard2">
                <div className={`key ${actKeyy === "Ф" ? "active" : ""}`}
                onClick={() => setKeyy("Ф")}>Ф</div>
                <div className={`key ${actKeyy === "Ы" ? "active" : ""}`}
                onClick={() => setKeyy("Ы")}>Ы</div>
                <div className={`key ${actKeyy === "В" ? "active" : ""}`}
                onClick={() => setKeyy("В")}>В</div>
                <div className={`key ${actKeyy === "А" ? "active" : ""}`}
                onClick={() => setKeyy("А")}>А</div>
                <div className={`key ${actKeyy === "П" ? "active" : ""}`}
                onClick={() => setKeyy("П")}>П</div>
                <div className={`key ${actKeyy === "Р" ? "active" : ""}`}
                onClick={() => setKeyy("Р")}>Р</div>
                <div className={`key ${actKeyy === "О" ? "active" : ""}`}
                onClick={() => setKeyy("О")}>О</div>
                <div className={`key ${actKeyy === "Л" ? "active" : ""}`}
                onClick={() => setKeyy("Л")}>Л</div>
                <div className={`key ${actKeyy === "Д" ? "active" : ""}`}
                onClick={() => setKeyy("Д")}>Д</div>
                <div className={`key ${actKeyy === "Ж" ? "active" : ""}`}
                onClick={() => setKeyy("Ж")}>Ж</div>
                <div className={`key ${actKeyy === "Э" ? "active" : ""}`}
                onClick={() => setKeyy("Э")}>Э</div>
            </div>

            <div className="keyboardd" id="keyboard3">
                <div className={`key ${actKeyy === "Я" ? "active" : ""}`}
                onClick={() => setKeyy("Я")}>Я</div>
                <div className={`key ${actKeyy === "Ч" ? "active" : ""}`}
                onClick={() => setKeyy("Ч")}>Ч</div>
                <div className={`key ${actKeyy === "С" ? "active" : ""}`}
                onClick={() => setKeyy("С")}>С</div>
                <div className={`key ${actKeyy === "М" ? "active" : ""}`}
                onClick={() => setKeyy("М")}>М</div>
                <div className={`key ${actKeyy === "И" ? "active" : ""}`}
                onClick={() => setKeyy("И")}>И</div>
                <div className={`key ${actKeyy === "Т" ? "active" : ""}`}
                onClick={() => setKeyy("Т")}>Т</div>
                <div className={`key ${actKeyy === "Ь" ? "active" : ""}`}
                onClick={() => setKeyy("Ь")}>Ь</div>
                <div className={`key ${actKeyy === "Б" ? "active" : ""}`}
                onClick={() => setKeyy("Б")}>Б</div>
                <div className={`key ${actKeyy === "Ю" ? "active" : ""}`}
                onClick={() => setKeyy("Ю")}>Ю</div>
                <div className={`key ${actKeyy === "." ? "active" : ""}`}
                onClick={() => setKeyy(".")}>.</div>
                <div className={`key ${actKeyy === "," ? "active" : ""}`}
                onClick={() => setKeyy(",")}>,</div>
            </div>
            <div className="keyboardd" id="keyboard4">
                <div className={`keySpase ${actKeyy === "" ? "active" : ""}`}
                onClick={() => setKeyy("")}></div>
            </div>
        </div>
        
    )
}