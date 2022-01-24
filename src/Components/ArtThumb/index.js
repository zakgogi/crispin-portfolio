import React from 'react';
import "./style.css"
import { CardContent, Card, CardMedia } from '@mui/material';
export default function artThumb(text) {
    return (
        <section>
            <Card>
                <CardMedia
                    component='img'
                    height='300'
                    image='https://images.unsplash.com/photo-1614069565320-172174347232?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=730&q=80'
                />
                <CardContent>
                    <h1>{text}</h1>
                </CardContent>
            </Card>
        </section>
    )
}
