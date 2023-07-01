import styled from 'styled-components';

export const ProductDetailsContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 90%
`

export const ProductInformation = styled.div`
    width: 50%;
    margin: 0 1% 1% 1%
`

export const ProductName = styled.h1`
    margin: 0
`

export const ProductRating = styled.div`
    margin-top: 5px;
    display: flex;
    flex-direction: row;
    `
    
    export const ProductPrice = styled.div`
    font-size: 1.7em;
    `
    
    export const ProductSize = styled.div`
    font-size: 1.2em;
    margin-top: 5px;
`

export const TagsContainer = styled.div`
    display: flex;
    flex-direction: row;
`

export const ProductDescription = styled.div`
    margin-top: 10px;
    font-size: 1.5em;
`

export const OrderOptions = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: column;

    button {
        margin: 0 0 10px 0;
        width: 50%;
    }
`

export const QuantityChooser = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
`

export const QuantityDisplay = styled.div`
    font-size: 1.5em;
    margin: 0 20px
`
