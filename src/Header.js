import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { navigation as nav } from './Footer'
import { IconKeepers, IconStablecoin, IconDLCs } from './Main'

const navigation = [
  {
    name: 'Stablecoin',
    href: 'https://app.arkadiko.finance/',
    icon: <IconStablecoin />,
    color: 'bg-[#4597e6]/90'
  },
  {
    name: 'Keepers',
    href: 'https://keepersapp.arkadiko.finance/',
    icon: <IconKeepers />,
    color: 'bg-[#73e6b1]/90'
  },
  {
    name: 'DLCs',
    href: 'https://www.dlc.link/blog/4-ways-dlc-links-bitcoin-attestors-enable-finance-on-bitcoin',
    icon: <IconDLCs />,
    color: 'bg-[#e7c047]/90'
  },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="lg:fixed w-full z-10 bg-[linear-gradient(90deg,rgba(12,10,9,0.90)17.13%,rgba(3,7,18,0.90)63.77%)] backdrop-blur-md">
      <nav className="flex items-center justify-between p-6 mx-auto max-w-7xl lg:justify-center lg:px-8" aria-label="Global">
        <a href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">Arkadiko</span>
          <svg className="h-6 sm:hidden" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 56 43">
            <path fill="#fff" d="M17.76 1.426c.203-.427.523-.788.925-1.04A2.516 2.516 0 0 1 20.03 0h10.715a2.5 2.5 0 0 1 2.147 1.194L55.645 38.52c.467.759.467 1.703.028 2.463a2.502 2.502 0 0 1-.92.909 2.525 2.525 0 0 1-1.254.331h-11.2a2.53 2.53 0 0 1-1.773-.713 29.32 29.32 0 0 0-15.075-7.565c-6.346-1.009-13.823.37-21.187 7.565a2.545 2.545 0 0 1-3.192.278 2.426 2.426 0 0 1-.985-1.365 2.408 2.408 0 0 1 .144-1.672l17.52-37.325h.01Zm6.627 3.472 19.35 32.418h5.357L29.325 4.908h-4.938v-.01ZM34.552 31.65 20.299 7.75 8.912 31.992a27.416 27.416 0 0 1 17.342-2.87c2.987.462 5.787 1.388 8.298 2.527Z"/>
          </svg>
          <svg className="hidden h-10 sm:inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 214 43">
            <path fill="#fff" d="m83.986 10.108 10.152 24.317h-5.625l-2.195-5.213H75.995l-2.161 5.213h-5.66l10.153-24.317h5.659Zm.377 14.37-3.19-7.648-3.19 7.649h6.38Zm16.73-4.698c.229-.366.491-.709.789-1.029.297-.343.651-.64 1.063-.892.412-.274.88-.491 1.406-.651a6.127 6.127 0 0 1 1.784-.24c.777 0 1.68.137 2.709.411l-.446 4.219a8.93 8.93 0 0 1-.754-.172 5.483 5.483 0 0 0-.686-.103 3.87 3.87 0 0 0-.686-.068c-.732 0-1.418.103-2.058.308a5.17 5.17 0 0 0-1.612.858 4.166 4.166 0 0 0-1.098 1.338 3.386 3.386 0 0 0-.411 1.646v9.02H96.36V17.413h4.287l.446 2.367Zm18.902 4.699 7.168 9.946h-5.659l-4.493-6.79-1.681 1.817v4.973h-4.733V9.388h4.733v13.89l5.522-5.865h5.762l-6.619 7.066Zm26.254-7.066v17.012h-4.082l-.48-1.818c-.663.892-1.463 1.486-2.401 1.784a9.261 9.261 0 0 1-2.881.446c-1.211 0-2.332-.23-3.361-.686a8.82 8.82 0 0 1-2.641-1.921 9.368 9.368 0 0 1-1.783-2.847 9.872 9.872 0 0 1-.618-3.498c0-1.235.206-2.39.618-3.464a8.843 8.843 0 0 1 1.783-2.847 8.097 8.097 0 0 1 2.641-1.92c1.029-.48 2.15-.72 3.361-.72 1.098 0 2.104.17 3.019.514a5.108 5.108 0 0 1 2.263 1.646l.48-1.68h4.082Zm-4.733 8.54c0-.891-.126-1.634-.378-2.229-.228-.617-.548-1.109-.96-1.475a3.233 3.233 0 0 0-1.406-.823 5.19 5.19 0 0 0-1.715-.274c-.617 0-1.2.126-1.749.377a4.734 4.734 0 0 0-1.406 1.03 4.269 4.269 0 0 0-.961 1.508 4.862 4.862 0 0 0-.343 1.818c0 .663.115 1.28.343 1.852.229.572.549 1.075.961 1.51.411.41.88.742 1.406.994a4.15 4.15 0 0 0 1.749.377c1.235 0 2.275-.377 3.121-1.132.869-.777 1.315-1.955 1.338-3.533Zm24.948-16.565v25.037h-4.047l-.686-1.475c-.526.549-1.258 1.006-2.195 1.372a8.139 8.139 0 0 1-2.881.515c-1.212 0-2.333-.23-3.362-.686a8.689 8.689 0 0 1-2.675-1.921 9.742 9.742 0 0 1-1.749-2.847 9.872 9.872 0 0 1-.617-3.498c0-1.235.205-2.39.617-3.464.434-1.098 1.018-2.047 1.749-2.847a7.995 7.995 0 0 1 2.675-1.92c1.029-.48 2.15-.72 3.362-.72 1.074 0 2.023.125 2.846.377a5.57 5.57 0 0 1 2.23 1.268V9.388h4.733Zm-4.733 16.566c0-.892-.115-1.635-.343-2.23-.229-.617-.549-1.109-.961-1.475a3.485 3.485 0 0 0-1.44-.823 5.19 5.19 0 0 0-1.715-.274c-.617 0-1.201.126-1.749.377a4.734 4.734 0 0 0-1.406 1.03 4.526 4.526 0 0 0-.926 1.508 4.842 4.842 0 0 0-.343 1.818c0 .663.114 1.28.343 1.852a5.04 5.04 0 0 0 .926 1.51c.411.41.88.742 1.406.994a4.147 4.147 0 0 0 1.749.377c1.235 0 2.275-.377 3.121-1.132.869-.777 1.315-1.955 1.338-3.533Zm12.959 8.471h-4.733V17.413h4.733v17.012Zm-2.367-19.344c-.732 0-1.349-.251-1.852-.754-.503-.503-.754-1.12-.754-1.852s.251-1.35.754-1.852a2.462 2.462 0 0 1 1.852-.79c.732 0 1.349.264 1.852.79.503.503.755 1.12.755 1.852 0 .731-.252 1.349-.755 1.852-.503.503-1.12.754-1.852.754Zm15.329 9.398 7.168 9.946h-5.659l-4.493-6.79-1.681 1.817v4.973h-4.733V9.388h4.733v13.89l5.522-5.865h5.762l-6.619 7.066Zm17.324-7.546a8.31 8.31 0 0 1 3.43.72 8.554 8.554 0 0 1 2.813 1.921c.8.8 1.429 1.75 1.886 2.847a8.4 8.4 0 0 1 .72 3.464c0 1.235-.24 2.4-.72 3.498a9.228 9.228 0 0 1-1.886 2.847 9.31 9.31 0 0 1-2.813 1.92 8.666 8.666 0 0 1-3.43.687 8.757 8.757 0 0 1-3.464-.686 9.306 9.306 0 0 1-2.812-1.921 9.78 9.78 0 0 1-1.921-2.847 9.01 9.01 0 0 1-.686-3.498c0-1.235.229-2.39.686-3.464a9.205 9.205 0 0 1 1.921-2.847 8.55 8.55 0 0 1 2.812-1.92 8.397 8.397 0 0 1 3.464-.72Zm0 13.754c.572 0 1.098-.115 1.578-.343a4.088 4.088 0 0 0 1.303-.926c.389-.412.686-.892.892-1.44a5.036 5.036 0 0 0 .343-1.887 5.3 5.3 0 0 0-.343-1.921 4.484 4.484 0 0 0-.892-1.543 3.867 3.867 0 0 0-1.303-1.064 3.124 3.124 0 0 0-1.578-.411 3.32 3.32 0 0 0-1.612.411 4.234 4.234 0 0 0-1.337 1.064 5.364 5.364 0 0 0-.892 1.543 5.827 5.827 0 0 0-.309 1.92c0 .687.103 1.315.309 1.887a5.09 5.09 0 0 0 .892 1.44c.389.39.834.698 1.337.927a3.856 3.856 0 0 0 1.612.343ZM17.935 1.814c.203-.427.523-.788.925-1.04a2.516 2.516 0 0 1 1.343-.386H30.92a2.5 2.5 0 0 1 2.146 1.194l22.756 37.325c.467.76.467 1.704.028 2.464a2.5 2.5 0 0 1-.92.909 2.525 2.525 0 0 1-1.255.331h-11.2a2.53 2.53 0 0 1-1.774-.713 29.32 29.32 0 0 0-15.074-7.565c-6.347-1.01-13.823.37-21.188 7.565a2.545 2.545 0 0 1-3.192.278 2.427 2.427 0 0 1-.984-1.365 2.408 2.408 0 0 1 .144-1.672l17.52-37.325h.01Zm6.627 3.472 19.35 32.418h5.357L29.499 5.295h-4.937v-.009Zm10.165 26.75L20.474 8.139 9.087 32.38a27.416 27.416 0 0 1 17.342-2.871c2.987.463 5.787 1.389 8.298 2.528Z"/>
          </svg>
        </a>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-100"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 left-0 z-10 w-full px-6 py-6 overflow-y-auto bg-[#180A24]">
          <div className="flex items-center justify-between">
            <div className="flex flex-1">
              <a href="/" className="-m-1.5 p-1.5 flex flex-1">
                <span className="sr-only">Arkadiko</span>
                <svg className="h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 56 43">
                  <path fill="#fff" d="M17.76 1.426c.203-.427.523-.788.925-1.04A2.516 2.516 0 0 1 20.03 0h10.715a2.5 2.5 0 0 1 2.147 1.194L55.645 38.52c.467.759.467 1.703.028 2.463a2.502 2.502 0 0 1-.92.909 2.525 2.525 0 0 1-1.254.331h-11.2a2.53 2.53 0 0 1-1.773-.713 29.32 29.32 0 0 0-15.075-7.565c-6.346-1.009-13.823.37-21.187 7.565a2.545 2.545 0 0 1-3.192.278 2.426 2.426 0 0 1-.985-1.365 2.408 2.408 0 0 1 .144-1.672l17.52-37.325h.01Zm6.627 3.472 19.35 32.418h5.357L29.325 4.908h-4.938v-.01ZM34.552 31.65 20.299 7.75 8.912 31.992a27.416 27.416 0 0 1 17.342-2.87c2.987.462 5.787 1.388 8.298 2.527Z"/>
                </svg>
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="px-8 py-4 mt-6 space-y-2 rounded-md bg-white/5">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`flex items-center block gap-6 px-3 py-2 -mx-3 text-2xl leading-7 text-black/60 font-bold rounded-lg ${item.color}`}
              >
                <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {item.icon}
                </svg>
                {item.name}
              </a>
            ))}
          </div>
          <div className="px-8 py-4 mt-6 bg-black rounded-md">
            <ul className="space-y-2">
              {nav.main.map((item) => (
                <li key={item.name} className="rounded-lg hover:bg-[#180A24] px-3 pt-1 -mx-3">
                  <a
                    href={item.href}
                    className="inline-flex items-center block gap-4 text-2xl leading-7 text-gray-100 rounded-lg"
                  >
                    <div className="flex items-center justify-center w-10 h-10 text-white shrink-0 sm:h-12 sm:w-12">
                      <item.icon aria-hidden="true" />
                    </div>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-center px-8 py-4 mt-6 space-x-6 bg-black rounded-md">
            {nav.social.map((item) => (
              <a key={item.name} href={item.href} className="flex items-center justify-center shrink-0 w-12 h-12 hover:bg-[#180A24] rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 text-white/80 hover:text-white rounded-xl">
                <span className="sr-only">{item.name}</span>
                <item.icon className="w-6 h-6" aria-hidden="true" />
              </a>
            ))}
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
