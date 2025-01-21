import React, { useState } from "react";
import "./modalCheck.css";

export function Modal({ isOpen, onClose }) {
  const [name, setName] = useState("");
  const [card, setCard] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const precio = 100;

  const handleAccept = () => {
    alert("Pago realizado correctamente");
    window.location.href = "/";
  };

  if (!isOpen) return null;
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2 clas>Realizar Pago</h2>
        <p>Precio: ${precio}</p> {}
        <div className="modal__input-group">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="modal__input-group">
          <label htmlFor="card">Tarjeta:</label>
          <input
            placeholder="XXXX-XXXX-XXXX"
            type="text"
            id="card"
            value={card}
            onChange={(e) => setCard(e.target.value)}
          />
        </div>
        <div className="modal__input-group">
          <label htmlFor="expiryDate">Fecha de Vencimiento:</label>
          <input
            placeholder="DD/YY"
            type="text"
            id="expiryDate"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
          />
        </div>
        <div className="modal__input-group">
          <label htmlFor="cvv">CVV:</label>
          <input
            placeholder="CVV"
            type="text"
            id="cvv"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
          />
        </div>
        <div className="modal__buttons">
          <button onClick={handleAccept}>Aceptar</button>
          <button onClick={onClose}>Cancelar</button>
        </div>
      </div>
    </div>
  );
}
