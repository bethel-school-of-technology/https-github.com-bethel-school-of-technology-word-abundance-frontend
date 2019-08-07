import React from "react";
// import SignUp from './SignUp';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";

const CarouselPage = () => {
  return (
  <div className='LandingBG' >
      <MDBContainer>
      <MDBCarousel
      activeItem={1}
      length={3}
      showControls={true}
      showIndicators={true}
      className="z-depth-1"
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
            <img
              className="d-block w-100"
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg" 
              alt="First slide"
            />
          <MDBMask overlay="black-light" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Abundant Mission</h3>
            <p>Nothing is Impossible</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
          <img src={require('/Users/oliviakatelyn/Documents/GitHub/word-abundance-frontend/src/images/CommunityNew.jpg')} alt="CommunityNew" style={{ width: "100%"}}/> 
          <MDBMask overlay="black-strong" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Get Connected</h3>
            <a href='./SignUp'>Your Community Starts Here</a>
          
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
          <img src={require('/Users/oliviakatelyn/Documents/GitHub/word-abundance-frontend/src/images/SolutionsNew2.jpg')} alt="SolutionsNew2" style={{ width: "100%"}}/> 
          
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Be a part of the solution</h3>
            <p>Becoming a Partner</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    </MDBContainer>
 
    </div>
  );
}

export default CarouselPage;