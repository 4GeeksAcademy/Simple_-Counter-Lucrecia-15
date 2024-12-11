import React, { useState, useEffect } from "react";


const Counter = () => {
  const [unit, setUnit] = useState(0);
  const [ten, setTen] = useState(0);
  const [hundred, setHundred] = useState(0);
  const [thousand, setThousand] = useState(0);
  const [tenThousand, setTenThousand] = useState(0);
  const [hunThousand, setHunThousand] = useState(0);
  

  useEffect(() => {
    const timer = setInterval(() => {
      // La función set que te permite actualizar el estado a un valor diferente y desencadenar un nuevo renderizado.
      setUnit(prevUnit => {
        if (prevUnit < 9) {
          return prevUnit + 1;
        }

        setTen(prevTen => {
          if (prevTen < 9) {
            return prevTen + 1;
          }

          setHundred(prevHundred => {
            if (prevHundred < 9) {
              return prevHundred + 1;
            }


            setThousand(prevThousand => {
              if (prevThousand < 9) {
                return prevThousand + 1;
              }

              setTenThousand(prevTenThousand => {
                if (prevTenThousand < 9) {
                  return prevTenThousand + 1;
                }
                setHunThousand(prevHunThousand => {
                  if (prevHunThousand < 9) {
                    return prevHunThousand + 1;
                  }

                  return 0;
                });

                return 0;
              });

              return 0;
            });

            return 0;
          });

          return 0;
        });

        return 0;
      });
      
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="row g-10 m-auto d-flex justify-content-center">
      <div className="icon box border border-light border-top-0 border-bottom-0 rounded-start rounded-end">
        <i className="far fa-clock"></i>
      </div>
      <div className="counter box border border-light border-top-0 border-bottom-0 rounded-start rounded-end">{hunThousand}</div>
      <div className="counter box border border-light border-top-0 border-bottom-0 rounded-start rounded-end">{tenThousand}</div>
      <div className="counter box border border-light border-top-0 border-bottom-0 rounded-start rounded-end">{thousand}</div>
      <div className="counter box border border-light border-top-0 border-bottom-0 rounded-start rounded-end">{hundred}</div>
      <div className="counter box border border-light border-top-0 border-bottom-0 rounded-start rounded-end">{ten}</div>
      <div className="counter box border border-light border-top-0 border-bottom-0 rounded-start rounded-end">{unit}</div>
    </div>
  );
};

export default Counter;