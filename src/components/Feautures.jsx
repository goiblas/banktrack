import styled from "@emotion/styled";

const Row = styled.li`
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    color: #222222;
    font-size: 0.8125rem;
    line-height: 1.3;
`

const Features = styled.ul`
    list-style: none;
    display: grid;
    gap: 1.5rem;
`

const FeatureItem = (props) => {
    const { image, children } = props;
    return (
        <Row>
            <img src={image} alt="" width="36" height="36" />
            <div>
                {children}
            </div>
        </Row>
    )
}

Features.Item = FeatureItem

export default Features