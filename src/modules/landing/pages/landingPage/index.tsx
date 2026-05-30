import { Box } from '@mui/material'
import { Hero } from '../../components/hero'
import { FeaturedCreatures } from '../../components/featuredCreatures'
import { Testimonials } from '../../components/testimonials'
import { AdoptionGuide } from '../../components/adoptionGuide'
import { CtaBanner } from '../../components/ctaBanner'

export const LandingPage = () => (
  <Box component="main">
    <Hero />
    <FeaturedCreatures />
    <Testimonials />
    <AdoptionGuide />
    <CtaBanner />
  </Box>
)
