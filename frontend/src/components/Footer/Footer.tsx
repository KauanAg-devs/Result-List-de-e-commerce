function Footer(): JSX.Element {
    return (
        <>
        <footer>
            <div>

                <div>
                  <h1>Footer.</h1>
                  <p> Rua Alexandre Dumas, 1711 - 6° </p> 
                  <p> andar - Chácara Santo Antônio, </p> 
                  <p> São Paulo - SP, 04717-004 </p>
                </div>

                <div>
                   <h1>Links</h1>
                   <a href=".">Home</a>
                   <a href=".">Shop</a>
                   <a href=".">About</a>
                   <a href=".">Contact</a>
                </div>

                <div>
                    <h1>help</h1>
                    <a href=".">Payment Options</a>
                    <a href=".">Returns</a>
                    <a href=".">Privacy Policies</a>
                </div>

                <div>
                    <h1>Newsletter</h1>
                    <div>
                    <input type="text" placeholder="Enter Your Email Adress"/>
                    <button>subscribe</button>
                    </div>
                </div>
            </div>

            <div>
                2024 Compass UOL
            </div>
        </footer>
        </>
    )
}

export default Footer