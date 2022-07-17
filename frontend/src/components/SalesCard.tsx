import styled from "styled-components";
import "react-datepicker/dist/react-datepicker.css";
import { NotificationButton } from "./NotificationButton"
import ReactDatePicker from "react-datepicker";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/request";
import { Sale } from "../models/sale";

const Card = styled.div`
  background-color: #283142;
  border-radius: 10px;
  padding: 35px 35px;
`

const SalesTitle = styled.h2`
  font-size: 24px;
  color: #676fff;
  margin-bottom: 20px;
`

const FormControlContainer = styled.div`
  margin-bottom: 16px;
  max-width: 300px;
`

const Input = styled(ReactDatePicker)`
  width: 100%;
  height: 46px;
  background-color: #1B2531;
  border: 1px solid #384459;
  color: #9AAABE;
  padding: 0 22px;
  font-size: 18px;
  border-radius: 5px;
`

const Table = styled.table`
  width: 100%;
  border-spacing: 0;
  thead {
    font-size: 16px;
    height: 55px;
    color: #E9E9E9;
  }
  tbody {
    font-size: 14px;
    text-align: center;
    color: #CFCFCF;
  }
  tbody tr {
    height: 55px;
    border-top: 1px solid #5F6E82;
  }
  tbody tr:hover > td {
    background-color: #384459;
  }
  tbody tr:nth-child(odd) {
    background-color: #242C3B;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`

export function SalesCard() {
  const [minDate, setMinDate] = useState(new Date(new Date().setDate(new Date().getDate() - 365)));

  const [maxDate, setMaxDate] = useState(new Date());

  const [sales, setSales] = useState<Sale[]>();

  useEffect(() => {
    const min = minDate.toISOString().slice(0, 10);
    const max = maxDate.toISOString().slice(0, 10);
    axios.get(`${BASE_URL}/sales?minDate=${min}&maxDate=${max}`)
      .then(response => {
        setSales(response.data?.content);
      });
  }, [minDate, maxDate]);
  
  return (
    <Card>
      <SalesTitle>Vendas</SalesTitle>
      <div>
        <FormControlContainer>
          <Input
            selected={minDate}
            onChange={(date: Date) => setMinDate(date)}
            dateFormat="dd/MM/yyyy"
          />
        </FormControlContainer>
        <FormControlContainer>
          <Input
            selected={maxDate}
            onChange={(date: Date) => setMaxDate(date)}
            dateFormat="dd/MM/yyyy"
          />
        </FormControlContainer>
      </div>
      <div>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Data</th>
              <th>Vendedor</th>
              <th>Visitas</th>
              <th>Vendas</th>
              <th>Total</th>
              <th>Notificar</th>
            </tr>
          </thead>
          <tbody>
            {sales?.map((sale: Sale) => {
              return (
                <tr key={sale.id}>
                  <td>{sale.id}</td>
                  <td>{new Date(sale.date).toLocaleDateString()}</td>
                  <td>{sale.sellerName}</td>
                  <td>{sale.visited}</td>
                  <td>{sale.deals}</td>
                  <td>R$ {sale.amount.toFixed(2)}</td>
                  <td>
                    <ButtonContainer>
                      <NotificationButton />
                    </ButtonContainer>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </div>
    </Card>
  )
}