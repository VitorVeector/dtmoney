import { Container } from "./styles"


export function TransactionsTable(){
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de WebSite</td>
                        <td className="deposit">R$ 12.000,00</td>
                        <td>Desenvolvimento</td>
                        <td>11/03/2022</td>
                    </tr>
                    <tr>
                        <td>Despesas de casa</td>
                        <td className="withdraw">-R$ 1.400,00</td>
                        <td>Casa</td>
                        <td>11/03/2022</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}