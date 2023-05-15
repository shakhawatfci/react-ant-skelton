import {Breadcrumb, Card} from 'antd';
import React from 'react';
import {Link} from "react-router-dom";
import {HomeOutlined, PlusCircleOutlined} from "@ant-design/icons";
// import ListItem from "./ListItem";
import { useDocumentTitle } from '../../shared/hooks/documentTitle/useDocumentTitle';
import SessionList from '../../components/session/SessionList';

export default function Session() {
    useDocumentTitle("Session")


    return (
        <>
            <Breadcrumb style={{margin: '16px 0'}}>
                <Breadcrumb.Item>
                    <Link to="/dashbaord"><HomeOutlined /></Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>Session List</Breadcrumb.Item>
            </Breadcrumb>
            <Card title="Sessions" extra={<Link to="/admin/address/create"> <b><PlusCircleOutlined /> Create New</b></Link>}>
                <SessionList />
            </Card>
        </>
    )
}