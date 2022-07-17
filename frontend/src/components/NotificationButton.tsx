import axios from 'axios'
import { toast } from 'react-toastify'
import styled from 'styled-components'

import icon from '../assets/img/notification-icon.svg'
import { BASE_URL } from '../utils/request'

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

type Props = {
  saleId: number
}

function handleClick(saleId: number) {
  axios.get(`${BASE_URL}/sales/${saleId}/notification`)
    .then(_ => {
      toast.info("SMS enviado com sucesso!");
    });
}

export function NotificationButton({ saleId } : Props) {
  return (
    <Button onClick={() => handleClick(saleId)}>
      <img src={icon} alt="Notificar"/>
    </Button>
  )
}