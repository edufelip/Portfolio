import { motion } from 'framer-motion'
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useEffect } from 'react'
import styled from 'styled-components'

import { FaAngleLeft } from '~/components/icons'
import { ContactSection, HeroBackground, MainPageFace } from '~/styles/home'

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

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en-US', ['common', 'revenuecat'])),
    },
  }
}

// --- Styled Components ---

const ApplicationHero = styled.div`
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

const HeroLabel = styled.span`
  display: inline-block;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #e05252;
  margin-bottom: 16px;
  padding: 6px 16px;
  border: 1px solid #e05252;
  border-radius: 999px;
`

const HeroAuthor = styled.p`
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1px;
  color: #aaaaaa;
  margin: 0 0 10px;
`

const HeroTitle = styled.h1`
  font-size: clamp(28px, 5vw, 52px);
  font-weight: 700;
  color: #f9f9f9;
  margin: 0 0 8px;
  line-height: 1.15;
  max-width: 800px;
`

const HeroCompany = styled.h2`
  font-size: clamp(16px, 2.5vw, 22px);
  font-weight: 300;
  color: #bbbbbb;
  margin: 0 0 24px;
  letter-spacing: 0.5px;
`

const HeroDate = styled.p`
  font-size: 13px;
  color: #666;
  margin: 0;
  letter-spacing: 1px;
`

const LetterBodyWrapper = styled.div`
  background: linear-gradient(to bottom, #121212 0px, #f9f9f9 120px);
`

const LetterBody = styled.article`
  max-width: 720px;
  margin: 0 auto;
  padding: 80px 24px 100px;
  background-color: transparent;
`

const LetterOpening = styled.p`
  font-size: 16px;
  color: #444;
  margin: 0 0 32px;
  font-style: italic;
`

const LetterIntro = styled.p`
  font-size: 17px;
  line-height: 1.8;
  color: #222;
  margin: 0 0 48px;
`

const SectionHeading = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: #111;
  margin: 0 0 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #e05252;
`

const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.85;
  color: #333;
  margin: 0 0 20px;
`

const BulletList = styled.ul`
  margin: 0 0 24px;
  padding-left: 20px;
  li {
    font-size: 16px;
    line-height: 1.8;
    color: #333;
    margin-bottom: 12px;
  }
`

const LetterSection = styled.section`
  margin-bottom: 56px;
`

const ClosingBlock = styled.div`
  margin-top: 64px;
  padding-top: 32px;
  border-top: 1px solid #e0e0e0;
`

const SignatureName = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: #111;
  margin: 32px 0 4px;
`

const SignatureOperator = styled.p`
  font-size: 14px;
  color: #888;
  margin: 0;
  letter-spacing: 0.3px;
`

// --- Page ---

const RevenueCatApplication: NextPage = () => {
  useEffect(() => {
    window.scroll({ top: 0 })
  }, [])

  const { t: tCommon } = useTranslation('common')
  const { t } = useTranslation('revenuecat')

  const bulletItems = t('letter.section3.items', { returnObjects: true }) as string[]

  return (
    <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Head>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <main>
        <MainPageFace>
          <HeroBackground />
          <BackNav>
            <Link href="/" scroll={false}>
              <FaAngleLeft size={16} />
              {tCommon('back')}
            </Link>
          </BackNav>
          <ApplicationHero>
            <HeroLabel>{t('hero.label')}</HeroLabel>
            <HeroAuthor>{t('hero.author')}</HeroAuthor>
            <HeroTitle>{t('hero.role')}</HeroTitle>
            <HeroCompany>@ {t('hero.company')}</HeroCompany>
            <HeroDate>{t('hero.date')}</HeroDate>
          </ApplicationHero>
        </MainPageFace>

        <LetterBodyWrapper>
          <LetterBody>
            <LetterOpening>{t('letter.opening')}</LetterOpening>
            <LetterIntro>{t('letter.intro')}</LetterIntro>

            <LetterSection>
              <SectionHeading>{t('letter.section1.heading')}</SectionHeading>
              <Paragraph>{t('letter.section1.p1')}</Paragraph>
              <Paragraph>{t('letter.section1.p2')}</Paragraph>
              <Paragraph>{t('letter.section1.p3')}</Paragraph>
              <Paragraph>{t('letter.section1.p4')}</Paragraph>
            </LetterSection>

            <LetterSection>
              <SectionHeading>{t('letter.section2.heading')}</SectionHeading>
              <Paragraph>{t('letter.section2.p1')}</Paragraph>
              <Paragraph>{t('letter.section2.p2')}</Paragraph>
              <Paragraph>{t('letter.section2.p3')}</Paragraph>
              <Paragraph>{t('letter.section2.p4')}</Paragraph>
              <Paragraph>{t('letter.section2.p5')}</Paragraph>
            </LetterSection>

            <LetterSection>
              <SectionHeading>{t('letter.section3.heading')}</SectionHeading>
              <Paragraph>{t('letter.section3.p1')}</Paragraph>
              <BulletList>
                {bulletItems.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </BulletList>
              <Paragraph>{t('letter.section3.p2')}</Paragraph>
            </LetterSection>

            <ClosingBlock>
              <Paragraph>{t('letter.closing.p1')}</Paragraph>
              <Paragraph>{t('letter.closing.p2')}</Paragraph>
              <Paragraph>{t('letter.closing.p3')}</Paragraph>
              <SignatureName>{t('letter.closing.signature')}</SignatureName>
              <SignatureOperator>{t('letter.closing.operator')}</SignatureOperator>
            </ClosingBlock>
          </LetterBody>
        </LetterBodyWrapper>

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

export default RevenueCatApplication
