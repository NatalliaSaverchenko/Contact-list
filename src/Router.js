import { Switch, Route } from 'react-router-dom'
import ContactInfo from './pages/ContactInfo/ContactInfo'
import ListOfContacts from './pages/ListOfContacts/ListOfContacts'
const RouterView = () => {
  return (
    <Switch>
      <Route exact path="/" component={ListOfContacts}></Route>
      <Route exact path="/contactinfo/:id" component={ContactInfo}></Route>
    </Switch>
  )
}
export default RouterView
