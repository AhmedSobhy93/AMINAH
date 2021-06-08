export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
          <nav id="navbar"><img src='img/logo.png' alt='' /> </nav>
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            
            <li>
              <a href='#about' className='page-scroll'>
              معلومات عنا
              </a>
            </li>
            <li>
              <a href='#services' className='page-scroll'>
                خدماتنا
              </a>
            </li>
            <li>
              <a href='#portfolio' className='page-scroll'>
                صور اَمنة
              </a>
            </li>
            <li>
              <a href='#testimonials' className='page-scroll'>
                أراء عملائنا
              </a>
            </li>
            <li>
              <a href='#team' className='page-scroll'>
                فريق اَمنة
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                للتواصل
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
