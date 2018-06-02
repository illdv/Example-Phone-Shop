import React, {Component} from 'react'
import { connect } from 'react-redux'
import { trim, values,head, keys } from 'ramda'
import Price from 'react-forex-price'

class LocalizedText extends Component  {




	render () {
		const {  children, lang} =this.props


		const value = head(values(lang))
const key = head(keys(lang))



if (typeof children === 'string') {

	return	lang &&  value[trim(children)]
}



if(typeof children === 'number') {

	if (key === 'English') {

		return `$${children}`
	}
	if(key === 'Russian'){

		return		<Price amount={children} baseCurrency={'USD'} displayCurrency={'RUB'}  rounding={Math.ceil} dropCents unwrap/>
	} 
}

return null
	}

}




export default connect(
	state => ({
		lang: state.language
	})
)(LocalizedText)

