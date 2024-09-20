import React from 'react';
import { Col, Row } from 'antd';
import { WrapperFooter, WrapperTextFooter, WrapperLinksFooter } from './style';

const Footer = () => {
    return (
        <WrapperFooter>
            <Row justify="space-between" style={{ padding: '20px 0' }}>
                <Col span={6}>
                    <WrapperTextFooter>Thông tin</WrapperTextFooter>
                    <WrapperLinksFooter>
                        <a href="#about">Giới thiệu</a>
                        <a href="#contact">Liên hệ</a>
                        <a href="#privacy">Chính sách bảo mật</a>
                    </WrapperLinksFooter>
                </Col>
                <Col span={6}>
                    <WrapperTextFooter>Hỗ trợ</WrapperTextFooter>
                    <WrapperLinksFooter>
                        <a href="#faq">Câu hỏi thường gặp</a>
                        <a href="#returns">Đổi trả hàng</a>
                        <a href="#shipping">Giao hàng</a>
                    </WrapperLinksFooter>
                </Col>
                <Col span={6}>
                    <WrapperTextFooter>Theo dõi chúng tôi</WrapperTextFooter>
                    <WrapperLinksFooter>
                        <a href="#facebook">Facebook</a>
                        <a href="#instagram">Instagram</a>
                        <a href="#twitter">Twitter</a>
                    </WrapperLinksFooter>
                </Col>
                <Col span={6} style={{ textAlign: 'right' }}>
                    <WrapperTextFooter>Bản quyền © 2024</WrapperTextFooter>
                </Col>
            </Row>
        </WrapperFooter>
    );
}

export default Footer;
