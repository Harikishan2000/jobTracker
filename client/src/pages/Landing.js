import main2 from '../assets/images/main2.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components'
import { Link } from 'react-router-dom'
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        {/* info */}
        
        <div className='info'>
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
           you can manage the job interview,pending status only by just single job track application.........
          </p>
          <Link to='/register' className='btn btn-hero'>
            Login/Register
          </Link>
        </div>
        <img src={main2} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  )
}

export default Landing
