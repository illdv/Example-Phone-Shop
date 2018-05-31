import { connect } from 'react-redux'
import { trim, values,head } from 'ramda'

const LocalizedText = ({ children, lang }) =>  {
const v = head(values(lang))

return	lang &&  v[trim(children)]

}




export default connect(
	state => ({
		lang: state.language
	})
)(LocalizedText)

