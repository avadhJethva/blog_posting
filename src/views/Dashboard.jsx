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
          <img src={currentUser.profile_image} alt="front" />
          <div className="caption">
            <H1>
              <span>hello</span> {currentUser.first_name}{" "}
              {currentUser.last_name}
              <span> welcome to our Website</span>
            </H1>
          </div>
        </Figure>
      </UserCard>
    </CardContainer>
  )
}

export default Dashboard
