import styled from 'styled-components'
import icon from './../assets/img/notification-icon.svg'

const Button = styled.div`
  height: 45px;
  width: 45px;
  background: rgba(255, 107, 114, 0.1);
  border: 1px solid #ff6b72;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img {
    width: 19px;
  }
`

export function NotificationButton() {
  return (
    <Button>
      <img src={icon} alt="Notificar"/>
    </Button>
  )
}