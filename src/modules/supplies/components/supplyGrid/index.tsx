import { Box } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { SupplyCard } from '../supplyCard'
import imgPhoenix from '@/assets/supplies/supply-phoenix-grain.png'
import imgKraken from '@/assets/supplies/supply-kraken-salt.png'
import imgGrooming from '@/assets/supplies/supply-phoenix-grain.png'
import imgAstral from '@/assets/supplies/supply-astral-tether.png'
import imgVoid from '@/assets/supplies/supply-void-glass.png'
import imgMana from '@/assets/supplies/supply-mana-flasks.png'

const styles = {
  section: {
    py: 12,
    maxWidth: '1280px',
    mx: 'auto',
    px: { xs: '20px', md: '64px' },
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr' },
    gap: 3,
  },
}

export const SupplyGrid = () => {
  const { t } = useTranslation()

  const buyLabel = t('supplies.buy')
  const currency = t('supplies.currency')

  const products = [
    {
      image: imgPhoenix,
      name: t('supplies.products.phoenixGrain.name'),
      description: t('supplies.products.phoenixGrain.description'),
      price: t('supplies.products.phoenixGrain.price'),
      rarity: 'Mythic' as const,
    },
    {
      image: imgKraken,
      name: t('supplies.products.krakenSalt.name'),
      description: t('supplies.products.krakenSalt.description'),
      price: t('supplies.products.krakenSalt.price'),
      rarity: 'Legendary' as const,
    },
    {
      image: imgGrooming,
      name: t('supplies.products.groomingKit.name'),
      description: t('supplies.products.groomingKit.description'),
      price: t('supplies.products.groomingKit.price'),
      rarity: 'Rare' as const,
    },
    {
      image: imgAstral,
      name: t('supplies.products.astralTether.name'),
      description: t('supplies.products.astralTether.description'),
      price: t('supplies.products.astralTether.price'),
    },
    {
      image: imgVoid,
      name: t('supplies.products.voidGlass.name'),
      description: t('supplies.products.voidGlass.description'),
      price: t('supplies.products.voidGlass.price'),
      rarity: 'Mythic' as const,
    },
    {
      image: imgMana,
      name: t('supplies.products.manaFlasks.name'),
      description: t('supplies.products.manaFlasks.description'),
      price: t('supplies.products.manaFlasks.price'),
    },
  ]

  return (
    <Box component="section" sx={styles.section}>
      <Box sx={styles.grid}>
        {products.map((product, i) => (
          <SupplyCard
            key={i}
            image={product.image}
            name={product.name}
            description={product.description}
            price={product.price}
            rarity={product.rarity}
            buyLabel={buyLabel}
            currencyLabel={currency}
          />
        ))}
      </Box>
    </Box>
  )
}
