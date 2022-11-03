import React, { useRef, useEffect, useState } from "react";
import s from './Paypal.module.css';



export default function Paypal({value}) {
  const paypal = useRef();
  const price = value.substring(0, value.length - 2)
  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Drinks",
                amount: {
                  currency_code: "USD",
                  value: 600.0,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, []);

  return (
    <div className={s.container}>
      <div ref={paypal}></div>
    </div>
  );
}