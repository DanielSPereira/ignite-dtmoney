import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -9rem;

    div { 
        background: var(--shape);
        padding: 2rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-color);

        header { 
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        strong {
            margin-top: 1rem;
            font-size: 2rem;
            display: block;
            font-weight: 500;
            line-height: 3rem;
        }

        &.highlighted-background {
            background: var(--green); 
            color: #fff;
        }
    }
`;