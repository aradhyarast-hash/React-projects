import RightContent from './rightContent'
import LeftContent from './leftcontent'
const PAGE1content = (props) => {
  return (
    <div className='px-18 py-3 h-[90vh] flex items-center justify-between'>
        <LeftContent/> 
        <RightContent users={props.users}/>
    </div>
  ) 
}

export default PAGE1content