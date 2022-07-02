import styled from "@emotion/styled"

const SrOnly = styled.div`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    white-space: nowrap;
    border: 0;
`

const VisibilityHidden = ({ children, when }) => {
    if (when) {
        return <SrOnly>{children}</SrOnly>
    }
    return children
}

export default VisibilityHidden