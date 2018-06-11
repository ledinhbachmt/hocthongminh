import React, { Component } from 'react';
import { List, Card } from 'antd';

const data = [
    {
        title: 'Title 1',
    },
    {
        title: 'Title 2',
    },
    {
        title: 'Title 3',
    },
    {
        title: 'Title 4',
    }
];

class Example extends Component {
    render() {
        return (
            <List
                grid={{ gutter: 16, xs: 1, sm: 2, md: 4}}
                dataSource={data}
                renderItem={item => (
                    <List.Item>
                        <Card title={item.title}></Card>
                    </List.Item>
                )}
            />
        );
    }
}

export default Example;