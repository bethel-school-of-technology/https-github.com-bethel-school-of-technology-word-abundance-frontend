import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";


const CarouselPage = () => {
  return (
  <div className='LandingBG'>
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
          <img src={require('/Users/oliviakatelyn/Documents/GitHub/word-abundance-frontend/src/images/smilingBabySmall.jpg')} alt="smilingBaby" style={{ width: "100%"}}/> 
           
          <MDBMask overlay="black-light" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Abundant Mission</h3>
            <p>Nothing is Impossible</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
          <img src={require('/Users/oliviakatelyn/Documents/GitHub/word-abundance-frontend/src/images/CommunityNew.jpg')} alt="smilingBaby" style={{ width: "100%"}}/> 
          <MDBMask overlay="black-strong" />
          </MDBView>
          <MDBCarouselCaption>
            <div id='connectHere'><a href='./SignUp'><h4 className="h3-responsive">Get Connected</h4></a>
            </div>
          <br/>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
          <img src={require('/Users/oliviakatelyn/Documents/GitHub/word-abundance-frontend/src/images/SolutionsNew2.jpg')} alt="smilingBaby" style={{ width: "100%"}}/> 
          
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