export default function ProductTag({ children, product }) {
  const productsMap = {
    'Keepers'        : 'text-[#344E4F]',
    'Core product'   : 'text-[#1A2C5C]',
    'DLCs'           : 'text-[#5A2D0B]'
  };

  const type = productsMap[product];

  return (
    <div className={`inline-flex leading-6 py-0.5 px-4 rounded-3xl border border-white/30 bg-[linear-gradient(119deg,rgba(255,255,255,0.20)_32.15%,rgba(255,255,255,0.00)_90.81%)] text-base sm:text-lg font-medium ${type}`}>
      {children}
    </div>
  )
}
