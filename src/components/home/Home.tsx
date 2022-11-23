import React from "react";
import './Home.css';

function Home() {
    return (
        <>
        <div className="container espaço bg-blue space-between">
                <p className="color-Write tamanhoLetra"> Logo</p>
            <div className="flex-end">
                <p className="color-Write espaço"> WhatsApp </p>
                <img className="tamanhoImg" src="https://i0.wp.com/www.multarte.com.br/wp-content/uploads/2018/11/whatsapp-logo-icone.png?resize=696%2C712&ssl=1" alt="whatsApp"></img>
            </div>
        </div>
        </>
    );
}

export { Home }