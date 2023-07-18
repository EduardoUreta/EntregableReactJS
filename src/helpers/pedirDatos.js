
import MOCK_DATA  from "../data/MOCK_DATA.json";

// Puede ser como json o como array

export const pedirDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                resolve(MOCK_DATA)
        }, 500)
    })
};
