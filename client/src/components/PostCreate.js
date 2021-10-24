import React from 'react';
import { Create, SimpleForm, TextInput, DateField } from 'react-admin';

const PostCreate = (props) => {
    return (
        <Create title='Create a Post' {...props}>
            <SimpleForm>
                <TextInput source='title' />
                <TextInput multiline source='body' />
                <DateField label='Published' source='published_at' />
            </SimpleForm>
        </Create>
    )
}

export default PostCreate;
