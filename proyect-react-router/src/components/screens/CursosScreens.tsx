

export const CursosScreens = () => {
    async function fetchData(url: string){
        try {
            const response = await fetch(url)
            if(!response.ok){
                throw new Error("Respuesta mal");
                
            }
            const data = await response.json()
            console.log(data)
        } catch (error) {
            
        }
    }
    fetchData("http://localhost:3000/cursos")
  return (
   <>
    <h1>Cursos disponibles</h1>


    <div>
        
    </div>
   </> 

  )
}
