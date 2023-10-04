import Product from "./Product"
import keepers from "./backgrounds/keepers.svg"
import core from "./backgrounds/core.svg"
import dlcs from "./backgrounds/dlcs.svg"

export default function Main() {

  return (
    <main className="lg:min-h-[calc(100vh-88px-72px)]">
      <div className="flex flex-col h-full lg:flex-row">

        <Product
          name="Keepers"
          href="https://keepersapp.arkadiko.finance/"
          learnMore="https://keepers.arkadiko.finance/"
          background="bg-[linear-gradient(168deg,#73E6B1_31.37%,#180A24_92.84%)]"
          decoration={keepers}

          basis="basis-[28.93%]"
          shadow="lg:shadow-[-16px_0px_12px_0px_rgba(0,0,0,0.25)_inset]"
          order="order-2 lg:order-1"

          iconPath={<IconKeepers />}

          titleTop="Decentralized Smart Contract"
          titleBottom="Automation"
          subtitleTop="Triggers smart contracts"
          subtitleBottom="based on multiple events"

          buttonTextColor="text-[#73E6B1] hover:bg-[#73E6B1] hover:shadow-lg hover:text-[#180B26]"
          buttonBorderColor="border-[#73E6B1]"
        />

        <Product
          name="Stablecoin"
          href="https://app.arkadiko.finance/"
          learnMore="https://usda.arkadiko.finance/"
          background="bg-[linear-gradient(168deg,#4597E6_42.82%,#180A24_84.04%)]"
          decoration={core}

          basis="basis-[42.14%]"
          order="order-1 lg:order-2"

          iconPath={<IconStablecoin />}

          titleTop="Self-repaying loans"

          buttonTextColor="text-[#67B4FF] hover:bg-[#67B4FF] hover:shadow-lg hover:text-[#180B26]"
          buttonBorderColor="border-[#67B4FF]"
        />

        <Product
          name="DLCs"
          learnMore="https://www.dlc.link/blog/4-ways-dlc-links-bitcoin-attestors-enable-finance-on-bitcoin"
          live={false}
          background="bg-[linear-gradient(171deg,#E7C047_12.92%,#DC2626_64.05%,#180A24_83.47%)]"
          decoration={dlcs}

          basis="basis-[28.93%]"
          shadow="lg:shadow-[16px_0px_12px_0px_rgba(0,0,0,0.25)_inset]"
          order="order-3"

          iconPath={<IconDLCs />}

          titleTop="Native"
          titleBottom="Bitcoin backed loans"
          subtitleTop="Put your BTC to work without"
          subtitleBottom="bridging or wrapping"

          buttonTextColor="text-[#FE3535] hover:bg-[#FE3535] hover:shadow-lg hover:text-[#180B26]"
          buttonBorderColor="border-[#FE3535]"
        />

      </div>
    </main>
  )
}


export function IconKeepers() {
  return (
    <path d="M28 20L24 22M24 22L20 20M24 22V27M40 14L36 16M40 14L36 12M40 14V19M28 8L24 6L20 8M8 14L12 12M8 14L12 16M8 14V19M24 42L20 40M24 42L28 40M24 42V37M12 36L8 34V29M36 36L40 34V29" stroke="#344E4F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  )
}

export function IconStablecoin() {
  return (
    <path stroke="#1A2C5C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M24.5 42.5V26M32 42.5V26M17 42.5V26M6.5 18.5l18-12 18 12m-3 24V21.164A96.714 96.714 0 0 0 24.5 20c-5.102 0-10.112.4-15 1.164V42.5m-3 0h36M24.5 14h.016v.016H24.5V14Z"/>
  )
}

export function IconDLCs() {
  return (
    <path fill="#5A2D0B" fillRule="evenodd" d="M30.216 37.638h-3.06v4.827c0 .846-.689 1.535-1.543 1.535a1.53 1.53 0 0 1-1.527-1.535v-4.828h-4.463v4.828a1.535 1.535 0 0 1-3.069 0v-4.828h-3.028A1.531 1.531 0 0 1 12 36.095c0-.837.68-1.526 1.526-1.526h3.028V13.432h-3.028A1.528 1.528 0 0 1 12 11.905c0-.854.68-1.542 1.526-1.542h3.028V5.535a1.535 1.535 0 1 1 3.07 0v4.828h4.462V5.535c0-.847.68-1.535 1.527-1.535.854 0 1.543.688 1.543 1.535v4.828c4.155.041 7.515 3.426 7.515 7.581a7.543 7.543 0 0 1-1.858 4.978 7.6 7.6 0 0 1 4.994 7.134c0 4.172-3.401 7.582-7.59 7.582Zm.003-12.1H19.624v9.03h10.595a4.514 4.514 0 1 0 0-9.03Zm-3.13-12.106a4.526 4.526 0 0 1 4.516 4.515 4.52 4.52 0 0 1-4.515 4.515h-7.466v-9.03h7.466Z" clipRule="evenodd"/>
  )
}