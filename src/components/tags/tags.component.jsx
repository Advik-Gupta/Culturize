import React from 'react'

import { TagName } from './tags.styles';

export const Tags = ({ tags }) => {
    return (
        <TagName>#{tags}</TagName>
    )
}

export default Tags;