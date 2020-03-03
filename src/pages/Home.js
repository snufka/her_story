import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Card } from "react-rainbow-components";

import { StyledCard, Quote, Img } from "../components/styled"



const homeStyles = makeStyles({

  root: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  img: {
    display: 'flex',
    justifyContent: 'center',
    width: "100%",
    maxWidth: "100%",
  }
});




function Home() {
  const classes = homeStyles();
  return (
    <React.Fragment>
      <Card>
        <nav>
          <img id="homePageLogo" className={classes.img} alt="Logo Her Story" src="/hslogo3.PNG"></img>
        </nav>
      </Card>
      {[
        {
          name: "Simone de Beauvoir, french author and philosopher",
          img: "/simone.jpeg",
          quote: '"One is not born, but rather becomes, a woman."'
        },
        {
          name: "Florence Nightingale, the founder of modern nursing",
          img: "/florence.jpeg",
          quote:
            '"I attribute my success to this: I never gave or took an excuse."'
        },
        {
          name: "Janis Joplin, American musician",
          img: "/janis.jpeg",
          quote: '"Don’t compromise yourself. You are all you’ve got."'
        },

        {
          name: "Malala Yousafzai, Pakistani activist and Nobel laureate",
          img: "/malala.jpg",
          quote:
            '"We realize the importance of our voices only when we are silenced."'
        },
        {
          name: "Sojourner Truth, American abolitionist",
          img: "/sojojpg.jpg",
          quote:
            '"If the first woman God ever made was strong enough to turn the world upside down all alone, these together ought to be able to turn it back and get it right side up again."'
        },
        {
          name: "Grace Hopper, U.S. Naval Admiral and computer scientist",
          img: "/grace.jpg",
          quote:
            `"If it's a good idea, go ahead and do it.It's much easier to apologize than it is to get permission."`
        }

      ].map(({ quote, name, img }) => (
        <div style={{ margin: "1rem 0rem" }}>
          <StyledCard>
            <Img src={img} />
            <Quote>
              <b> <i style={{ color: "#CC0E70" }}> {quote}</i></b>
              <br></br>
              <br></br>
              <i>  {name}</i>
            </Quote>
          </StyledCard>
        </div>
      ))}
    </React.Fragment>
  );
}

export default Home;