import { motion } from 'framer-motion'
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useEffect } from 'react'
import { styled } from 'styled-components'

import { FaAngleLeft, FaGithub } from '~/components/icons'
import { ContactSection, HeroBackground, MainPageFace } from '~/styles/home'

// ── i18n ──────────────────────────────────────────────────────────────────────

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en-US', ['common', 'rc-pulse'])),
  },
})

// ── Styled Components ─────────────────────────────────────────────────────────

const BackNav = styled.div`
  position: relative;
  z-index: 1;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 24px;
  a {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: #f9f9f9;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.3px;
    transition: opacity 0.2s ease;
    &:hover {
      opacity: 0.7;
    }
  }
`

const HeroContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 20px;
  position: relative;
  z-index: 1;
`

const HeroPill = styled.span`
  display: inline-block;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #a78bfa;
  margin-bottom: 16px;
  padding: 6px 16px;
  border: 1px solid #a78bfa;
  border-radius: 999px;
`

const HeroAuthor = styled.p`
  font-size: 14px;
  color: #aaa;
  margin: 0 0 10px;
  letter-spacing: 1px;
`

const HeroTitle = styled.h1`
  font-size: clamp(36px, 6vw, 72px);
  font-weight: 800;
  color: #f9f9f9;
  margin: 0 0 6px;
  line-height: 1.1;
  letter-spacing: -1px;
`

const HeroSubtitle = styled.h2`
  font-size: clamp(14px, 2vw, 18px);
  font-weight: 300;
  color: #888;
  margin: 0 0 8px;
  letter-spacing: 0.5px;
`

const HeroMeta = styled.p`
  font-size: 13px;
  color: #555;
  margin: 0;
  letter-spacing: 1px;
