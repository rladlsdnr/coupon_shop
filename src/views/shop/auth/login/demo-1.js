import { Box } from '@mui/material';
import { Title } from 'src/components/elements/styled-components';
import styled from 'styled-components'

const Wrappers = styled.div`
max-width:1200px;
display:flex;
flex-direction:column;
`

const Demo1 = (props) => {
    const {
        data: {

        },
        func: {
            router
        },
    } = props;

    return (
        <>
            <Wrappers>
                <Title>로그인</Title>
            </Wrappers>
        </>
    )
}
export default Demo1
