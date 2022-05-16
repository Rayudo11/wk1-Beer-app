import axios from 'axios';
import React, {Component} from 'react';

import './App.css'

import BeerCard from './BeerCard';



class App extends Component {
  constructor (props) {
    super()

    this.state = {

      arrayOfBeer: [],
      likedBeers: [],
    }
  }

  componentDidMount() {
    axios.get('https://api.punkapi.com/v2/beers')
    .then( res => {
      // before we can store the api as a state we must store it as a variable
      const arrayOfBeer = res.data
      // now we must change it to the needed state name (arrayOfBeer)
      this.setState({arrayOfBeer})
    })
  }

  
  

  clickToLike = (index) => {
    if(this.state.likedBeers.includes(this.state.arrayOfBeer[index])){
  
      let foundBeer = this.state.likedBeers.findIndex(element => {
        for(let i=0; i <this.state.arrayOfBeer.length; i++ ){
          console.log(element.id, 'these are the ids', this.state.arrayOfBeer[index].id )
          return element.id === this.state.arrayOfBeer[index].id
        }
      })
      console.log(foundBeer)
      let goodBeers = this.state.likedBeers
      let remList = goodBeers.splice(foundBeer,1)
      this.setState({goodBeers:remList})
      console.log(goodBeers)
    } else {
      console.log("was Clicked", index)
      let goodBeers = this.state.likedBeers
      let newList =goodBeers.push(this.state.arrayOfBeer[index])
      this.setState({goodBeers:[newList]}) 
      console.log(goodBeers)
    }

  }
  
 

handleClick = () => {
  // this.state.goodBeers ?
  //  this.setState({goodBeers })
}

 render() {
   return (
      <div className="App">
       <header className='App-header'>
         <ol>{this.state.arrayOfBeer.map((beer,index) => {
           return(
             <BeerCard 
             key={index} 
             index={index} 
             name={beer.name} 
             image_url={beer.image_url}
             description={beer.description} 
             first_brewed={beer.first_brewed} 
             abv={beer.abv} 
             clickLike={this.clickToLike}/>
             )}
           )}
           </ol>
         
       </header>
      </div>
    );
  }
}



export default App;

// onClick ===> props.handleClick ===> (app.js) pass up an index

// create an new array to hold the likedBeers:
// likedBeer: []
// this.setstate({likedBeer:[...likedBeer,index]})

