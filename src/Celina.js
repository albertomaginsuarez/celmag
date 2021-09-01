
import React from 'react'

const Celina = () => {

    /////////////////////////////////////
    const bolsa = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <div>

            {
                bolsa.map((lluvia) => {
                    return (
                        <button>
                            BOTON DE PRUEBA {lluvia}
                        </button>
                    )
                })
            }


        </div>

    )
}

export default Celina