import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { Link, useNavigate } from "react-router-dom";
import axiosServer from '../../utils/server/axiosServer';
import errorHandler from '../../utils/errorHanlder';
import { LOGIN } from '../../api/auth';
import { setCookiesFromAuthResponse } from '../../utils/server/axiosServer';

const initialState = {
    email: 'admin@admin.com',
    password: '12345678'
}

const Login = () => {
    const navigate = useNavigate();
    const [form] = Form.useForm();

    const onFinish = (values) => {
        axiosServer.post(LOGIN, values).then((res) => {
            setCookiesFromAuthResponse(res);
            navigate(`/category`);
        }).catch((err) => { errorHandler(err) });
    };

    return (
        <>
            <p style={{ fontSize: '18px', textAlign: 'center', fontWeight: 700 }}>Login</p>

            <Form
                form={form}
                name="normal_login"
                className="login-form"
                onFinish={onFinish}
                initialValues={initialState}
            >
                <Form.Item
                    name="email"
                    rules={[
                        { required: true, message: 'Please input your email!' },
                        { type: 'email', message: 'The input is not valid E-mail!' },
                    ]}
                >
                    <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input.Password
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                </Form.Item>
                <Form.Item>
                    <div style={{ display: "flex", justifyContent: 'center' }}>
                        <div className="login-form-forgot">
                            <Link to="/forgot-password">Forgot password ?</Link>
                        </div>
                    </div>
                </Form.Item>
            </Form>
        </>
    );
};
export default Login;