import { Card } from 'semantic-ui-react';

const Account = () => (
  <Card>
    <Card.Content>
      <Card.Header>username</Card.Header>
      <Card.Meta>
        Date Joined: joined, created_at
      </Card.Meta>
      <Card.Description>
        Membership Level: membership
      </Card.Description>
    </Card.Content>
  </Card>
)

export default Account;