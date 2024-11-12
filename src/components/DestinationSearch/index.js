// // Write your code here
import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    const text = event.target.value.toLowerCase()
    this.setState({searchInput: text})
  }

  render() {
    const {destinationsList} = this.props
    const copyDestinationsList = destinationsList
    const {searchInput} = this.state

    const searchResults = copyDestinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInput),
    )

    return (
      <div className="bg-container">
        <div className="main-container">
          <h1 className="heading"> Destination Search </h1>

          <div className="search-container">
            <input
              onChange={this.onChangeSearchInput}
              className="search-box"
              type="search"
              placeholder="Search"
            />
            <img
              className="search-icon"
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png "
              alt="search icon"
            />
          </div>

          <ul className="list-container">
            {searchResults.map(eachItem => (
              <DestinationItem eachItemDetails={eachItem} key={eachItem.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
