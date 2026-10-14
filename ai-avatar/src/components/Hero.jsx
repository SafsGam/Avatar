import lunabild from '../pictures/luna.jpg'
import { useState } from "react";

export default function Hero() {
  const [text, setText] = useState("");

  // 1. Die Funktion zum Vorlesen (oberhalb des return)
  const speak = () => {
    if (!text.trim()) return;

    window.speechSynthesis.cancel(); // laufende Ausgabe stoppen

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "de-DE";
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
        <div class="card" style={{ width: "18rem" }}>
            <img src={lunabild} class="card-img-top" alt="platzhalter für bild"></img>
            <div class="card-body">
                <h5 class="card-title">Luna</h5>
                <p class="card-text">Gebe einen text ein den Luna sagen soll.</p>
                <input type="text" className="form-control" placeholder="Luna sagt..." value={text} onChange={(e) => setText(e.target.value)}/>
                <a href="#" class="btn btn-primary" onClick={speak}>Sprechen</a>
            </div>
        </div>
    </div>
  )
}
