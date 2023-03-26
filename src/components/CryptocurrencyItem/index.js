import './index.css'

const CryptocurrencyItem = props => {
  //   console.log(props)
  const {cryptoData} = props
  console.log(cryptoData)
  const {currencyLogo, currencyName, euroValue, usdValue} = cryptoData

  //   console.log(cryptoData.currencyLogo)
  return (
    <div className="row justify-content-center">
      <div className="col-12 col-md-8 col-lg-8 pt-2 pb-2">
        <div className="row text-white">
          <div className="col-6 col-sm-6 col-md-6">
            <div className="d-flex flex-row text-white flex-fill">
              <img
                style={{width: '30px', height: '30px'}}
                src={currencyLogo}
                alt="logo"
              />
              <h2 className="coin-name">{currencyName}</h2>
            </div>
          </div>
          <div className="col-3 col-sm-3 col-md-3">
            <p className="rate text-center">{euroValue}</p>
          </div>
          <div className="col-3 col-sm-3 col-md-3">
            <p className="rate text-center">{usdValue}</p>
          </div>
        </div>
        {/* <div className="d-flex flex-row justify-content-between">
          <div className="d-flex justify-content-evenly text-white"></div>
        </div> */}
      </div>
    </div>
  )
}
export default CryptocurrencyItem