`

// ── Page body ─────────────────────────────────────────────────────────────────

const PageWrapper = styled.div`
  background: linear-gradient(to bottom, #121212 0px, #f5f5f5 120px);
`

const PageBody = styled.div`
  max-width: 760px;
  margin: 0 auto;
  padding: 80px 24px 100px;
`

const Section = styled.section`
  margin-bottom: 60px;
`

const SectionHeading = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: #111;
  margin: 0 0 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #a78bfa;
`

const Para = styled.p`
  font-size: 16px;
  line-height: 1.85;
  color: #333;
  margin: 0 0 16px;
`

// ── Links grid ────────────────────────────────────────────────────────────────

const LinksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 12px;
  margin-bottom: 0;
`

const LinkCard = styled.a<{ accent?: string }>`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 18px;
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  text-decoration: none;
  color: #111;
  font-size: 14px;
  font-weight: 500;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;
  &:hover {
    border-color: ${(p) => p.accent ?? '#a78bfa'};
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
    transform: translateY(-2px);
  }
  span.icon {
    font-size: 18px;
    line-height: 1;
  }
  span.label {
    flex: 1;
  }
  span.arrow {
    font-size: 12px;
    color: #bbb;
  }
`

// ── Features list ──────────────────────────────────────────────────────────────

const FeatureList = styled.ul`
  margin: 0;
  padding-left: 20px;
  li {
    font-size: 15px;
    line-height: 1.8;
    color: #333;
    margin-bottom: 8px;
  }
`

// ── Tech table ────────────────────────────────────────────────────────────────

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
  th,
  td {
    padding: 10px 14px;
    text-align: left;
    border-bottom: 1px solid #e8e8e8;
    vertical-align: top;
  }
  th {
    font-weight: 600;
    color: #555;
    font-size: 12px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    background: #f9f9f9;
  }
  td {
    color: #333;
  }
  td:first-child {
    font-weight: 500;
    color: #111;
    white-space: nowrap;
  }
  td:nth-child(2) {
    color: #6d28d9;
    font-weight: 500;
  }
`

// ── Content cards ─────────────────────────────────────────────────────────────

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 12px;
`

const ContentCard = styled.div`
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 18px;
`

const ContentCardLabel = styled.p`
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #a78bfa;
  margin: 0 0 6px;
`

const ContentCardTitle = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: #111;
  margin: 0 0 6px;
  line-height: 1.4;
`

const ContentCardMeta = styled.p`
  font-size: 12px;
  color: #888;
  margin: 0;
`

// ── Budget table ──────────────────────────────────────────────────────────────

const BudgetTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
  th,
  td {
    padding: 10px 14px;
    text-align: left;
    border-bottom: 1px solid #e8e8e8;
  }
  th {
    font-weight: 600;
    font-size: 12px;
    color: #555;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    background: #f9f9f9;
  }
  td {
    color: #333;
  }
  td:first-child {
    font-weight: 500;
    color: #111;
  }
  td:nth-child(2) {
    font-weight: 700;
    color: #6d28d9;
    white-space: nowrap;
  }
`

const CommunitiesPill = styled.p`
  font-size: 13px;
  color: #666;
  margin: 12px 0 0;
  letter-spacing: 0.3px;
  font-style: italic;
`

// ── Data insight ──────────────────────────────────────────────────────────────

const InsightBox = styled.div`
  background: #faf5ff;
  border: 1px solid #e9d5ff;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 16px;
`

const InsightLabel = styled.p`
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #7c3aed;
  margin: 0 0 8px;
`

// ── Dashboard preview ─────────────────────────────────────────────────────────

const DashboardPreview = styled.div`
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #e0e0e0;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
`

const DashboardImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`

const DashboardCaption = styled.p`
  font-size: 13px;
  color: #666;
  text-align: center;
  margin: 12px 0 0;
  font-style: italic;
`

// ── Disclosure ────────────────────────────────────────────────────────────────

const Disclosure = styled.div`
  background: #f9f9f9;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 14px 18px;
  font-size: 13px;
  color: #666;
  line-height: 1.6;
  margin-top: 40px;
`

// ── Page ──────────────────────────────────────────────────────────────────────

const RcPulsePage: NextPage = () => {
  const { t: tCommon } = useTranslation('common')
  const { t } = useTranslation('rc-pulse')

  const features = t('features.items', { returnObjects: true }) as string[]
  const techRows = t('tech.rows', { returnObjects: true }) as Array<{
    layer: string
    choice: string
    why: string
  }>
  const techHeaders = t('tech.headers', { returnObjects: true }) as {
    layer: string
    choice: string
    why: string
  }
  const budgetRows = t('growth.rows', { returnObjects: true }) as Array<{
    channel: string
    amount: string
    purpose: string
  }>
  const budgetHeaders = t('growth.headers', { returnObjects: true }) as {
    channel: string
    amount: string
    purpose: string
  }

  useEffect(() => {
    window.scroll({ top: 0 })
  }, [])

  return (
    <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Head>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
        <link rel="icon" href="/icon.ico" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={t('meta.title')} />
        <meta property="og:description" content={t('meta.description')} />
        <meta
          property="og:image"
          content="https://www.portfolio.eduwaldo.com/rc-pulse-dashboard.png"
        />
        <meta property="og:url" content="https://www.portfolio.eduwaldo.com/revenuecat/rc-pulse" />
        <meta property="og:site_name" content="Eduardo Santos Portfolio" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('meta.title')} />
        <meta name="twitter:description" content={t('meta.description')} />
        <meta
          name="twitter:image"
          content="https://www.portfolio.eduwaldo.com/rc-pulse-dashboard.png"
        />

        {/* Canonical */}
        <link rel="canonical" href="https://www.portfolio.eduwaldo.com/revenuecat/rc-pulse" />
      </Head>

      <main>
        <MainPageFace>
          <HeroBackground />

          <BackNav>
            <Link href="/revenuecat" scroll={false}>
              <FaAngleLeft size={16} />
              {tCommon('back')}
            </Link>
          </BackNav>

          <HeroContent>
            <HeroPill>{t('hero.label')}</HeroPill>
            <HeroAuthor>{t('hero.author')}</HeroAuthor>
            <HeroTitle>{t('hero.title')}</HeroTitle>
            <HeroSubtitle>{t('hero.subtitle')}</HeroSubtitle>
            <HeroMeta>
              @ {t('hero.company')} · {t('hero.date')}
            </HeroMeta>
          </HeroContent>
        </MainPageFace>

        <PageWrapper>
          <PageBody>
            {/* ── Links ── */}
            <Section>
              <SectionHeading>{t('links.heading')}</SectionHeading>
              <LinksGrid>
                <LinkCard
                  href="https://github.com/edufelip/rc-pulse"
                  target="_blank"
                  rel="noreferrer"
                  accent="#333"
                >
                  <span className="icon">
                    <FaGithub size={18} />
                  </span>
                  <span className="label">{t('links.github')}</span>
                  <span className="arrow">↗</span>
                </LinkCard>
                <LinkCard
                  href="https://rc-pulse-production.up.railway.app"
                  target="_blank"
                  rel="noreferrer"
                  accent="#22c55e"
                >
                  <span className="icon">🚀</span>
                  <span className="label">{t('links.demo')}</span>
                  <span className="arrow">↗</span>
                </LinkCard>
                <LinkCard
                  href="https://dev.to/edufelip"
                  target="_blank"
                  rel="noreferrer"
                  accent="#3b49df"
                >
                  <span className="icon">✍️</span>
                  <span className="label">{t('links.blog')}</span>
                  <span className="arrow">↗</span>
                </LinkCard>
                <LinkCard
                  href="https://github.com/edufelip/rc-pulse#video"
                  target="_blank"
                  rel="noreferrer"
                  accent="#ef4444"
                >
                  <span className="icon">▶️</span>
                  <span className="label">{t('links.video')}</span>
                  <span className="arrow">↗</span>
                </LinkCard>
              </LinksGrid>
            </Section>

            {/* ── What it does ── */}
            <Section>
              <SectionHeading>{t('what.heading')}</SectionHeading>
              <Para>{t('what.p1')}</Para>
              <Para>{t('what.p2')}</Para>
              <FeatureList>
                {features.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </FeatureList>
            </Section>

            {/* ── Dashboard preview ── */}
            <Section>
              <SectionHeading>{t('dashboard.heading')}</SectionHeading>
              <DashboardPreview>
                <DashboardImage
                  src="/rc-pulse-dashboard.png"
                  alt={t('dashboard.alt')}
                  loading="lazy"
                />
              </DashboardPreview>
              <DashboardCaption>{t('dashboard.caption')}</DashboardCaption>
            </Section>

            {/* ── Tech stack ── */}
            <Section>
              <SectionHeading>{t('tech.heading')}</SectionHeading>
              <Table>
                <thead>
                  <tr>
                    <th>{techHeaders.layer}</th>
                    <th>{techHeaders.choice}</th>
                    <th>{techHeaders.why}</th>
                  </tr>
                </thead>
                <tbody>
                  {techRows.map((row, i) => (
                    <tr key={i}>
                      <td>{row.layer}</td>
                      <td>{row.choice}</td>
                      <td>{row.why}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Section>

            {/* ── What the API revealed ── */}
            <Section>
              <SectionHeading>{t('findings.heading')}</SectionHeading>
              <InsightBox>
                <InsightLabel>API Discovery</InsightLabel>
                <Para style={{ margin: 0 }}>{t('findings.p1')}</Para>
              </InsightBox>
              <InsightBox>
                <InsightLabel>Data Insight — Dark Noise</InsightLabel>
                <Para style={{ margin: 0 }}>{t('findings.p2')}</Para>
              </InsightBox>
            </Section>

            {/* ── Content package ── */}
            <Section>
              <SectionHeading>{t('content.heading')}</SectionHeading>
              <ContentGrid>
                <ContentCard>
                  <ContentCardLabel>{t('content.blog.label')}</ContentCardLabel>
                  <ContentCardTitle>{t('content.blog.title')}</ContentCardTitle>
                  <ContentCardMeta>
                    {t('content.blog.platform')} · {t('content.blog.length')}
                  </ContentCardMeta>
                </ContentCard>
                <ContentCard>
                  <ContentCardLabel>{t('content.video.label')}</ContentCardLabel>
                  <ContentCardTitle>{t('content.video.title')}</ContentCardTitle>
                  <ContentCardMeta>
                    {t('content.video.tool')} · {t('content.video.length')}
                  </ContentCardMeta>
                </ContentCard>
                <ContentCard>
                  <ContentCardLabel>{t('content.social.label')}</ContentCardLabel>
                  <ContentCardTitle>{t('content.social.platform')}</ContentCardTitle>
                  <ContentCardMeta>{t('content.social.description')}</ContentCardMeta>
                </ContentCard>
              </ContentGrid>
            </Section>

            {/* ── Growth campaign ── */}
            <Section>
              <SectionHeading>{t('growth.heading')}</SectionHeading>
              <Para>{t('growth.description')}</Para>
              <BudgetTable>
                <thead>
                  <tr>
                    <th>{budgetHeaders.channel}</th>
                    <th>{budgetHeaders.amount}</th>
                    <th>{budgetHeaders.purpose}</th>
                  </tr>
                </thead>
                <tbody>
                  {budgetRows.map((row, i) => (
                    <tr key={i}>
                      <td>{row.channel}</td>
                      <td>{row.amount}</td>
                      <td>{row.purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </BudgetTable>
              <CommunitiesPill>{t('growth.communities')}</CommunitiesPill>
            </Section>

            <Disclosure>{t('disclosure')}</Disclosure>
          </PageBody>
        </PageWrapper>

        <ContactSection id="contact">
          <h2>{tCommon('contactSection.title')}</h2>
          <div className="bundle">
            <a href="https://github.com/edufelip" target="_blank" rel="noreferrer">
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/eduardo-felipe-5593221a5/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>
            <a href="https://medium.com/@eduardofelipi" target="_blank" rel="noreferrer">
              Blog
            </a>
          </div>
          <p>©2023 Eduardo Santos - eduardofelipi@gmail.com</p>
        </ContactSection>
      </main>
    </motion.div>
  )
}

export default RcPulsePage
