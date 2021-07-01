import { useState } from 'react'; 
import { Form } from 'semantic-ui-react';
import { UserConsumer } from '../../providers/UserProvider';

const AccountForm = ({ updateUser }) => {
  const [user, setUser] = useState({ username: "", membership: "" })
  
  const handleSubmit = (e) => {
    e.preventDefault()
    updateUser(1, user)
    setUser({ username: "", membership: "" })
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Input
        name="username"
        value={user.username}
        onChange={(e) => setUser({...user, username: e.target.value })}
        required
        label="New Username"
      />
      <Form.Select
        name="membership"
        value={user.membership}
        onChange={(e, {value}) => setUser({...user, membership: value })}
        required
        label="new membership"
        options={membershipOpts}
      />
      <Form.Button>Save</Form.Button>
    </Form>
  )
}

const membershipOpts = [
  { key: "b", text: "Bronze", value: "Bronze" },
  { key: "s", text: "Silver", value: "Silver" },
  { key: "g", text: "Gold", value: "Gold" },
  { key: "p", text: "Platinum", value: "Platinum" },
]

const ConnectedAccountForm = (props) => (
  <UserConsumer>
    { value => (
      <AccountForm {...props} {...value} />
    )}
  </UserConsumer>
)

export default ConnectedAccountForm;