import { CardContainer, Figure, UserCard } from "assets/css/CustomCard"
import { Container, H1, H2 } from "../globalStyle"
import React from "react"
import { useSelector } from "react-redux"

const Dashboard = () => {
  const { currentUser = null } = useSelector((state) => state.AuthReducer)
  return (
    <CardContainer>
      <UserCard>
        <Figure className="front">
          <img src="http://www.jboeijenga.nl/img/front.jpg" alt="front" />
          <div className="caption">
            <H1>
              <span>hello</span> {currentUser.firstName} {currentUser.lastName}
              <span> welcome to our Website</span>
            </H1>
          </div>
        </Figure>
      </UserCard>
    </CardContainer>
  )
}

export default Dashboard
