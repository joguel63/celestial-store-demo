import { Box } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { SupplyCard } from '../supplyCard'
import { styles } from './styles'
import imgPhoenix from '@/assets/supplies/supply-phoenix-grain.png'
import imgKraken from '@/assets/supplies/supply-kraken-salt.png'
import imgAstral from '@/assets/supplies/supply-astral-tether.png'
import imgVoid from '@/assets/supplies/supply-void-glass.png'
import imgMana from '@/assets/supplies/supply-mana-flasks.png'

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
      rarity: 'mythic' as const,
      rarityLabel: t('supplies.products.phoenixGrain.rarity'),
    },
    {
      image: imgKraken,
      name: t('supplies.products.krakenSalt.name'),
      description: t('supplies.products.krakenSalt.description'),
      price: t('supplies.products.krakenSalt.price'),
      rarity: 'legendary' as const,
      rarityLabel: t('supplies.products.krakenSalt.rarity'),
    },
    {
      image: imgMana,
      name: t('supplies.products.groomingKit.name'),
      description: t('supplies.products.groomingKit.description'),
      price: t('supplies.products.groomingKit.price'),
      rarity: 'rare' as const,
      rarityLabel: t('supplies.products.groomingKit.rarity'),
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
      rarity: 'mythic' as const,
      rarityLabel: t('supplies.products.voidGlass.rarity'),
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
        {products.map((product) => (
          <SupplyCard
            key={product.name}
            image={product.image}
            name={product.name}
            description={product.description}
            price={product.price}
            rarity={product.rarity}
            rarityLabel={product.rarityLabel}
            buyLabel={buyLabel}
            currencyLabel={currency}
          />
        ))}
      </Box>
    </Box>
  )
}
