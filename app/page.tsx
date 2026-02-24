'use client';

import {
  Layout,
  Menu,
  Button,
  Typography,
  Space,
  Row,
  Col,
  Card,
  Tag,
  Tabs,
  Divider,
  Avatar,
  theme,
} from 'antd';
import { SunOutlined, MoonOutlined } from '@ant-design/icons';
import { EThemeMode, useSettingsStore } from './stores/settingsStore';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import BaseSelect from './components/base/BaseSelect';

const { Header, Content, Footer } = Layout;
const { Title, Text, Paragraph } = Typography;

export default function HomePage() {
  const { t } = useTranslation();
  const { token: themeToken } = theme.useToken();
  const { themeMode, switchThemeMode } = useSettingsStore();
  const router = useRouter();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 10,
          borderBottom: '1px solid rgba(0,0,0,0.06)',
          paddingInline: 24,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: themeToken.colorBgContainer,
        }}
      >
        <Space size="middle">
          <div style={{ fontWeight: 700, letterSpacing: 0.2 }}>Nextjs Core</div>
          <Menu
            mode="horizontal"
            items={[
              {
                key: '/dashboard',
                label: 'Dashboard',
                onClick: () => router.push('/dashboard'),
              },
              { key: '/pricing', label: 'Pricing' },
              { key: '/faq', label: 'FAQ' },
            ]}
            style={{ borderBottom: 'none', minWidth: 320 }}
            onClick={info => {
              router.push(info.key);
            }}
          />
        </Space>

        <Space>
          <Button>{t('common.login')}</Button>
          <Button type="primary">Get started</Button>
          <Button
            type="text"
            icon={
              themeMode === EThemeMode.LIGHT ? (
                <SunOutlined />
              ) : (
                <MoonOutlined />
              )
            }
            onClick={switchThemeMode}
          />
        </Space>
      </Header>

      <Content style={{ padding: '40px 24px 0' }}>
        {/* Hero */}
        <section style={{ maxWidth: 1120, margin: '0 auto' }}>
          <Row gutter={[24, 24]} align="middle">
            <Col xs={24} md={12}>
              <Tag color="blue" style={{ marginBottom: 12 }}>
                Built with Next.js + Ant Design
              </Tag>
              <Title style={{ marginTop: 0, marginBottom: 12 }}>
                Ship a beautiful homepage fast.
              </Title>
              <Paragraph style={{ fontSize: 16, marginBottom: 24 }}>
                A clean, responsive landing page using Ant Design components —
                perfect as a starter for SaaS, product, or portfolio sites.
              </Paragraph>

              <Space wrap>
                <Button type="primary" size="large">
                  Start free
                </Button>
                <Button size="large">View docs</Button>
              </Space>

              <Divider />

              <Space wrap>
                <Text type="secondary">Trusted by teams at</Text>
                <Space wrap>
                  <Tag>Acme</Tag>
                  <Tag>Globex</Tag>
                  <Tag>Initech</Tag>
                  <Tag>Umbrella</Tag>
                </Space>
              </Space>
            </Col>

            <Col xs={24} md={12}>
              <Card
                variant="outlined"
                style={{
                  borderRadius: 16,
                  boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                }}
              >
                <Title level={4} style={{ marginTop: 0 }}>
                  Live preview
                </Title>
                <Paragraph type="secondary" style={{ marginBottom: 16 }}>
                  Replace this card with your product screenshot, chart, or
                  demo.
                </Paragraph>

                <Row gutter={[16, 16]}>
                  {[
                    {
                      title: 'Fast setup',
                      desc: 'Drop-in UI blocks.',
                    },
                    {
                      title: 'Reliable',
                      desc: 'Strong defaults.',
                    },
                    {
                      title: 'Scalable',
                      desc: 'Extend easily.',
                    },
                  ].map(x => (
                    <Col xs={24} sm={8} key={x.title}>
                      <Card size="small" style={{ borderRadius: 12 }}>
                        <Space orientation="vertical" size={6}>
                          <Space>
                            <Text strong>{x.title}</Text>
                          </Space>
                          <Text type="secondary">{x.desc}</Text>
                        </Space>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Card>
            </Col>
          </Row>
        </section>

        {/* Features */}
        <section
          id="features"
          style={{ maxWidth: 1120, margin: '56px auto 0' }}
        >
          <Row justify="space-between" align="middle" gutter={[24, 16]}>
            <Col>
              <Title level={2} style={{ margin: 0 }}>
                Features
              </Title>
              <Text type="secondary">
                Everything you need to launch quickly.
              </Text>
            </Col>
            <Col>
              <Button type="link">See all features</Button>
            </Col>
          </Row>

          <Row gutter={[16, 16]} style={{ marginTop: 20 }}>
            {[
              {
                title: 'Polished UI',
                desc: 'Ant Design components for a consistent, modern look.',
              },
              {
                title: 'Responsive layout',
                desc: 'Grid-based sections that adapt nicely across devices.',
              },
              {
                title: 'Composable sections',
                desc: 'Swap blocks, reorder sections, customize content.',
              },
              {
                title: 'Production-ready',
                desc: 'Clean structure with App Router and client components.',
              },
            ].map(f => (
              <Col xs={24} sm={12} md={6} key={f.title}>
                <Card
                  style={{ height: '100%', borderRadius: 16 }}
                  title={f.title}
                >
                  <Text type="secondary">{f.desc}</Text>
                </Card>
              </Col>
            ))}
          </Row>

          <Card style={{ marginTop: 16, borderRadius: 16 }}>
            <Tabs
              defaultActiveKey="1"
              items={[
                {
                  key: '1',
                  label: 'For startups',
                  children: (
                    <Text type="secondary">
                      Great for MVPs: quick landing pages, simple pricing, fast
                      iteration.
                    </Text>
                  ),
                },
                {
                  key: '2',
                  label: 'For teams',
                  children: (
                    <Text type="secondary">
                      A nice base for internal tools + marketing pages with
                      consistent UI.
                    </Text>
                  ),
                },
                {
                  key: '3',
                  label: 'For creators',
                  children: (
                    <Text type="secondary">
                      Perfect for portfolio-style homepages with sections and
                      cards.
                    </Text>
                  ),
                },
              ]}
            />
          </Card>

          <BaseSelect
            options={[
              { label: 'xin chao', value: 1 },
              { label: 'hello', value: 2 },
            ]}
            multiple={false}
          />
        </section>

        {/* Testimonials */}
        <section style={{ maxWidth: 1120, margin: '56px auto 0' }}>
          <Row justify="space-between" align="middle" gutter={[24, 16]}>
            <Col>
              <Title level={2} style={{ margin: 0 }}>
                What users say
              </Title>
              <Text type="secondary">Short testimonials to build trust.</Text>
            </Col>
          </Row>

          <Row gutter={[16, 16]} style={{ marginTop: 20 }}>
            {[
              {
                name: 'Ava',
                role: 'Founder',
                quote: 'We launched our landing page in a day.',
              },
              {
                name: 'Minh',
                role: 'Engineer',
                quote: 'Clean structure and easy to customize.',
              },
              {
                name: 'Noah',
                role: 'PM',
                quote: 'AntD makes it look professional instantly.',
              },
            ].map(t => (
              <Col xs={24} md={8} key={t.name}>
                <Card style={{ borderRadius: 16, height: '100%' }}>
                  <Space orientation="vertical" size={12}>
                    <Paragraph style={{ margin: 0 }}>{t.quote}</Paragraph>
                    <Space>
                      <Avatar>{t.name[0]}</Avatar>
                      <div>
                        <Text strong>{t.name}</Text>
                        <br />
                        <Text type="secondary">{t.role}</Text>
                      </div>
                    </Space>
                  </Space>
                </Card>
              </Col>
            ))}
          </Row>
        </section>
      </Content>

      <Footer style={{ textAlign: 'center' }}>
        <Text type="secondary">
          © {new Date().getFullYear()} MyProduct. Built with Ant Design.
        </Text>
      </Footer>
    </Layout>
  );
}
