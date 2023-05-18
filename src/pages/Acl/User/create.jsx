import {useDocumentTitle} from "../../../shared/hooks/documentTitle/useDocumentTitle";
import {Breadcrumb, Button, Card, Col, Form, Input, Radio, Row, Select, Space} from 'antd';
import {HomeOutlined, UnorderedListOutlined} from '@ant-design/icons';
import {Link} from "react-router-dom";

const {Option} = Select;
export default function CreateUser() {
    useDocumentTitle("Create User")
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log(values);
    };
    return (
        <>
            <Breadcrumb style={{margin: '16px 0'}}>
                <Breadcrumb.Item>
                    <Link to="/admin/dashboard"><HomeOutlined/></Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>Create User</Breadcrumb.Item>
            </Breadcrumb>

            <Card title="Create User" extra={<Link to="/admin/users"> <b><UnorderedListOutlined/> List</b></Link>} >
                <Form form={form} layout="vertical" onFinish={onFinish} autoComplete="off">
                    <Row gutter={20} >
                        <Col span={8} className="gutter-row">
                            <Form.Item name="firstname" label="First Name"
                                       rules={[{required: true, message: 'Please input first name!'}]}>
                                <Input placeholder="Enter First Name"/>
                            </Form.Item>
                        </Col>

                        <Col span={8} className="gutter-row">
                            <Form.Item name="lastname" label="Last Name"
                                       rules={[{required: true, message: 'Please input last name!'}]}>
                                <Input placeholder="Enter Last Name"/>
                            </Form.Item>
                        </Col>

                        <Col span={8} className="gutter-row">
                            <Form.Item name="name_en" label="User Name"
                                       rules={[{required: true, message: 'Please input user name!'}]}>
                                <Input placeholder="Enter user Name"/>
                            </Form.Item>

                        </Col>
                    </Row>


                    <Row gutter={20}>
                        <Col span={8} className="gutter-row">
                            <Form.Item
                                name="gender"
                                label="Gender"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please select gender!',
                                    },
                                ]}
                            >
                                <Select placeholder="select your gender">
                                    <Option value="male">Male</Option>
                                    <Option value="female">Female</Option>
                                </Select>
                            </Form.Item>
                        </Col>

                        <Col span={8} className="gutter-row" style={{ padding: '0 20px' }}>
                            <Form.Item
                                label="Status"
                                name="status"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please select Status!',
                                    },
                                ]}>
                                <Radio.Group>
                                    <Radio value="Active"> Active </Radio>
                                    <Radio value="Inactive"> Inactive </Radio>
                                </Radio.Group>
                            </Form.Item>
                        </Col>
                    </Row>

                    <Form.Item>
                        <Space>
                            <Button type="primary" htmlType="submit">
                                Save
                            </Button>
                        </Space>
                    </Form.Item>
                </Form>
            </Card>

        </>
    )
}