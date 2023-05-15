
// import { useDocumentTitle } from "../../shared/hooks/documentTitle/useDocumentTitle";
import { useEffect } from "react";
import Login from "../components/Auth/Login";
import Cookies from "js-cookie";
import { Card, Col, Row } from "antd"

export default function LoginPage() {
    // useDocumentTitle("Login")

    useEffect(() => {
        const token = Cookies.get("_jwtToken");
        console.log(token);
         if (token) {
             window.location = "/dashboard";
         }
    }, [])

    return (
        <div>
        <Row justify="center" align="middle" style={{ marginTop: '100px' }}>
            <Col xxl={8} xl={8} lg={8} md={12} sm={24} xs={24}>
                <Card>
                 <Login />
                </Card>
            </Col>
        </Row>
        </div>
    )
}