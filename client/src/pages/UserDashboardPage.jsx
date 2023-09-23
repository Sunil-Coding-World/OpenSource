import React from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import UserDashboard from '../components/user/UserDashboard'

const UserDashboardPage = () => {
  return (
      <div>
          <Header />
          <UserDashboard/>
          <Footer/>
    </div>
  )
}

export default UserDashboardPage