import { connect } from 'react-redux'
import { trim, values,head, keys } from 'ramda'

const LocalizedText = ({children,lang}) =>  {

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
		return		`₽${children * 60}`
	} 
return null
	}

}




export default connect(
	state => ({
		lang: state.language
	})
)(LocalizedText)

