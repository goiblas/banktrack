import styled from "@emotion/styled";

const Row = styled.li`
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    color: ${({theme}) => theme.colors.neutrals[900]};
    font-size: ${({theme}) => theme.typography.size.small};
    line-height: ${({theme}) => theme.typography.lineHeight.medium};
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