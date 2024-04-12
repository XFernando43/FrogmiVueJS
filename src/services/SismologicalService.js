export async function getReports() {
    const API = 'http://localhost:3000/api/v1/reports';
    try {
        const response = await fetch(API, {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            }
        });
        if (response.ok) {
            const data = await response.json();
            return data.notes; // Devuelve los datos para ser manejados en el componente Vue
        } else {
            throw new Error('Error al obtener los informes');
        }
    } catch (error) {
        console.error("Error al obtener los informes: ", error);
        throw error; // Relanza el error para que pueda ser manejado en el componente Vue
    }
}

