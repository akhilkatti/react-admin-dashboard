import React from "react";
import { List, Datagrid, TextField, DateField, EditButton, DeleteButton} from 'react-admin'; 


const PostList = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source='id' />
                <TextField source='title' />
                <DateField source='published_at' />
                <EditButton basePath='/posts' />
                <DeleteButton basePath='/posts' />
            </Datagrid>
        </List>
    )
}

export default PostList;
