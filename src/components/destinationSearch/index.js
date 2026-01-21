import {Component} from 'react'
import DestinationItem  from '../destinationItem'
import './index.css'

class DestinationSeach extends Component {
  state = {searchInput: ''}

  onSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const searchResults = destinationsList.filter(eachDestination =>
      eachDestination.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="main-bg">
        <div className="search-container">
          <div>
            <h1 className="heading">Destination Search Edited by Vijju  </h1>
            <h2>Find your favorite </h2>

          </div>
          <div className="search-input-container">
            <input
              className="input-element"
              type="search"
              onChange={this.onSearchInput}
              placeholder="Search"
            />
            <img
              className="search-icon"
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="searcg-icon"
            />
          </div>
        </div>
        <div>
          <ul className='list-container'>{searchResults.map(eachItem => (
            <DestinationItem key={eachItem.id} details={eachItem}/>
          ))}</ul>
          
        </div>
      </div>
    )
  }
}
export default DestinationSeach
