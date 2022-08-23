import React from 'react';
import Image from 'next/image';
import {Card, CardBody} from "reactstrap";

//  https://api.github.com/users/dontdude
const UserCard = ({ gitUser }) => {              // {} here are important, else the this object is passed as an element of another object with same name

  const imgsrc = gitUser.avatar_url;             // for Image loader attribute

  return (
    <Card className="text-center mt-3 mb-4">
      <Image 
      loader={() => imgsrc}
      src={imgsrc} 
      alt="User Profile" 
      height="100%" width="100%"
      layout="responsive"                        //  to show origin dimension of images
      />
      <CardBody>
        <div className="text-primary">{gitUser.name}</div>
        <div className="text-primary">{gitUser.location}</div>
        <div className="text-primary">{gitUser.bio}</div>
        <div className="text-secondary">
          Available for hire: {gitUser.hireable ? "YES" : "NOPE"}
        </div>
        <div className="text-info">Followers : {gitUser.followers}</div>
      </CardBody>
    </Card>
  )
}

export default UserCard;