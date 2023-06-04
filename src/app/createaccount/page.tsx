import "../globals.css"

export default function Page() {
    return (
      <main className='h-full w-full flex flex-col'>
        <div className='flex h-full'>
            <div className='flex h-full w-1/2 justify-center items-center border-white border '>
              <div className="w-2/3 h-2/3 border">
                <form action="" className="w-full h-full flex flex-col gap-16 place-content-center items-center">
                  <input type="text" className="w-1/2 h-10" />
                  <input type="text" className="w-1/2 h-10" />
                  <button type="button" className="w-1/2 h-10 bg-gray-700">Log in</button>
                </form>
              </div>
            </div>
            <div className='relative flex justify-center items-center h-full w-1/2 border-red-200 border'> 
              <div className="w-2/3 h-2/3 border">

              </div>
            </div>
        </div>
      </main>
    )
}