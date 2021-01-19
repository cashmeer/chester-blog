import React from 'react';

export interface BlogDetailProps {
    clickHandler? : () => void
}

export const BlogDetail = (props: BlogDetailProps) => {
    return (<div className="BlogDetail"
                 onClick={()=> props.clickHandler && props.clickHandler()}>
        oh well...click this text
    </div>);
}
