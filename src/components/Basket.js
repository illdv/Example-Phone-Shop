import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTotalBasketPrice, getBasketPhonesWithCount } from '../helpers'
import { isEmpty } from 'ramda'
import { removePhoneFromBasket, checkoutBasket, cleanBasket } from '../AC'
import { Link } from 'react-router-dom'



class Basket extends Component {

  state = {
    input: 0
  }

  render() {
    const { phones } = this.props
    const isBasketEmpty = isEmpty(phones)
    console.log(this.state);

    return <div className='container'>
      <div className='row'>
        <div className='col-md-9'>
          {isBasketEmpty ?
            <div>Your shopping cart is empty</div> :
            this.renderContent()}
        </div>
        <aside className='col-md=3 btn-user-checkout'>
          {this.renderSidebar()}
        </aside>
      </div>
    </div>
  }

  renderContent = () => {
    const { phones, totalPrice, removePhoneFromBasket } = this.props
    this.handleInput = (count) => e => this.setState({
      input: +e.target.value + count
    })
    this.handleValue = (count) => {


      return count
    }
    return <div className='table-responsive'>

      <table className='table-bordered table-condensed'>
        <tbody>
          {phones.map((phone) => (
            <tr
              key={phone.name}
              className='row'
            >
              <td className='col'>
                <img className='img-thumbnail' src={phone.image} alt={phone.name} />
              </td>
              <td className='col'>{phone.name}</td>
              <td className='col'>${phone.price}</td>
              <td className='col'>
                <input onChange={this.handleInput(phone.count)} type='number' value={this.handleValue(phone.count)} />
              </td>
              <td className='col'>
                <span onClick={() => removePhoneFromBasket(phone.id)} className='btn btn-block badge-danger' />
              </td>
            </tr>
          ))}
          <tr className='row'>
            <td className='col'>
              <b>Total:</b>
              <span> ${totalPrice}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>




  }






  renderSidebar = () => {
    const { phones, checkoutBasket, cleanBasket } = this.props
    const isBasketEmpty = isEmpty(phones)
    return <div>
      <Link to='/phones' className='btn btn-info btn-block'>
        Continue shopping
      </Link>
      {!isBasketEmpty &&
        <React.Fragment>
          <button onClick={cleanBasket} className='btn btn-danger btn-block'>
            Clear cart
    </button>
          <button onClick={() => checkoutBasket(phones)} className='btn btn-success btn-block'>
            Checkout
      </button>
        </React.Fragment>
      }
    </div>
  }




}










export default connect(
  state => ({
    phones: getBasketPhonesWithCount(state),
    totalPrice: getTotalBasketPrice(state)
  }),
  { removePhoneFromBasket, checkoutBasket, cleanBasket }
)(Basket)