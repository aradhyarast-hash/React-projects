import Herotext from './heroText'
import Arrow from './arrow'
const Leftcontent = () => {
  return (
    <div className='w-[30%] h-full flex flex-col items-center justify-between p-5'>
        <Herotext/>
        <Arrow/>
    </div>
  )
}

export default Leftcontent