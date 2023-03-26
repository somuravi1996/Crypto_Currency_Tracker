// Write your JS code here
import {Component} from 'react'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {cryptoData: []}

  componentDidMount() {
    this.getCryptoTableData()
  }

  getCryptoTableData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(eachItem => ({
      currencyLogo: eachItem.currency_logo,
      currencyName: eachItem.currency_name,
      euroValue: eachItem.euro_value,
      usdValue: eachItem.usd_value,
      id: eachItem.id,
    }))
    // console.log(updatedData)
    this.setState({cryptoData: updatedData})
  }

  render() {
    const {cryptoData, isLoading} = this.state

    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 d-flex justify-content-center">
            <div className="text-center pt-5">
              <h2 className="text-white pt-5 pb-3">Crypto CurrenciesTracker</h2>
              <img
                className="cryptocurrency"
                src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
                alt="cryptocurrency"
              />
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-8">
            <div className="row text-white bg-row-content">
              <div className="col-6 col-sm-6 col-md-6">
                <h4 className="">Coin Name</h4>
              </div>
              <div className="col-3 col-sm-3 col-md-3 text-center">
                <h5 className="">USD</h5>
              </div>
              <div className="col-3 col-sm-3 col-md-3 text-center">
                <h5 className="">EUR</h5>
              </div>
            </div>
            {/* <div className="p-2 d-flex flex-row justify-content-between bg-row-content text-white">
              <div className="flex-grow-1"></div>
              <div className="d-flex justify-content-around">
                <div></div>
                <div></div>
              </div>
            </div> */}
          </div>

          <div>
            {cryptoData.map(eachItemData => (
              <CryptocurrencyItem
                cryptoData={eachItemData}
                key={eachItemData.id}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
}
export default CryptocurrenciesList
