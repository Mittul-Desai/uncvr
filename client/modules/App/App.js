import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// Import Style
import styles from './App.css';


//material-ui-components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardMedia, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import HardwareKeyboardArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import StarRating from 'react-star-rating';
import StarRatingComponent from 'react-star-rating-component';
import ReactStars from 'react-stars';





// Import Components
import Helmet from 'react-helmet';
import DevTools from './components/DevTools';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Import Actions
import { toggleAddPost } from './AppActions';
import { switchLanguage } from '../../modules/Intl/IntlActions';
var Stars =[];
var  x=0;
var choice;
var name;
var phone;
var custinfo=[];


                     
var info ='[{"Star":[{"rating":"0"}]},'+
            '{"option":[{"Choice":"NO"}]},'+
            '{"Quest":[' +
                  '{"Q":"RATE THE GIG" },' +
                  '{"Q":"MULTIPLE SELECT OPTIONS" },' +
                  '{"Q":"CHOOSE YES OR NO" },'+
                  '{"Q":"GIVE US YOUR NAME AND NUMBER" }]},'+
            '{"custInfo":['+
                  '{"name":""},'+
                  '{"phone":""}]}]';

var fullInfo = JSON.parse(info);

      

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isMounted: false,
                    next:false,
                    yes:false,
                    last:false,
                    finish:false
                   
                     };
  }

  componentDidMount() {
    this.setState({isMounted: true});

     // eslint-disable-line
  }

  toggleAddPostSection = () => {
    this.props.dispatch(toggleAddPost());
  };

 handleChange = (newRating) => {
 fullInfo[0].Star[0].rating=newRating;
  console.log(fullInfo[0].Star[0].rating);
 

  };

  




 
  yesClick = () => {

  var checkboxes = document.querySelectorAll('input[name="choose"]:checked'), values = [];
    Array.prototype.forEach.call(checkboxes, function(el) {
        values.push(el.value);
    });
    
    console.log(values);

    this.setState({yes:true});
  };


       lastClick =() =>{

        if (document.getElementById('yes').checked) {
  choice = document.getElementById('yes').value;
}else{

  choice = document.getElementById('no').value;
}

 fullInfo[1].option[0].Choice = choice;
  
       console.log(fullInfo[1].option[0].Choice);
         this.setState({last:true});
       };

       handleClick = () => {
 this.setState({next:true});
  };

  endClick = () =>{
    if(this.state.last==false){
        this.setState({last:true,next:true});
    }
    else
    {
    name = document.getElementById('name').value;
    phone = document.getElementById('phone').value;
    fullInfo[3].custInfo[0].name=name;
    fullInfo[3].custInfo[1].phone=phone;
    console.log(fullInfo[3].custInfo[0].name + "," + fullInfo[3].custInfo[1].phone );
    this.setState({finish:true});
    
  }
  };

  render() {
    if(this.state.next==false){
    return (
      <div className={styles.back}>
       
        <div>
          <Helmet
            title="MERN Starter - Blog App"
            titleTemplate="%s - Blog App"
            meta={[
              { charset: 'utf-8' },
              {
                'http-equiv': 'X-UA-Compatible',
                content: 'IE=edge',
              },
              {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
              },
            ]}
          />
         
          <div  > 
                <MuiThemeProvider>
               <Card className={styles.card}>
   <CardMedia className={styles.imge}>

   </CardMedia>
     

<CardText className={styles.txt}>
{fullInfo[2].Quest[0].Q}
</CardText>
    
    
    <CardActions className={styles.star}>
    <ReactStars count={5} size={28} color2={'#0b0e24'} half={false} onChange={this.handleChange} />
</CardActions>
   
   <CardActions className={styles.fltbtn}>
   
      <FlatButton  label="NEXT" labelPosition="before" icon={<HardwareKeyboardArrowRight />}  onClick={this.handleClick}/>
   </CardActions>
    
  </Card>
                </MuiThemeProvider>
          </div>

      
          <div className={styles.btn}>

                <MuiThemeProvider>
                  <RaisedButton label="SUBMIT"   backgroundColor={'#0b0e24'} onClick={this.endClick}  labelStyle={{color:'white',position:'relative',top:'8px'}} />
                </MuiThemeProvider>
                
          </div>
          <Footer />
        </div>
      </div>
    );
}


else if(this.state.finish==true){

return (
      <div className={styles.back}>
       
        <div>
          <Helmet
            title="MERN Starter - Blog App"
            titleTemplate="%s - Blog App"
            meta={[
              { charset: 'utf-8' },
              {
                'http-equiv': 'X-UA-Compatible',
                content: 'IE=edge',
              },
              {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
              },
            ]}
          />
         
          <div  > 
                <MuiThemeProvider>
               <Card className={styles.card}>
  
     <CardHeader />

<CardText className={styles.txtend}>
THANK YOU <span>{fullInfo[3].custInfo[0].name}</span>
</CardText>
    
    
  </Card>
                </MuiThemeProvider>
          </div>

      
         
          <Footer />
        </div>
      </div>
    );



}

  else if(this.state.last==true){

    return (
      <div className={styles.back}>
       
        <div>
          <Helmet
            title="MERN Starter - Blog App"
            titleTemplate="%s - Blog App"
            meta={[
              { charset: 'utf-8' },
              {
                'http-equiv': 'X-UA-Compatible',
                content: 'IE=edge',
              },
              {
                name: 'viewport',
                content: 'width=device-width',
              },
            ]}
          />

           
          
          <div > 
                <MuiThemeProvider>
               <Card className={styles.card}>
   <CardHeader />
      
<CardText className={styles.txt}>
{fullInfo[2].Quest[3].Q}
</CardText>
    
    
 <CardMedia className={styles.in}>
  <input type="text" className="input" id="name" name="name" placeholder="Name" style={{width:'100%', border: '1px solid #ccc',  marginBottom: '4%', background:'#fff', padding: '3%',color: '#0b0e24'}} />
  <input type="tel" className="input" id="phone" name="phone" placeholder="Phone" style={{width:'100%', border: '1px solid #ccc', background:'#fff', padding: '3%',color: '#0b0e24'}} />
</CardMedia>


     
      
    
  </Card>
                </MuiThemeProvider>
          </div>

      
          <div className={styles.btn}>

                <MuiThemeProvider>
                  <RaisedButton label="SUBMIT"  backgroundColor={'#0b0e24'} labelStyle={{color:'white',position:'relative',top:'8px'}} onClick={this.endClick}/>
                </MuiThemeProvider>
                
          </div>
          
          <Footer />
        </div>
      </div>
    );

  }
  else if(this.state.yes==true){


    return (
      <div className={styles.back}>
       
        <div>
          <Helmet
            title="MERN Starter - Blog App"
            titleTemplate="%s - Blog App"
            meta={[
              { charset: 'utf-8' },
              {
                'http-equiv': 'X-UA-Compatible',
                content: 'IE=edge',
              },
              {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
              },
            ]}
          />

         
          
          <div > 
                <MuiThemeProvider>
               <Card className={styles.card}>
    <CardHeader
    
      
      />

      
      
      <CardText className={styles.txt}>
{fullInfo[2].Quest[2].Q}
</CardText>
    
    <CardMedia className={styles.choice}>
    <div>
    <div className="styles.choose">
    <div className={styles.sel}>
    <input type="radio" id="yes" name="YES" value="YES" className={styles.inp}/>
    <label for="a25" className={styles.lab}>YES</label>
</div>
<div className={styles.sel}>
    <input type="radio" id="no" name="YES"  value="NO" className={styles.inp}></input>
    <label for="a50" className={styles.lab}>N0</label>
</div>
</div>

    
    </div>
    </CardMedia>

  <CardActions className={styles.yesflt}>
      <FlatButton label="NEXT" labelPosition="before" icon={<HardwareKeyboardArrowRight />}  onClick={this.lastClick}/>
   </CardActions>
    
  </Card>
                </MuiThemeProvider>
          </div>

      
          <div className={styles.btn}>

                <MuiThemeProvider>
                  <RaisedButton label="SUBMIT" backgroundColor={'#0b0e24'} onClick={this.endClick}  labelStyle={{color:'white',position:'relative',top:'8px'}} />
                </MuiThemeProvider>
                
          </div>
         

          <Footer />
        </div>
      </div>
    );
  }
else if (this.state.next==true){

  return (
      <div className={styles.back}>
       
        <div>
          <Helmet
            title="MERN Starter - Blog App"
            titleTemplate="%s - Blog App"
            meta={[
              { charset: 'utf-8' },
              {
                'http-equiv': 'X-UA-Compatible',
                content: 'IE=edge',
              },
              {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
              },
            ]}
          />

          
          
          <div > 
                <MuiThemeProvider>
               <Card className={styles.card}>
    <CardHeader />
      
<CardText className={styles.txt}>
{fullInfo[2].Quest[1].Q}
</CardText>
<CardMedia className={styles.mulsel} >
<div className={styles.chkcontain}>
    <div className={styles.hold}>
      <input name="choose" type="checkbox" value="ONE" className={styles.check}/>
      <label className={styles.chbx}>ONE</label>
   </div>
   <div className={styles.hold}>
      <input name="choose" type="checkbox" value="TWO" className={styles.check}/>
      <label className={styles.chbx}>TWO</label>
   </div>
   <div className={styles.hold}>
      <input name="choose" type="checkbox" value="THREE" className={styles.check}/>
      <label className={styles.chbx}>THREE</label>
   </div>
    <div className={styles.hold}>
      <input name="choose" type="checkbox" value="FOUR" className={styles.check}/>
      <label className={styles.chbx}>FOUR</label>
   </div>

    <div className={styles.hold}>
      <input name="choose" type="checkbox" value="FIVE" className={styles.check}/>
      <label className={styles.chbx}>FIVE</label>
   </div>
    <div className={styles.hold}>
      <input name="choose" type="checkbox" value="SIX" className={styles.check}/>
      <label className={styles.chbx}>SIX</label>
   </div>
   </div>
   </CardMedia>
     
   <CardActions className={styles.mulflt}>   
      <FlatButton label="NEXT" labelPosition="before" icon={<HardwareKeyboardArrowRight />}  onClick={this.yesClick}/>
   </CardActions>
    
  </Card>
                </MuiThemeProvider>
          </div>

      
          <div className={styles.btn}>

                <MuiThemeProvider>
                  <RaisedButton label="SUBMIT" backgroundColor={'#0b0e24'} onClick={this.endClick}  labelStyle={{color:'white',position:'relative',top:'8px'}} />
                </MuiThemeProvider>
                
          </div>
          
          <Footer />
        </div>
      </div>
    );
}


  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
};

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    intl: store.intl,
  };
}

export default connect(mapStateToProps)(App);
