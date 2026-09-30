import lunabild from '../pictures/luna.jpg'

export default function Hero() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
        <div class="card" style={{ width: "18rem" }}>
            <img src={lunabild} class="card-img-top" alt="platzhalter für bild"></img>
            <div class="card-body">
                <h5 class="card-title">Luna</h5>
                <p class="card-text">Gebe einen text ein den Luna sagen soll.</p>
                <input type="text" className="form-control" placeholder="Luna sagt..." />
                <a href="#" class="btn btn-primary">Sprechen</a>
            </div>
        </div>
    </div>
  )
}